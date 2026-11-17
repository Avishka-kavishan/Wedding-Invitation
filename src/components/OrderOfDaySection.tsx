import React from "react";
import { Translations } from "@/data/translations";

interface OrderOfDaySectionProps {
  t: Translations;
}

export function OrderOfDaySection({ t }: OrderOfDaySectionProps) {
  const events = [
    {
      time: t.orderOfDay.event1Time,
      title: t.orderOfDay.event1Title,
      desc: t.orderOfDay.event1Desc,
    },
    {
      time: t.orderOfDay.event2Time,
      title: t.orderOfDay.event2Title,
      desc: t.orderOfDay.event2Desc,
    },
    {
      time: t.orderOfDay.event3Time,
      title: t.orderOfDay.event3Title,
      desc: t.orderOfDay.event3Desc,
    },
    {
      time: t.orderOfDay.event4Time,
      title: t.orderOfDay.event4Title,
      desc: t.orderOfDay.event4Desc,
    },
  ];

  return (
    <section id="timeline" className="w-full flex justify-center py-6 px-4">
      <div className="w-full max-w-xl bg-[#EFEAE0] rounded-[32px] p-6 sm:p-10 border border-[#C89B3C]/30 shadow-sm text-left">
        {/* Header */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#581C24]/70 font-semibold mb-1">
          {t.orderOfDay.tag}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#581C24] font-medium mb-8">
          {t.orderOfDay.title}
        </h2>

        {/* Timeline with Diamond Markers matching screenshot */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#C89B3C]/50">
          {events.map((ev, idx) => (
            <div key={idx} className="relative group">
              {/* Diamond marker */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1 w-2.5 h-2.5 rotate-45 bg-[#581C24] border border-[#C89B3C]" />

              <span className="text-[11px] font-mono tracking-wider text-[#C89B3C] font-bold block mb-1">
                {ev.time}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-[#581C24] font-medium mb-1">
                {ev.title}
              </h3>

              <p className="text-xs text-[#2B2121]/75 leading-relaxed font-light">
                {ev.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
