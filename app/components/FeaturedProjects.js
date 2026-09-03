import {
  Code2,
  Cpu,
  Brain,
  LayoutDashboard,
  MousePointer2,
} from "lucide-react";
import Reveal from "./Reveal";
import { SectionIntro, sectionGrid, screenSection } from "./SectionLabel";

const projects = [
  {
    title: ["Enterprise web", "platform"],
    tag: "Software",
    tagClass: "border-sky-edge bg-sky",
    previewClass: "bg-linear-to-br from-sky to-sky-edge",
    Icon: Code2,
  },
  {
    title: ["Fleet telemetry", "system"],
    tag: "IoT",
    tagClass: "border-blossom-edge bg-blossom",
    previewClass: "bg-linear-to-br from-blossom to-blossom-edge",
    Icon: Cpu,
  },
  {
    title: ["Predictive", "analytics suite"],
    tag: "ML / AI",
    tagClass: "border-sun-edge bg-sun",
    previewClass: "bg-linear-to-br from-sun to-sun-edge",
    Icon: Brain,
  },
  {
    title: ["Ops control", "dashboard"],
    tag: "Software",
    tagClass: "border-sky-edge bg-sky",
    previewClass: "bg-linear-to-br from-blossom to-sky",
    Icon: LayoutDashboard,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className={`${sectionGrid} scroll-mt-24 md:content-center ${screenSection}`}
    >
      <Reveal>
        <SectionIntro
          title="Featured Work"
          caption="Products across software, IoT, and ML/AI"
        />
      </Reveal>

      <Reveal className="min-w-0 w-full">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map(({ title, tag, tagClass, previewClass, Icon }, i) => (
            <article
              key={tag + title[0]}
              className={`border-ink hover:shadow-hover group flex flex-col overflow-hidden rounded-md border-[3px] bg-white transition-shadow duration-200 motion-fade-up motion-d${i + 1}`}
            >
              <div
                className={`relative flex aspect-[365/318] items-center justify-center ${previewClass}`}
              >
                <Icon
                  aria-hidden
                  strokeWidth={1.25}
                  className="text-ink/50 size-16 transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="relative flex items-end justify-between gap-3 px-4 py-4">
                <h3 className="text-ink text-chip font-handlee">
                  {title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <div className="relative shrink-0 pb-0.5">
                  <MousePointer2
                    aria-hidden
                    className="fill-ink text-ink absolute -top-3 -left-3 size-5 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-1"
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-ink shadow-raised inline-flex rounded-md border-2 px-4 py-2 font-sans text-micro font-medium ${tagClass}`}
                  >
                    {tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
