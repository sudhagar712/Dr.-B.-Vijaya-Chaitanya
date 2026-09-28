import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Cardiovascular Red/Blue Blur Aura */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          transform: `translate3d(${pos.x - 160}px, ${pos.y - 160}px, 0)`,
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.07) 0%, rgba(0, 119, 182, 0.03) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Subtle Micro Dot / Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cardio-red/30 transition-all duration-150 ease-out ${
          isPointer ? 'w-10 h-10 -ml-5 -mt-5 bg-cardio-red/10 border-cardio-red/60 scale-110' : 'w-4 h-4 -ml-2 -mt-2 bg-cardio-red/20'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </>
  );
};
