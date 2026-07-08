import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Farooq — Software Engineer",
  description: "Software Engineer specializing in multi-portal architecture, React, TypeScript, Node.js. Building scalable B2B platforms for logistics, fintech, and hospitality.",
  keywords: ["Software Engineer", "React Developer", "TypeScript", "Node.js", "Full-Stack Developer", "Remote Developer"],
  authors: [{ name: "Abdullah Farooq" }],
  creator: "Abdullah Farooq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahfarooq.dev",
    siteName: "Abdullah Farooq",
    title: "Abdullah Farooq — Software Engineer",
    description: "Software Engineer specializing in multi-portal architecture and scalable B2B platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Farooq — Software Engineer",
    description: "Software Engineer specializing in multi-portal architecture and scalable B2B platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
