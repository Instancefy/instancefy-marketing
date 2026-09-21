"use client";

import { Button } from "@heroui/react";
import { Brain, Code2, Cpu } from "lucide-react";
import Image from "next/image";
import { StickyLabel, ctaButton } from "./SectionLabel";

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-start gap-12 md:gap-16">
      {/* Brand mark → arrow → sticky */}
      <div className="relative flex w-full max-w-[460px] items-center">
        <div className="flex -rotate-[5deg] items-center gap-2 sm:gap-4">
          <div className="border-sun-edge bg-sun shadow-card motion-settle motion-d1 relative flex h-[79px] w-[84px] shrink-0 items-center justify-center rounded-lg border-[3px] sm:h-[106px] sm:w-[113px]">
            <Image
              src="/instancefy-logo.png"
              alt="Instancefy"
              width={78}
              height={56}
              priority
              className="h-10 w-auto object-contain sm:h-14"
            />

            <span
              aria-hidden
              className="border-sky-edge bg-sky motion-chip motion-d3 absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-md border-2 sm:size-9"
            >
              <Code2 className="text-ink size-3.5 sm:size-4" strokeWidth={2} />
            </span>
            <span
              aria-hidden
              className="border-blossom-edge bg-blossom motion-chip motion-d4 absolute -bottom-2 -left-3 flex size-7 items-center justify-center rounded-md border-2 sm:size-8"
            >
              <Cpu className="text-ink size-3 sm:size-3.5" strokeWidth={2} />
            </span>
            <span
              aria-hidden
              className="border-sun-edge motion-chip motion-d5 absolute -right-2 bottom-2 flex size-6 items-center justify-center rounded-md border-2 bg-white sm:size-7"
            >
              <Brain className="text-ink size-3 sm:size-3.5" strokeWidth={2} />
            </span>
          </div>

          <div
            aria-hidden
            className="motion-fade-in motion-d4 flex h-[30px] w-[52px] shrink-0 items-center justify-center -rotate-[12deg] sm:h-[45px] sm:w-[78px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/arrow.svg"
              alt=""
              className="motion-sway h-[30px] w-[52px] max-w-none sm:h-[45px] sm:w-[78px]"
            />
          </div>

          {/*
            `shrink-0` keeps the note from being squeezed narrower than
            "Technologies", which has no break opportunity and would spill
            past its own background.
          */}
          <StickyLabel
            as="span"
            className="motion-pop motion-d6 max-sm:text-chip shrink-0 whitespace-nowrap"
          >
            Technologies
          </StickyLabel>
        </div>
      </div>

      {/* Headline + copy / CTA */}
      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
        <h1 className="text-ink text-display max-w-[18ch] shrink-0 font-sans font-semibold">
          <span className="motion-fade-up motion-d5 block">
            We{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="bg-blossom motion-wipe motion-d7 absolute inset-x-0 bottom-[0.12em] -z-0 h-[0.34em] origin-left"
              />
              <span className="relative">build</span>
            </span>{" "}
            software
          </span>
          <span className="motion-fade-up motion-d6 block">that works</span>
        </h1>

        <div className="flex w-full max-w-[477px] flex-col items-start gap-8">
          <p className="text-ink text-lead motion-fade-up motion-d8 font-sans">
            Instancefy Technologies build software, IoT, and AI solutions for
            people and businesses.
          </p>
          <div className="motion-fade-up motion-d9">
            <Button
              className={ctaButton}
              onPress={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
            >
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
