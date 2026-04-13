"use client";

export default function PixelArt() {
  return (
    <div className="pixel-art-container relative w-full h-96 flex items-center justify-center">
      {/* Pixel Art SVG */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="pixel-art"
        style={{
          imageRendering: "pixelated",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        {/* Background Glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Simple Pixel Character */}
        {/* Head */}
        <rect
          x="75"
          y="30"
          width="50"
          height="50"
          fill="#ff00ff"
          filter="url(#glow)"
        />

        {/* Eyes */}
        <rect x="85" y="40" width="10" height="10" fill="#000" />
        <rect x="105" y="40" width="10" height="10" fill="#000" />

        {/* Body */}
        <rect
          x="70"
          y="85"
          width="60"
          height="50"
          fill="#00ffff"
          filter="url(#glow)"
        />

        {/* Arms */}
        <rect
          x="30"
          y="95"
          width="40"
          height="15"
          fill="#ff00ff"
          filter="url(#glow)"
        />
        <rect
          x="130"
          y="95"
          width="40"
          height="15"
          fill="#ff00ff"
          filter="url(#glow)"
        />

        {/* Legs */}
        <rect
          x="80"
          y="140"
          width="15"
          height="40"
          fill="#00ffff"
          filter="url(#glow)"
        />
        <rect
          x="105"
          y="140"
          width="15"
          height="40"
          fill="#00ffff"
          filter="url(#glow)"
        />

        {/* Smile */}
        <rect x="90" y="55" width="5" height="5" fill="#000" />
        <rect x="105" y="55" width="5" height="5" fill="#000" />
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 border border-current rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
