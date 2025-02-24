import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ThemeColorMeta } from "./components/common/ThemeColorMeta";

export const metadata: Metadata = {
  title: "Itinerai",
  description: "Plan your perfect trip with AI assistance",
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
      <body className="min-h-screen bg-light-base transition-colors duration-300 dark:bg-dark-base">
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
