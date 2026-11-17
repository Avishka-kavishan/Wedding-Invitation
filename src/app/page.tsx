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

  // Load language preference if previously selected
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
    <div className="relative min-h-screen bg-[#FAF6EF] text-[#2B2121] selection:bg-[#581C24] selection:text-white">
      {/* Ambient Floating Music & Petals */}
      <PetalsEffect />
      <MusicPlayer autoPlay={false} />

      {/* Header Navigation with Language Switcher */}
      <HeaderNav
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content matching uploaded UI screenshot */}
      <main className="relative flex flex-col items-center">
        {/* 1. Hero Editorial Framed Card */}
        <HeroEditorialCard
          t={t}
          onOpenRsvp={handleScrollToRsvp}
          onOpenMap={() => setIsMapOpen(true)}
        />

        {/* 2. The Blessing of Our Union Burgundy Banner */}
        <BlessingBanner t={t} />

        {/* 3. The Celebration (01 Poruwa Ceremony & 02 Reception Cards) */}
        <CelebrationSection
          t={t}
          onOpenMap={() => setIsMapOpen(true)}
        />

        {/* 4. Programme of Events / Order of the Day */}
        <OrderOfDaySection t={t} />

        {/* 5. Details for Our Guests (A little before you arrive) */}
        <GuestInfoSection
          t={t}
          onOpenMap={() => setIsMapOpen(true)}
          onOpenRegistry={() => setIsRegistryOpen(true)}
        />

        {/* 6. RSVP Card (We've saved a place for you.) */}
        <RsvpFormCard t={t} />
      </main>

      {/* 7. Deep Burgundy Footer */}
      <BurgundyFooter t={t} />

      {/* Modals */}
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
