export default function HeroIllustration() {
  // Define the 6 nodes with their colors and positions (evenly distributed in a circle)
  const nodes = [
    {
      color: "#EF3E42", // Red (health)
      angle: 0,
    },
    {
      color: "#FF8C00", // Orange (education)
      angle: 60,
    },
    {
      color: "#009B3A", // Green (agriculture)
      angle: 120,
    },
    {
      color: "#FFC300", // Gold (money)
      angle: 180,
    },
    {
      color: "#3B82F6", // Blue (identity)
      angle: 240,
    },
    {
      color: "#14B8A6", // Teal (governance)
      angle: 300,
    },
  ];

  // Calculate node positions in a circle
  const radius = 160; // Distance from center
  const centerX = 300;
  const centerY = 300;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      {/* Dark blue gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0f172a 50%, #1a2744 100%)",
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Main illustration container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        {/* Simplified Network Hub illustration */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "100%",
            minHeight: "400px",
          }}
        >
          {/* SVG for connections and shapes */}
          <svg
            viewBox="0 0 600 600"
            className="absolute inset-0 w-full h-full"
            style={{ maxWidth: "600px", maxHeight: "600px" }}
            aria-label="TMU AI DAO network illustration"
            role="img"
          >
            <defs>
              {/* Gradient for copper/bronze hexagon */}
              <linearGradient
                id="copperGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#CD7F32", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#B87333", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#A0522D", stopOpacity: 1 }}
                />
              </linearGradient>

              {/* Glow filter for cyan glow */}
              <filter id="cyanGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Draw connection lines from center hexagon to each node */}
            {nodes.map((node) => {
              const x =
                centerX + radius * Math.cos((node.angle * Math.PI) / 180);
              const y =
                centerY + radius * Math.sin((node.angle * Math.PI) / 180);

              return (
                <line
                  key={`center-line-${node.angle}`}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="#00d9ff"
                  strokeWidth="2"
                  opacity="0.6"
                  style={{
                    filter: "drop-shadow(0 0 4px #00d9ff)",
                  }}
                />
              );
            })}

            {/* Central copper/bronze hexagon */}
            <g>
              {/* Outer cyan glow */}
              <polygon
                points="300,230 350,260 350,320 300,350 250,320 250,260"
                fill="none"
                stroke="#00d9ff"
                strokeWidth="4"
                opacity="0.4"
                style={{
                  filter: "blur(12px)",
                }}
              />

              {/* Main hexagon with copper/bronze gradient */}
              <polygon
                points="300,230 350,260 350,320 300,350 250,320 250,260"
                fill="url(#copperGradient)"
                stroke="#00d9ff"
                strokeWidth="2"
                opacity="0.95"
                style={{
                  filter: "drop-shadow(0 0 16px rgba(0, 217, 255, 0.5))",
                }}
              />

              {/* Inner highlight for metallic effect */}
              <polygon
                points="300,240 340,265 340,315 300,340 260,315 260,265"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
              />
            </g>

            {/* Surrounding colored circles */}
            {nodes.map((node) => {
              const x =
                centerX + radius * Math.cos((node.angle * Math.PI) / 180);
              const y =
                centerY + radius * Math.sin((node.angle * Math.PI) / 180);

              return (
                <g key={`node-${node.angle}`}>
                  {/* Outer glow */}
                  <circle
                    cx={x}
                    cy={y}
                    r="28"
                    fill={node.color}
                    opacity="0.3"
                    style={{
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Main circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={node.color}
                    opacity="0.9"
                    style={{
                      filter: `drop-shadow(0 0 8px ${node.color})`,
                    }}
                  />

                  {/* Inner highlight */}
                  <circle
                    cx={x - 4}
                    cy={y - 4}
                    r="6"
                    fill="rgba(255, 255, 255, 0.4)"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Responsive adjustments */
        @media (max-width: 768px) {
          svg {
            max-width: 500px;
            max-height: 500px;
          }
        }

        @media (max-width: 480px) {
          svg {
            max-width: 400px;
            max-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
