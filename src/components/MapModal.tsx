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

  const venueAddress = `${locationAddress}${locationCity ? `, ${locationCity}` : ""}`;

  return (
    <div className="modal-overlay">
      <div className="map-modal-box">
        <div className="map-modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "#581C24" }} />
            <div>
              <h3 className="map-modal-venue font-serif">{locationName}</h3>
              <p className="map-modal-addr">{venueAddress}</p>
            </div>
          </div>
          <button onClick={onClose} className="map-close-btn">
            <X style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>
        </div>

        <div className="map-frame">
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

        <div className="map-footer">
          <span className="map-note">Complimentary valet parking available at Galle Face Hotel entrance.</span>
          <div className="map-actions">
            <a href={mapExternalUrl} target="_blank" rel="noopener noreferrer" className="map-btn-primary">
              <span>Open in Google Maps</span>
              <ExternalLink style={{ width: "0.875rem", height: "0.875rem" }} />
            </a>
            <a
              href={`https://waze.com/ul?q=${encodeURIComponent(locationName + " " + venueAddress)}`}
              target="_blank" rel="noopener noreferrer" className="map-btn-secondary"
            >
              <span>Waze</span>
              <ExternalLink style={{ width: "0.875rem", height: "0.875rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
