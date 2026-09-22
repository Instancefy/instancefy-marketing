"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Reveal from "./Reveal";
import {
  SectionIntro,
  StickyLabel,
  ctaButton,
  sectionGrid,
  screenSection,
} from "./SectionLabel";

const WEB3FORMS_ACCESS_KEY = "60dc7215-6793-40e0-89c2-d28da82e0800";
const TOAST_MS = 4000;

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
    id: "message",
    label: "About Project",
    type: "text",
    placeholder: "Tell us about your product or challenge",
    autoComplete: "off",
    tone: "sky",
    focus: "focus:border-sky-edge",
  },
];

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const id = window.setTimeout(() => setToast(null), TOAST_MS);
    return () => window.clearTimeout(id);
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Instancefy Contact Form",
          subject: `New message from ${formData.name}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== false) {
        setFormData(emptyForm);
        setToast({
          type: "success",
          message: "Message sent. We'll get back to you soon.",
        });
      } else {
        setToast({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="flex w-full flex-col gap-10" onSubmit={handleSubmit}>
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
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  required
                  disabled={isSubmitting}
                  className={`border-ink text-ink text-xl placeholder:text-ink-muted -ml-2 min-w-0 flex-1 border-0 border-b-2 bg-transparent pb-1 pl-4 font-handlee leading-none outline-none transition-colors duration-200 focus:outline-none focus-visible:outline-none disabled:opacity-60 ${focus}`}
                />
              </div>
            ),
          )}

          <div className="motion-fade-up motion-d4 mt-2 ml-auto">
            <Button
              type="submit"
              className={ctaButton}
              isDisabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </Reveal>

      {toast ? (
        <div
          role={toast.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 transition-opacity duration-200 ${
            toast.type === "error" ? "bg-transparent" : ""
          }`}
        >
          <p
            className={`text-chip font-handlee pointer-events-auto max-w-md rounded-none px-4 py-2.5 text-center text-white shadow-raised ${
              toast.type === "error" ? "bg-[#b12a2a]" : "bg-ink"
            }`}
          >
            {toast.message}
          </p>
        </div>
      ) : null}
    </section>
  );
}
