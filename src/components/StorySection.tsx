"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles, Calendar } from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";
import { StoryItem } from "@/data/weddingData";

interface StorySectionProps {
  stories: StoryItem[];
  groomName: string;
  brideName: string;
}

export function StorySection({
  stories,
  groomName,
  brideName,
}: StorySectionProps) {
  return (
    <section
      id="story"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-4xl bg-[#232c31]/80 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />

        {/* Title */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4a34b] font-semibold mb-1">
          {groomName} & {brideName}&apos;s
        </p>
        <h3 className="font-script text-4xl sm:text-5xl text-[#f3d085] mb-1 font-normal">
          The Journey of Love
        </h3>
        <p className="text-xs text-gray-300 font-serif mb-2">
          (ප්‍රේම වෘත්තාන්තය)
        </p>
        <p className="text-xs uppercase tracking-widest text-[#f3d085]/80 mb-8 flex items-center justify-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a34b]" />
          <span>Milestones from Peradeniya to Colombo</span>
        </p>

        {/* Story Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl bg-[#1b2327]/85 border border-[#d4a34b]/30 overflow-hidden shadow-lg group hover:border-[#d4a34b]/60 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#161c20]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2327] via-transparent to-transparent" />

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1b2327]/85 border border-[#d4a34b]/50 text-[#f3d085] text-xs font-serif font-bold flex items-center gap-1 backdrop-blur-sm shadow-md">
                  <Calendar className="w-3 h-3 text-[#d4a34b]" />
                  <span>{story.year}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-serif text-xl text-[#f3d085] mb-1 font-semibold flex items-center gap-2">
                    <span>{story.title}</span>
                    <Heart className="w-3.5 h-3.5 text-[#d4a34b] fill-[#d4a34b]/30" />
                  </h4>
                  <p className="text-xs text-[#d4a34b] font-medium tracking-wide mb-3">
                    {story.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="italic">Chapter {idx + 1}</span>
                  <span className="text-[#f3d085]/80">&hearts;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
