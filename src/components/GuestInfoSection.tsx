import React from "react";
import { Translations } from "@/data/translations";
import { Shirt, MapPin, Gift, ExternalLink } from "lucide-react";

interface GuestInfoSectionProps {
  t: Translations;
  onOpenMap: () => void;
  onOpenRegistry: () => void;
}

export function GuestInfoSection({ t, onOpenMap, onOpenRegistry }: GuestInfoSectionProps) {
  return (
    <section id="info" className="guest-info-section">
      <p className="section-tag">{t.guestInfo.tag}</p>
      <h2 className="section-title font-serif info-section-title">{t.guestInfo.title}</h2>

      <div className="info-blocks-container">
        <div className="info-block">
          <div className="info-block-header">
            <Shirt className="info-icon" />
            <h3 className="info-block-title font-serif">{t.guestInfo.dressCodeTitle}</h3>
          </div>
          <p className="info-block-desc">{t.guestInfo.dressCodeDesc}</p>
          <span className="info-action-text">{t.guestInfo.dressCodeAction}</span>
        </div>

        <div className="info-block">
          <div className="info-block-header">
            <MapPin className="info-icon" />
            <h3 className="info-block-title font-serif">{t.guestInfo.locationTitle}</h3>
          </div>
          <p className="info-block-desc">{t.guestInfo.locationDesc}</p>
          <button onClick={onOpenMap} className="info-action">
            <span>{t.guestInfo.locationAction}</span>
            <ExternalLink className="info-external-icon" />
          </button>
        </div>

        <div className="info-block">
          <div className="info-block-header">
            <Gift className="info-icon" />
            <h3 className="info-block-title font-serif">{t.guestInfo.giftTitle}</h3>
          </div>
          <p className="info-block-desc">{t.guestInfo.giftDesc}</p>
          <button onClick={onOpenRegistry} className="info-action">
            <span>{t.guestInfo.giftAction}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
