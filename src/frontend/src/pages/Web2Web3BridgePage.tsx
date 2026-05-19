import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Building2,
  Cross,
  GraduationCap,
  Heart,
  Microscope,
  Newspaper,
  Palette,
  Scale,
  Shield,
  UserCircle,
} from "lucide-react";
import { useState } from "react";

interface UseCasePopup {
  title: string;
  focus: string;
  web3Benefit: string;
  concerns?: string;
  tokenUse?: string;
  focusColor: string;
  web3BenefitColor: string;
  concernsColor: string;
  tokenUseColor: string;
}

export default function Web2Web3BridgePage() {
  const [selectedUseCase, setSelectedUseCase] = useState<number | null>(null);

  // Static use cases data for display with icons
  const useCasesDisplay = [
    {
      id: 1,
      title: "Legal & Compliance",
      icon: "legal",
      description: "Trusted transcripts, audit-ready documentation",
      color: "#009B3A",
    },
    {
      id: 2,
      title: "Health & Telemedicine",
      icon: "medical",
      description: "Medical records, consent logs, access control",
      color: "#EF3E42",
    },
    {
      id: 3,
      title: "NGO & Humanitarian Coordination",
      icon: "humanitarian",
      description: "Proof-of-action logs, field reports",
      color: "#FFC300",
    },
    {
      id: 4,
      title: "Education & Coaching",
      icon: "education",
      description: "Verifiable credentials, exam integrity",
      color: "#009B3A",
    },
    {
      id: 5,
      title: "Creative Professionals & Freelancers",
      icon: "creative",
      description: "Work audit trails, IP protection",
      color: "#8B5CF6",
    },
    {
      id: 6,
      title: "Corporate Training & Compliance",
      icon: "corporate",
      description: "Compliance records, certification",
      color: "#3B82F6",
    },
    {
      id: 7,
      title: "Research & Academic Collaboration",
      icon: "research",
      description: "Timestamping, peer review logs",
      color: "#14B8A6",
    },
    {
      id: 8,
      title: "Media & Journalism",
      icon: "media",
      description: "Source verification, content authenticity",
      color: "#EF3E42",
    },
    {
      id: 9,
      title: "Coaching & Consulting",
      icon: "coaching",
      description: "Session logs, progress tracking",
      color: "#FFC300",
    },
    {
      id: 10,
      title: "Law Enforcement & Security",
      icon: "law",
      description: "Chain-of-custody, evidence integrity",
      color: "#009B3A",
    },
  ];

  // Static popup content data
  const popupData: UseCasePopup[] = [
    {
      title: "Legal & Compliance",
      focus:
        "Immutable call summaries, trusted recordkeeping, timestamped verification for audits.",
      web3Benefit:
        "Ensures data integrity for legal defense or regulatory compliance. Transcriptions and documents can be stored on the blockchain.",
      concerns:
        "Transcription accuracy is very important, options to edit the transcription (full history of edits stored on blockchain source control) may be necessary for transcriptions to be trusted.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Health & Telemedicine",
      focus: "Secure call verification and consent management.",
      web3Benefit:
        "Smart contract based access control for patient data, ensuring consent is verifiable and auditable.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "NGO & Humanitarian Coordination",
      focus:
        "Reliable documentation of field reports, proof of action logs, and timestamped records.",
      web3Benefit:
        "Immutable mission records and transparent accountability trails.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Education & Coaching",
      focus:
        "Knowledge sharing, private lessons, or mentorship sessions via TMU Notes.",
      web3Benefit:
        "Verifiable completion certificates, token-gated course access, and peer recognition.",
      tokenUse:
        "Educational transactions such as access passes or optional bonuses.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Creative Professionals & Freelancers",
      focus:
        "Design, media, or consulting sessions recorded and documented via TMU or TMU Notes.",
      web3Benefit:
        "Immutable contracts, transparent payment verification, proof of work ownership.",
      tokenUse:
        "Payments or tips can be in $TMU, make use of the custodial wallet for payments, including extracting payments in real time from one custodial wallet to another.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Corporate Training & Compliance",
      focus: "Tracking internal training sessions and certifications.",
      web3Benefit: "On-chain proof of participation and regulatory compliance.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Research & Academic Collaboration",
      focus:
        "Timestamped academic discussions, shared experiment notes, and peer collaboration.",
      web3Benefit:
        "Immutable authorship attribution and decentralized knowledge preservation.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Media & Journalism",
      focus: "Authentic interview records and fact-verifiable transcripts.",
      web3Benefit:
        "On-chain proof of source integrity to combat misinformation.",
      tokenUse: "Content subscriptions or verified access.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Coaching & Consulting",
      focus: "Private sessions, notes, and client interaction logs.",
      web3Benefit:
        "Verifiable record of service delivery, optional on-chain contracts for recurring sessions.",
      tokenUse: "Tokens for service access or client appreciation.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
    {
      title: "Law Enforcement & Security",
      focus:
        "Securely recorded and timestamped interviews, reports, and evidence logs.",
      web3Benefit:
        "Tamper-proof chain of custody for audio or document evidence.",
      focusColor: "#FFD700",
      web3BenefitColor: "#00FF88",
      concernsColor: "#FF4500",
      tokenUseColor: "#FFA500",
    },
  ];

  const getIcon = (iconType: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      legal: <Scale className="text-white" size={32} />,
      medical: <Cross className="text-white" size={32} />,
      humanitarian: <Heart className="text-white" size={32} />,
      education: <GraduationCap className="text-white" size={32} />,
      creative: <Palette className="text-white" size={32} />,
      corporate: <Building2 className="text-white" size={32} />,
      research: <Microscope className="text-white" size={32} />,
      media: <Newspaper className="text-white" size={32} />,
      coaching: <UserCircle className="text-white" size={32} />,
      law: <Shield className="text-white" size={32} />,
    };
    return iconMap[iconType] || <Shield className="text-white" size={32} />;
  };

  const handleUseCaseClick = (id: number) => {
    setSelectedUseCase(id);
  };

  const getSelectedPopupContent = () => {
    if (selectedUseCase === null) return null;
    const index = selectedUseCase - 1;
    if (index >= 0 && index < popupData.length) {
      return popupData[index];
    }
    return null;
  };

  const selectedPopup = getSelectedPopupContent();

  return (
    <div className="w-full py-20" style={{ backgroundColor: "#0a1628" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              TMU Web2 to Web3 Bridge
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Connecting Traditional Services to Blockchain-Powered Solutions
            </p>
          </div>

          {/* Explanation Section */}
          <div className="mb-12">
            <p className="text-white text-lg leading-relaxed text-center max-w-4xl mx-auto">
              TMU AI DAO uniquely bridges Web2 operations with Web3 transparency
              and security. Real-world service providers can leverage blockchain
              benefits without full migration.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-16">
            <div className="rounded-lg overflow-hidden shadow-2xl mb-6">
              <img
                src="/assets/generated/web2-web3-bridge-hero-new.dim_1200x600.png"
                alt="Web2 to Web3 Bridge - Traditional Systems to Blockchain Ecosystem"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-white text-lg font-medium leading-relaxed max-w-5xl mx-auto">
                Web2 Sources (databases, documents, records) → TMU Bridge
                (processing, verification, anchoring) → Web3 Outputs (immutable
                logs, credentials, proofs)
              </p>
            </div>
          </div>

          {/* Use Cases Grid Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {useCasesDisplay.map((useCase) => (
                <Card
                  key={useCase.id}
                  style={{ backgroundColor: "#1a2744" }}
                  className="border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                  onClick={() => handleUseCaseClick(useCase.id)}
                >
                  <CardHeader className="pb-3">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-3 mx-auto"
                      style={{ backgroundColor: useCase.color }}
                    >
                      {getIcon(useCase.icon)}
                    </div>
                    <CardTitle className="text-white text-center text-base font-semibold">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog
        open={selectedUseCase !== null}
        onOpenChange={(open) => !open && setSelectedUseCase(null)}
      >
        <DialogContent
          className="max-w-4xl max-h-[85vh] overflow-hidden border-2"
          style={{ backgroundColor: "#1a2744", borderColor: "#009B3A" }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              {selectedPopup?.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about {selectedPopup?.title}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(85vh-100px)] pr-4">
            <div className="space-y-4 py-2">
              {selectedPopup && (
                <>
                  <div className="mb-4">
                    <span
                      style={{ color: selectedPopup.focusColor }}
                      className="font-semibold text-lg"
                    >
                      Focus:
                    </span>
                    <span className="text-white ml-2 text-base leading-relaxed">
                      {selectedPopup.focus}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span
                      style={{ color: selectedPopup.web3BenefitColor }}
                      className="font-semibold text-lg"
                    >
                      Web3 Benefit:
                    </span>
                    <span className="text-white ml-2 text-base leading-relaxed">
                      {selectedPopup.web3Benefit}
                    </span>
                  </div>

                  {selectedPopup.tokenUse && (
                    <div className="mb-4">
                      <span
                        style={{ color: selectedPopup.tokenUseColor }}
                        className="font-semibold text-lg"
                      >
                        Token use:
                      </span>
                      <span className="text-white ml-2 text-base leading-relaxed">
                        {selectedPopup.tokenUse}
                      </span>
                    </div>
                  )}

                  {selectedPopup.concerns && (
                    <div className="mb-4">
                      <span
                        style={{ color: selectedPopup.concernsColor }}
                        className="font-semibold text-lg"
                      >
                        Concerns:
                      </span>
                      <span className="text-white ml-2 text-base leading-relaxed">
                        {selectedPopup.concerns}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
