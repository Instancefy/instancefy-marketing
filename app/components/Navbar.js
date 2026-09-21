import Link from "next/link";
import Wordmark from "./Wordmark";
import { site } from "../../lib/site";

/** `mobile: false` links are dropped below `sm` so the bar never wraps. */
const links = [
  { label: "Services", href: "#services", mobile: false },
  { label: "Work", href: "#work", mobile: true },
  { label: "Process", href: "#process", mobile: false },
  { label: "Contact", href: "#contact", mobile: true, highlight: true },
];

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between gap-6 sm:gap-10">
      <Link
        href="/"
        aria-label={`${site.shortName} home`}
        className="motion-fade-up text-ink inline-flex shrink-0 no-underline"
      >
        <Wordmark className="h-9 w-auto" />
      </Link>

      <nav
        className="flex shrink-0 items-center gap-4 sm:gap-7 md:gap-8"
        aria-label="Primary"
      >
        {links.map(({ label, href, mobile, highlight }, i) => (
          <Link
            key={href}
            href={href}
            className={`text-ink text-nav font-sans whitespace-nowrap no-underline motion-d${i + 1} ${
              mobile ? "" : "max-sm:hidden"
            } ${
              highlight
                ? `bg-[linear-gradient(var(--color-blossom),var(--color-blossom))] bg-[length:100%_8px] bg-[position:center_85%] bg-no-repeat motion-nav-mark`
                : "motion-fade-up bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0_2px] bg-[position:center_100%] transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
