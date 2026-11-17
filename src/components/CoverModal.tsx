"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MailOpen, Heart, Sparkles } from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";

interface CoverModalProps {
  onOpen: () => void;
  isOpen: boolean;
  groomName: string;
  brideName: string;
  weddingDateFormatted: string;
}

export function CoverModal({
  onOpen,
  isOpen,
  groomName,
  brideName,
  weddingDateFormatted,
}: CoverModalProps) {
  const [guestName, setGuestName] = useState<string>("Honored Guest");
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to") || params.get("guest") || params.get("u");
      if (to) {
        setGuestName(decodeURIComponent(to));
      }
    }
  }, []);

  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#181f23] transition-all duration-700 ease-in-out ${
        isClosing
          ? "-translate-y-full opacity-0 pointer-events-none scale-105"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(40,54,61,0.9)_0%,_rgba(20,26,30,0.98)_100%)]" />

      {/* Subtle background motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4a34b_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Frame container */}
      <div className="relative w-full max-w-md mx-4 p-8 sm:p-10 rounded-3xl bg-[#232c31]/90 border border-[#d4a34b]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md text-center overflow-hidden flex flex-col items-center">
        {/* Botanical corners */}
        <BotanicalCorner
          position="top-left"
          className="absolute -top-4 -left-4"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-4 -right-4"
        />
        <BotanicalCorner
          position="bottom-left"
          className="absolute -bottom-4 -left-4"
        />
        <BotanicalCorner
          position="bottom-right"
          className="absolute -bottom-4 -right-4"
        />

        {/* Small badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1b2327] border border-[#d4a34b]/50 text-[#f3d085] text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a34b]" />
          <span>ආයුබෝවන් • Traditional Poruwa Invitation</span>
        </div>

        {/* Arched couple preview */}
        <div className="relative w-44 h-56 sm:w-52 sm:h-64 my-3 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#d4a34b] p-1 shadow-inner bg-[#1e262a]">
          <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
            <Image
              src="/images/sri-lankan/couple_hero.jpg"
              alt={`${groomName} & ${brideName}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2327]/85 via-transparent to-transparent" />
          </div>
        </div>

        {/* Typography */}
        <p className="text-xs uppercase tracking-[0.25em] text-[#f3d085]/90 mt-2 font-medium">
          The Traditional Wedding of
        </p>

        <h1 className="font-script text-4xl sm:text-5xl text-[#f3d085] my-2 drop-shadow-sm font-normal">
          {groomName} & {brideName}
        </h1>

        <div className="flex items-center gap-2 text-xs tracking-wider text-[#d4a34b] font-medium">
          <span>{weddingDateFormatted}</span>
        </div>

        <GoldDivider className="my-3" />

        {/* Guest greeting */}
        <div className="my-2">
          <p className="text-xs text-gray-400 tracking-wider">
            Special Invitation For:
          </p>
          <p className="text-lg font-serif text-white font-medium mt-1 px-4 py-1 rounded-lg bg-black/20 border border-white/5 inline-block max-w-[280px] truncate">
            {guestName}
          </p>
          <p className="text-[11px] text-gray-400 mt-1 italic">
            *We apologize if there is any misspelling of name/title
          </p>
        </div>

        {/* Open Invitation Button */}
        <button
          onClick={handleOpenInvitation}
          className="group relative mt-4 inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#d4a34b] via-[#e5b85a] to-[#d4a34b] text-[#1b2327] font-semibold text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(212,163,75,0.35)] hover:shadow-[0_6px_28px_rgba(212,163,75,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>Open Invitation</span>
          <Heart className="w-3.5 h-3.5 fill-[#1b2327]" />
        </button>
      </div>
    </div>
  );
}
