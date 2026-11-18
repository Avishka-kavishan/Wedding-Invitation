"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/utils/paths";

interface KandyanMandalaEmblemProps {
  className?: string;
  size?: number;
}

export function KandyanMandalaEmblem({
  className = "",
  size = 320,
}: KandyanMandalaEmblemProps) {
  return (
    <div
      className={`mandala-emblem-wrap ${className}`}
      style={{ "--mandala-size": `${size}px` } as React.CSSProperties}
    >
      {/* 1. Subtle warm ambient glow behind the carved stone medallion */}
      <div className="mandala-glow-ambient" />

      {/* 2. CENTER COUPLE PORTRAIT (ALIVE, GENTLE BREATHING & ROMANTIC GLEAM) */}
      <div className="mandala-couple-stage">
        <div className="mandala-couple-animated">
          <Image
            src={assetPath("/images/sri-lankan/couple_balanced_center.png")}
            alt="Amaya & Supun - Traditional Sri Lankan Wedding"
            fill
            className="mandala-couple-img"
            priority
          />
        </div>
        {/* Soft romantic light beam/gleam passing over the couple */}
        <div className="mandala-couple-gleam" />
      </div>

      {/* 3. THE AUTHENTIC FULLY CIRCULAR CARVED STONE STATUE RING (ROTATING IN A 360° CELESTIAL LOOP) */}
      {/* 100% mathematically balanced circular geometry with concentric stone grooves and outer baroque acanthus filigree */}
      <div className="mandala-statue-ring" title="Carved Sri Lankan Stone Relief Ring">
        <Image
          src={assetPath("/images/sri-lankan/statue_balanced_circle.png")}
          alt="Traditional Kandyan Carved Stone Relief"
          fill
          className="mandala-statue-image"
          priority
        />
      </div>
    </div>
  );
}
