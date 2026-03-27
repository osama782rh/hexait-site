'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;

    /* Only enable on fine pointer devices */
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      el.style.left = `${mx}px`;
      el.style.top = `${my}px`;
      if (!el.classList.contains('visible')) el.classList.add('visible');
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        el.classList.add('hover-link');
      } else if (t.closest('.card, .hero-browser')) {
        el.classList.add('hover-card');
      }
    };

    const onOut = () => {
      el.classList.remove('hover-link', 'hover-card');
    };

    const onLeave = () => {
      el.classList.remove('visible');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={dot} className="cursor-dot" />;
}
