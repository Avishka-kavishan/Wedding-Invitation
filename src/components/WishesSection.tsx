"use client";

import React, { useEffect, useState } from "react";
import {
  MessageSquareHeart,
  Send,
  Heart,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";
import { WishMessage } from "@/data/weddingData";

interface WishesSectionProps {
  initialWishes: WishMessage[];
}

export function WishesSection({ initialWishes }: WishesSectionProps) {
  const [wishes, setWishes] = useState<WishMessage[]>(initialWishes);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declined" | "tentative">("attending");
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Load persisted wishes from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wedding_invitation_wishes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish: WishMessage = {
      id: "wish_" + Date.now(),
      name: name.trim(),
      attendance,
      guestCount: attendance === "attending" ? guestCount : 0,
      message: message.trim(),
      timestamp: "Just now",
      likes: 0,
    };

    setTimeout(() => {
      const updated = [newWish, ...wishes];
      setWishes(updated);
      try {
        localStorage.setItem("wedding_invitation_wishes", JSON.stringify(updated));
      } catch {
        // ignore
      }
      setName("");
      setMessage("");
      setIsSubmitting(false);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 4000);
    }, 400);
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((w) =>
      w.id === id ? { ...w, likes: w.likes + 1 } : w
    );
    setWishes(updated);
    try {
      localStorage.setItem("wedding_invitation_wishes", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="wishes"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-xl md:max-w-3xl bg-[#232c31]/85 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />

        {/* Title matching screenshots */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#f3d085] mb-1 font-normal">
          Wedding Wishes
        </h3>
        <p className="text-xs uppercase tracking-[0.25em] text-[#d4a34b] font-semibold mb-6 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>සාදර සුබපැතුම් • Blessings at Your Fingertips</span>
        </p>

        {/* Wishes Input Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#1c2428]/95 border border-[#d4a34b]/40 rounded-3xl p-6 shadow-inner text-left mb-8"
        >
          {/* Guest Name */}
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Marcus & Olivia Sterling"
              className="w-full px-4 py-2.5 rounded-xl bg-[#232c31] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#d4a34b] transition-colors"
            />
          </div>

          {/* Attendance Selection */}
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
              RSVP Confirmation *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAttendance("attending")}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
                  attendance === "attending"
                    ? "bg-[#d4a34b] text-[#1b2327] border-[#d4a34b]"
                    : "bg-[#232c31] text-gray-300 border-white/10 hover:border-[#d4a34b]/40"
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Will Attend</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance("declined")}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
                  attendance === "declined"
                    ? "bg-rose-900/60 text-rose-200 border-rose-500"
                    : "bg-[#232c31] text-gray-300 border-white/10 hover:border-white/20"
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Cannot Attend</span>
              </button>
            </div>
          </div>

          {/* Number of Guests (if attending) */}
          {attendance === "attending" && (
            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5 flex items-center justify-between">
                <span>Number of Guests</span>
                <Users className="w-3.5 h-3.5 text-[#d4a34b]" />
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4a34b]"
              >
                <option value={1}>1 Person</option>
                <option value={2}>2 Persons (Couple)</option>
                <option value={3}>3 Persons</option>
                <option value={4}>4 Persons (Family)</option>
              </select>
            </div>
          )}

          {/* Message Textarea */}
          <div className="mb-5">
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
              Wedding Wishes & Prayers *
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your beautiful wedding wishes and blessings here..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#232c31] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#d4a34b] transition-colors resize-none"
            />
          </div>

          {/* Send Button matching screenshot */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#d4a34b] via-[#e5b85a] to-[#d4a34b] text-[#1b2327] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(212,163,75,0.4)] hover:shadow-[0_6px_22px_rgba(212,163,75,0.6)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Sending..." : "Send Wishes"}</span>
          </button>
        </form>

        {/* Success toast */}
        {showSuccessToast && (
          <div className="mb-6 px-4 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Thank you! Your wedding wishes have been sent with love.</span>
          </div>
        )}

        <GoldDivider className="mb-6 w-full max-w-md" />

        {/* Wishes List Feed */}
        <div className="w-full max-w-xl text-left space-y-3.5 max-h-[480px] overflow-y-auto pr-1">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2 flex items-center justify-between">
            <span>Messages from Family & Friends ({wishes.length})</span>
            <MessageSquareHeart className="w-4 h-4 text-[#d4a34b]" />
          </p>

          {wishes.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-[#1b2327]/90 border border-white/5 hover:border-[#d4a34b]/30 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4a34b] to-[#a37728] text-[#192125] font-serif font-bold text-xs flex items-center justify-center shadow-inner">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#f3d085] font-medium leading-none">
                      {item.name}
                    </h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          item.attendance === "attending"
                            ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
                            : "bg-rose-950/60 text-rose-300 border border-rose-800/40"
                        }`}
                      >
                        {item.attendance === "attending"
                          ? `Attending (${item.guestCount || 1})`
                          : "Regretfully Absent"}
                      </span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {item.timestamp}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#232c31] hover:bg-[#d4a34b]/20 text-gray-400 hover:text-[#f3d085] text-xs transition-colors"
                >
                  <Heart
                    className={`w-3 h-3 ${
                      item.likes > 0 ? "text-rose-400 fill-rose-400" : ""
                    }`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-10">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
