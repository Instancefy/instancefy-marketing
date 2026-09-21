import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import Reveal from "./Reveal";
import { SectionIntro, sectionGrid, screenSection } from "./SectionLabel";

const projects = [
  // {
  //   title: ["Enterprise web", "platform"],
  //   tag: "Software",
  //   tagClass: "border-[#db4a90] bg-[#f072cd]",
  //   image: "https://placehold.co/730x636/png?text=Enterprise+web+platform",
  // },
  {
    title: ["Vehicle Tracking", "system"],
    tag: "IoT",
    tagClass: "border-[#1c6ab1] bg-[#5ab5e8]",
    image: "/projects/obosthan-web.webp",
  },
  // {
  //   title: ["Predictive", "analytics suite"],
  //   tag: "ML / AI",
  //   tagClass: "border-[#bb9c2a] bg-[#e5c141]",
  //   image: "https://placehold.co/730x636/png?text=Predictive+analytics+suite",
  // },
  // {
  //   title: ["Ops control", "dashboard"],
  //   tag: "Software",
  //   tagClass: "border-[#4ed543] bg-[#7cf072]",
  //   image: "https://placehold.co/730x636/png?text=Ops+control+dashboard",
  // },
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
          {projects.map(({ title, tag, tagClass, image }, i) => (
            <article
              key={tag + title[0]}
              className={`border-ink hover:shadow-hover group flex flex-col overflow-hidden rounded-md border-[3px] bg-white transition-shadow duration-200 motion-fade-up motion-d${i + 1}`}
            >
              <div className="px-4 pt-4">
                <div className="relative aspect-[365/318] overflow-hidden">
                  <Image
                    src={image}
                    alt={title.join(" ")}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="relative flex items-end justify-between gap-3 px-4 py-4">
                <h3 className="text-ink text-chip font-handlee">
                  {title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <div className="relative shrink-0 pt-5 pl-5">
                  <MousePointer2
                    aria-hidden
                    className="fill-ink text-ink absolute top-0 left-0 size-[22px] transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1"
                    strokeWidth={1.5}
                  />
                  <span
                    className={`shadow-raised inline-flex items-center rounded-[2px_1.5rem_1.5rem_1.5rem] border-2 px-[18px] py-2 font-sans text-micro font-medium text-white ${tagClass}`}
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
