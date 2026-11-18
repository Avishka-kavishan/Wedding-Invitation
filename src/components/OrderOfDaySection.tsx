import React from "react";
import { Translations } from "@/data/translations";

interface OrderOfDaySectionProps {
  t: Translations;
}

export function OrderOfDaySection({ t }: OrderOfDaySectionProps) {
  const events = [
    { time: t.orderOfDay.event1Time, title: t.orderOfDay.event1Title, desc: t.orderOfDay.event1Desc },
    { time: t.orderOfDay.event2Time, title: t.orderOfDay.event2Title, desc: t.orderOfDay.event2Desc },
    { time: t.orderOfDay.event3Time, title: t.orderOfDay.event3Title, desc: t.orderOfDay.event3Desc },
    { time: t.orderOfDay.event4Time, title: t.orderOfDay.event4Title, desc: t.orderOfDay.event4Desc },
  ];

  return (
    <section id="timeline" className="order-section">
      <div className="order-card">
        <p className="section-tag">{t.orderOfDay.tag}</p>
        <h2 className="section-title font-serif order-title">{t.orderOfDay.title}</h2>

        <div className="timeline-list">
          {events.map((ev, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-diamond" />
              <span className="timeline-time">{ev.time}</span>
              <h3 className="timeline-title font-serif">{ev.title}</h3>
              <p className="timeline-desc">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
