import { Handlee, Inter } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { getSiteUrl, site } from "../lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const handlee = Handlee({
  weight: "400",
  variable: "--font-handlee",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon_black.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_white.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${handlee.variable} h-full antialiased`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground flex min-h-full flex-col font-sans"
        suppressHydrationWarning
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
