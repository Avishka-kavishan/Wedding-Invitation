import React from "react";
import { Translations } from "@/data/translations";
import { MapPin, Sparkles, ExternalLink } from "lucide-react";

interface CelebrationSectionProps {
  t: Translations;
  onOpenMap: () => void;
}

export function CelebrationSection({ t, onOpenMap }: CelebrationSectionProps) {
  return (
    <section id="celebration" className="w-full max-w-xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="text-left mb-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#581C24]/70 font-semibold mb-1">
          {t.celebration.tag}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#581C24] font-medium leading-tight">
          {t.celebration.title}
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold mt-1">
          {t.celebration.dateFull}
        </p>
      </div>

      {/* Cards list matching screenshot */}
      <div className="space-y-6">
        {/* Card 01: Poruwa Ceremony */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#C89B3C]/35 shadow-[0_8px_30px_rgba(88,28,36,0.04)] relative">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold text-[#581C24]/70 mb-3">
            <span>{t.celebration.card1Tag}</span>
            <span className="font-serif text-lg text-[#C89B3C] font-bold">
              {t.celebration.card1Number}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#581C24] font-medium mb-1">
            {t.celebration.card1Title}
          </h3>

          <p className="text-xs font-serif text-[#C89B3C] font-bold tracking-wider mb-3">
            {t.celebration.card1Time}
          </p>

          <p className="text-xs sm:text-sm text-[#2B2121]/80 leading-relaxed font-light mb-5">
            {t.celebration.card1Desc}
          </p>

          <button
            onClick={onOpenMap}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#581C24] hover:text-[#C89B3C] underline underline-offset-4 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{t.celebration.card1Action}</span>
          </button>
        </div>

        {/* Card 02: Reception */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#C89B3C]/35 shadow-[0_8px_30px_rgba(88,28,36,0.04)] relative">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold text-[#581C24]/70 mb-3">
            <span>{t.celebration.card2Tag}</span>
            <span className="font-serif text-lg text-[#C89B3C] font-bold">
              {t.celebration.card2Number}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#581C24] font-medium mb-1">
            {t.celebration.card2Title}
          </h3>

          <p className="text-xs font-serif text-[#C89B3C] font-bold tracking-wider mb-3">
            {t.celebration.card2Time}
          </p>

          <p className="text-xs sm:text-sm text-[#2B2121]/80 leading-relaxed font-light mb-5">
            {t.celebration.card2Desc}
          </p>

          <button
            onClick={onOpenMap}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#581C24] hover:text-[#C89B3C] underline underline-offset-4 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{t.celebration.card2Action}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
