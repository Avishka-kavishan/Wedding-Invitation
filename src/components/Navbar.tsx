"use client";

import React, { useEffect, useState } from "react";
import {
  Heart,
  Calendar,
  Clock,
  BookOpen,
  Image as ImageIcon,
  MessageSquareHeart,
  Gift,
} from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: Heart },
    { id: "couple", label: "Couple", icon: Heart },
    { id: "event", label: "Event", icon: Calendar },
    { id: "story", label: "Story", icon: BookOpen },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "wishes", label: "Wishes", icon: MessageSquareHeart },
    { id: "gift", label: "Gift", icon: Gift },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop / Tablet top floating pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#1e262b]/90 border border-[#d4a34b]/30 shadow-2xl backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1a2124] shadow-md font-semibold"
                    : "text-gray-300 hover:text-[#f3d085] hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "fill-[#1a2124]" : ""}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-sm md:hidden">
        <div className="flex items-center justify-around py-2 px-1 rounded-2xl bg-[#1e262b]/95 border border-[#d4a34b]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-[#f3d085] scale-110"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "stroke-[2.5px] fill-[#d4a34b]/20" : "stroke-2"
                  }`}
                />
                <span className="text-[9px] tracking-wider font-medium mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
