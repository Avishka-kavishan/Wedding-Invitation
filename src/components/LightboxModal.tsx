"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/data/weddingData";
import { assetPath } from "@/utils/paths";

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function LightboxModal({
  photo,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (photo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white/80 hover:text-[#f3d085] hover:bg-black/70 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white/80 hover:text-[#f3d085] hover:bg-black/70 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border border-[#d4a34b]/40 shadow-2xl bg-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={assetPath(photo.url)}
          alt={photo.title}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
          <p className="font-serif text-lg text-[#f3d085] font-medium">
            {photo.title}
          </p>
        </div>
      </div>
    </div>
  );
}
