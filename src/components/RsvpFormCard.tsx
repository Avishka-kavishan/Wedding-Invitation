"use client";

import React, { useState } from "react";
import { Translations } from "@/data/translations";
import { Check, Heart, ChevronRight } from "lucide-react";

interface RsvpFormCardProps {
  t: Translations;
}

export function RsvpFormCard({ t }: RsvpFormCardProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState<"accept" | "decline">("accept");
  const [guestCount, setGuestCount] = useState("2 Guests");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const key = "wedding_rsvp_submissions";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push({
          id: Date.now(),
          fullName,
          email,
          attendance,
          guestCount: attendance === "accept" ? guestCount : "0",
          notes,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {
        /* ignore */
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-card">
        <div className="rsvp-inner-border" />

        <p className="section-tag">{t.rsvp.tag}</p>
        <h2 className="section-title font-serif rsvp-title">{t.rsvp.title}</h2>
        <p className="rsvp-subtitle-text">{t.rsvp.subtitle}</p>

        {isSubmitted ? (
          <div className="rsvp-thank-you">
            <Heart className="rsvp-thank-icon" />
            <h3 className="rsvp-thank-title font-serif">{t.rsvp.thankYouMessage}</h3>
            <p className="rsvp-thank-sub">
              {fullName} &bull; {attendance === "accept" ? guestCount : "Regretfully Declines"}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="rsvp-edit-btn"
            >
              Edit your response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-stack">
            <div className="form-group">
              <label className="form-label">{t.rsvp.fullNameLabel}</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.rsvp.fullNamePlaceholder}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t.rsvp.emailLabel}</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.rsvp.emailPlaceholder}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t.rsvp.attendanceLabel}</label>
              <div className="attendance-opts">
                <button
                  type="button"
                  onClick={() => setAttendance("accept")}
                  className={`att-btn${attendance === "accept" ? " selected" : ""}`}
                >
                  <div className="att-btn-content">
                    <div className={`att-radio${attendance === "accept" ? " selected" : ""}`}>
                      {attendance === "accept" && <Check className="att-radio-check" />}
                    </div>
                    <span>{t.rsvp.acceptOption}</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance("decline")}
                  className={`att-btn${attendance === "decline" ? " selected" : ""}`}
                >
                  <div className="att-btn-content">
                    <div className={`att-radio${attendance === "decline" ? " selected" : ""}`}>
                      {attendance === "decline" && <Check className="att-radio-check" />}
                    </div>
                    <span>{t.rsvp.declineOption}</span>
                  </div>
                </button>
              </div>
            </div>

            {attendance === "accept" && (
              <div className="form-group">
                <label className="form-label">{t.rsvp.guestCountLabel}</label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="1 Guest">{t.rsvp.guestOption1}</option>
                  <option value="2 Guests">{t.rsvp.guestOption2}</option>
                  <option value="3 Guests">{t.rsvp.guestOption3}</option>
                  <option value="4 Guests">{t.rsvp.guestOption4}</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">{t.rsvp.dietaryLabel}</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.rsvp.dietaryPlaceholder}
                className="form-input form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rsvp-submit-btn"
            >
              <span>{isSubmitting ? t.rsvp.submittingButton : t.rsvp.submitButton}</span>
              <ChevronRight className="rsvp-submit-chevron" />
            </button>
          </form>
        )}

        <div className="rsvp-help-note">
          <p>Questions? Reach out to us at <a href="mailto:wedding@amaya-supun.com" className="rsvp-email-link">wedding@amaya-supun.com</a></p>
        </div>

        <div className="rsvp-sign-off">
          <p className="rsvp-with-love">{t.rsvp.withLove}</p>
          <p className="rsvp-couple-names font-serif">{t.hero.coupleNames}</p>
        </div>
      </div>
    </section>
  );
}
