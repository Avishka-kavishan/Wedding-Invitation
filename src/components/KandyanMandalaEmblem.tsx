"use client";

import React from "react";
import Image from "next/image";
import { CarvedStatueSvg } from "./CarvedStatueSvg";

export function KandyanMandalaEmblem({
  className = "",
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] flex items-center justify-center select-none ${className}`}
    >
      {/* 1. Subtle warm ambient glow behind the statue matching the original stone palette */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(212,207,197,0.35)_0%,_transparent_72%)] pointer-events-none" />

      {/* 2. THE CARVED STATUE (BALANCED CIRCLE - ZERO WOBBLE) */}
      {/* Mathematically balanced circle rotating in a 360° celestial loop with pure stone color */}
      <div className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_50s_linear_infinite]">
        <CarvedStatueSvg color="#D4CFC5" className="absolute inset-0" />
        <Image
          src="/images/sri-lankan/statue_balanced_circle.png"
          alt="Traditional Kandyan Carved Stone Relief"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 3. STATIONARY COUPLE IN THE CENTER (Does not rotate - stays upright and still) */}
      <div className="relative w-[64%] h-[64%] rounded-full overflow-hidden border border-[#D4CFC5] shadow-inner z-10 bg-[#FAF6EF]">
        <Image
          src="/images/sri-lankan/couple_pure_center.png"
          alt="Amaya & Supun - Traditional Sri Lankan Wedding"
          fill
          className="object-contain scale-110"
          priority
        />
      </div>
    </div>
  );
}
