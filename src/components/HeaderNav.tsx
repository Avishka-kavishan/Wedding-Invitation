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
      // safe fallback
    }
  };

  return (
    <header className="header-nav">
      <div className="header-nav-inner">
        {/* Left Monogram / Logo */}
        <button onClick={() => scrollTo("hero")} className="header-monogram font-serif">
          A|S
        </button>

        {/* Right Actions: Language Switcher + Book RSVP button */}
        <div className="header-right">
          <div className="lang-container">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="lang-btn"
              title="Change Language"
            >
              <Globe className="lang-icon" />
              <span className="lang-code">{currentLang}</span>
              <ChevronDown className="lang-chevron" />
            </button>

            {isLangDropdownOpen && (
              <>
                <div
                  className="lang-backdrop"
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="lang-dropdown">
                  <div className="lang-dropdown-label">Language / භාෂාව</div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`lang-option${currentLang === lang.code ? " active" : ""}`}
                    >
                      <span>{lang.nativeName}</span>
                      {currentLang === lang.code && <Check className="lang-check" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button onClick={() => scrollTo("rsvp")} className="rsvp-btn">
            {t.nav.rsvpNow}
          </button>
        </div>
      </div>
    </header>
  );
}
