import { Code2, Cpu, Brain } from "lucide-react";
import Reveal from "./Reveal";
import { SectionIntro, StickyLabel, screenSection } from "./SectionLabel";

const services = [
  {
    title: ["Software", "Development"],
    tag: "Full-stack",
    tagTone: "sky",
    cardClass: "bg-sun border-sun-edge -rotate-4",
    Icon: Code2,
  },
  {
    title: ["IoT", "Solutions"],
    tag: "Connected",
    tagTone: "blossom",
    cardClass: "bg-sky border-sky-edge rotate-5",
    Icon: Cpu,
  },
  {
    title: ["ML / AI", "Systems"],
    tag: "Intelligence",
    tagTone: "sun",
    cardClass: "bg-blossom border-blossom-edge -rotate-5",
    Icon: Brain,
  },
];

export default function WhatIDo() {
  return (
    <section
      id="services"
      className={`relative flex w-full scroll-mt-24 flex-col justify-center gap-12 ${screenSection}`}
    >
      <Reveal>
        <SectionIntro
          title="What we do"
          caption="Three practices, one delivery team"
          arrowRotate="-95deg"
        />
      </Reveal>

      <Reveal className="w-full">
        <div className="grid w-full grid-cols-1 items-stretch gap-12 md:grid-cols-3 md:gap-6">
          {services.map(({ title, tag, tagTone, cardClass, Icon }, i) => (
            <article
              key={tag}
              className={`relative w-full motion-fade-up motion-d${i + 1}`}
            >
              <div
                className={`shadow-card flex h-full min-h-[300px] flex-col justify-center gap-8 rounded-lg border-[3px] px-8 py-10 transition-[translate,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-hover md:min-h-[360px] ${cardClass}`}
              >
                <Icon
                  aria-hidden
                  strokeWidth={1.75}
                  className="text-ink size-11 shrink-0"
                />
                <h3 className="text-ink text-title font-sans font-medium">
                  {title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>

              <StickyLabel
                as="span"
                size="chip"
                tone={tagTone}
                className={`absolute -top-3 right-4 motion-pop motion-d${i + 3}`}
              >
                {tag}
              </StickyLabel>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
