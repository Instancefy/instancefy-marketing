"use client";

import { Button } from "@heroui/react";
import Reveal from "./Reveal";
import {
  SectionIntro,
  StickyLabel,
  ctaButton,
  sectionGrid,
  screenSection,
} from "./SectionLabel";

const fields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Alex Morgan",
    autoComplete: "name",
    tone: "blossom",
    focus: "focus:border-blossom-edge",
  },
  {
    id: "email",
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    autoComplete: "email",
    tone: "sun",
    focus: "focus:border-sun-edge",
  },
  {
    id: "project",
    label: "About Project",
    type: "text",
    placeholder: "Tell us about your product or challenge",
    autoComplete: "off",
    tone: "sky",
    focus: "focus:border-sky-edge",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionGrid} scroll-mt-24 md:content-center ${screenSection}`}
    >
      <Reveal>
        <SectionIntro
          title="Contact us"
          caption="Have a project in mind? Let's talk."
        />
      </Reveal>

      <Reveal className="min-w-0 w-full">
        <form
          className="flex w-full flex-col gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {fields.map(
            (
              { id, label, type, placeholder, autoComplete, tone, focus },
              i,
            ) => (
              <div
                key={id}
                className={`group flex w-full items-end motion-fade-up motion-d${i + 1}`}
              >
                <StickyLabel
                  as="label"
                  size="chip"
                  tone={tone}
                  htmlFor={id}
                  className="relative z-[1] shrink-0 leading-none transition-transform duration-200 group-focus-within:-translate-y-0.5"
                >
                  {label}
                </StickyLabel>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  className={`border-ink text-ink text-xl placeholder:text-ink-muted -ml-2 min-w-0 flex-1 border-0 border-b-2 bg-transparent pb-1 pl-4 font-handlee leading-none outline-none transition-colors duration-200 focus:outline-none focus-visible:outline-none ${focus}`}
                />
              </div>
            ),
          )}

          <div className="motion-fade-up motion-d4 mt-2 ml-auto">
            <Button type="submit" className={ctaButton}>
              Send message
            </Button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
