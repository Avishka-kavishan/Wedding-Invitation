"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";
import { CoupleInfo } from "@/data/weddingData";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface CoupleSectionProps {
  couple: CoupleInfo;
  quote: {
    verse: string;
    source: string;
    translation: string;
  };
}

export function CoupleSection({ couple, quote }: CoupleSectionProps) {
  return (
    <section
      id="couple"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#29353c]/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Main card */}
      <div className="relative w-full max-w-4xl bg-[#232c31]/80 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />

        {/* Blessing / Verse */}
        <div className="max-w-2xl mx-auto mb-10 px-2 sm:px-6">
          <p className="font-serif text-lg sm:text-2xl text-[#f3d085] leading-relaxed mb-3">
            {quote.verse}
          </p>
          <p className="text-xs uppercase tracking-widest text-[#d4a34b] font-medium mb-3">
            {quote.source}
          </p>
          <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
            {quote.translation}
          </p>
        </div>

        <GoldDivider className="mb-10 w-full" />

        {/* Section Title */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4a34b] font-semibold mb-1">
          දෙපාර්ශවයේ දෙමව්පියන්ගේ ආශිර්වාදය මැද
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#f3d085] mb-2">
          The Groom &amp; The Bride
        </h3>
        <p className="text-xs text-gray-400 font-serif mb-12">
          (මනාල යුවළගේ සාදර ආරාධනය)
        </p>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full items-center">
          {/* Groom Card */}
          <div className="flex flex-col items-center p-6 rounded-3xl bg-[#1b2327]/85 border border-[#d4a34b]/35 shadow-xl relative group">
            {/* Arched photo frame with Nilame portrait */}
            <div className="relative w-48 h-60 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#d4a34b] p-1 shadow-md bg-[#192125] mb-5">
              <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
                <Image
                  src={couple.groomPhoto}
                  alt={couple.groomFullName}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4a34b] font-semibold mb-1">
              The Groom • මනමාලයා
            </span>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#f3d085] mb-1 font-bold">
              {couple.groomFullName}
            </h4>

            <p className="text-xs text-[#f3d085]/80 font-medium mb-1">
              (In Traditional Kandyan Mul Anduma)
            </p>

            <p className="text-xs text-gray-300 font-medium mb-1">
              {couple.groomParents}
            </p>

            <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
              {couple.groomBio}
            </p>

            <a
              href={`https://instagram.com/${couple.groomInstagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#232c31] border border-[#d4a34b]/40 text-xs text-[#f3d085] hover:bg-[#d4a34b] hover:text-[#1b2327] transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{couple.groomInstagram}</span>
            </a>
          </div>

          {/* Center heart connector */}
          <div className="flex md:hidden items-center justify-center -my-4 z-10">
            <div className="w-12 h-12 rounded-full bg-[#1e262b] border-2 border-[#d4a34b] flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-[#f3d085] fill-[#d4a34b]" />
            </div>
          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center p-6 rounded-3xl bg-[#1b2327]/85 border border-[#d4a34b]/35 shadow-xl relative group">
            {/* Arched photo frame with Kandyan Bride portrait */}
            <div className="relative w-48 h-60 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#d4a34b] p-1 shadow-md bg-[#192125] mb-5">
              <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
                <Image
                  src={couple.bridePhoto}
                  alt={couple.brideFullName}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4a34b] font-semibold mb-1">
              The Bride • මනමාලිය
            </span>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#f3d085] mb-1 font-bold">
              {couple.brideFullName}
            </h4>

            <p className="text-xs text-[#f3d085]/80 font-medium mb-1">
              (In Traditional Kandyan Osariya &amp; Nalalpatiya)
            </p>

            <p className="text-xs text-gray-300 font-medium mb-1">
              {couple.brideParents}
            </p>

            <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
              {couple.brideBio}
            </p>

            <a
              href={`https://instagram.com/${couple.brideInstagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#232c31] border border-[#d4a34b]/40 text-xs text-[#f3d085] hover:bg-[#d4a34b] hover:text-[#1b2327] transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{couple.brideInstagram}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
