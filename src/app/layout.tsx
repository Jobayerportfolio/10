import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://jobayerhossan.com";
const TITLE =
  "Jobayer Hossan | Video Editor & Motion Designer in Bangladesh";
const DESCRIPTION =
  "Jobayer Hossan is a professional Video Editor & Motion Designer with 3+ years of experience crafting cinematic stories, motion graphics, and high-impact content for brands and creators worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Jobayer Hossan",
  },
  description: DESCRIPTION,
  keywords: [
    "Jobayer Hossan",
    "Video Editor",
    "Motion Designer",
    "Motion Graphics Artist",
    "Video Editing Bangladesh",
    "After Effects Designer",
    "Premiere Pro Editor",
    "DaVinci Resolve Colorist",
    "YouTube Video Editor",
    "Reels Editor",
    "Freelance Video Editor",
  ],
  authors: [{ name: "Jobayer Hossan", url: SITE_URL }],
  creator: "Jobayer Hossan",
  publisher: "Jobayer Hossan",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Jobayer Hossan — Video Editor & Motion Designer",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jobayer Hossan — Video Editor & Motion Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-cover.jpg"],
    creator: "@jobayerhossan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jobayer Hossan",
    jobTitle: "Video Editor & Motion Designer",
    description: DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    sameAs: [
      "https://www.facebook.com/jobayerhossan",
      "https://www.linkedin.com/in/jobayerhossan",
      "https://www.behance.net/jobayerhossan",
      "https://www.youtube.com/@jobayerhossan",
    ],
    knowsAbout: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "DaVinci Resolve",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg text-text-primary antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
