import SectionArrow from "./SectionArrow";

const tones = {
  blossom: "bg-blossom",
  sun: "bg-sun",
  sky: "bg-sky",
};

const sizes = {
  /** Section headings. */
  label: "text-label px-2 py-0.5",
  /** Card tags and form labels — one step down from a section heading. */
  chip: "text-chip px-1.5 py-0.5",
};

/** Shared Handlee sticky label used for headings, tags and form labels. */
export function StickyLabel({
  children,
  as: Tag = "h2",
  size = "label",
  tone = "blossom",
  className = "",
  ...props
}) {
  return (
    <Tag
      {...props}
      className={`text-ink shadow-sticky w-fit font-handlee ${sizes[size]} ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Left-column intro: sticky heading + doodle arrow + caption. */
export function SectionIntro({
  title,
  caption,
  arrowRotate,
  className = "",
}) {
  return (
    <div
      className={`relative flex flex-col items-start gap-5 md:max-w-[253px] md:pt-1 ${className}`}
    >
      <StickyLabel className="motion-pop">{title}</StickyLabel>
      <SectionArrow
        rotate={arrowRotate}
        className="motion-fade-in motion-d2 ml-4 md:ml-6"
      />
      {caption ? (
        <p className="text-ink text-lead motion-fade-up motion-d3 max-w-[253px] font-sans">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

/** Shared two-column section shell (label | content). */
export const sectionGrid =
  "grid w-full grid-cols-1 items-start gap-12 md:grid-cols-[minmax(200px,248px)_minmax(0,1fr)] md:gap-12";

/**
 * One section per screen from `md` up. Height is a minimum so content
 * taller than the viewport grows instead of being clipped, and the anchor
 * offset is cleared so a jump lands flush with the top edge.
 */
export const screenSection = "md:min-h-dvh md:scroll-mt-0 md:py-20";

/** Shared primary call-to-action, used by the hero and the contact form. */
export const ctaButton =
  "border-ink bg-ink shadow-raised hover:shadow-hover hover:-translate-y-0.5 active:translate-y-px h-14 rounded-md border-2 px-8 font-sans text-lead font-medium text-white transition-[box-shadow,translate] duration-200 sm:h-16 sm:px-10";
