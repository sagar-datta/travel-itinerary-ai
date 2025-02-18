import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

export const metadata: Metadata = {
  title: "AI Travel Planner",
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
            <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
