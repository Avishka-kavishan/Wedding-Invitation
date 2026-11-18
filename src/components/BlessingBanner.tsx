import React from "react";
import { Translations } from "@/data/translations";

interface BlessingBannerProps {
  t: Translations;
}

export function BlessingBanner({ t }: BlessingBannerProps) {
  return (
    <section className="blessing-banner">
      <div className="blessing-inner">
        <p className="blessing-tag">{t.blessing.tag}</p>
        <blockquote className="blessing-quote font-serif">{t.blessing.quote}</blockquote>
        <p className="blessing-desc">{t.blessing.description}</p>
        <div className="blessing-flourish">
          <div className="blessing-line" />
          <span className="blessing-diamond">&diams;</span>
          <div className="blessing-line" />
        </div>
        <p className="blessing-signature font-serif">{t.blessing.signature}</p>
      </div>
    </section>
  );
}
