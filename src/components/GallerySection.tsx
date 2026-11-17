"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2 } from "lucide-react";
import { BotanicalCorner } from "./BotanicalDecor";
import { GalleryPhoto } from "@/data/weddingData";
import { LightboxModal } from "./LightboxModal";

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

export function GallerySection({ photos }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "outdoor", label: "Outdoor" },
    { id: "moments", label: "Moments" },
    { id: "studio", label: "Studio" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const currentPhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-5xl bg-[#232c31]/80 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />

        {/* Title */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#c7d3d2] mb-1">
          Our Special Memories
        </p>
        <h3 className="font-script text-4xl sm:text-5xl text-[#f3d085] mb-1 font-normal">
          Captured Moments
        </h3>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a34b]" />
          <span>A Glimpse of Our Journey Together</span>
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1b2327] font-semibold shadow-md"
                  : "bg-[#1b2327] border border-white/10 text-gray-300 hover:text-white hover:border-[#d4a34b]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#d4a34b]/30 cursor-pointer group shadow-lg"
            >
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay content */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                <span className="font-serif text-sm text-[#f3d085] font-medium drop-shadow">
                  {photo.title}
                </span>
                <span className="p-1.5 rounded-full bg-black/50 text-white/80 group-hover:text-[#f3d085] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal
        photo={currentPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
