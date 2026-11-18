import React from "react";
import Image from "next/image";
import { Translations } from "@/data/translations";
import { assetPath } from "@/utils/paths";

interface BurgundyFooterProps {
  t: Translations;
}

export function BurgundyFooter({ t }: BurgundyFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-emblem">
          <div className="footer-ring">
            <Image
              src={assetPath("/images/sri-lankan/statue_balanced_circle.png")}
              alt="Carved Stone Relief"
              fill
              className="footer-statue-img"
            />
          </div>
          <div className="footer-couple-stage">
            <Image
              src={assetPath("/images/sri-lankan/couple_pure_center.png")}
              alt="Amaya & Supun"
              fill
              className="footer-couple-img"
            />
          </div>
        </div>

        <h3 className="footer-names font-serif">{t.footer.coupleNames}</h3>
        <p className="footer-details">{t.footer.details}</p>
        <p className="footer-quote font-serif">&ldquo;{t.footer.quote}&rdquo;</p>
        <div className="footer-divider" />
        <p className="footer-credits">{t.footer.credits}</p>
      </div>
    </footer>
  );
}
