import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Download, FileText, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhitePaperPage() {
  const [activeSection, setActiveSection] = useState("executive-summary");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "executive-summary",
        "the-problem",
        "the-solution",
        "technology-architecture",
        "governance-model",
        "token-utility",
        "roadmap",
        "legal-structure",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleVideoClick = () => {
    window.open("https://youtube.com/shorts/wdW1p1qwEZU", "_blank");
  };

  const handleStrategicAssessmentClick = () => {
    window.open("https://tmu.ai/docs/TMU_Strategic_Assessment.pdf", "_blank");
  };

  const sidebarLinks = [
    { id: "executive-summary", label: "Executive Summary" },
    { id: "the-problem", label: "The Problem" },
    { id: "the-solution", label: "The TMU Solution" },
    { id: "technology-architecture", label: "Technology Architecture" },
    { id: "governance-model", label: "Governance Model" },
    { id: "token-utility", label: "Token Utility" },
    { id: "roadmap", label: "Roadmap" },
    { id: "legal-structure", label: "Legal Structure" },
  ];

  const challengeCards = [
    {
      title: "Healthcare Access Gap",
      description:
        "Limited access to quality healthcare services in rural and underserved communities across Africa.",
    },
    {
      title: "Education Inequality",
      description:
        "Disparities in educational resources and opportunities preventing equitable learning outcomes.",
    },
    {
      title: "Agricultural Inefficiency",
      description:
        "Outdated farming practices and lack of market access reducing agricultural productivity.",
    },
    {
      title: "Financial Exclusion",
      description:
        "Millions without access to banking services and financial tools for economic participation.",
    },
    {
      title: "Identity & Trust Deficit",
      description:
        "Lack of verifiable digital identity systems hindering access to services and opportunities.",
    },
    {
      title: "Governance Challenges",
      description:
        "Centralized decision-making processes limiting community participation and transparency.",
    },
  ];

  const architectureLayers = [
    { name: "Access Layer", description: "Mobile, Web, USSD", order: 1 },
    { name: "Identity Layer", description: "DID, ZK proofs", order: 2 },
    {
      name: "AI Microservices Layer",
      description: "Health, Education, Agriculture, Finance AI services",
      order: 3,
    },
    {
      name: "Consent & Data Vault",
      description: "User-controlled data storage and consent management",
      order: 4,
    },
    {
      name: "Blockchain Events Layer",
      description: "Immutable transaction and event recording",
      order: 5,
    },
    {
      name: "Governance & Treasury Layer",
      description: "TMU-NNS governance and treasury management",
      order: 6,
    },
  ];

  return (
    <div className="w-full py-20" style={{ backgroundColor: "#0a1628" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TMU AI DAO White Paper
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Version 2.0 - Complete Vision for AI-Powered Digital Public
            Infrastructure
          </p>

          {/* TMU Strategic Assessment Button */}
          <div className="mb-4">
            <Button
              onClick={handleStrategicAssessmentClick}
              size="lg"
              className="text-white font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: "#3B82F6",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFC300";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 195, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FileText className="mr-2" size={20} />
              TMU Strategic Assessment
            </Button>
          </div>

          {/* White Paper in a Nutshell Button */}
          <div className="mb-4">
            <Button
              onClick={handleVideoClick}
              size="lg"
              className="text-white font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: "#FF0000",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFC300";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 195, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Play className="mr-2" size={20} fill="white" />
              White Paper in a Nutshell
            </Button>
          </div>

          <Button
            size="lg"
            className="text-white font-semibold"
            style={{
              background: "linear-gradient(135deg, #FFC300 0%, #FF8C00 100%)",
            }}
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </Button>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <nav
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#0f172a" }}
              >
                <ul className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.id)}
                        className={`w-full text-left px-4 py-2 rounded transition-colors ${
                          activeSection === link.id
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                        style={
                          activeSection === link.id
                            ? {
                                backgroundColor: "#1a2744",
                                borderLeft: "3px solid #FFC300",
                              }
                            : {}
                        }
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            {/* Section 1: Executive Summary */}
            <section id="executive-summary">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    Executive Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white leading-relaxed text-lg">
                    TMU AI DAO is a global social enterprise organized as an IoM
                    Hybrid Company, delivering AI-powered Digital Public
                    Infrastructure for Africa and the diaspora. Built on ICP,
                    addressing healthcare, education, agriculture, financial
                    inclusion, and governance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: The Problem */}
            <section id="the-problem">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challengeCards.map((card) => (
                      <div
                        key={card.title}
                        className="p-6 rounded-lg border border-white/10"
                        style={{ backgroundColor: "#0f172a" }}
                      >
                        <h4 className="text-white font-semibold text-lg mb-2">
                          {card.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: The TMU Solution */}
            <section id="the-solution">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    The TMU Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    TMU AI DAO provides a comprehensive 6-layer architecture
                    that delivers AI-powered services while ensuring security,
                    privacy, and decentralized governance.
                  </p>

                  {/* Architecture Diagram */}
                  <div className="mb-8">
                    <img
                      src="/assets/generated/architecture-diagram.dim_800x600.png"
                      alt="TMU Architecture Diagram"
                      className="w-full rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    {architectureLayers.map((layer) => (
                      <div
                        key={layer.name}
                        className="p-6 rounded-lg border-l-4 relative"
                        style={{
                          backgroundColor: "#0f172a",
                          borderLeftColor: "#009B3A",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: "#009B3A" }}
                          >
                            {layer.order}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1">
                              {layer.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {layer.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Technology Architecture */}
            <section id="technology-architecture">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    Technology Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* ICP Benefits */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      ICP Benefits
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">Speed:</strong>{" "}
                          Lightning-fast transactions with minimal fees,
                          enabling real-time AI service delivery
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">Security:</strong>{" "}
                          Advanced cryptography and consensus mechanisms
                          ensuring data integrity
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">Scalability:</strong>{" "}
                          Unlimited capacity to serve millions of users across
                          Africa
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* TMU Enablement Platform */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      TMU Enablement Platform
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            No-Code AI Agent Builder:
                          </strong>{" "}
                          Create custom AI agents without programming
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Last-Mile Facility Builder:
                          </strong>{" "}
                          Deploy services to remote areas with minimal
                          infrastructure
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Multi-Modal Communication:
                          </strong>{" "}
                          WebRTC, WhatsApp, Telegram, VoIP, GSM, PSTN, USSD
                          support
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Governance Model */}
            <section id="governance-model">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    Governance Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    TMU AI DAO implements a multi-layered governance structure
                    combining the legal framework of an IoM Hybrid Company with
                    decentralized decision-making through the TMU-NNS (Network
                    Nervous System).
                  </p>

                  {/* TMU-NNS */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      TMU-NNS (Network Nervous System)
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Proposal System:
                          </strong>{" "}
                          Community members submit and vote on proposals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">Voting Power:</strong>{" "}
                          Based on staked $TMU tokens and lock duration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Treasury Management:
                          </strong>{" "}
                          Community-controlled allocation of resources
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* SubDAOs */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      SubDAOs
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Sector-specific SubDAOs enable focused governance and
                      innovation:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Healthcare SubDAO</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Education SubDAO</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Agriculture SubDAO</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Finance SubDAO</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: Token Utility */}
            <section id="token-utility">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    Token Utility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The $TMU token is a utility token powering the TMU AI DAO
                    ecosystem with multiple use cases:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AI Compute Credits */}
                    <div
                      className="p-6 rounded-lg border border-white/10"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      <h4 className="text-[#FFC300] font-semibold text-lg mb-3">
                        AI Compute Credits
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Pay for AI services including health diagnostics,
                        educational content, agricultural advice, and financial
                        tools.
                      </p>
                    </div>

                    {/* DID Verification */}
                    <div
                      className="p-6 rounded-lg border border-white/10"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      <h4 className="text-[#FFC300] font-semibold text-lg mb-3">
                        DID Verification
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Create and verify decentralized identities, enabling
                        secure access to services and credentials.
                      </p>
                    </div>

                    {/* Credential Anchoring */}
                    <div
                      className="p-6 rounded-lg border border-white/10"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      <h4 className="text-[#FFC300] font-semibold text-lg mb-3">
                        Credential Anchoring
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Anchor educational certificates, medical records, and
                        professional credentials on-chain.
                      </p>
                    </div>

                    {/* Governance Participation */}
                    <div
                      className="p-6 rounded-lg border border-white/10"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      <h4 className="text-[#FFC300] font-semibold text-lg mb-3">
                        Governance Participation
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Stake tokens to participate in TMU-NNS governance and
                        vote on proposals.
                      </p>
                    </div>
                  </div>

                  {/* Staking Benefits */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      Staking Benefits
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Bronze (1 year):
                          </strong>{" "}
                          10% discount on AI services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Silver (2 years):
                          </strong>{" "}
                          20% discount on AI services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Gold (3 years):
                          </strong>{" "}
                          30% discount on AI services
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Roadmap */}
            <section id="roadmap">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phase 1 */}
                  <div
                    className="p-6 rounded-lg border-l-4"
                    style={{
                      backgroundColor: "#0f172a",
                      borderLeftColor: "#009B3A",
                    }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-3">
                      Phase 1: Foundation (Q1-Q2 2025)
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>IoM Hybrid Company formation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Core platform development on ICP</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Initial AI microservices deployment</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div
                    className="p-6 rounded-lg border-l-4"
                    style={{
                      backgroundColor: "#0f172a",
                      borderLeftColor: "#FFC300",
                    }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-3">
                      Phase 2: Launch (Q3-Q4 2025)
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>$TMU token launch</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>TMU-NNS governance activation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>First pilot projects in Morocco and Kenya</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div
                    className="p-6 rounded-lg border-l-4"
                    style={{
                      backgroundColor: "#0f172a",
                      borderLeftColor: "#FF0000",
                    }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-3">
                      Phase 3: Expansion (2026)
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          SubDAO launches (Healthcare, Education, Agriculture,
                          Finance)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Expansion to 10 African countries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>1 million active users milestone</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div
                    className="p-6 rounded-lg border-l-4"
                    style={{
                      backgroundColor: "#0f172a",
                      borderLeftColor: "#009B3A",
                    }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-3">
                      Phase 4: Scale (2027+)
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Pan-African coverage (54 countries)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>10 million active users</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>Global diaspora integration</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 8: Legal Structure */}
            <section id="legal-structure">
              <Card
                style={{ backgroundColor: "#1a2744" }}
                className="border-white/10"
              >
                <CardHeader>
                  <CardTitle className="text-white text-3xl">
                    Legal Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    TMU AI DAO is organized as an Isle of Man (IoM) Hybrid
                    Company, combining the benefits of traditional corporate
                    structure with decentralized governance.
                  </p>

                  {/* IoM Hybrid Benefits */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      IoM Hybrid Company Benefits
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Legal Recognition:
                          </strong>{" "}
                          Recognized legal entity with clear regulatory
                          framework
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Hybrid Governance:
                          </strong>{" "}
                          Combines traditional board oversight with DAO
                          governance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Asset Protection:
                          </strong>{" "}
                          Clear ownership and liability framework
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Tax Efficiency:
                          </strong>{" "}
                          Favorable tax treatment for international operations
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Compliance */}
                  <div
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <h4 className="text-[#FFC300] font-semibold text-xl mb-4">
                      Compliance & Regulation
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">KYC/AML:</strong>{" "}
                          Compliant identity verification processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Data Protection:
                          </strong>{" "}
                          GDPR and local data privacy law compliance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="text-[#009B3A] mr-3 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          <strong className="text-white">
                            Financial Reporting:
                          </strong>{" "}
                          Transparent financial statements and audits
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
