import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const BASE_URL = "https://portfolio-two-sepia-60.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdullah Farooq",
  url: BASE_URL,
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in multi-portal architecture, React, TypeScript, Node.js. Building scalable B2B platforms for logistics, fintech, and hospitality.",
  email: "abdfarooq97@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/abdullahf97",
    "https://www.linkedin.com/in/abdullah-farooq-143952177",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Redux",
    "Tailwind CSS",
    "Docker",
    "Multi-portal Architecture",
  ],
};

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
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abdullah Farooq — Software Engineer",
    template: "%s — Abdullah Farooq",
  },
  description:
    "Software Engineer specializing in multi-portal architecture, React, TypeScript, Node.js. Building scalable B2B platforms for logistics, fintech, and hospitality.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Full-Stack Developer",
    "Remote Developer",
    "Next.js",
    "Multi-portal Architecture",
  ],
  authors: [{ name: "Abdullah Farooq", url: BASE_URL }],
  creator: "Abdullah Farooq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abdullah Farooq",
    title: "Abdullah Farooq — Software Engineer",
    description:
      "Software Engineer specializing in multi-portal architecture and scalable B2B platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Farooq — Software Engineer",
    description:
      "Software Engineer specializing in multi-portal architecture and scalable B2B platforms.",
    creator: "@abdullahf97",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
