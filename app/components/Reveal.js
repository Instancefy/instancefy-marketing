"use client";

import { useEffect, useRef, useState } from "react";

function inViewport(node) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

/**
 * Plays a staggered enter animation once the element scrolls into view.
 *
 * Children stay hidden only while `data-armed` is set, which happens from
 * this effect — so if the client script never runs, the content renders
 * plainly instead of disappearing.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (inViewport(node)) {
      setState("in");
      return;
    }

    setState("armed");

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setState("in");
    };

    let observerFired = false;
    const io = new IntersectionObserver(
      (entries) => {
        observerFired = true;
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);

    /* If the observer never reports at all, show the content anyway. */
    const fallback = setTimeout(() => {
      if (!observerFired) reveal();
    }, 1200);

    return () => {
      done = true;
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
      data-armed={state === "idle" ? undefined : "true"}
      data-in={state === "in" ? "true" : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
