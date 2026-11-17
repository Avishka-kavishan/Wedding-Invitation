import React from "react";

/**
 * Traditional Sri Lankan Floral & Liyawela Corner Motif
 * Features sacred Lotus (Nelum), Jasmine (Pichcha), Frangipani (Araliya),
 * and traditional golden Sri Lankan Liyawela vine curves.
 */
export function BotanicalCorner({
  position = "top-right",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const transform =
    position === "top-left"
      ? "scale(1, 1)"
      : position === "top-right"
      ? "scale(-1, 1)"
      : position === "bottom-left"
      ? "scale(1, -1)"
      : "scale(-1, -1)";

  return (
    <div
      className={`pointer-events-none select-none z-10 ${className}`}
      style={{ transform }}
    >
      <svg
        width="170"
        height="170"
        viewBox="0 0 170 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-95 drop-shadow-md"
      >
        <g>
          {/* Traditional Sri Lankan Liyawela Golden Spiral Vine */}
          <path
            d="M 10 10 C 50 15, 75 45, 80 85 C 85 125, 125 145, 160 160"
            stroke="#d4a34b"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 12 12 C 42 20, 60 48, 65 75 C 70 105, 105 125, 140 145"
            stroke="#f3d085"
            strokeWidth="0.9"
            strokeDasharray="2 3"
            opacity="0.8"
          />

          {/* Traditional Nelum (Sacred Lotus) Blossom at corner */}
          <g transform="translate(45, 45)">
            {/* Outer pink/white petals */}
            <path
              d="M 0 0 C -15 -25, -25 -10, 0 15 C 25 -10, 15 -25, 0 0 Z"
              fill="#fff7f8"
              stroke="#e29ca8"
              strokeWidth="0.8"
            />
            {/* Left petal */}
            <path
              d="M -5 5 C -28 -5, -30 18, -2 22 C 8 20, 2 10, -5 5 Z"
              fill="#fdf2f4"
              stroke="#e29ca8"
              strokeWidth="0.8"
            />
            {/* Right petal */}
            <path
              d="M 5 5 C 28 -5, 30 18, 2 22 C -8 20, -2 10, 5 5 Z"
              fill="#fdf2f4"
              stroke="#e29ca8"
              strokeWidth="0.8"
            />
            {/* Center golden lotus bud */}
            <ellipse cx="0" cy="12" rx="6" ry="9" fill="#f3d085" stroke="#d4a34b" strokeWidth="0.8" />
            <circle cx="0" cy="10" r="2.5" fill="#d4a34b" />
          </g>

          {/* Blooming Jasmine (Pichcha Mal) Florets */}
          <g transform="translate(110, 85)">
            <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#e8dfce" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="1.5" fill="#d4a34b" />
            <circle cx="-5" cy="-3" r="3.2" fill="#ffffff" />
            <circle cx="5" cy="-2" r="3.2" fill="#ffffff" />
            <circle cx="-3" cy="5" r="3.2" fill="#ffffff" />
            <circle cx="4" cy="4" r="3.2" fill="#ffffff" />
          </g>

          <g transform="translate(138, 135)">
            <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#e8dfce" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.2" fill="#d4a34b" />
            <circle cx="-4" cy="-3" r="2.8" fill="#ffffff" />
            <circle cx="4" cy="-2" r="2.8" fill="#ffffff" />
            <circle cx="0" cy="4" r="2.8" fill="#ffffff" />
          </g>

          {/* Pol Mal (Coconut Flower / Prosperity) golden beads */}
          <path
            d="M 30 15 Q 60 5, 85 25 T 120 40"
            stroke="#d4a34b"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="65" cy="12" r="2.8" fill="#f3d085" />
          <circle cx="85" cy="25" r="2.5" fill="#f3d085" />
          <circle cx="102" cy="32" r="2.2" fill="#f3d085" />
          <circle cx="120" cy="40" r="2" fill="#f3d085" />

          {/* Traditional Kandyan Emerald & Maroon gem highlights */}
          <circle cx="82" cy="85" r="3" fill="#881337" stroke="#f3d085" strokeWidth="0.7" />
          <circle cx="45" cy="58" r="2.5" fill="#047857" stroke="#f3d085" strokeWidth="0.7" />

          {/* Golden leaves */}
          <path
            d="M 75 55 C 88 40, 105 48, 98 65 C 88 70, 78 65, 75 55 Z"
            fill="#5b7058"
            stroke="#91aa8c"
            strokeWidth="0.8"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Traditional Sri Lankan Brass Oil Lamp (පහන) SVG Component
 */
export function SriLankanOilLamp({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        width="60"
        height="100"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-20 sm:w-14 sm:h-24 drop-shadow-[0_0_12px_rgba(243,208,133,0.4)]"
      >
        {/* Flame glow */}
        <circle cx="30" cy="14" r="10" fill="#f59e0b" opacity="0.3" filter="blur(3px)" />
        {/* Flame */}
        <path
          d="M 30 4 C 33 9, 36 14, 30 20 C 24 14, 27 9, 30 4 Z"
          fill="url(#flameGradient)"
        />
        {/* Spout / Wick tip */}
        <ellipse cx="30" cy="20" rx="3" ry="1.5" fill="#b45309" />

        {/* Top tier bowl */}
        <path
          d="M 18 22 C 22 28, 38 28, 42 22 L 40 24 C 35 28, 25 28, 20 24 Z"
          fill="#d4a34b"
          stroke="#f3d085"
          strokeWidth="0.7"
        />

        {/* Lamp finial */}
        <path
          d="M 30 20 L 30 25"
          stroke="#d4a34b"
          strokeWidth="2"
        />

        {/* Middle tier bowl */}
        <ellipse cx="30" cy="38" rx="16" ry="4" fill="#9d7328" stroke="#f3d085" strokeWidth="0.8" />
        <ellipse cx="30" cy="37" rx="14" ry="3" fill="#d4a34b" />
        {/* Little flames around bowl */}
        <circle cx="16" cy="36" r="1.5" fill="#fbbf24" />
        <circle cx="44" cy="36" r="1.5" fill="#fbbf24" />
        <circle cx="30" cy="39" r="1.5" fill="#fbbf24" />

        {/* Pillar / Stem with traditional turned rings */}
        <path d="M 28 25 L 28 80 L 32 80 L 32 25 Z" fill="#b8860b" />
        <ellipse cx="30" cy="52" rx="6" ry="2" fill="#d4a34b" stroke="#f3d085" strokeWidth="0.6" />
        <ellipse cx="30" cy="65" rx="7" ry="2.5" fill="#d4a34b" stroke="#f3d085" strokeWidth="0.6" />

        {/* Bottom tier / Large Oil Reservoir */}
        <ellipse cx="30" cy="80" rx="20" ry="5" fill="#9d7328" stroke="#f3d085" strokeWidth="0.8" />
        <ellipse cx="30" cy="79" rx="18" ry="4" fill="#d4a34b" />

        {/* Base stand */}
        <path
          d="M 24 83 L 15 96 L 45 96 L 36 83 Z"
          fill="#b8860b"
          stroke="#f3d085"
          strokeWidth="0.8"
        />
        <ellipse cx="30" cy="96" rx="22" ry="4" fill="#9d7328" stroke="#d4a34b" strokeWidth="0.8" />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="flameGradient" x1="30" y1="4" x2="30" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="0.5" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[10px] uppercase tracking-widest text-[#f3d085] mt-1 font-serif">
        මංගල පහන
      </span>
    </div>
  );
}

/**
 * Traditional Sri Lankan Gold Divider with Lotus Emblem & Sinhalese Flourish
 */
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#d4a34b] to-[#f3d085]" />
      
      {/* Traditional Lotus icon center */}
      <div className="flex items-center justify-center w-7 h-7 rounded-full border border-[#d4a34b] bg-[#1a2125] shadow-[0_0_10px_rgba(212,163,75,0.3)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3 C10 8, 5 12, 5 17 C 5 21, 19 21, 19 17 C 19 12, 14 8, 12 3 Z"
            fill="#d4a34b"
            opacity="0.8"
          />
          <path
            d="M12 6 C11 10, 8 13, 8 17 C 8 19, 16 19, 16 17 C 16 13, 13 10, 12 6 Z"
            fill="#f3d085"
          />
        </svg>
      </div>

      <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#d4a34b] to-[#f3d085]" />
    </div>
  );
}

/**
 * Traditional Sri Lankan Poruwa Arch Crown
 * Features royal Makara Thorana arch silhouette, Jasmine garlands,
 * and Pun Kalasa (prosperity pots) hints.
 */
export function FloralArchCrown({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none flex justify-center ${className}`}>
      <svg
        width="380"
        height="90"
        viewBox="0 0 380 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-72 sm:w-88 md:w-[420px] drop-shadow-md"
      >
        {/* Royal Makara / Poruwa Arch curve */}
        <path
          d="M 20 80 Q 190 -20, 360 80"
          stroke="#d4a34b"
          strokeWidth="2.2"
          fill="none"
        />
        <path
          d="M 35 80 Q 190 -5, 345 80"
          stroke="#f3d085"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Center Royal Lotus Medallion */}
        <circle cx="190" cy="22" r="14" fill="#1e262a" stroke="#d4a34b" strokeWidth="1.5" />
        <circle cx="190" cy="22" r="9" fill="#881337" stroke="#f3d085" strokeWidth="0.8" />
        <circle cx="190" cy="22" r="3.5" fill="#f3d085" />

        {/* Left & Right Makara / Swan flourishes */}
        <path
          d="M 120 38 C 105 25, 125 12, 140 24 C 135 34, 125 40, 120 38 Z"
          fill="#d4a34b"
          opacity="0.9"
        />
        <path
          d="M 260 38 C 275 25, 255 12, 240 24 C 245 34, 255 40, 260 38 Z"
          fill="#d4a34b"
          opacity="0.9"
        />

        {/* Jasmine Flower Tassels (පිච්ච මල් මාලා) hanging from arch */}
        {[70, 110, 150, 230, 270, 310].map((x, i) => (
          <g key={i} transform={`translate(${x}, 52)`}>
            <line x1="0" y1="0" x2="0" y2="18" stroke="#d4a34b" strokeWidth="0.7" />
            <circle cx="0" cy="4" r="2.2" fill="#ffffff" stroke="#e8dfce" strokeWidth="0.4" />
            <circle cx="0" cy="11" r="2.2" fill="#ffffff" stroke="#e8dfce" strokeWidth="0.4" />
            <circle cx="0" cy="18" r="2.8" fill="#f3d085" />
          </g>
        ))}

        {/* Sacred Lotus buds */}
        <ellipse cx="60" cy="72" rx="5" ry="7" fill="#f43f5e" opacity="0.8" />
        <ellipse cx="320" cy="72" rx="5" ry="7" fill="#f43f5e" opacity="0.8" />
      </svg>
    </div>
  );
}
