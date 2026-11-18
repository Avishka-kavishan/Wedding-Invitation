"use client";

import React, { useState, useEffect } from "react";
import { Language, translations } from "@/data/translations";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroEditorialCard } from "@/components/HeroEditorialCard";
import { BlessingBanner } from "@/components/BlessingBanner";
import { CelebrationSection } from "@/components/CelebrationSection";
import { OrderOfDaySection } from "@/components/OrderOfDaySection";
import { GuestInfoSection } from "@/components/GuestInfoSection";
import { RsvpFormCard } from "@/components/RsvpFormCard";
import { BurgundyFooter } from "@/components/BurgundyFooter";
import { MapModal } from "@/components/MapModal";
import { GiftRegistryModal } from "@/components/GiftRegistryModal";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PetalsEffect } from "@/components/PetalsEffect";

export default function WeddingInvitationPage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isRegistryOpen, setIsRegistryOpen] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("wedding_invitation_language") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "si" || savedLang === "ta")) {
        setCurrentLang(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("wedding_invitation_language", lang);
    } catch {
      // ignore
    }
  };

  const t = translations[currentLang];

  const handleScrollToRsvp = () => {
    try {
      const el = document.getElementById("rsvp");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="page-wrapper">
      <PetalsEffect />
      <MusicPlayer autoPlay={false} />

      <HeaderNav
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="page-main">
        <HeroEditorialCard
          t={t}
          onOpenRsvp={handleScrollToRsvp}
          onOpenMap={() => setIsMapOpen(true)}
        />
        <BlessingBanner t={t} />
        <CelebrationSection
          t={t}
          onOpenMap={() => setIsMapOpen(true)}
        />
        <OrderOfDaySection t={t} />
        <GuestInfoSection
          t={t}
          onOpenMap={() => setIsMapOpen(true)}
          onOpenRegistry={() => setIsRegistryOpen(true)}
        />
        <RsvpFormCard t={t} />
      </main>

      <BurgundyFooter t={t} />

      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
      <GiftRegistryModal
        isOpen={isRegistryOpen}
        onClose={() => setIsRegistryOpen(false)}
      />
    </div>
  );
}
