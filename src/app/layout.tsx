import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="transition-colors duration-300" suppressHydrationWarning>
       
      <body className="min-h-screen bg-light-base transition-colors duration-300 dark:bg-dark-base">
       <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
        {children}
      </body>
    </html>
  );
}
