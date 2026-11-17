"use client";

import React, { useState } from "react";
import { X, Settings, RotateCcw, Check } from "lucide-react";
import { CoupleInfo, defaultWeddingData } from "@/data/weddingData";

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  couple: CoupleInfo;
  onUpdateCouple: (updated: CoupleInfo) => void;
  onReset: () => void;
}

export function CustomizeModal({
  isOpen,
  onClose,
  couple,
  onUpdateCouple,
  onReset,
}: CustomizeModalProps) {
  const [formData, setFormData] = useState<CoupleInfo>(couple);

  if (!isOpen) return null;

  const handleChange = (field: keyof CoupleInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCouple(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#1e262b] border border-[#d4a34b]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#171e22]">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#f3d085]" />
            <h3 className="font-serif text-lg text-[#f3d085]">
              Customize Wedding Details
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 text-left">
          <p className="text-xs text-gray-300">
            Personalize the couple names, wedding date, and venue details in real time:
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                Groom Name
              </label>
              <input
                type="text"
                value={formData.groomName}
                onChange={(e) => handleChange("groomName", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                Groom Full Name
              </label>
              <input
                type="text"
                value={formData.groomFullName}
                onChange={(e) => handleChange("groomFullName", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                Bride Name
              </label>
              <input
                type="text"
                value={formData.brideName}
                onChange={(e) => handleChange("brideName", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                Bride Full Name
              </label>
              <input
                type="text"
                value={formData.brideFullName}
                onChange={(e) => handleChange("brideFullName", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
              Formatted Date Display
            </label>
            <input
              type="text"
              value={formData.weddingDateFormatted}
              onChange={(e) => handleChange("weddingDateFormatted", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
              Venue Name
            </label>
            <input
              type="text"
              value={formData.locationName}
              onChange={(e) => handleChange("locationName", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
              Venue Address
            </label>
            <input
              type="text"
              value={formData.locationAddress}
              onChange={(e) => handleChange("locationAddress", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#232c31] border border-white/10 text-white text-sm focus:border-[#d4a34b] focus:outline-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-6">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(defaultWeddingData.couple);
                onClose();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#d4a34b] to-[#f3d085] text-[#1b2327] font-semibold text-xs uppercase tracking-wider hover:brightness-110 shadow-md transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
