import Reveal from "./Reveal";
import { SectionIntro, sectionGrid, screenSection } from "./SectionLabel";

const steps = [
  {
    n: "1",
    role: "Define the ",
    highlight: "engagement",
    detail:
      "Every project starts with a 50% advance and a clear, agreed scope — objectives, deliverables, and milestones locked in before we build.",
    note: "Aligned before we build",
    badgeClass: "bg-sun border-sun-edge",
  },
  {
    n: "2",
    role: "Validate the ",
    highlight: "midway release",
    detail:
      "At the halfway mark, you get a working build to review against the agreed outcomes.",
    note: "Evidence over promises",
    badgeClass: "bg-sky border-sky-edge",
  },
  {
    n: "3",
    role: "Authorize the ",
    highlight: "final phase",
    detail:
      "Happy with the midway release? We finish against the balance. If not, we refund the 50% advance — no further obligation.",
    note: "Continue only when you’re ready",
    badgeClass: "bg-blossom border-blossom-edge",
  },
];

export default function WorkExperience() {
  return (
    <section
      id="process"
      className={`${sectionGrid} scroll-mt-24 md:content-center ${screenSection}`}
    >
      <Reveal>
        <SectionIntro
          title="How we work"
          caption="Structured delivery with accountability at every stage"
        />
      </Reveal>

      {/*
        The drawn frame bleeds symmetrically past its own padding, so the
        rules sit the same distance outside the content on all four sides.
      */}
      <Reveal className="min-w-0 w-full">
        <div className="relative w-full px-8 py-8 sm:px-10 sm:py-10">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-ink motion-draw-x absolute top-0 -right-6 -left-6 h-[2px] origin-left" />
            <div className="bg-ink motion-draw-y motion-d2 absolute -top-6 -bottom-6 right-0 w-[2px] origin-top" />
            <div className="bg-ink motion-draw-x motion-d3 absolute bottom-0 -right-6 -left-6 h-[2px] origin-right" />
            <div className="bg-ink motion-draw-y motion-d4 absolute -top-6 -bottom-6 left-0 w-[2px] origin-bottom" />
          </div>

          <ul className="flex flex-col gap-10">
            {steps.map(
              ({ n, role, highlight, detail, note, badgeClass }, i) => (
                <li
                  key={n}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div
                    className={`flex h-[72px] w-[78px] shrink-0 items-center justify-center rounded-md border-2 sm:h-[88px] sm:w-[95px] motion-pop motion-d${5 + i * 2} ${badgeClass}`}
                  >
                    <span className="text-ink text-numeral font-handlee">
                      {n}
                    </span>
                  </div>

                  <div
                    className={`flex min-w-0 flex-col gap-1.5 motion-fade-up motion-d${6 + i * 2}`}
                  >
                    <h3 className="text-ink text-lead font-sans">
                      {role}
                      <span className="font-bold">{highlight}</span>
                    </h3>
                    <p className="text-ink text-body font-sans">{detail}</p>
                    <p className="text-ink-muted text-micro font-sans font-medium">
                      {note}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
