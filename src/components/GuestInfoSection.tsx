import React from "react";
import { Translations } from "@/data/translations";
import { Shirt, MapPin, Gift, ExternalLink } from "lucide-react";

interface GuestInfoSectionProps {
  t: Translations;
  onOpenMap: () => void;
  onOpenRegistry: () => void;
}

export function GuestInfoSection({
  t,
  onOpenMap,
  onOpenRegistry,
}: GuestInfoSectionProps) {
  return (
    <section id="info" className="w-full max-w-xl mx-auto py-10 px-4 text-left">
      {/* Header */}
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#581C24]/70 font-semibold mb-1">
        {t.guestInfo.tag}
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl text-[#581C24] font-medium mb-8">
        {t.guestInfo.title}
      </h2>

      <div className="space-y-8">
        {/* Dress code */}
        <div className="pb-6 border-b border-[#C89B3C]/20">
          <div className="flex items-center gap-2 mb-2 text-[#581C24]">
            <Shirt className="w-4 h-4 text-[#C89B3C]" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium">
              {t.guestInfo.dressCodeTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#2B2121]/80 leading-relaxed font-light mb-3">
            {t.guestInfo.dressCodeDesc}
          </p>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#581C24] underline underline-offset-4 cursor-pointer hover:text-[#C89B3C] transition-colors">
            {t.guestInfo.dressCodeAction}
          </span>
        </div>

        {/* Location */}
        <div className="pb-6 border-b border-[#C89B3C]/20">
          <div className="flex items-center gap-2 mb-2 text-[#581C24]">
            <MapPin className="w-4 h-4 text-[#C89B3C]" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium">
              {t.guestInfo.locationTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#2B2121]/80 leading-relaxed font-light mb-3">
            {t.guestInfo.locationDesc}
          </p>
          <button
            onClick={onOpenMap}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#581C24] underline underline-offset-4 hover:text-[#C89B3C] transition-colors"
          >
            <span>{t.guestInfo.locationAction}</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Gifts */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#581C24]">
            <Gift className="w-4 h-4 text-[#C89B3C]" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium">
              {t.guestInfo.giftTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#2B2121]/80 leading-relaxed font-light mb-3">
            {t.guestInfo.giftDesc}
          </p>
          <button
            onClick={onOpenRegistry}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#581C24] underline underline-offset-4 hover:text-[#C89B3C] transition-colors"
          >
            <span>{t.guestInfo.giftAction}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
