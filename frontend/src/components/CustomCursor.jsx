import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, select, textarea, [role="button"], .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);

    let animId;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(animateTrailing);
    };
    animId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trailing medical crosshair ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-100 ease-out ${
          isHovering
            ? 'h-12 w-12 border-[#41A490] bg-[#41A490]/10 shadow-[0_0_15px_rgba(65,164,144,0.35)]'
            : isClicking
            ? 'h-8 w-8 border-[#EC242E] bg-[#EC242E]/20 shadow-[0_0_20px_rgba(236,36,46,0.5)]'
            : 'h-9 w-9 border-[#125083]/40 bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        <div className="absolute left-1/2 top-0 h-1.5 w-0.5 -translate-x-1/2 bg-[#41A490]"></div>
        <div className="absolute bottom-0 left-1/2 h-1.5 w-0.5 -translate-x-1/2 bg-[#41A490]"></div>
        <div className="absolute left-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-[#41A490]"></div>
        <div className="absolute right-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-[#41A490]"></div>
      </div>

      {/* Center pinpoint cardiac dot */}
      <div
        className={`fixed h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_8px_#EC242E] transition-transform duration-75 ${
          isHovering ? 'scale-150 bg-[#41A490]' : 'bg-[#EC242E]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
