"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Heart, ChevronDown } from "lucide-react";
import { BotanicalCorner, FloralArchCrown, GoldDivider, SriLankanOilLamp } from "./BotanicalDecor";
import { CoupleInfo } from "@/data/weddingData";
import { generateGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";
import { assetPath } from "@/utils/paths";

interface HeroSectionProps {
  couple: CoupleInfo;
}

export function HeroSection({ couple }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(couple.weddingDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [couple.weddingDate]);

  const handleSaveTheDate = () => {
    const calendarUrl = generateGoogleCalendarUrl(
      `The Wedding of ${couple.groomName} & ${couple.brideName}`,
      `You are warmly invited to the wedding celebration of ${couple.groomFullName} and ${couple.brideFullName} at ${couple.locationName}.`,
      `${couple.locationAddress}, ${couple.locationCity}`,
      couple.weddingDate
    );
    window.open(calendarUrl, "_blank");
  };

  const handleDownloadIcs = () => {
    downloadIcsFile(
      `The Wedding of ${couple.groomName} & ${couple.brideName}`,
      `Wedding celebration of ${couple.groomFullName} and ${couple.brideFullName}.`,
      `${couple.locationAddress}, ${couple.locationCity}`,
      couple.weddingDate
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 px-4 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a34b]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Header Tag with Sri Lankan traditional greeting */}
      <div className="z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e262b]/95 border border-[#d4a34b]/60 text-[#f3d085] text-xs uppercase tracking-[0.25em] shadow-lg mb-6 backdrop-blur-md">
        <span>සුබ මංගලම් • The Poruwa Ceremony</span>
        <span className="text-[10px] text-[#d4a34b]">▼</span>
      </div>

      {/* Main Hero Card Container */}
      <div className="relative w-full max-w-lg md:max-w-2xl bg-[#232c31]/85 border border-[#d4a34b]/40 rounded-[36px] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        {/* Botanical Corners with Lotus & Liyawela */}
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

        {/* Arch Floral Crown */}
        <FloralArchCrown className="mb-2" />

        {/* Iconic Arched Couple Frame with Sri Lankan Kandyan Attire */}
        <div className="relative w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-t-full rounded-b-3xl border-2 border-[#d4a34b] p-1.5 shadow-[0_12px_40px_rgba(212,163,75,0.3)] bg-[#1c2428] my-2 group">
          {/* Inner arch border */}
          <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden border border-[#d4a34b]/40">
            <Image
              src={assetPath("/images/sri-lankan/couple_hero.jpg")}
              alt={`${couple.groomName} & ${couple.brideName}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2327]/90 via-transparent to-[#1b2327]/30" />
          </div>

          {/* Decorative mini flowers on frame base */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#1b2327] border border-[#d4a34b]/70 flex items-center gap-2 shadow-lg whitespace-nowrap">
            <span className="text-xs text-[#f3d085]">නැකත:</span>
            <span className="text-[11px] font-serif text-[#f3d085] tracking-widest font-semibold uppercase">
              {couple.holyCeremonyTime}
            </span>
          </div>
        </div>

        {/* Couple Typography */}
        <div className="mt-7">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d4a34b] font-semibold">
            Traditional Sri Lankan Wedding of
          </p>

          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#f3d085] my-2 font-normal drop-shadow-md">
            {couple.groomName} & {couple.brideName}
          </h2>

          <p className="text-xs text-gray-300 font-serif italic mb-1">
            (කවිෂාන් සහ දිලානි)
          </p>

          {/* Gold date separator lines */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#d4a34b]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f3d085]">
              {couple.weddingDateFormatted}
            </span>
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#d4a34b]" />
          </div>
        </div>

        {/* Countdown Timer with Sri Lankan Poruwa Auspicious Timer */}
        <div className="my-6 w-full max-w-md">
          <p className="text-xs uppercase tracking-widest text-[#d4a34b] mb-3 flex items-center justify-center gap-1.5 font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#d4a34b]" />
            <span>නැකතට ගෙවෙන හෝරාව (Countdown to Auspicious Nekatha)</span>
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: "දින (Days)", value: timeLeft.days },
              { label: "පැය (Hours)", value: timeLeft.hours },
              { label: "මිනිත්තු (Mins)", value: timeLeft.minutes },
              { label: "තත්පර (Secs)", value: timeLeft.seconds },
            ].map((slot, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-1 rounded-2xl bg-[#192125]/90 border border-[#d4a34b]/40 shadow-inner"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#f3d085] tabular-nums">
                  {String(slot.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">
                  {slot.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Sri Lankan Brass Oil Lamp Accent */}
        <div className="my-3 flex items-center justify-center gap-6">
          <SriLankanOilLamp />
        </div>

        {/* Action Buttons: Save the Date */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            onClick={handleSaveTheDate}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1b2327] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_18px_rgba(212,163,75,0.4)] hover:shadow-[0_6px_24px_rgba(212,163,75,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#1b2327]" />
            <span>Save the Date (Google)</span>
          </button>

          <button
            onClick={handleDownloadIcs}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b2327] border border-[#d4a34b]/50 text-[#f3d085] hover:bg-[#d4a34b]/15 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
          >
            <span>Download .ICS</span>
          </button>
        </div>

        {/* Location Teaser */}
        <div className="mt-6 flex items-center gap-2 text-xs text-gray-300">
          <MapPin className="w-3.5 h-3.5 text-[#d4a34b]" />
          <span>
            {couple.locationName} &bull; {couple.locationCity}
          </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#couple"
        className="mt-8 flex flex-col items-center text-gray-400 hover:text-[#f3d085] transition-colors group"
      >
        <span className="text-[11px] uppercase tracking-widest mb-1 group-hover:translate-y-0.5 transition-transform">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#d4a34b]" />
      </a>
    </section>
  );
}
