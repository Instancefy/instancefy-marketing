/**
 * Shared site identity for metadata, robots, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://instancefy.com).
 *
 * Replace social `href` values with real profile URLs before they are
 * included in Organization sameAs (root domain placeholders are skipped).
 */
const fallbackUrl = "http://localhost:3000";

export const site = {
  name: "Instancefy Technologies",
  shortName: "Instancefy",
  tagline: "Build. Ship. Repeat.",
  description:
    "Instancefy Technologies delivers Software Development, IoT, and ML/AI solutions for teams ready to ship.",
  email: "instancefy@gmail.com",
  locale: "en_US",
  address: {
    locality: "Mymensingh",
    country: "BD",
    countryName: "Bangladesh",
  },
  logoPath: "/logo-square.png",
  iconPath: "/icon.png",
  wordmarkPath: "/instancefy-text-logo.svg",
  ogImagePath: "/og-image.png",
  services: [
    {
      name: "Software Development",
      description: "Full-stack product engineering for web and platforms.",
    },
    {
      name: "IoT Solutions",
      description: "Connected device systems and fleet telemetry.",
    },
    {
      name: "ML / AI Systems",
      description: "Applied machine learning and intelligence products.",
    },
  ],
  socials: [
    { label: "Github", href: "https://github.com/instancefy" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/instancefy" },
    { label: "Facebook", href: "https://www.facebook.com/instancefy" },
  ],
};

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallbackUrl;
  return raw.replace(/\/$/, "");
}

/** Profile URLs only — skips bare homepage placeholders. */
export function getSameAs() {
  return site.socials
    .map(({ href }) => href)
    .filter((href) => {
      try {
        const { pathname } = new URL(href);
        return pathname !== "/" && pathname !== "";
      } catch {
        return false;
      }
    });
}
