import React from "react";
import Image from "next/image";
import { Translations } from "@/data/translations";

interface BurgundyFooterProps {
  t: Translations;
}

export function BurgundyFooter({ t }: BurgundyFooterProps) {
  return (
    <footer className="w-full bg-[#581C24] text-white py-14 px-4 text-center mt-12 flex flex-col items-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Circular couple emblem with balanced carved statue ring */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-4">
          <div className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_50s_linear_infinite]">
            <Image
              src="/images/sri-lankan/statue_balanced_circle.png"
              alt="Carved Stone Relief"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[64%] h-[64%] rounded-full overflow-hidden border border-[#D4CFC5]/80 shadow-md bg-[#FAF6EF]">
            <Image
              src="/images/sri-lankan/couple_pure_center.png"
              alt="Amaya & Supun"
              fill
              className="object-contain scale-110"
            />
          </div>
        </div>

        {/* Names */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6EF] font-medium tracking-tight mb-2">
          {t.footer.coupleNames}
        </h3>

        {/* Date and Venue */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E2BC6B] font-semibold mb-3">
          {t.footer.details}
        </p>

        {/* Quote */}
        <p className="font-serif italic text-sm sm:text-base text-[#FAF6EF]/90 mb-6">
          “{t.footer.quote}”
        </p>

        {/* Subtle line */}
        <div className="w-24 h-[1px] bg-[#C89B3C]/40 mb-4" />

        <p className="text-[10px] text-[#FAF6EF]/60 tracking-wider">
          {t.footer.credits}
        </p>
      </div>
    </footer>
  );
}
