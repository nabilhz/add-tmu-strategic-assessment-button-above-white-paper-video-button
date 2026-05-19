import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Stripe "mo:caffeineai-stripe/stripe";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Text "mo:core/Text";
import Int "mo:core/Int";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";



actor {
  include MixinObjectStorage();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    fullName : Text;
    email : Text;
    walletAddress : Text;
    createdAt : Time.Time;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let sessionOwners = Map.empty<Text, Principal>();
  var stripeConfiguration : ?Stripe.StripeConfiguration = null;

  public query ({ caller }) func searchUserProfiles(searchText : Text) : async [UserProfile] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can search profiles");
    };

    let lowerSearch = searchText.toLower();

    let matchingProfiles = userProfiles.values().toArray().filter(
      func(profile) {
        let fullNameMatch = profile.fullName.toLower().contains(#text lowerSearch);
        let emailMatch = profile.email.toLower().contains(#text lowerSearch);
        let walletMatch = profile.walletAddress.toLower().contains(#text lowerSearch);
        fullNameMatch or emailMatch or walletMatch;
      }
    );

    matchingProfiles;
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query func isStripeConfigured() : async Bool {
    stripeConfiguration != null;
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    stripeConfiguration := ?config;
  };

  func getStripeConfiguration() : Stripe.StripeConfiguration {
    switch (stripeConfiguration) {
      case (null) { Runtime.trap("Stripe needs to be first configured") };
      case (?value) { value };
    };
  };

  public shared ({ caller }) func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can check payment sessions");
    };
    switch (sessionOwners.get(sessionId)) {
      case (null) {
        Runtime.trap("Unauthorized: Session not found");
      };
      case (?owner) {
        if (caller != owner and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only check your own payment sessions");
        };
      };
    };
    await Stripe.getSessionStatus(getStripeConfiguration(), sessionId, transform);
  };

  public shared ({ caller }) func createCheckoutSession(items : [Stripe.ShoppingItem], successUrl : Text, cancelUrl : Text) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create checkout sessions");
    };

    for (item in items.vals()) {
      if (item.quantity < 0) {
        Runtime.trap("Invalid purchase: Negative quantities are not allowed");
      };
      if (item.priceInCents < 0) {
        Runtime.trap("Invalid purchase: Negative prices are not allowed");
      };
    };

    let sessionId = await Stripe.createCheckoutSession(getStripeConfiguration(), caller, items, successUrl, cancelUrl, transform);
    sessionOwners.add(sessionId, caller);
    sessionId;
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public type TokenPurchaseValidation = {
    isValid : Bool;
    errorMessage : ?Text;
    sanitizedAmount : Nat;
  };

  public type PurchaseSummary = {
    amount : Nat;
    price : Nat;
    fee : Nat;
    total : Nat;
  };

  private let TOKEN_PRICE_CENTS : Nat = 10;
  private let MINIMUM_PURCHASE_TOKENS : Nat = 1000;
  private let FEE_PERCENTAGE : Nat = 3;

  public query ({ caller }) func validateTokenAmount(amount : Int) : async TokenPurchaseValidation {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can validate token amounts");
    };

    if (amount < 0) {
      return {
        isValid = false;
        errorMessage = ?"Please enter a valid amount";
        sanitizedAmount = 0;
      };
    };

    let sanitizedAmount = Int.abs(amount);

    if (sanitizedAmount == 0) {
      return {
        isValid = true;
        errorMessage = null;
        sanitizedAmount = 0;
      };
    };

    if (sanitizedAmount < MINIMUM_PURCHASE_TOKENS) {
      return {
        isValid = false;
        errorMessage = ?"Minimum purchase is 1000 $TMU tokens";
        sanitizedAmount;
      };
    };

    {
      isValid = true;
      errorMessage = null;
      sanitizedAmount;
    };
  };

  public query ({ caller }) func calculatePurchaseSummary(tokenAmount : Int) : async PurchaseSummary {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can calculate purchases");
    };

    let sanitizedAmount = if (tokenAmount < 0) { 0 } else { Int.abs(tokenAmount) };

    if (sanitizedAmount == 0) {
      return {
        amount = 0;
        price = 0;
        fee = 0;
        total = 0;
      };
    };

    let priceInCents = sanitizedAmount * TOKEN_PRICE_CENTS;
    let feeInCents = (priceInCents * FEE_PERCENTAGE) / 100;
    let totalInCents = priceInCents + feeInCents;

    {
      amount = sanitizedAmount;
      price = priceInCents;
      fee = feeInCents;
      total = totalInCents;
    };
  };

  public type ArchitectureLayer = {
    title : Text;
    description : Text;
  };

  public type Guide = {
    title : Text;
    description : Text;
  };

  public type Resource = {
    title : Text;
    filePath : Text;
  };

  public type ResourcePageContent = {
    architectureLayers : [ArchitectureLayer];
    guides : [Guide];
    resources : [Resource];
  };

  let architectureLayers = [
    {
      title = "Access Layer";
      description = "Mobile, Web, SMS/USSD, offline support";
    },
    {
      title = "Identity Layer";
      description = "DID, ZK proofs, credential packs";
    },
    {
      title = "AI Microservices";
      description = "Health, Education, Agriculture, Compliance";
    },
    {
      title = "Data Vault";
      description = "Encrypted records, consent management";
    },
    {
      title = "Blockchain Events";
      description = "Verifiable logs, credential anchors";
    },
    {
      title = "Governance Layer";
      description = "TMU-NNS, SubDAOs, Treasury";
    },
  ];

  let guides = [
    {
      title = "Getting Started with TMU";
      description = "Introduction for new users";
    },
    {
      title = "Creating Your Wallet";
      description = "How to set up TMU wallet";
    },
    {
      title = "Staking $TMU";
      description = "How to stake and earn discounts";
    },
    {
      title = "Voting & Governance";
      description = "Participate in TMU-NNS";
    },
    {
      title = "Joining a SubDAO";
      description = "How to join sector DAOs";
    },
  ];

  let resources = [
    {
      title = "White Paper (PDF)";
      filePath = "/resources/white_paper.pdf";
    },
    {
      title = "Tokenomics Model (PDF)";
      filePath = "/resources/tokenomics_model.pdf";
    },
    {
      title = "Governance Charter (PDF)";
      filePath = "/resources/governance_charter.pdf";
    },
    {
      title = "Technical Architecture (PDF)";
      filePath = "/resources/technical_architecture.pdf";
    },
  ];

  public query func getResourcePageContent() : async ResourcePageContent {
    {
      architectureLayers;
      guides;
      resources;
    };
  };

  public type TmuIresPopupContent = {
    title : Text;
    description : Text;
    documentationLink : Text;
    videoLink : Text;
    additionalLinks : Text;
  };

  public query func getTmuIresPopupContent() : async TmuIresPopupContent {
    {
      title = "TMU-IRES - Public Safety and Drone-based Service Provision";
      description = "TMU-IRES is built on our TMU Enablement Platform, which offers the functional capability for immediacy of presentation of data to all participants in essential units of an Operation for real-time discussion / advisory across geographies and language barriers with multi-modal real-time communication capability (WebRTC) as PWA and also through Whatsapp, Telegram, VoIP, GSM, PSTN, USSD etc.\n\nThis is achieved with our proprietary development of No-Code AI Agents and Last Mile Facility Builder complete with very versatile capability for integration through API with corporate databases etc.";
      documentationLink = "https://tmu.ai/docs/TMU-IRES.pdf";
      videoLink = "https://www.youtube.com/watch?v=-_rLVpmdSfo";
      additionalLinks = "https://linktr.ee/tmu_ires";
    };
  };

  public type ProjectType = {
    #website;
    #learnMore;
    #multiButton;
  };

  public type Project = {
    projectType : ProjectType;
    projectName : Text;
    projectDescription : Text;
    category : Text;
    url : Text;
    additionalButtons : ?[Text];
    imageId : ?Text;
  };

  let projects = Map.empty<Text, Project>();

  func addInitialProjects() {
    // Clean existing projects except Social Edification
    let projectIds = projects.keys().toArray();
    for (id in projectIds.values()) {
      if (id != "Social Edification") {
        projects.remove(id);
      };
    };

    let initialProjects = [
      {
        id = "Morshid";
        projectType = #multiButton;
        projectName = "Morshid";
        projectDescription = "By connecting farmers directly to markets and empowering them with knowledge, Morshid fights food insecurity, ensures fair trade, and builds a sustainable agricultural future for Morocco.";
        category = "Agriculture";
        url = "https://www.morshid.ma";
        additionalButtons = ?[
          "https://morshid-agricultural-ai-assistant-infographic-xlp.caffeine.xyz",
          "https://drive.google.com/file/d/1N0vKLyS661M7U-KzKbxso_kwt6b7MERe/view",
          "https://drive.google.com/file/d/1upnR3athEwHgRqlKOzor88BlrT6XsdI9/view",
          "https://drive.google.com/file/d/1Zi4Kt6dzmpGkxuwGBa41aqLb20vaDtPg/view?usp=sharing",
          "https://drive.google.com/file/d/1Ik9P0q6RqZfzqn5XqRMS_ufGVe9bSLn9/view?usp=sharing",
        ];
        imageId = null;
      },
      {
        id = "Etitude";
        projectType = #website;
        projectName = "Etitude";
        projectDescription = "ETITUDE democratizes education by transforming complex knowledge into accessible learning for everyone, breaking down barriers and ensuring equity in education worldwide.";
        category = "Education / Learning";
        url = "https://www.etitude.com";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "Vospital.Care";
        projectType = #multiButton;
        projectName = "Vospital.Care";
        projectDescription = "Vospital.Care is a virtual hospital platform connecting doctors and patients remotely through video, AI bots, and real-time translation, making healthcare accessible and efficient.";
        category = "Rural Medicine / Telemedicine";
        url = "https://www.vospital.care";
        additionalButtons = ?["https://drive.google.com/file/d/1M6W9VqgGLReQIr1UR7VAGs2sw1WPdnqw/view"];
        imageId = null;
      },
      {
        id = "EcoGSM";
        projectType = #learnMore;
        projectName = "EcoGSM";
        projectDescription = "EcoGSM makes healthcare accessible and equitable worldwide through virtual hospitals, tele-diagnostics, emergency response, mental health support, and health education for underserved communities.";
        category = "Global Social Medicine";
        url = "https://bit.ly/4cqgidU";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "TMU-IRES";
        projectType = #learnMore;
        projectName = "TMU-IRES";
        projectDescription = "TMU-IRES (Instant Response Emergency Service) - enhances community safety through intelligent emergency response, rapid incident reporting, and first responder coordination.";
        category = "Public Safety";
        url = "";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "CEITA";
        projectType = #learnMore;
        projectName = "CEITA";
        projectDescription = "CEITA is a research and innovation hub for agricultural technology advancement, providing training, capacity building, and cutting-edge solutions for modern farming across Africa.";
        category = "Center of Excellence IT Agriculture";
        url = "https://bit.ly/4kE14WI";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "Airello";
        projectType = #website;
        projectName = "Airello";
        projectDescription = "Airello is a Multi-AI-Agents Platform enabling multiple AI agents to work together seamlessly, providing intelligent automation across various tasks and workflows.";
        category = "Multi-AI-Agents Platform";
        url = "https://www.airello.com";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "TMU-CATNA";
        projectType = #learnMore;
        projectName = "TMU-CATNA";
        projectDescription = "TMU-CATNA (Call Any Telephone Number Anywhere) - Long distance calls with real-time speech-to-speech translation, connecting people across languages and borders.";
        category = "Communication / Translation";
        url = "https://www.tmu.ai";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "TMU-Notes-WST";
        projectType = #learnMore;
        projectName = "TMU-Notes-WST";
        projectDescription = "TMU-Notes-WST provides AI-enabled note taking with custom output for WhatsApp in speech and text chat. Transform conversations into organized notes automatically.";
        category = "AI Note Taking";
        url = "https://www.tmu.ai";
        additionalButtons = null;
        imageId = null;
      },
      {
        id = "TMU Enablement Platform";
        projectType = #learnMore;
        projectName = "TMU Enablement Platform";
        projectDescription = "No-code AI Agent Builder and Last-Mile Facility Builder for deploying AI services without any technical expertise required.";
        category = "No-Code Platform";
        url = "https://www.tmu.ai";
        additionalButtons = null;
        imageId = null;
      },
    ];

    for (p in initialProjects.values()) {
      projects.add(
        p.id,
        {
          projectType = p.projectType;
          projectName = p.projectName;
          projectDescription = p.projectDescription;
          category = p.category;
          url = p.url;
          additionalButtons = p.additionalButtons;
          imageId = p.imageId;
        },
      );
    };
  };

  public shared ({ caller }) func saveSocialEdificationImage(imageId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update Social Edification image");
    };

    let socialEdificationProject : Project = {
      projectType = #website;
      projectName = "Social Edification";
      projectDescription = "Social Edification Projects are for development of technology and service provision to engender social good relative to 3 tenets:\n\n- Raising the digital consciousness of general population\n\n- Contributing to meeting the UN SDG (Sustainable Development Goals)\n\n- Building kinder, more equitable, more enlightened society";
      category = "Social Good";
      url = "https://linktr.ee/w5go";
      additionalButtons = null;
      imageId = ?imageId;
    };

    projects.add("Social Edification", socialEdificationProject);
  };

  public query func getProjects() : async [Project] {
    let projectList = projects.values().toArray();
    projectList;
  };

  public type ContentType = {
    #homepage;
    #whitePaper;
    #tokenomics;
    #projects;
    #roadmap;
    #web2Web3;
    #resource;
    #signup;
    #iomHybridPopup;
    #tmuIresPopup;
  };

  public query func getContent(_contentType : ContentType) : async Text {
    "This is placeholder content for the Live V60 release";
  };
};
