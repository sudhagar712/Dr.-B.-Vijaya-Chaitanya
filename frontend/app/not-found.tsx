import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-4 text-5xl text-ink">This page couldn’t be found.</h1>
      <p className="mt-4 max-w-md text-slate">
        The page you’re looking for may have moved. Return to the home page to continue.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex h-12 items-center rounded-full bg-ink px-8 text-[13px] font-medium text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
