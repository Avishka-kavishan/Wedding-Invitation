import React from "react";
import { Translations } from "@/data/translations";

interface BlessingBannerProps {
  t: Translations;
}

export function BlessingBanner({ t }: BlessingBannerProps) {
  return (
    <section className="w-full bg-[#581C24] text-white py-14 sm:py-20 px-6 sm:px-10 my-8 shadow-inner text-center flex flex-col items-center">
      <div className="max-w-2xl mx-auto">
        {/* Tag */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E2BC6B] font-semibold mb-4">
          {t.blessing.tag}
        </p>

        {/* Big quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF6EF] leading-relaxed font-normal mb-5">
          {t.blessing.quote}
        </blockquote>

        {/* Description / translation */}
        <p className="text-xs sm:text-sm text-[#FAF6EF]/85 leading-relaxed font-light max-w-xl mx-auto mb-6">
          {t.blessing.description}
        </p>

        {/* Small gold flourish */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-[1px] w-12 bg-[#C89B3C]/50" />
          <span className="text-[#E2BC6B] text-xs">&diams;</span>
          <div className="h-[1px] w-12 bg-[#C89B3C]/50" />
        </div>

        {/* Signature */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#E2BC6B] tracking-wide">
          {t.blessing.signature}
        </p>
      </div>
    </section>
  );
}
