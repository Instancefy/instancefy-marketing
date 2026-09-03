/** Figma doodle arrow — same asset as hero (`/hero/arrow.svg`). */
export default function SectionArrow({ rotate = "-139deg", className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none flex h-[85px] w-[88px] shrink-0 items-center justify-center ${className}`}
    >
      <div className="flex-none" style={{ transform: `rotate(${rotate})` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/arrow.svg"
          alt=""
          className="h-[45px] w-[78px] max-w-none select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
