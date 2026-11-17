"use client";

import React, { useState } from "react";
import { X, Copy, Check, CreditCard, Gift, Heart } from "lucide-react";

interface GiftRegistryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftRegistryModal({
  isOpen,
  onClose,
}: GiftRegistryModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const bankAccounts = [
    {
      bankName: "Commercial Bank of Ceylon",
      accountNumber: "8002-918-4721",
      accountHolder: "Supun Wickramasinghe",
    },
    {
      bankName: "Sampath Bank PLC",
      accountNumber: "1034-5820-9182",
      accountHolder: "Amaya Gunasekara",
    },
    {
      bankName: "Hatton National Bank (HNB)",
      accountNumber: "0390-2018-4729",
      accountHolder: "Amaya & Supun Wedding Fund",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#FDFBF7] border border-[#C89B3C]/50 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-black/5 text-[#581C24] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2 text-[#581C24]">
          <Gift className="w-5 h-5 text-[#C89B3C]" />
          <h3 className="font-serif text-2xl font-medium">
            Wedding Registry &amp; Gifts
          </h3>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
          Your presence and prayers at our wedding are the greatest gifts. For those
          wishing to send blessings or a monetary gift, our banking details are
          provided below.
        </p>

        {/* Bank List */}
        <div className="space-y-3.5 mb-6">
          {bankAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F6F1E8] border border-[#C89B3C]/30 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#581C24]">
                <span>{acc.bankName}</span>
                <CreditCard className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="font-mono text-base font-bold text-[#2B2121]">
                  {acc.accountNumber}
                </span>
                <button
                  onClick={() => copyToClipboard(acc.accountNumber, `bank_${idx}`)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#581C24] text-white text-[11px] font-medium hover:bg-[#43131A] transition-colors"
                >
                  {copiedKey === `bank_${idx}` ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-gray-500">
                A/C Name: <strong className="text-gray-700">{acc.accountHolder}</strong>
              </p>
            </div>
          ))}
        </div>

        {/* Gift Delivery Address */}
        <div className="p-4 rounded-2xl bg-[#F6F1E8] border border-[#C89B3C]/30 text-xs">
          <p className="font-semibold text-[#581C24] mb-1">
            Mailing Address for Parcels / Cards:
          </p>
          <p className="text-gray-700">
            Amaya &amp; Supun Residence, No. 42, Independence Avenue, Colombo 07, Sri Lanka
          </p>
          <button
            onClick={() =>
              copyToClipboard(
                "Amaya & Supun Residence, No. 42, Independence Avenue, Colombo 07, Sri Lanka",
                "address"
              )
            }
            className="mt-2 text-[11px] text-[#581C24] font-semibold underline underline-offset-4"
          >
            {copiedKey === "address" ? "Address Copied!" : "Copy Address"}
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#581C24] fill-[#581C24]" />
          <span>With heartfelt gratitude, Amaya &amp; Supun</span>
        </div>
      </div>
    </div>
  );
}
