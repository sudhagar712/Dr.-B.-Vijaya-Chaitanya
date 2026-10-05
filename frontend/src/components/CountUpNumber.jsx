import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUpNumber with continuous loop support and viewport trigger
 * - Triggers immediately when scrolled into view ("antha section vantha run avanum")
 * - Continuously loops count-up animation while in view ("continous loop mari number run avanum")
 * - Smooth ease-out exponential deceleration curve
 */
export default function CountUpNumber({
  end,
  duration = 2000,
  suffix = '+',
  prefix = '',
  className = '',
  loop = true,
  pauseDuration = 3000,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset when scrolled out so it re-runs when scrolled back into view
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
          // Continuous loop: hold on final value for pauseDuration, then restart count-up
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
  }, [isInView, end, duration, loop, pauseDuration]);

  // Format with standard thousand comma separators (e.g., 26,000)
  const formattedCount = count.toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
