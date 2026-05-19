import HeroIllustration from "@/components/HeroIllustration";
import IoMPopup from "@/components/IoMPopup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Coins,
  Globe,
  Network,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [isIoMPopupOpen, setIsIoMPopupOpen] = useState(false);

  // Static IoM Hybrid Company popup content
  const ioMPopupContent = {
    mainTitle: "IoM Hybrid Company as Legal Wrapper for TMU AI DAO",
    mainContent:
      "The Isle of Man (IoM) hybrid company is being promoted as a viable legal wrapper for Decentralized Autonomous Organizations (DAOs). This structure offers a way to combine the flexibility of a DAO with a recognized, compliant legal entity, which helps address legal challenges regarding liability and regulation that 'orphaned' DAOs often face.",
    sections: [
      {
        title: "How the IoM Hybrid Company Suits a DAO",
        content:
          "The IoM hybrid company structure provides a legal framework that bridges traditional corporate governance with decentralized autonomous operations.",
      },
      {
        title: "Structure:",
        content:
          "The IoM hybrid combines elements of both traditional companies and DAOs, allowing for flexible governance while maintaining legal compliance.",
      },
      {
        title: "Legal Personality:",
        content:
          "The structure provides a recognized legal entity that can enter contracts, own assets, and be held accountable under law.",
      },
      {
        title: "Role Alignment:",
        content:
          "Token holders can participate in governance while the legal entity handles regulatory compliance and traditional business operations.",
      },
      {
        title: "Flexibility:",
        content:
          "The hybrid structure allows for customization of governance mechanisms while maintaining legal standing in multiple jurisdictions.",
      },
      {
        title: "Compliance:",
        content:
          "The IoM framework ensures compliance with international regulations while preserving the decentralized nature of DAO operations.",
      },
    ],
    popupColor: "#0a1628",
    titleColor: "#FFC300",
    contentColor: "#FFFFFF",
    sectionTitleColor: "#FFC300",
    sectionContentColor: "#FFFFFF",
  };

  return (
    <div className="w-full">
      {/* Hero Section with 2D Illustration */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0f172a 100%)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-6">
              <Badge
                className="text-white font-semibold px-4 py-1.5 text-sm"
                style={{ backgroundColor: "#009B3A" }}
              >
                Powered by ICP
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                TMU AI DAO is a Profitable thing to do for all parties
                concerned.
              </h1>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                  <p className="text-gray-300 text-lg">
                    You get best value for your money that you would spend for
                    payment for services that you normally would need to use.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2" />
                  <p className="text-gray-400 text-lg">
                    Your money spend helps build a Global Social Enterprise
                    dedicated to Nation Building and Social Edification
                    addressing the crises of many sectors.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="text-white text-lg px-8 py-6 font-semibold group"
                style={{
                  background:
                    "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                  border: "none",
                }}
                onClick={() => navigate({ to: "/signup" })}
              >
                Join the Movement
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>

            {/* Right Side 2D Illustration */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* A Global Social Enterprise Section */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                A truly Global Social Enterprise
              </h2>

              <p className="text-white text-lg leading-relaxed">
                TMU AI DAO is a IoM Hybrid Company
                <button
                  type="button"
                  onClick={() => setIsIoMPopupOpen(true)}
                  className="text-[#FFC300] hover:text-[#FF8C00] transition-colors cursor-pointer font-bold ml-0.5"
                  aria-label="Learn more about IoM Hybrid Company"
                >
                  *
                </button>{" "}
                designed to endure as a social organization engendering social
                good for all time.
              </p>

              <p className="text-white text-lg leading-relaxed">
                You can Participate in it as a stakeholder, a builder and a doer
                in Nation Building & Social Edification{" "}
                <span
                  className="font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFC300 0%, #FF8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  with as little spend as US$10 for 1000 $TMU Utility Tokens
                </span>
                .
              </p>

              <Button
                size="lg"
                className="text-white text-lg px-8 py-6 font-semibold group mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #FFC300 0%, #FF8C00 100%)",
                  border: "none",
                }}
                onClick={() => navigate({ to: "/signup" })}
              >
                Join the Movement
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>

            {/* Right Side Illustration */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <img
                src="/assets/generated/global-social-enterprise-illustration.dim_800x600.png"
                alt="Global Social Enterprise - Stakeholder, Builder, Doer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IoM Hybrid Company Popup */}
      <IoMPopup
        open={isIoMPopupOpen}
        onOpenChange={setIsIoMPopupOpen}
        content={ioMPopupContent}
      />

      {/* Impact Section */}
      <section
        className="py-20 md:py-32"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #0f172a 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Statistic 1: 10B */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFC300" }}
              >
                100B
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                $TMU Total Supply
              </div>
            </div>

            {/* Statistic 2: ICP */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFFFFF" }}
              >
                ICP
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                Built on Internet Computer
              </div>
            </div>

            {/* Statistic 3: IoM Hybrid */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFC300" }}
              >
                IoM Hybrid
              </div>
            </div>

            {/* Statistic 4: 1B */}
            <div className="text-center space-y-3">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color: "#FFFFFF" }}
              >
                1B
              </div>
              <div
                className="text-base md:text-lg"
                style={{ color: "#9CA3AF" }}
              >
                People to Serve
              </div>
            </div>
          </div>

          {/* Chapter Countries Footer */}
          <div className="text-center pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-base md:text-lg text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇷🇼</span>
                <span>Rwanda</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇳🇬</span>
                <span>Nigeria</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇲🇦</span>
                <span>Morocco</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇰🇪</span>
                <span>Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Value Propositions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI-Powered Services Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/ai-brain-icon-transparent.dim_64x64.png"
                    alt="AI Brain Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  AI-Powered Services
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Health, Education, Agriculture, Finance - AI microservices for
                  essential needs
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Decentralized Identity Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/digital-id-icon-transparent.dim_64x64.png"
                    alt="Digital ID Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Decentralized Identity
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Multi-country digital identity with ZK proofs and verifiable
                  credentials
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Web2 to Web3 Bridge Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/web2-web3-bridge-icon-transparent.dim_64x64.png"
                    alt="Web2 to Web3 Bridge Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Web2 to Web3 Bridge
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Seamless transition from traditional services to
                  blockchain-powered solutions
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Community Governance Card */}
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10 hover:border-[#009B3A] transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/generated/community-governance-icon-transparent.dim_64x64.png"
                    alt="Community Governance Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-3">
                  Community Governance
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  TMU-NNS governance system with SubDAOs for sectors and
                  countries
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Built on Internet Computer Section */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Illustration */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-2 lg:order-1">
              <img
                src="/assets/generated/ai-blockchain-brain-network-clean.dim_800x600.png"
                alt="AI and Blockchain Integration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Side Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <Badge
                className="text-white font-semibold px-4 py-1.5 text-sm"
                style={{ backgroundColor: "#009B3A" }}
              >
                Powered by ICP
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Built on Internet Computer
              </h2>

              <p className="text-white text-lg leading-relaxed">
                TMU AI DAO leverages the Internet Computer Protocol for
                unparalleled speed, security, and scalability. Our
                infrastructure ensures that every transaction is transparent,
                efficient, and truly decentralized.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#009B3A" }}
                  >
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-white text-lg">
                    Lightning-fast transactions with minimal fees
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#009B3A" }}
                  >
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-white text-lg">
                    Fully on-chain governance and data storage
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#009B3A" }}
                  >
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-white text-lg">
                    Environmentally sustainable blockchain technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#0f172a" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why TMU AI DAO?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empowering communities through decentralized governance and
              innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#009B3A" }}
                >
                  <Globe className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Global Reach</CardTitle>
                <CardDescription className="text-gray-400">
                  A worldwide community of innovators and builders working
                  together
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFC300" }}
                >
                  <Users className="text-[#0a1628]" size={24} />
                </div>
                <CardTitle className="text-white">Community Driven</CardTitle>
                <CardDescription className="text-gray-400">
                  Decisions made by the community, for the community
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EF3E42" }}
                >
                  <Zap className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">AI Powered</CardTitle>
                <CardDescription className="text-gray-400">
                  Leveraging artificial intelligence for smarter governance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#009B3A" }}
                >
                  <Shield className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">
                  Secure & Transparent
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Built on the Internet Computer for maximum security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFC300" }}
                >
                  <Coins className="text-[#0a1628]" size={24} />
                </div>
                <CardTitle className="text-white">Token Economy</CardTitle>
                <CardDescription className="text-gray-400">
                  Fair and sustainable tokenomics for all participants
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              style={{ backgroundColor: "#1a2744" }}
              className="border-white/10"
            >
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EF3E42" }}
                >
                  <Network className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Web3 Bridge</CardTitle>
                <CardDescription className="text-gray-400">
                  Seamlessly connecting Web2 and Web3 ecosystems
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ backgroundColor: "#0a1628" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                TMU AI DAO is dedicated to creating a decentralized ecosystem
                that empowers individuals and organizations to collaborate,
                innovate, and build the future of Web3.
              </p>
              <p className="text-gray-400 mb-8">
                Through transparent governance, cutting-edge AI technology, and
                a commitment to social impact, we're building a platform that
                bridges the gap between traditional systems and the
                decentralized future.
              </p>
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#009B3A" }}
                onClick={() => navigate({ to: "/projects" })}
              >
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/dao-governance-illustration.dim_800x600.png"
                alt="DAO Governance"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#0f172a" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Be part of a global community shaping the future of decentralized
              governance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white text-lg px-8"
                style={{ backgroundColor: "#009B3A" }}
                onClick={() => navigate({ to: "/tokenomics" })}
              >
                View Tokenomics
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0a1628] text-lg px-8"
                onClick={() => navigate({ to: "/roadmap" })}
              >
                See Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
