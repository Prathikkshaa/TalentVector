import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TalentVector ATS — Recruiter Command Center",
  description: "Decision-first, role-driven, AI-native recruiter command system.",
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          syne.variable,
          dmSans.variable,
          jetbrainsMono.variable,
          "antialiased selection:bg-signal-teal-bg selection:text-signal-teal-text"
        )}
      >
        {children}
      </body>
    </html>
  );
}
