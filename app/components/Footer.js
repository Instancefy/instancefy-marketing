import Link from "next/link";
import Reveal from "./Reveal";
import Wordmark from "./Wordmark";
import { site } from "../../lib/site";

export default function Footer() {
  return (
    <Reveal
      as="footer"
      className="flex w-full flex-wrap items-start justify-between gap-10"
    >
      <div className="motion-fade-up flex flex-col gap-2">
        <Link
          href="/"
          aria-label={`${site.shortName} home`}
          className="text-ink inline-flex shrink-0 no-underline"
        >
          <Wordmark className="h-8 w-auto" />
        </Link>
        <div className="flex flex-col gap-0.5">
          <p className="text-ink-muted text-micro font-sans">{site.name}</p>
          <p className="text-ink-muted text-micro font-sans">
            {site.address.locality}, {site.address.countryName}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-ink-muted text-micro font-sans no-underline transition-opacity duration-200 hover:opacity-70"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="motion-fade-up motion-d2 flex flex-col items-end gap-5 max-md:w-full max-md:items-start">
        <nav
          className="flex flex-wrap items-center justify-end gap-6 max-md:justify-start"
          aria-label="Social"
        >
          {site.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-chip font-handlee rounded-none px-1 py-1.5 text-white no-underline transition-opacity duration-200 hover:opacity-80"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-ink text-micro font-sans">
          Copyright. {site.name} {new Date().getFullYear()}
        </p>
      </div>
    </Reveal>
  );
}
