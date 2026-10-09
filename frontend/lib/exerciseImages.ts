import fs from "node:fs";
import path from "node:path";

/**
 * Real photography for the "Recommended Exercises" cards.
 *
 * Drop one image per exercise into  public/images/exercises/  named after the card id:
 *   walking.jpg · cycling.jpg · stretching.jpg · strength.jpg      (.jpg .jpeg .webp .png .avif)
 * Landscape ~4:3 (min. 1200×900) works best. When a file exists it is used automatically;
 * otherwise the card falls back to the built-in vector illustration.
 */
const EXTENSIONS = ["jpg", "jpeg", "webp", "png", "avif"] as const;

export function exercisePhoto(id: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", "images", "exercises", `${id}.${ext}`);
    if (fs.existsSync(file)) return `/images/exercises/${id}.${ext}`;
  }
  return null;
}
