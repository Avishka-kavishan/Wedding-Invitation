"use client";

import React, { useState } from "react";
import { Translations } from "@/data/translations";
import { Check, Heart } from "lucide-react";

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
      // Save locally
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
        // ignore
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="rsvp" className="w-full flex justify-center py-10 px-3 sm:px-4">
      <div className="w-full max-w-xl bg-[#FDFBF7] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#C89B3C]/35 shadow-[0_12px_45px_rgba(88,28,36,0.06)] text-left relative">
        {/* Subtle decorative inner border line */}
        <div className="absolute inset-2.5 sm:inset-3 rounded-[26px] sm:rounded-[34px] border border-[#C89B3C]/20 pointer-events-none" />

        {/* Tag */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#581C24]/70 font-semibold mb-1">
          {t.rsvp.tag}
        </p>

        {/* Heading matching screenshot */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#581C24] font-medium mb-2 leading-tight">
          {t.rsvp.title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs text-[#2B2121]/75 leading-relaxed font-light mb-8">
          {t.rsvp.subtitle}
        </p>

        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-[#581C24]/5 border border-[#C89B3C]/40 text-center my-6 animate-in fade-in">
            <Heart className="w-8 h-8 text-[#581C24] fill-[#581C24]/30 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#581C24] font-medium mb-2">
              {t.rsvp.thankYouMessage}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {fullName} &bull; {attendance === "accept" ? guestCount : "Regretfully Declines"}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-[#581C24] font-semibold underline underline-offset-4"
            >
              Edit your response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#581C24]/80 font-semibold mb-1.5">
                {t.rsvp.fullNameLabel}
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.rsvp.fullNamePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6] border border-[#C89B3C]/30 text-[#2B2121] text-xs sm:text-sm placeholder-[#2B2121]/40 focus:outline-none focus:border-[#581C24] transition-colors"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#581C24]/80 font-semibold mb-1.5">
                {t.rsvp.emailLabel}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.rsvp.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6] border border-[#C89B3C]/30 text-[#2B2121] text-xs sm:text-sm placeholder-[#2B2121]/40 focus:outline-none focus:border-[#581C24] transition-colors"
              />
            </div>

            {/* Attendance Toggle Buttons matching screenshot */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#581C24]/80 font-semibold mb-2">
                {t.rsvp.attendanceLabel}
              </label>
              <div className="space-y-2">
                {/* Accept Option (Selected: Solid Burgundy) */}
                <button
                  type="button"
                  onClick={() => setAttendance("accept")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all border ${
                    attendance === "accept"
                      ? "bg-[#581C24] text-white border-[#581C24] shadow-sm"
                      : "bg-[#F4EFE6] text-[#581C24] border-[#C89B3C]/30 hover:border-[#581C24]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        attendance === "accept"
                          ? "border-white bg-white text-[#581C24]"
                          : "border-[#581C24]"
                      }`}
                    >
                      {attendance === "accept" && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{t.rsvp.acceptOption}</span>
                  </div>
                </button>

                {/* Decline Option */}
                <button
                  type="button"
                  onClick={() => setAttendance("decline")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all border ${
                    attendance === "decline"
                      ? "bg-[#581C24] text-white border-[#581C24] shadow-sm"
                      : "bg-[#F4EFE6] text-[#581C24] border-[#C89B3C]/30 hover:border-[#581C24]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        attendance === "decline"
                          ? "border-white bg-white text-[#581C24]"
                          : "border-[#581C24]"
                      }`}
                    >
                      {attendance === "decline" && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{t.rsvp.declineOption}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Guest Count (if attending) */}
            {attendance === "accept" && (
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#581C24]/80 font-semibold mb-1.5">
                  {t.rsvp.guestCountLabel}
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6] border border-[#C89B3C]/30 text-[#2B2121] text-xs sm:text-sm focus:outline-none focus:border-[#581C24]"
                >
                  <option value="1 Guest">{t.rsvp.guestOption1}</option>
                  <option value="2 Guests">{t.rsvp.guestOption2}</option>
                  <option value="3 Guests">{t.rsvp.guestOption3}</option>
                  <option value="4 Guests">{t.rsvp.guestOption4}</option>
                </select>
              </div>
            )}

            {/* Notes / Dietary */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#581C24]/80 font-semibold mb-1.5">
                {t.rsvp.dietaryLabel}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.rsvp.dietaryPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6] border border-[#C89B3C]/30 text-[#2B2121] text-xs sm:text-sm placeholder-[#2B2121]/40 focus:outline-none focus:border-[#581C24] transition-colors resize-none"
              />
            </div>

            {/* Submit Button matching screenshot */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-[#581C24] hover:bg-[#43131A] text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? t.rsvp.submittingButton : t.rsvp.submitButton}
            </button>
          </form>
        )}

        {/* Sign-off matching screenshot */}
        <div className="mt-8 pt-6 border-t border-[#C89B3C]/20 text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#581C24]/60 font-semibold mb-1">
            {t.rsvp.withLove}
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-[#581C24]">
            Amaya &amp; Supun
          </p>
        </div>
      </div>
    </section>
  );
}
