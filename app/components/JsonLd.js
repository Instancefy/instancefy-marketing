import { getSameAs, getSiteUrl, site } from "../../lib/site";

export default function JsonLd() {
  const url = getSiteUrl();
  const sameAs = getSameAs();

  const graph = [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: site.name,
      url,
      email: site.email,
      logo: {
        "@type": "ImageObject",
        url: `${url}${site.logoPath}`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressCountry: site.address.country,
      },
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: site.name,
      url,
      description: site.description,
      publisher: { "@id": `${url}/#organization` },
      inLanguage: "en",
    },
    ...site.services.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${url}/#organization` },
      areaServed: site.address.countryName,
    })),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
