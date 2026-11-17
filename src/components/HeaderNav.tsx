"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { Language, translations } from "@/data/translations";

interface HeaderNavProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function HeaderNav({ currentLang, onLanguageChange }: HeaderNavProps) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const languages: Array<{ code: Language; label: string; nativeName: string }> = [
    { code: "en", label: "English", nativeName: "English" },
    { code: "si", label: "Sinhala", nativeName: "සිංහල" },
    { code: "ta", label: "Tamil", nativeName: "தமிழ்" },
  ];

  const scrollTo = (id: string) => {
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      // safe fallback if extension or DOM context was lost
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#C89B3C]/20 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Monogram A | S */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-serif text-2xl tracking-widest text-[#581C24] font-semibold hover:opacity-80 transition-opacity"
        >
          {t.hero.monogram}
        </button>

        {/* Center Nav Links (Hidden on small mobile) */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-[#581C24]/80 font-medium">
          <button
            onClick={() => scrollTo("celebration")}
            className="hover:text-[#581C24] transition-colors"
          >
            {t.nav.details}
          </button>
          <button
            onClick={() => scrollTo("timeline")}
            className="hover:text-[#581C24] transition-colors"
          >
            {t.nav.timeline}
          </button>
          <button
            onClick={() => scrollTo("info")}
            className="hover:text-[#581C24] transition-colors"
          >
            {t.nav.info}
          </button>
        </nav>

        {/* Right Area: Language Switcher + RSVP Button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C89B3C]/40 text-[#581C24] text-xs font-medium hover:border-[#581C24] transition-colors bg-[#FAF6EF]"
              title="Change Language / භාෂාව මාරු කරන්න"
            >
              <Globe className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span className="uppercase tracking-wider font-semibold">
                {currentLang}
              </span>
              <ChevronDown className="w-3 h-3 text-[#581C24]/70" />
            </button>

            {isLangDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#FDFBF7] border border-[#C89B3C]/40 shadow-xl py-1.5 z-20 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-gray-400 font-semibold border-b border-gray-100 mb-1">
                    Language / භාෂාව
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                        currentLang === lang.code
                          ? "bg-[#581C24] text-white font-medium"
                          : "text-[#581C24] hover:bg-[#F6F1E8]"
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      {currentLang === lang.code && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RSVP Button matching screenshot */}
          <button
            onClick={() => scrollTo("rsvp")}
            className="px-4 sm:px-5 py-2 rounded-full bg-[#581C24] hover:bg-[#43131A] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all"
          >
            {t.nav.rsvpNow}
          </button>
        </div>
      </div>
    </header>
  );
}
