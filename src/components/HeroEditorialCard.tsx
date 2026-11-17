"use client";

import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { KandyanMandalaEmblem } from "./KandyanMandalaEmblem";
import { Translations } from "@/data/translations";
import { generateGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";

interface HeroEditorialCardProps {
  t: Translations;
  onOpenRsvp: () => void;
  onOpenMap: () => void;
}

export function HeroEditorialCard({
  t,
  onOpenRsvp,
  onOpenMap,
}: HeroEditorialCardProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 90, hours: 20, minutes: 30, seconds: 0 });

  useEffect(() => {
    // August 20, 2026 08:45 AM
    const target = new Date("2026-08-20T08:45:00").getTime();

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
  }, []);

  const handleAddToCalendar = () => {
    const url = generateGoogleCalendarUrl(
      `The Wedding of ${t.hero.coupleNames}`,
      `Traditional Sri Lankan Poruwa ceremony and wedding reception at ${t.hero.venue}, ${t.hero.city}.`,
      `${t.hero.venue}, 2 Galle Road, Colombo 03, Sri Lanka`,
      "2026-08-20T08:45:00"
    );
    window.open(url, "_blank");
  };

  const handleDownloadIcs = () => {
    downloadIcsFile(
      `The Wedding of ${t.hero.coupleNames}`,
      `Traditional Sri Lankan Poruwa ceremony and wedding reception at ${t.hero.venue}, ${t.hero.city}.`,
      `${t.hero.venue}, 2 Galle Road, Colombo 03, Sri Lanka`,
      "2026-08-20T08:45:00"
    );
  };

  return (
    <section id="hero" className="w-full flex justify-center py-6 px-3 sm:px-4">
      {/* Outer Card Container matching screenshot */}
      <div className="relative w-full max-w-xl bg-[#FDFBF7] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#C89B3C]/35 shadow-[0_12px_45px_rgba(88,28,36,0.06)] flex flex-col items-center text-center">
        {/* Subtle decorative inner border line */}
        <div className="absolute inset-2.5 sm:inset-3 rounded-[26px] sm:rounded-[34px] border border-[#C89B3C]/20 pointer-events-none" />

        {/* Subtitle matching screenshot */}
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#581C24]/70 font-semibold mb-3">
          {t.hero.subtitle}
        </p>

        {/* Couple Names in Serif */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#581C24] font-medium tracking-tight mb-6">
          {t.hero.coupleNames}
        </h1>

        {/* Center Circular Illustration / Mandala Emblem matching screenshot */}
        <div className="my-2 flex justify-center">
          <KandyanMandalaEmblem size={270} />
        </div>

        {/* Date & Location block matching screenshot */}
        <div className="mt-6 mb-4 space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#581C24]/75 font-semibold">
            {t.hero.date}
          </p>
          <h2 className="font-serif text-xl sm:text-2xl text-[#581C24] font-medium">
            {t.hero.venue}
          </h2>
          <p className="text-xs text-[#581C24]/70 font-medium">
            {t.hero.subVenue} &bull; {t.hero.city}
          </p>
        </div>

        {/* Primary CTA: Confirm Attendance Button */}
        <div className="w-full max-w-xs mt-3 space-y-2.5">
          <button
            onClick={onOpenRsvp}
            className="w-full py-3.5 px-6 rounded-xl bg-[#581C24] hover:bg-[#43131A] text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            {t.hero.confirmAttendance}
          </button>

          <div className="flex items-center justify-center gap-4 text-xs">
            <button
              onClick={handleAddToCalendar}
              className="text-[#581C24] hover:text-[#C89B3C] font-semibold underline underline-offset-4 tracking-wider uppercase text-[11px] transition-colors"
            >
              {t.hero.addToCalendar}
            </button>
            <span className="text-[#C89B3C]">&bull;</span>
            <button
              onClick={handleDownloadIcs}
              className="text-[#581C24]/80 hover:text-[#581C24] font-medium text-[11px] tracking-wide transition-colors"
            >
              {t.hero.downloadIcs}
            </button>
          </div>
        </div>

        {/* Thin divider */}
        <div className="w-full max-w-xs h-[1px] bg-[#C89B3C]/25 my-6" />

        {/* Countdown summary matching screenshot */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-serif text-[#581C24] font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>
              in {timeLeft.days} {t.hero.countdownDays} &bull; {timeLeft.hours} {t.hero.countdownHours} &bull; {timeLeft.minutes} {t.hero.countdownMinutes}
            </span>
          </p>
          <button
            onClick={onOpenMap}
            className="text-[11px] uppercase tracking-widest text-[#581C24]/70 hover:text-[#581C24] mt-1.5 flex items-center gap-1 transition-colors"
          >
            <MapPin className="w-3 h-3 text-[#C89B3C]" />
            <span>{t.hero.venue} &bull; {t.hero.city}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
