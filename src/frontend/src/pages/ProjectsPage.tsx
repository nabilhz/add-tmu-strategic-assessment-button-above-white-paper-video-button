import TMUIRESPopup from "@/components/TMUIRESPopup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: bigint;
  name: string;
  description: string;
  category: string;
  websiteUrl: string;
  imageUrl?: string;
  status: string;
  hasPopup?: boolean;
  secondaryButton?: {
    text: string;
    url: string;
  };
  additionalButtons?: Array<{
    text: string;
    url: string;
  }>;
  customButtonText?: string;
}

export default function ProjectsPage() {
  const [isTmuIresPopupOpen, setIsTmuIresPopupOpen] = useState(false);

  // Static projects to display
  const staticProjects: Project[] = [
    {
      id: BigInt(999),
      name: "TeleMeetUp & TMU-Notes",
      description:
        "TeleMeetUp is a one-stop teleconferencing solution with AI-powered features:\n- Recording, Transcription & Translation (100+ languages)\n- AI Assistant & Summarization\n- Whiteboard & Screen Sharing\n- Connect with anyone with or without the app\n- Dial out to any phone number",
      category: "Communication / AI",
      websiteUrl: "https://www.youtube.com/watch?v=pk2TtlglNno",
      imageUrl: "/assets/Design sans titre (1).png",
      status: "active",
      customButtonText: "Watch Video",
    },
    {
      id: BigInt(998),
      name: "DePIN",
      description:
        "DePIN (Decentralized Physical Infrastructure Networks) in crypto uses blockchain technology and token incentives to crowdsource the building and operation of real-world infrastructure. It allows individuals to contribute hardware resources—such as Wi-Fi routers, data storage, or sensors—and earn tokens in return, creating decentralized, community-owned alternatives to traditional, centralized, and costly infrastructure services as well as DePIN projects for crowdfunding the building and running of infrastructure such as Starlink-based Internet Connectivity for rural Africa, Drone-based transportation for essential supply to islands, Water Treatment to generate potable water etc.",
      category: "Infrastructure",
      websiteUrl:
        "https://drive.google.com/file/d/1z7_ODsSqJnk8pLyzsGWklq1p_oSTHUWv/view?usp=sharing",
      imageUrl:
        "/assets/generated/depin-solar-drones-desalination.dim_400x250.png",
      status: "active",
      customButtonText: "Business Plan",
    },
    {
      id: BigInt(1000),
      name: "Morshid",
      description:
        "By connecting farmers directly to markets and empowering them with knowledge, Morshid fights food insecurity, ensures fair trade, and builds a sustainable agricultural future for Morocco.",
      category: "Agriculture",
      websiteUrl: "https://www.morshid.ma",
      imageUrl: "/assets/generated/morshid-project.dim_400x250.png",
      status: "active",
      secondaryButton: {
        text: "View Infographic",
        url: "https://morshid-agricultural-ai-assistant-infographic-xlp.caffeine.xyz",
      },
      additionalButtons: [
        {
          text: "Morshid in a Nutshell",
          url: "https://drive.google.com/file/d/1N0vKLyS661M7U-KzKbxso_kwt6b7MERe/view",
        },
        {
          text: "From Orbit to Field",
          url: "https://drive.google.com/file/d/1upnR3athEwHgRqlKOzor88BlrT6XsdI9/view",
        },
        {
          text: "AI Governance",
          url: "https://drive.google.com/file/d/1Zi4Kt6dzmpGkxuwGBa41aqLb20vaDtPg/view?usp=sharing",
        },
        {
          text: "Global South",
          url: "https://drive.google.com/file/d/1Ik9P0q6RqZfzqn5XqRMS_ufGVe9bSLn9/view?usp=sharing",
        },
        {
          text: "Agritech Pitch",
          url: "https://tmu.ai/docs/agritech_banking_insurance_pitch.pdf",
        },
      ],
    },
    {
      id: BigInt(1001),
      name: "Etitude",
      description:
        "ETITUDE democratizes education by transforming complex knowledge into accessible learning for everyone, breaking down barriers and ensuring equity in education worldwide.",
      category: "Education / Learning",
      websiteUrl: "https://www.etitude.com",
      imageUrl: "/assets/generated/etitude-project.dim_400x250.png",
      status: "active",
    },
    {
      id: BigInt(1002),
      name: "Vospital.Care",
      description:
        "Vospital.Care is a virtual hospital platform connecting doctors and patients remotely through video, AI bots, and real-time translation, making healthcare accessible and efficient.",
      category: "Rural Medicine / Telemedicine",
      websiteUrl: "https://www.vospital.care",
      imageUrl: "/assets/generated/vospital-care-project.dim_400x250.png",
      status: "active",
      secondaryButton: {
        text: "View Infographic",
        url: "https://drive.google.com/file/d/1M6W9VqgGLReQIr1UR7VAGs2sw1WPdnqw/view",
      },
    },
    {
      id: BigInt(1003),
      name: "EcoGSM",
      description:
        "EcoGSM makes healthcare accessible and equitable worldwide through virtual hospitals, tele-diagnostics, emergency response, mental health support, and health education for underserved communities.",
      category: "Global Social Medicine",
      websiteUrl: "https://www.ecogsm.com",
      imageUrl: "/assets/generated/ecogsm-project.dim_400x250.png",
      status: "active",
    },
    {
      id: BigInt(1004),
      name: "TMU-IRES",
      description:
        "TMU-IRES (Instant Response Emergency Service) - enhances community safety through intelligent emergency response, rapid incident reporting, and first responder coordination.",
      category: "Public Safety",
      websiteUrl: "",
      imageUrl: "/assets/generated/tmu-ires-project.dim_400x250.png",
      status: "active",
      hasPopup: true,
    },
    {
      id: BigInt(1005),
      name: "CEITA",
      description:
        "CEITA is a research and innovation hub for agricultural technology advancement, providing training, capacity building, and cutting-edge solutions for modern farming across Africa.",
      category: "Center of Excellence IT Agriculture",
      websiteUrl:
        "https://drive.google.com/file/d/1suf8NMMOFaCTSLp8OcAtZV9gvWfqL7P4/preview",
      imageUrl: "/assets/generated/ceita-project.dim_400x250.png",
      status: "active",
    },
    {
      id: BigInt(1006),
      name: "Airello",
      description:
        "Airello is a Multi-AI-Agents Platform enabling multiple AI agents to work together seamlessly, providing intelligent automation across various tasks and workflows.",
      category: "Multi-AI-Agents Platform",
      websiteUrl: "https://www.airello.com",
      imageUrl: "/assets/generated/airello-project.dim_400x250.png",
      status: "active",
    },
    {
      id: BigInt(1007),
      name: "TMU-CATNA",
      description:
        "TMU-CATNA (Call Any Telephone Number Anywhere) - Long distance calls with real-time speech-to-speech translation, connecting people across languages and borders.",
      category: "Communication / Translation",
      websiteUrl: "https://www.tmu.ai",
      imageUrl: "/assets/generated/tmu-catna-project.dim_400x250.png",
      status: "active",
    },
    {
      id: BigInt(1009),
      name: "TMU Enablement Platform",
      description:
        "No-code AI Agent Builder and Last-Mile Facility Builder for deploying AI services without any technical expertise required.",
      category: "No-Code Platform",
      websiteUrl: "https://www.tmu.ai",
      imageUrl: "/assets/image-1.png",
      status: "active",
    },
    {
      id: BigInt(1010),
      name: "Social Edification",
      description:
        "Social Edification Projects are for development of technology and service provision to engender social good relative to 3 tenets:",
      category: "Social Good",
      websiteUrl: "https://linktr.ee/w5go",
      imageUrl:
        "/assets/generated/social-edification-children-singing-learning.dim_400x250.png",
      status: "active",
      customButtonText: "W5Go",
    },
  ];

  // Category color mapping
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Healthcare: "#EF3E42",
      Education: "#FFC300",
      Agriculture: "#009B3A",
      FinTech: "#FFC300",
      Web3: "#6366F1",
      Governance: "#00CED1",
      "Education / Learning": "#FFC300",
      "Rural Medicine / Telemedicine": "#EF3E42",
      "Global Social Medicine": "#EF3E42",
      "Public Safety": "#009B3A",
      "Center of Excellence IT Agriculture": "#FFC300",
      "Multi-AI-Agents Platform": "#3B82F6",
      "Communication / Translation": "#8B5CF6",
      "Communication / AI": "#8B5CF6",
      "AI Note Taking": "#14B8A6",
      "No-Code Platform": "#06B6D4",
      "Social Good": "#FFC300",
      Infrastructure: "#06B6D4",
    };
    return colors[category] || "#9CA3AF";
  };

  const handleTmuIresClick = () => {
    setIsTmuIresPopupOpen(true);
  };

  // Helper function to render description with proper formatting for Social Edification and TeleMeetUp
  const renderDescription = (project: Project) => {
    if (project.name === "Social Edification") {
      return (
        <div className="space-y-2">
          <p className="text-white text-sm leading-relaxed">
            {project.description}
          </p>
          <ul className="space-y-1 pl-4">
            <li className="text-white text-sm leading-relaxed">
              - Raising the digital consciousness of general population
            </li>
            <li className="text-white text-sm leading-relaxed">
              - Contributing to meeting the UN SDG (Sustainable Development
              Goals)
            </li>
            <li className="text-white text-sm leading-relaxed">
              - Building kinder, more equitable, more enlightened society
            </li>
          </ul>
        </div>
      );
    }

    if (project.name === "TeleMeetUp & TMU-Notes") {
      const lines = project.description.split("\n");
      const mainText = lines[0];
      const bulletPoints = lines
        .slice(1)
        .filter((line) => line.trim().startsWith("-"));

      return (
        <div className="space-y-2">
          <p className="text-white text-sm leading-relaxed">{mainText}</p>
          <ul className="space-y-1 pl-4">
            {bulletPoints.map((bullet) => (
              <li key={bullet} className="text-white text-sm leading-relaxed">
                {bullet.trim()}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // For other projects, use the original rendering logic
    const parts = project.description.split("\n\n");

    return (
      <div className="space-y-3">
        {parts.map((part) => {
          if (part.trim().startsWith("-")) {
            return (
              <div key={part} className="pl-4">
                <p className="text-white text-sm leading-relaxed">
                  {part.trim()}
                </p>
              </div>
            );
          }
          return (
            <p key={part} className="text-white text-sm leading-relaxed">
              {part.trim()}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full py-20" style={{ backgroundColor: "#0a1628" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Projects & SubDAOs
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              TMU AI DAO addresses critical challenges across Africa and the
              diaspora through specialized projects
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticProjects.map((project) => (
              <Card
                key={Number(project.id)}
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10 overflow-hidden transition-all duration-300 hover:border-[#009B3A]/50 hover:shadow-lg hover:shadow-[#009B3A]/20 flex flex-col"
              >
                {/* Project Image */}
                <div className="w-full h-64 overflow-hidden bg-[#0f172a]">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className={`w-full h-full ${project.name === "TMU Enablement Platform" ? "object-contain" : "object-cover"} transition-transform duration-300 hover:scale-105`}
                  />
                </div>

                {/* Card Content */}
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-white text-xl font-bold">
                      {project.name}
                    </CardTitle>
                    <Badge
                      style={{
                        backgroundColor: `${getCategoryColor(project.category)}20`,
                        color: getCategoryColor(project.category),
                        borderColor: getCategoryColor(project.category),
                      }}
                      className="border"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-white text-sm leading-relaxed">
                    {renderDescription(project)}
                  </CardDescription>
                </CardHeader>

                {/* Card Footer with Button(s) */}
                <CardContent className="pt-0 pb-6 space-y-3">
                  {project.status === "coming-soon" ? (
                    <Button
                      disabled
                      className="w-full text-white font-medium cursor-not-allowed"
                      style={{
                        backgroundColor: "#4B5563",
                      }}
                    >
                      Coming Soon
                    </Button>
                  ) : project.hasPopup ? (
                    <Button
                      onClick={handleTmuIresClick}
                      className="w-full text-white font-medium"
                      style={{
                        background:
                          "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  ) : project.name === "Morshid" ? (
                    // Special layout for Morshid with buttons in 2-column rows
                    <div className="space-y-3">
                      {/* Row 1: Website and View Infographic */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          asChild
                          className="text-white font-medium text-xs"
                          style={{
                            background:
                              "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                          }}
                        >
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            Visit morshid.ma
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </Button>
                        {project.secondaryButton && (
                          <Button
                            asChild
                            className="text-white font-medium text-xs"
                            style={{
                              background:
                                "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                            }}
                          >
                            <a
                              href={project.secondaryButton.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1"
                            >
                              View Infographic
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                      {/* Additional buttons in 2-column rows */}
                      {project.additionalButtons && (
                        <>
                          {/* Row 2 */}
                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              asChild
                              className="text-white font-medium text-xs"
                              style={{
                                background:
                                  "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                              }}
                            >
                              <a
                                href={project.additionalButtons[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                {project.additionalButtons[0].text}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </Button>
                            <Button
                              asChild
                              className="text-white font-medium text-xs"
                              style={{
                                background:
                                  "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                              }}
                            >
                              <a
                                href={project.additionalButtons[1].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                {project.additionalButtons[1].text}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                          {/* Row 3 */}
                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              asChild
                              className="text-white font-medium text-xs"
                              style={{
                                background:
                                  "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                              }}
                            >
                              <a
                                href={project.additionalButtons[2].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                {project.additionalButtons[2].text}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </Button>
                            <Button
                              asChild
                              className="text-white font-medium text-xs"
                              style={{
                                background:
                                  "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                              }}
                            >
                              <a
                                href={project.additionalButtons[3].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                {project.additionalButtons[3].text}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                          {/* Row 4 - Single button centered */}
                          <div className="flex justify-center">
                            <Button
                              asChild
                              className="text-white font-medium text-xs w-1/2"
                              style={{
                                background:
                                  "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                              }}
                            >
                              <a
                                href={project.additionalButtons[4].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                {project.additionalButtons[4].text}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : project.secondaryButton ? (
                    // Projects with secondary button (e.g., Vospital.Care)
                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full text-white font-medium"
                        style={{
                          background:
                            "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                        }}
                      >
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visit Website
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        className="w-full text-white font-medium"
                        style={{
                          background:
                            "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                        }}
                      >
                        <a
                          href={project.secondaryButton.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          {project.secondaryButton.text}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  ) : (
                    // Default single button
                    <Button
                      asChild
                      className="w-full text-white font-medium"
                      style={{
                        background:
                          "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                      }}
                    >
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {project.customButtonText || "Visit Website"}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* TMU-IRES Popup */}
      <TMUIRESPopup
        isOpen={isTmuIresPopupOpen}
        onClose={() => setIsTmuIresPopupOpen(false)}
        content={{
          title: "TMU-IRES - Public Safety and Drone-based Service Provision",
          description:
            "TMU-IRES is built on our TMU Enablement Platform, which offers the functional capability for immediacy of presentation of data to all participants in essential units of an Operation for real-time discussion / advisory across geographies and language barriers with multi-modal real-time communication capability (WebRTC) as PWA and also through Whatsapp, Telegram, VoIP, GSM, PSTN, USSD etc.\n\nThis is achieved with our proprietary development of No-Code AI Agents and Last Mile Facility Builder complete with very versatile capability for integration through API with corporate databases etc.",
          documentationLink: "https://tmu.ai/docs/TMU-IRES.pdf",
          videoLink: "https://www.youtube.com/watch?v=-_rLVpmdSfo",
          additionalLinks: "https://linktr.ee/tmu_ires",
        }}
      />
    </div>
  );
}
