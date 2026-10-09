import type { ElementType, ReactNode } from "react";

/**
 * Scroll-reveal wrapper. It only tags the element — the actual GSAP animation
 * lives in `Motion.tsx`, so this stays a zero-JS server component and the
 * content is always present in the HTML for crawlers.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** stagger offset in ms */
  delay?: number;
  as?: ElementType;
}) {
  return (
    <Tag className={className} data-g="reveal" data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}
