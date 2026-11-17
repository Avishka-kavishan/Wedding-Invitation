"use client";

import React from "react";
import { X, ExternalLink, MapPin } from "lucide-react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName?: string;
  locationAddress?: string;
  locationCity?: string;
  mapEmbedUrl?: string;
  mapExternalUrl?: string;
}

export function MapModal({
  isOpen,
  onClose,
  locationName = "Galle Face Hotel",
  locationAddress = "2 Galle Road, Colombo 03, Sri Lanka",
  locationCity = "Colombo",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7712391035546!2d79.84307507484405!3d6.917953018459469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594191c0d517%3A0x63393b3f2eb383fa!2sGalle%20Face%20Hotel!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk",
  mapExternalUrl = "https://maps.google.com/?q=Galle+Face+Hotel+Colombo",
}: MapModalProps) {
  if (!isOpen) return null;

  const venueName = locationName;
  const venueAddress = `${locationAddress}${locationCity ? `, ${locationCity}` : ""}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#C89B3C]/50 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C89B3C]/20 bg-[#FAF6EF]">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#581C24]" />
            <div>
              <h3 className="font-serif text-lg text-[#581C24] font-medium">
                {venueName}
              </h3>
              <p className="text-xs text-gray-500">{venueAddress}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#581C24] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Map iframe */}
        <div className="w-full h-80 sm:h-96 bg-gray-100">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Galle Face Hotel Location Map"
          />
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#FAF6EF] border-t border-[#C89B3C]/20">
          <span className="text-xs text-gray-600">
            Complimentary valet parking available at Galle Face Hotel entrance.
          </span>
          <div className="flex items-center gap-2">
            <a
              href={mapExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#581C24] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#43131A] transition-all"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://waze.com/ul?q=${encodeURIComponent(venueName + " " + venueAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF6EF] border border-[#581C24]/30 text-[#581C24] font-medium text-xs uppercase tracking-wider hover:bg-[#581C24]/10 transition-all"
            >
              <span>Waze</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
