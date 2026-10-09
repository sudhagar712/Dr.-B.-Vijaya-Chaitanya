import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.role}`,
    short_name: "Dr. Chaitanya",
    description: "Interventional cardiology care in Vijayawada.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#0d1a2e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
