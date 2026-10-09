"use client";

import { useEffect, useRef } from "react";
import { CloseIcon, PlayIcon } from "./icons";

/**
 * "Watch Introduction" control. With an embed URL it opens a video dialog;
 * without one it simply scrolls to the About section so the button is never dead.
 */
export function IntroVideo({ embedUrl }: { embedUrl: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => {
      // stop playback by clearing the iframe
      const frame = d.querySelector("iframe");
      if (frame) frame.src = "";
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const trigger = (
    <>
      <span className="relative inline-flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-secondary shadow-[0_12px_30px_-10px_rgba(60,40,20,0.35)] transition duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-full ring-1 ring-secondary/20 anim-glow" aria-hidden />
        <PlayIcon width={18} height={18} className="translate-x-[1px]" />
      </span>
      <span className="text-[13px] font-medium text-ink/80">Watch Introduction</span>
    </>
  );

  if (!embedUrl) {
    return (
      <a href="#about" className="focus-ring group inline-flex items-center gap-4 rounded-full">
        {trigger}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className="focus-ring group inline-flex items-center gap-4 rounded-full"
        onClick={() => {
          const d = dialogRef.current;
          if (!d) return;
          const frame = d.querySelector("iframe");
          if (frame) frame.src = `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`;
          d.showModal();
        }}
      >
        {trigger}
      </button>
      <dialog
        ref={dialogRef}
        aria-label="Introduction video"
        className="m-auto w-[min(92vw,960px)] overflow-hidden rounded-2xl bg-black p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      >
        <div className="relative aspect-video">
          <iframe
            title="Introduction to Dr. B. Vijaya Chaitanya"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close video"
          className="focus-ring absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <CloseIcon width={20} height={20} />
        </button>
      </dialog>
    </>
  );
}
