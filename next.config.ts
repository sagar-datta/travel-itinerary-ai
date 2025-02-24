import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable optimizations including React compiler
    optimizePackageImports: ["@/components"],
    typedRoutes: true,
    webpackBuildWorker: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: "/travel-itinerary-ai",
  } : {
    // Development settings
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
