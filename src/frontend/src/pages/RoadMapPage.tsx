import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Star } from "lucide-react";

interface RoadMapPhase {
  phaseNumber: number;
  title: string;
  status: string;
  color: string;
  progressPercentage: number;
  quarterlyBreakdown: string[];
  achievements: string[];
  milestones: string[];
  userTarget: number;
}

export default function RoadMapPage() {
  // Static roadmap phases data
  const phases: RoadMapPhase[] = [
    {
      phaseNumber: 1,
      title: "Phase 1: Foundation (2024)",
      status: "completed",
      color: "#009B3A",
      progressPercentage: 100,
      quarterlyBreakdown: [
        "Q1: Concept development, team assembly",
        "Q2: IoM Hybrid formation, LLC registration",
        "Q3: White Paper v1.0, tokenomics design",
        "Q4: White Paper v2.0, smart contracts, Rwanda discussions",
      ],
      achievements: ["Legal entity", "White Paper", "Team", "ICP selected"],
      milestones: [],
      userTarget: 0,
    },
    {
      phaseNumber: 2,
      title: "Phase 2: Launch (2025)",
      status: "in-progress",
      color: "#FFC300",
      progressPercentage: 25,
      quarterlyBreakdown: [
        "Q1: $TMU on ICP, TMU-NNS, website launch, token sale Phase 1",
        "Q2: Rwanda chapter, Morshid & Etitude integration, SubDAO formation",
        "Q3: Vospital launch, Enablement Platform beta, Nigeria discussions",
        "Q4: TMU-IRES pilot, CEITA establishment, 100,000 users target",
      ],
      achievements: [],
      milestones: ["Token live", "Rwanda active", "100K users"],
      userTarget: 100000,
    },
    {
      phaseNumber: 3,
      title: "Phase 3: Expansion (2026)",
      status: "planned",
      color: "#3B82F6",
      progressPercentage: 0,
      quarterlyBreakdown: [
        "Q1-Q2: East Africa cluster (Kenya, Uganda, Tanzania)",
        "Q3-Q4: All SubDAOs operational, government pilots",
      ],
      achievements: [],
      milestones: [],
      userTarget: 1000000,
    },
    {
      phaseNumber: 4,
      title: "Phase 4: Scale (2027)",
      status: "planned",
      color: "#3B82F6",
      progressPercentage: 0,
      quarterlyBreakdown: [
        "Q1-Q2: West Africa (Nigeria, Ghana, Senegal), Francophone integration",
        "Q3-Q4: Diaspora hubs (UK, USA, France), multi-language AI",
      ],
      achievements: [],
      milestones: [],
      userTarget: 10000000,
    },
    {
      phaseNumber: 5,
      title: "Phase 5: Integration (2028-2029)",
      status: "planned",
      color: "#3B82F6",
      progressPercentage: 0,
      quarterlyBreakdown: [
        "2028: Pan-African protocols, AU engagement, regional integrations",
        "2029: North & Southern Africa expansion",
      ],
      achievements: [],
      milestones: [],
      userTarget: 50000000,
    },
    {
      phaseNumber: 6,
      title: "Phase 6: Vision 2030",
      status: "vision",
      color: "#FFC300",
      progressPercentage: 0,
      quarterlyBreakdown: [
        "Continental coverage (54 countries)",
        "Self-sustaining ecosystem",
        "Global DPI standard",
      ],
      achievements: [],
      milestones: [],
      userTarget: 1000000000,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-[#009B3A]" />;
      case "in-progress":
        return (
          <div className="w-6 h-6 rounded-full border-2 border-[#FFC300] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#FFC300] animate-pulse" />
          </div>
        );
      case "vision":
        return <Star className="w-6 h-6 text-[#FFC300]" />;
      default:
        return <Clock className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  const getPhaseColor = (color: string) => {
    return color;
  };

  const formatUserTarget = (target: number) => {
    if (target >= 1000000000) {
      return `${(target / 1000000000).toFixed(1)}B`;
    }
    if (target >= 1000000) {
      return `${(target / 1000000).toFixed(1)}M`;
    }
    if (target >= 1000) {
      return `${(target / 1000).toFixed(0)}K`;
    }
    return target.toString();
  };

  return (
    <div
      className="w-full min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Africa Map Background */}
      <div
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage:
            "url(/assets/generated/africa-map-background-transparent.dim_800x600.png)",
          backgroundPosition: "center 20%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TMU AI DAO Development Roadmap
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Our Journey to Serving One Billion People
          </p>
          <Badge
            className="text-base px-6 py-2"
            style={{ backgroundColor: "#FFC300", color: "#0a1628" }}
          >
            Phase 2: Launch (2025)
          </Badge>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-[#1a2744]">
              <div
                className="h-full bg-gradient-to-r from-[#009B3A] to-[#FFC300]"
                style={{ width: "20%" }}
              />
            </div>

            {/* Phases Grid */}
            <div className="grid grid-cols-6 gap-4">
              {phases.map((phase) => (
                <div key={phase.phaseNumber} className="relative">
                  {/* Status Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1a2744" }}
                    >
                      {getStatusIcon(phase.status)}
                    </div>
                  </div>

                  {/* Phase Card */}
                  <Card
                    className="border-2 transition-all hover:shadow-lg"
                    style={{
                      backgroundColor: "#1a2744",
                      borderColor: getPhaseColor(phase.color),
                    }}
                  >
                    <CardContent className="p-4">
                      {/* Phase Title */}
                      <h3
                        className="text-lg font-bold mb-2 text-center"
                        style={{ color: getPhaseColor(phase.color) }}
                      >
                        {phase.title}
                      </h3>

                      {/* Status Badge */}
                      <div className="flex justify-center mb-3">
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{
                            borderColor: getPhaseColor(phase.color),
                            color: getPhaseColor(phase.color),
                          }}
                        >
                          {phase.status === "completed" && "✅ Completed"}
                          {phase.status === "in-progress" && "🔄 In Progress"}
                          {phase.status === "planned" && "⏳ Planned"}
                          {phase.status === "vision" && "🌟 Vision 2030"}
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <Progress
                          value={phase.progressPercentage}
                          className="h-2"
                          style={{
                            backgroundColor: "#0a1628",
                          }}
                        />
                        <p className="text-xs text-gray-400 text-center mt-1">
                          {phase.progressPercentage}% Complete
                        </p>
                      </div>

                      {/* Quarterly Breakdown */}
                      <div className="mb-3">
                        <ul className="space-y-1 text-xs text-gray-300">
                          {phase.quarterlyBreakdown.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start">
                              <span
                                className="mr-1"
                                style={{ color: getPhaseColor(phase.color) }}
                              >
                                •
                              </span>
                              <span className="line-clamp-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements/Milestones */}
                      {phase.achievements.length > 0 && (
                        <div className="mb-2">
                          <p className="text-xs font-semibold text-gray-400 mb-1">
                            Achievements:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {phase.achievements
                              .slice(0, 2)
                              .map((achievement) => (
                                <span
                                  key={achievement}
                                  className="text-xs text-[#009B3A]"
                                >
                                  ✓ {achievement}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}

                      {phase.milestones.length > 0 && (
                        <div className="mb-2">
                          <p className="text-xs font-semibold text-gray-400 mb-1">
                            Milestones:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {phase.milestones.slice(0, 2).map((milestone) => (
                              <span
                                key={milestone}
                                className="text-xs text-[#FFC300]"
                              >
                                🎯 {milestone}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* User Target */}
                      <div className="text-center pt-2 border-t border-gray-700">
                        <p className="text-xs text-gray-400">Target</p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: getPhaseColor(phase.color) }}
                        >
                          {formatUserTarget(phase.userTarget)}
                        </p>
                        <p className="text-xs text-gray-400">users</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.phaseNumber} className="relative">
                {/* Connecting Line */}
                {index < phases.length - 1 && (
                  <div
                    className="absolute left-8 top-20 bottom-0 w-1 -mb-8"
                    style={{ backgroundColor: "#1a2744" }}
                  />
                )}

                <div className="flex gap-4">
                  {/* Status Icon */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#1a2744" }}
                  >
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Phase Card */}
                  <Card
                    className="flex-1 border-2"
                    style={{
                      backgroundColor: "#1a2744",
                      borderColor: getPhaseColor(phase.color),
                    }}
                  >
                    <CardContent className="p-6">
                      {/* Phase Title */}
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: getPhaseColor(phase.color) }}
                      >
                        {phase.title}
                      </h3>

                      {/* Status Badge */}
                      <Badge
                        variant="outline"
                        className="mb-4"
                        style={{
                          borderColor: getPhaseColor(phase.color),
                          color: getPhaseColor(phase.color),
                        }}
                      >
                        {phase.status === "completed" && "✅ Completed"}
                        {phase.status === "in-progress" && "🔄 In Progress"}
                        {phase.status === "planned" && "⏳ Planned"}
                        {phase.status === "vision" && "🌟 Vision 2030"}
                      </Badge>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <Progress
                          value={phase.progressPercentage}
                          className="h-3"
                          style={{
                            backgroundColor: "#0a1628",
                          }}
                        />
                        <p className="text-sm text-gray-400 mt-1">
                          {phase.progressPercentage}% Complete
                        </p>
                      </div>

                      {/* Quarterly Breakdown */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Timeline:
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {phase.quarterlyBreakdown.map((item) => (
                            <li key={item} className="flex items-start">
                              <span
                                className="mr-2"
                                style={{ color: getPhaseColor(phase.color) }}
                              >
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {phase.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Achievements:
                          </h4>
                          <div className="space-y-1">
                            {phase.achievements.map((achievement) => (
                              <p
                                key={achievement}
                                className="text-sm text-[#009B3A]"
                              >
                                ✓ {achievement}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Milestones */}
                      {phase.milestones.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Milestones:
                          </h4>
                          <div className="space-y-1">
                            {phase.milestones.map((milestone) => (
                              <p
                                key={milestone}
                                className="text-sm text-[#FFC300]"
                              >
                                🎯 {milestone}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* User Target */}
                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">Target</p>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: getPhaseColor(phase.color) }}
                        >
                          {formatUserTarget(phase.userTarget)}
                        </p>
                        <p className="text-sm text-gray-400">users</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* User Growth Chart */}
          <div className="mt-16">
            <Card
              className="border-2"
              style={{
                backgroundColor: "#1a2744",
                borderColor: "#009B3A",
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Projected User Growth
                </h3>
                <div className="flex justify-center">
                  <img
                    src="/assets/generated/user-growth-chart.dim_400x200.png"
                    alt="User Growth Chart"
                    className="max-w-full h-auto"
                  />
                </div>
                <p className="text-center text-gray-400 mt-4">
                  Our ambitious goal: reaching 1 billion people by 2030
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
