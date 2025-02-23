import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable optimizations including React compiler
    optimizePackageImports: ["@/components"],
    typedRoutes: true,
    webpackBuildWorker: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/itinerai",
};

export default nextConfig;
