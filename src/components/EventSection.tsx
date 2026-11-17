"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Compass,
  Shirt,
  ShieldCheck,
} from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";
import { CoupleInfo } from "@/data/weddingData";
import { generateGoogleCalendarUrl } from "@/utils/calendar";
import { MapModal } from "./MapModal";

interface EventSectionProps {
  couple: CoupleInfo;
}

export function EventSection({ couple }: EventSectionProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleSaveTheDate = () => {
    const calendarUrl = generateGoogleCalendarUrl(
      `The Wedding of ${couple.groomName} & ${couple.brideName}`,
      `Wedding Reception at ${couple.locationName}.`,
      `${couple.locationAddress}, ${couple.locationCity}`,
      couple.weddingDate
    );
    window.open(calendarUrl, "_blank");
  };

  return (
    <section
      id="event"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-xl md:max-w-3xl bg-[#232c31]/85 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        {/* Botanical corners */}
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />
        <BotanicalCorner
          position="bottom-left"
          className="absolute -bottom-3 -left-3"
        />
        <BotanicalCorner
          position="bottom-right"
          className="absolute -bottom-3 -right-3"
        />

        {/* Header */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#f3d085] mb-1 font-normal">
          The Sacred Poruwa Siritha
        </h3>
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4a34b] font-semibold mb-6">
          පෝරුව චාරිත්‍ර සහ මංගල සාදය (Ceremony &amp; Reception)
        </p>

        {/* Center Date Card with botanical frame */}
        <div className="relative w-full max-w-md my-4 p-6 sm:p-8 rounded-3xl bg-[#1c2428]/95 border-2 border-[#d4a34b]/60 shadow-xl overflow-hidden flex flex-col items-center">
          {/* Subtle floral watermark */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_top,_#d4a34b_0%,_transparent_70%)]" />

          <p className="text-sm font-serif uppercase tracking-widest text-[#f3d085] mb-2 font-semibold">
            {couple.weddingDayName}
          </p>

          <div className="flex items-baseline justify-center gap-1 my-2">
            <span className="font-serif text-5xl sm:text-6xl font-bold text-[#f3d085] tracking-tight">
              20
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-light text-[#d4a34b]/80">
              /
            </span>
            <span className="font-serif text-5xl sm:text-6xl font-bold text-[#f3d085] tracking-tight">
              08
            </span>
          </div>

          <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#f3d085] tracking-wider mb-6">
            2026
          </p>

          <div className="w-full space-y-3 mb-6">
            {/* Poruwa Siritha slot */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#232c31] border border-white/5">
              <div className="flex items-center gap-2 text-left">
                <Clock className="w-4 h-4 text-[#d4a34b]" />
                <div>
                  <p className="text-xs font-semibold text-[#f3d085] uppercase tracking-wider">
                    පෝරුවට නැගීම (Poruwa Siritha)
                  </p>
                  <p className="text-[11px] text-gray-400">The Balmoral Ballroom</p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#f3d085]">
                {couple.holyCeremonyTime}
              </span>
            </div>

            {/* Oil Lamp & Blessings slot */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#232c31] border border-white/5">
              <div className="flex items-center gap-2 text-left">
                <Sparkles className="w-4 h-4 text-[#d4a34b]" />
                <div>
                  <p className="text-xs font-semibold text-[#f3d085] uppercase tracking-wider">
                    පහන දැල්වීම (Oil Lamp &amp; Gatha)
                  </p>
                  <p className="text-[11px] text-gray-400">Jayamangala Chants</p>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-200">
                09.30 AM
              </span>
            </div>

            {/* Reception slot */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#232c31] border border-white/5">
              <div className="flex items-center gap-2 text-left">
                <Sparkles className="w-4 h-4 text-[#d4a34b]" />
                <div>
                  <p className="text-xs font-semibold text-[#f3d085] uppercase tracking-wider">
                    මංගල දිවා භෝජනය (Grand Reception)
                  </p>
                  <p className="text-[11px] text-gray-400">Banquet &amp; Celebrations</p>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-200">
                {couple.receptionTime}
              </span>
            </div>
          </div>

          {/* Save the Date button in card */}
          <button
            onClick={handleSaveTheDate}
            className="w-full py-2.5 px-6 rounded-full bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1b2327] font-semibold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Save the Date</span>
          </button>
        </div>

        <GoldDivider className="my-6 w-full max-w-md" />

        {/* Location Section matching screenshot */}
        <div className="flex flex-col items-center max-w-md w-full">
          <div className="flex items-center gap-2 mb-2 text-[#d4a34b]">
            <MapPin className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The Location
            </span>
          </div>

          <h4 className="font-serif text-2xl text-white font-medium mb-1">
            {couple.locationName}
          </h4>

          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            {couple.locationAddress},
            <br />
            {couple.locationCity}
          </p>

          <button
            onClick={() => setIsMapOpen(true)}
            className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1b2327] font-semibold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(212,163,75,0.35)] hover:shadow-[0_6px_22px_rgba(212,163,75,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>View Location</span>
          </button>
        </div>

        {/* Dress code & protocol note */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-md grid grid-cols-2 gap-3 text-left">
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#1b2327]/60 border border-white/5">
            <Shirt className="w-4 h-4 text-[#f3d085] shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-[#f3d085] uppercase tracking-wider">
                Dress Code
              </p>
              <p className="text-[11px] text-gray-300">
                Traditional / Batik / Elegant Formal Attire
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#1b2327]/60 border border-white/5">
            <ShieldCheck className="w-4 h-4 text-[#f3d085] shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-[#f3d085] uppercase tracking-wider">
                Health Protocol
              </p>
              <p className="text-[11px] text-gray-300">
                Safe & comfortable celebration for all guests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Modal */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        locationName={couple.locationName}
        locationAddress={couple.locationAddress}
        locationCity={couple.locationCity}
        mapEmbedUrl={couple.locationEmbedUrl}
        mapExternalUrl={couple.locationMapUrl}
      />
    </section>
  );
}
