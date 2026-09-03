import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
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
          className="inline-flex shrink-0 no-underline"
        >
          <Image
            src={site.wordmarkPath}
            alt={site.shortName}
            width={144}
            height={32}
            className="h-8 w-auto brightness-0"
          />
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

      <div className="motion-fade-up motion-d2 flex flex-col items-end gap-8 max-md:w-full max-md:items-start">
        <nav
          className="flex flex-wrap items-center justify-end gap-x-8 gap-y-3 max-md:justify-start"
          aria-label="Social"
        >
          {site.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-chip font-handlee bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_2px] bg-[position:center_100%] bg-no-repeat no-underline transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-ink text-chip font-handlee">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </Reveal>
  );
}
