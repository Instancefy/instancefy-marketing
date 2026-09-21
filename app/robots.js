import { getSiteUrl } from "../lib/site";

export const dynamic = "force-static";

export default function robots() {
  const url = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
