"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight, Calendar, MapPin, Clock } from "lucide-react";
import { KandyanMandalaEmblem } from "./KandyanMandalaEmblem";
import { Translations } from "@/data/translations";
import { generateGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";

interface HeroEditorialCardProps {
  t: Translations;
  onOpenRsvp: () => void;
  onOpenMap: () => void;
}

export function HeroEditorialCard({ t, onOpenRsvp, onOpenMap }: HeroEditorialCardProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number; hours: number; minutes: number; seconds: number;
  }>({ days: 90, hours: 20, minutes: 30, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-08-20T08:45:00").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
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
    <section id="hero" className="hero-section">
      <div className="hero-card">
        <div className="hero-inner-border" />

        {/* 1. Header Subtitle */}
        <p className="hero-subtitle">{t.hero.subtitle}</p>

        {/* 2. Couple Names in Serif */}
        <h1 className="hero-title font-serif">
          <span>Amaya</span>
          <span className="hero-ampersand">&amp;</span>
          <span>Supun</span>
        </h1>

        {/* 3. Mandala: Rotating Carved Statue + Animated Couple Image */}
        <div className="hero-mandala">
          <KandyanMandalaEmblem size={300} />
        </div>

        {/* 4. Celebration Tagline & Details */}
        <div className="hero-details-block">
          <p className="hero-tagline">{t.hero.tagline}</p>
          <p className="hero-ceremony-type">{t.hero.subVenue}</p>
          <p className="hero-city-name">{t.hero.city}</p>
        </div>

        {/* 5. Primary CTA: Confirm Attendance */}
        <div className="hero-cta-wrapper">
          <button onClick={onOpenRsvp} className="hero-confirm-btn">
            <span>{t.hero.confirmAttendance}</span>
            <ChevronRight className="hero-btn-chevron" />
          </button>

          {/* 6. Add to Calendar link */}
          <div className="hero-calendar-links">
            <button onClick={handleAddToCalendar} className="hero-link-btn">
              {t.hero.addToCalendar}
            </button>
            <span className="hero-link-dot">&bull;</span>
            <button onClick={handleDownloadIcs} className="hero-link-btn-sm">
              {t.hero.downloadIcs}
            </button>
          </div>
        </div>

        {/* 7. Timeline Highlights: 8:45 AM Poruwa Ceremony | 1:30 PM Grand Reception */}
        <div className="hero-schedule-row">
          <div className="hero-schedule-col">
            <span className="hero-schedule-time">{t.hero.event1Highlight}</span>
          </div>
          <div className="hero-schedule-divider" />
          <div className="hero-schedule-col">
            <span className="hero-schedule-time">{t.hero.event2Highlight}</span>
          </div>
        </div>

        {/* 8. Date and Venue Display matching screenshot */}
        <div className="hero-venue-block">
          <p className="hero-date-text">{t.hero.date}</p>
          <h2 className="hero-venue-name font-serif">{t.hero.venue}</h2>
        </div>

        {/* Subtle Countdown Bar */}
        <div className="hero-countdown-pill" onClick={onOpenMap} title="View Venue Map">
          <Clock className="hero-clock-icon" />
          <span>
            in {timeLeft.days} {t.hero.countdownDays} &bull; {timeLeft.hours} {t.hero.countdownHours} &bull; {timeLeft.minutes} {t.hero.countdownMinutes}
          </span>
          <span className="hero-countdown-dot">&bull;</span>
          <span className="hero-countdown-map-link">
            <MapPin className="hero-map-pin-icon" />
            <span>Map</span>
          </span>
        </div>
      </div>
    </section>
  );
}
