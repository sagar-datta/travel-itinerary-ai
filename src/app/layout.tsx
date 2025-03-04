import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ThemeColorMeta } from "./components/common/ThemeColorMeta";
import { ViewportMeta } from "./components/common/ViewportMeta";

export const metadata: Metadata = {
  title: "Itinerai",
  description: "Plan your perfect trip with AI assistance",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
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
  manifest:
    process.env.NODE_ENV === "production"
      ? "/travel-itinerary-ai/site.webmanifest"
      : "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="transition-colors duration-300"
      suppressHydrationWarning
    >
      <head>
        <ViewportMeta />
      </head>
      <body className="min-h-screen bg-light-base transition-colors duration-300">
        <ErrorBoundary>
          <ThemeProvider>
            <ThemeColorMeta />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
