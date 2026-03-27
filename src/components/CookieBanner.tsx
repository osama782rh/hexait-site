'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies-analytics");
    if (consent === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookies-analytics", "accepted");
    setVisible(false);
    window.location.reload();
  };

  const reject = () => {
    localStorage.setItem("cookies-analytics", "rejected");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div
        className="container mx-auto max-w-3xl rounded-2xl px-6 py-5"
        style={{
          background: 'rgba(17,17,19,0.92)',
          backdropFilter: 'blur(20px) saturate(1.2)',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm flex-1" style={{ color: 'var(--text-secondary)' }}>
            Nous utilisons des cookies analytics pour améliorer votre expérience.{" "}
            <Link href="/cookies" className="underline" style={{ color: 'var(--accent-light)' }}>
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={reject} className="btn-ghost text-sm px-4 py-2">
              Refuser
            </button>
            <button onClick={accept} className="btn-cta text-sm px-4 py-2">
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
