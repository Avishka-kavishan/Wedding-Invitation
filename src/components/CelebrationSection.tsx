import React from "react";
import { Translations } from "@/data/translations";
import { MapPin, Sparkles } from "lucide-react";

interface CelebrationSectionProps {
  t: Translations;
  onOpenMap: () => void;
}

export function CelebrationSection({ t, onOpenMap }: CelebrationSectionProps) {
  return (
    <section id="celebration" className="celebration-section">
      <div className="section-header">
        <p className="section-tag">{t.celebration.tag}</p>
        <h2 className="section-title font-serif">{t.celebration.title}</h2>
        <p className="section-date">{t.celebration.dateFull}</p>
      </div>

      <div className="cards-list">
        <div className="event-card">
          <div className="event-card-header">
            <span>{t.celebration.card1Tag}</span>
            <span className="event-card-number font-serif">{t.celebration.card1Number}</span>
          </div>
          <h3 className="event-card-title font-serif">{t.celebration.card1Title}</h3>
          <p className="event-card-time font-serif">{t.celebration.card1Time}</p>
          <p className="event-card-desc">{t.celebration.card1Desc}</p>
          <button onClick={onOpenMap} className="event-card-action">
            <MapPin className="event-card-icon" />
            <span>{t.celebration.card1Action}</span>
          </button>
        </div>

        <div className="event-card">
          <div className="event-card-header">
            <span>{t.celebration.card2Tag}</span>
            <span className="event-card-number font-serif">{t.celebration.card2Number}</span>
          </div>
          <h3 className="event-card-title font-serif">{t.celebration.card2Title}</h3>
          <p className="event-card-time font-serif">{t.celebration.card2Time}</p>
          <p className="event-card-desc">{t.celebration.card2Desc}</p>
          <button onClick={onOpenMap} className="event-card-action">
            <Sparkles className="event-card-icon" />
            <span>{t.celebration.card2Action}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
