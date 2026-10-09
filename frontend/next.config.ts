import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  env: {
    BUILD_YEAR: String(new Date().getFullYear()),
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  poweredByHeader: false,
  compress: true,
};

export default nextConfig;