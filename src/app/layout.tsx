import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ViewportMeta } from "./components/common/ViewportMeta";

export const metadata: Metadata = {
  title: "AI Travel Itinerary Generator",
  description: "Generate personalised travel itineraries with AI",
  manifest:
    process.env.NODE_ENV === "production"
      ? "/travel-itinerary-ai/site.webmanifest"
      : "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-32x32.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  themeColor: "#F0F0F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ViewportMeta />
      </head>
      <body className="min-h-screen bg-light-base">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
