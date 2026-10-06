import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUpNumber: Smooth ease-out exponential counter
 * - Triggers smoothly whenever scrolled into view (scrolling up or scrolling down)
 * - Holds cleanly on the final number without infinite looping
 * - Automatically resets when scrolled out of view so it re-animates on return
 * - Accepts optional external `triggerInView` to sync with parent section
 */
export default function CountUpNumber({
  end,
  duration = 2000,
  suffix = '+',
  prefix = '',
  className = '',
  loop = false, // Default is false: NO continuous looping!
  pauseDuration = 3000,
  threshold = 0.2,
  triggerInView = null, // Optional parent in-view trigger
}) {
  const [count, setCount] = useState(0);
  const internalRef = useRef(null);
  const internalInView = useInView(internalRef, { once: false, amount: threshold });

  // Use external trigger if provided, else use internal ref in-view
  const activeInView = triggerInView !== null ? triggerInView : internalInView;

  useEffect(() => {
    if (!activeInView) {
      setCount(0); // Reset when scrolled out of view so it re-runs when scrolled back
      return;
    }

    let animationFrameId;
    let pauseTimeoutId;
    let isCancelled = false;

    const runCounter = () => {
      let startTime = null;

      const animate = (timestamp) => {
        if (isCancelled) return;
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out exponential deceleration curve for sleek clinical count-up
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(ease * end);

        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(end);
          // Only loop if explicitly requested (defaults to false)
          if (loop && !isCancelled) {
            pauseTimeoutId = setTimeout(() => {
              if (!isCancelled) {
                runCounter();
              }
            }, pauseDuration);
          }
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    runCounter();

    return () => {
      isCancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutId) clearTimeout(pauseTimeoutId);
    };
  }, [activeInView, end, duration, loop, pauseDuration]);

  // Format with standard thousand comma separators (e.g., 26,000)
  const formattedCount = count.toLocaleString('en-US');

  return (
    <span ref={internalRef} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
