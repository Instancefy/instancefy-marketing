import { getSiteUrl } from "../lib/site";

export default function sitemap() {
  const url = getSiteUrl();

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
