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
    icon:
      process.env.NODE_ENV === "production"
        ? "/travel-itinerary-ai/icon.svg"
        : "/icon.svg",
  },
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
