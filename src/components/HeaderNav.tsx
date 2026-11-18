"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";
import { Language, translations } from "@/data/translations";

interface HeaderNavProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function HeaderNav({ currentLang, onLanguageChange }: HeaderNavProps) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLang];

  const languages: Array<{ code: Language; label: string; nativeName: string }> = [
    { code: "en", label: "English", nativeName: "English" },
    { code: "si", label: "Sinhala", nativeName: "සිංහල" },
    { code: "ta", label: "Tamil", nativeName: "தமிழ்" },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
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

        {/* Middle Menu links */}
        <nav className="header-nav-links">
          <button onClick={() => scrollTo("celebration")} className="nav-item-btn">{t.nav.details}</button>
          <button onClick={() => scrollTo("timeline")} className="nav-item-btn">{t.nav.timeline}</button>
          <button onClick={() => scrollTo("info")} className="nav-item-btn">{t.nav.info}</button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header-menu-pill-btn"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X style={{ width: 14, height: 14 }} /> : <Menu style={{ width: 14, height: 14 }} />}
          <span>Menu</span>
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

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="mobile-nav-drawer">
          <button onClick={() => scrollTo("hero")} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollTo("celebration")} className="mobile-nav-link">{t.nav.details}</button>
          <button onClick={() => scrollTo("timeline")} className="mobile-nav-link">{t.nav.timeline}</button>
          <button onClick={() => scrollTo("info")} className="mobile-nav-link">{t.nav.info}</button>
          <button onClick={() => scrollTo("rsvp")} className="mobile-nav-link rsvp-highlight">{t.nav.rsvpNow}</button>
        </div>
      )}
    </header>
  );
}
