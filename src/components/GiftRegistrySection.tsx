"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, CreditCard, Home, Heart } from "lucide-react";
import { BotanicalCorner, GoldDivider } from "./BotanicalDecor";
import { BankAccount } from "@/data/weddingData";

interface GiftRegistrySectionProps {
  bankAccounts: BankAccount[];
  giftAddress: {
    recipient: string;
    street: string;
    cityStateZip: string;
    phone: string;
    note: string;
  };
}

export function GiftRegistrySection({
  bankAccounts,
  giftAddress,
}: GiftRegistrySectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section
      id="gift"
      className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-xl md:max-w-3xl bg-[#232c31]/85 border border-[#d4a34b]/35 rounded-[36px] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center text-center">
        <BotanicalCorner
          position="top-left"
          className="absolute -top-3 -left-3"
        />
        <BotanicalCorner
          position="top-right"
          className="absolute -top-3 -right-3"
        />

        {/* Title */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#f3d085] mb-1 font-normal">
          Wedding Gift
        </h3>
        <p className="text-xs uppercase tracking-[0.25em] text-[#d4a34b] font-semibold mb-4">
          Love & Digital Envelope
        </p>

        <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed mb-8">
          Your warm presence and prayers on our wedding day are the greatest
          gifts of all. However, if you wish to express your love through a
          gift, we provide the details below with heartfelt gratitude.
        </p>

        {/* Bank Transfer Cards */}
        <div className="w-full max-w-md space-y-4 mb-8">
          {bankAccounts.map((account, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#1c2428]/95 border border-[#d4a34b]/35 shadow-md flex flex-col gap-3 text-left relative overflow-hidden"
            >
              {/* Card chip icon */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-[#f3d085] uppercase tracking-wider">
                  {account.bankName}
                </span>
                <CreditCard className="w-4 h-4 text-[#d4a34b]" />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-400">
                  Account Number
                </p>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="font-mono text-lg font-bold text-white tracking-wider">
                    {account.accountNumber}
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(account.accountNumber, `bank_${index}`)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a353a] border border-[#d4a34b]/40 text-xs text-[#f3d085] hover:bg-[#d4a34b] hover:text-[#1b2327] transition-all font-medium"
                  >
                    {copiedKey === `bank_${index}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Account Holder:</span>
                <span className="text-gray-200 font-medium">
                  {account.accountHolder}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Gift Delivery Card */}
        <div className="w-full max-w-md p-5 rounded-2xl bg-[#1c2428]/95 border border-white/10 text-left mb-6">
          <div className="flex items-center gap-2 mb-2 text-[#d4a34b]">
            <Home className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">
              Send Physical Gift
            </span>
          </div>

          <p className="text-xs text-white font-medium">
            {giftAddress.recipient}
          </p>
          <p className="text-xs text-gray-300 mt-0.5">{giftAddress.street}</p>
          <p className="text-xs text-gray-300">{giftAddress.cityStateZip}</p>
          <p className="text-xs text-gray-400 mt-1">Tel: {giftAddress.phone}</p>

          <button
            onClick={() =>
              copyToClipboard(
                `${giftAddress.recipient}, ${giftAddress.street}, ${giftAddress.cityStateZip}`,
                "address"
              )
            }
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a353a] border border-white/10 text-xs text-gray-300 hover:text-[#f3d085] hover:border-[#d4a34b]/40 transition-all"
          >
            {copiedKey === "address" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>
        </div>

        <GoldDivider className="my-4 w-full max-w-md" />

        {/* Thank You Note */}
        <div className="flex flex-col items-center max-w-sm mt-2">
          <Heart className="w-6 h-6 text-[#d4a34b] fill-[#d4a34b]/30 mb-2 animate-pulse" />
          <p className="text-xs text-gray-300 italic leading-relaxed">
            “Thank you for being part of the most momentous day of our lives. We
            cannot wait to celebrate our eternal union together with you.”
          </p>
          <p className="font-script text-2xl text-[#f3d085] mt-3">
            Larry &amp; Danielle
          </p>
        </div>
      </div>
    </section>
  );
}
