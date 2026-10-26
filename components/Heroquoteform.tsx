"use client";

import { useState, type FormEvent } from "react";
import {
  contactFormHeading,
  emptyContactForm,
  serviceOptions,
  type ContactFormValues,
} from "@/Data/contactEmail";

/* ---------- icons ---------- */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconUser = () => (
  <svg {...iconProps} className="h-4 w-4">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
  </svg>
);
const IconMail = () => (
  <svg {...iconProps} className="h-4 w-4">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
);
const IconPhone = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="M5 4h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6 6l1.5-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
const IconList = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="M9 6h11M9 12h11M9 18h11" />
    <rect x="3" y="4.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
    <rect x="3" y="10.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
    <rect x="3" y="16.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
  </svg>
);
const IconChat = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);
const IconChevron = () => (
  <svg {...iconProps} strokeWidth={2.4} className="h-4 w-4">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const IconArrow = () => (
  <svg {...iconProps} strokeWidth={2.2} className="h-4 w-4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IconShield = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.3 7-9.5V6l-7-3Z" />
    <path d="m8.8 12 2.4 2.4 4.2-4.4" />
  </svg>
);

/* ---------- shared class strings ---------- */

const heroFieldInput =
  "w-full bg-transparent text-[12.5px] text-[#14267a] placeholder:text-[#7f8fc8] outline-none";
const heroFieldWrap =
  "flex items-center gap-2.5 rounded-lg border border-[#dfe6fa] bg-white px-3.5 shadow-[0_2px_6px_rgba(11,94,215,0.05)] transition-all duration-200 focus-within:border-[#0B1A6B] focus-within:ring-4 focus-within:ring-[#0B5ED7]/10";
const heroFieldIcon = "shrink-0 text-[#0b1a6b]";

type HeroFormStatus = "idle" | "loading" | "success" | "error";

export default function HeroQuoteForm() {
  const [formData, setFormData] = useState<ContactFormValues>(emptyContactForm);
  const [formStatus, setFormStatus] = useState<HeroFormStatus>("idle");

  const handleChange =
    (key: keyof ContactFormValues) =>
    (e: { target: { value: string } }) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      if (formStatus !== "idle") setFormStatus("idle");
    };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formStatus === "loading") return;

    const submitted = new FormData(e.currentTarget);
    if (submitted.get("_honey")) return; // bots

    setFormStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }
      
      setFormStatus("success");
      setFormData(emptyContactForm);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  }

  return (
    <div className="w-full rounded-[18px] bg-white px-5 pb-4 pt-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] sm:px-6 lg:max-w-[370px]">
      <div className="flex items-center gap-3">
        <p className="text-[10px] font-semibold tracking-[0.26em] text-[#0B86EE]">
          {contactFormHeading.eyebrow}
        </p>
        <span className="h-px w-10 bg-[#0B86EE]" />
      </div>

      <h3 className="mt-2 text-[19px] font-extrabold leading-[1.15] text-[#0b1a6b] sm:text-[21px]">
        {contactFormHeading.title}
      </h3>
      <p className="mt-1 text-[11.5px] leading-snug text-[#4a5a99]">
        {contactFormHeading.description}
      </p>

      <form onSubmit={handleSubmit} className="mt-3.5 space-y-2">
        <label className={`${heroFieldWrap} h-[40px]`}>
          <span className={heroFieldIcon}>
            <IconUser />
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your Name *"
            className={heroFieldInput}
          />
        </label>

        <label className={`${heroFieldWrap} h-[40px]`}>
          <span className={heroFieldIcon}>
            <IconMail />
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="Your Email *"
            className={heroFieldInput}
          />
        </label>

        <label className={`${heroFieldWrap} h-[40px]`}>
          <span className={heroFieldIcon}>
            <IconPhone />
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange("phone")}
            placeholder="Your Phone *"
            className={heroFieldInput}
          />
        </label>

        <label className={`${heroFieldWrap} relative h-[40px]`}>
          <span className={heroFieldIcon}>
            <IconList />
          </span>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange("service")}
            className={`${heroFieldInput} cursor-pointer appearance-none pr-7 ${
              formData.service ? "" : "text-[#7f8fc8]"
            }`}
          >
            <option value="" disabled>
              Service Interested In *
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 text-[#0b1a6b]">
            <IconChevron />
          </span>
        </label>

        <label className={`${heroFieldWrap} items-start py-2.5`}>
          <span className={`${heroFieldIcon} mt-0.5`}>
            <IconChat />
          </span>
          <textarea
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange("message")}
            placeholder="Tell us about your project..."
            className={`${heroFieldInput} resize-none`}
          />
        </label>

        {/* honeypot */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

        <button
          type="submit"
          disabled={formStatus === "loading"}
          className="group flex h-[40px] w-full items-center justify-center gap-2 rounded-full bg-[#0B1A6B] text-[13px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(11,94,215,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0d2190] disabled:opacity-70"
        >
          {formStatus === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              {contactFormHeading.button}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <IconArrow />
              </span>
            </>
          )}
        </button>

        <p
          role="status"
          className={`min-h-3 text-center text-[11.5px] font-medium ${
            formStatus === "success" ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {formStatus === "success" && contactFormHeading.successMessage}
          {formStatus === "error" && contactFormHeading.errorMessage}
        </p>

        <p className="flex items-center justify-center gap-1.5 text-[10px] text-[#7f8fc8]">
          <span className="text-[#0b1a6b]">
            <IconShield />
          </span>
          {contactFormHeading.privacy}
        </p>
      </form>
    </div>
  );
}