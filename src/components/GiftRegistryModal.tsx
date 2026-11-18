"use client";

import React, { useState } from "react";
import { X, Copy, Check, CreditCard, Gift, Heart } from "lucide-react";

interface GiftRegistryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftRegistryModal({ isOpen, onClose }: GiftRegistryModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const bankAccounts = [
    { bankName: "Commercial Bank of Ceylon", accountNumber: "8002-918-4721", accountHolder: "Supun Wickramasinghe" },
    { bankName: "Sampath Bank PLC", accountNumber: "1034-5820-9182", accountHolder: "Amaya Gunasekara" },
    { bankName: "Hatton National Bank (HNB)", accountNumber: "0390-2018-4729", accountHolder: "Amaya & Supun Wedding Fund" },
  ];

  return (
    <div className="modal-overlay">
      <div className="gift-modal-box">
        <button onClick={onClose} className="gift-close-btn">
          <X style={{ width: "1.25rem", height: "1.25rem" }} />
        </button>

        <div className="gift-header">
          <Gift style={{ width: "1.25rem", height: "1.25rem", color: "#C89B3C" }} />
          <h3 className="gift-title font-serif">Wedding Registry &amp; Gifts</h3>
        </div>

        <p className="gift-subtitle">
          Your presence and prayers at our wedding are the greatest gifts. For those
          wishing to send blessings or a monetary gift, our banking details are provided below.
        </p>

        <div className="bank-list" style={{ marginBottom: "1.5rem" }}>
          {bankAccounts.map((acc, idx) => (
            <div key={idx} className="bank-card">
              <div className="bank-card-header">
                <span>{acc.bankName}</span>
                <CreditCard style={{ width: "1rem", height: "1rem", color: "#C89B3C" }} />
              </div>
              <div className="bank-card-num-row">
                <span className="bank-num">{acc.accountNumber}</span>
                <button
                  onClick={() => copyToClipboard(acc.accountNumber, `bank_${idx}`)}
                  className="bank-copy-btn"
                >
                  {copiedKey === `bank_${idx}` ? (
                    <><Check style={{ width: "0.75rem", height: "0.75rem", color: "#6ee7b7" }} /><span>Copied</span></>
                  ) : (
                    <><Copy style={{ width: "0.75rem", height: "0.75rem" }} /><span>Copy</span></>
                  )}
                </button>
              </div>
              <p className="bank-acct-name">A/C Name: <strong style={{ color: "#374151" }}>{acc.accountHolder}</strong></p>
            </div>
          ))}
        </div>

        <div className="gift-address-card">
          <p style={{ fontWeight: 600, color: "#581C24", marginBottom: "0.25rem" }}>Mailing Address for Parcels / Cards:</p>
          <p style={{ color: "#374151" }}>Amaya &amp; Supun Residence, No. 42, Independence Avenue, Colombo 07, Sri Lanka</p>
          <button
            onClick={() => copyToClipboard("Amaya & Supun Residence, No. 42, Independence Avenue, Colombo 07, Sri Lanka", "address")}
            style={{ marginTop: "0.5rem", fontSize: "0.6875rem", color: "#581C24", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px", background: "none", border: "none", cursor: "pointer" }}
          >
            {copiedKey === "address" ? "Address Copied!" : "Copy Address"}
          </button>
        </div>

        <div className="gift-footer">
          <Heart style={{ width: "0.875rem", height: "0.875rem", color: "#581C24", fill: "#581C24" }} />
          <span>With heartfelt gratitude, Amaya &amp; Supun</span>
        </div>
      </div>
    </div>
  );
}
