'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 800);
    const t2 = setTimeout(() => setRemoved(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <span className="loading-logo font-display text-3xl font-extrabold select-none">
        <span className="text-gradient">HEXA</span><span className="text-white">IT</span>
      </span>
    </div>
  );
}
