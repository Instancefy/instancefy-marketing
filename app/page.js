import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import FeaturedProjects from "./components/FeaturedProjects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const gridBg =
  "bg-[radial-gradient(circle_at_bottom_left,rgb(0_0_0_/_0.3)_0.7px,rgb(0_0_0_/_0.12)_1px,transparent_1.4px)] bg-size-[12px_12px] bg-bottom-left bg-repeat";

export default function Home() {
  return (
    <main className="relative min-h-full flex-1 overflow-x-clip bg-white">
      {/* Vertical line — left edge of centered column */}
      <div
        aria-hidden
        className="bg-ink pointer-events-none absolute inset-y-0 left-[max(0px,calc(50%-600px))] z-[2] w-[3px] origin-top max-md:left-[max(0px,calc(50%-250px))] motion-rail"
      />

      {/* Dot grid — only inside centered column */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-[max(0px,calc(50%-600px))] z-0 w-[min(1200px,100%)] max-md:left-[max(0px,calc(50%-250px))] max-md:w-[min(500px,100%)] motion-grid ${gridBg}`}
      />

      {/* Centered content */}
      <div className="relative z-[1] mx-auto w-full max-w-[1200px] pr-5 pl-10 max-md:max-w-[500px] sm:pr-6 sm:pl-12">
        {/* First viewport: nav on top, hero centered in remaining height */}
        <div className="flex min-h-dvh w-full flex-col pt-10 md:pt-12">
          <Navbar />
          <div className="flex flex-1 flex-col justify-center py-10 md:py-12">
            <Hero />
          </div>
        </div>

        <div className="flex w-full flex-col gap-40 pb-24 md:gap-0 md:pb-0">
          <WhatIDo />
          <FeaturedProjects />
          <WorkExperience />
          <Contact />
        </div>
      </div>

      {/* Full-bleed footer rule — crosses vertical line */}
      <div aria-hidden className="bg-ink relative z-[2] h-[3px] w-full" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] pt-16 pr-5 pb-12 pl-10 max-md:max-w-[500px] sm:pr-6 sm:pl-12 md:pt-20 md:pb-16">
        <Footer />
      </div>
    </main>
  );
}
