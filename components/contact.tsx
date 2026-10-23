"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import {
  buildContactEmailPayload,
  contactFeatures,
  contactFormHeading,
  contactHeading,
  contactInfo,
  emptyContactForm,
  serviceOptions,
  type ContactFormValues,
  type FeatureIcon,
} from "@/Data/contactEmail";

const script = Great_Vibes({ subsets: ["latin"], weight: "400" });

// Same pattern as the footer: FormSubmit + an env variable.
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
  process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL ??
  "";

/* ---------- scroll reveal ---------- */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const reveal = (on: boolean, delay = 0) => ({
  className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
    on ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`,
  style: { transitionDelay: `${delay}ms` },
});

/* ---------- icons ---------- */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const UserIcon = () => (
  <svg {...base} className="h-5 w-5">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
  </svg>
);
const MailIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
);
const PhoneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...base} className={className}>
    <path d="M5 4h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6 6l1.5-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
const ListIcon = () => (
  <svg {...base} className="h-5 w-5">
    <path d="M9 6h11M9 12h11M9 18h11" />
    <rect x="3" y="4.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
    <rect x="3" y="10.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
    <rect x="3" y="16.5" width="3" height="3" rx=".6" fill="currentColor" stroke="none" />
  </svg>
);
const ChatIcon = () => (
  <svg {...base} className="h-5 w-5">
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);
const ChevronDown = () => (
  <svg {...base} strokeWidth={2.4} className="h-4 w-4">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ArrowRight = () => (
  <svg {...base} strokeWidth={2.2} className="h-5 w-5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ShieldCheck = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg {...base} className={className}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.3 7-9.5V6l-7-3Z" />
    <path d="m8.8 12 2.4 2.4 4.2-4.4" />
  </svg>
);
const HomeIcon = () => (
  <svg {...base} strokeWidth={1.4} className="h-9 w-9">
    <path d="M3.5 11 12 3.5 20.5 11" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5h4v5" />
    <path d="M17 6V4" />
  </svg>
);

const featureIcons: Record<FeatureIcon, ReactNode> = {
  diamond: (
    <svg {...base} className="h-5 w-5">
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20M12 21 8 9l3-6M12 21l4-12-3-6" />
    </svg>
  ),
  hardhat: (
    <svg {...base} className="h-5 w-5">
      <path d="M3 17h18M5 17a7 7 0 0 1 14 0" />
      <path d="M12 6v5M9 10V8M15 10V8M4 20h16" />
    </svg>
  ),
  palette: (
    <svg {...base} className="h-5 w-5">
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.5-2.2-.6-1.4.4-2.8 1.9-2.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.3 7-9.5V6l-7-3Z"
        fill="currentColor"
      />
      <path
        d="m8.8 12 2.4 2.4 4.2-4.4"
        stroke="#fff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ---------- field wrapper ---------- */

const fieldBase =
  "w-full bg-transparent text-[14px] text-[#14267a] placeholder:text-[#7f8fc8] focus:outline-none";
const fieldShell =
  "flex items-center gap-4 rounded-[10px] border border-[#dfe6fa] bg-white px-5 shadow-[0_2px_8px_rgba(11,94,215,0.04)] transition focus-within:border-[#0B1A6B] focus-within:shadow-[0_0_0_4px_rgba(11,94,215,0.10)]";

/* ---------- section ---------- */

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [status, setStatus] = useState<Status>("idle");

  const left = useInView<HTMLDivElement>(0.1);
  const right = useInView<HTMLDivElement>(0.1);

  const set =
    (key: keyof ContactFormValues) =>
    (e: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (status !== "idle") setStatus("idle");
    };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = new FormData(e.currentTarget);
    if (form.get("_honey")) return; // bots

    if (!CONTACT_EMAIL) {
      console.error("Missing NEXT_PUBLIC_CONTACT_EMAIL in .env.local");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(buildContactEmailPayload(values)),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(emptyContactForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:pb-44" id="contact">
      <div className="relative z-10 mx-auto grid max-w-[1240px] items-start gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div ref={left.ref} className="lg:pl-4">
          <div
            style={reveal(left.inView, 0).style}
            className={`flex items-center gap-4 ${reveal(left.inView).className}`}
          >
            <p className="text-[12px] font-semibold tracking-[0.3em] text-[#0B1A6B]">
              {contactHeading.eyebrow}
            </p>
            <span
              className={`h-px bg-[#0B86EE] transition-all duration-1000 ${
                left.inView ? "w-20" : "w-0"
              }`}
            />
          </div>

          <h2
            style={reveal(left.inView, 120).style}
            className={`mt-6 text-[44px] font-extrabold leading-[1.08] tracking-tight text-[#0B1F4B] md:text-[54px] ${
              reveal(left.inView).className
            }`}
          >
            {contactHeading.titleDark}
            <br />
            <span className="text-[#0B86EE]">{contactHeading.titleAccent}</span>
          </h2>

          <p
            // eslint-disable-next-line react-hooks/refs
            style={reveal(left.inView, 240).style}
            // eslint-disable-next-line react-hooks/refs
            className={`mt-7 max-w-[440px] text-[15.5px] leading-[1.75] text-[#4a5a99] ${
              // eslint-disable-next-line react-hooks/refs
              reveal(left.inView).className
            }`}
          >
            {contactHeading.description}
          </p>



          {/* signature */}
          <div
            // eslint-disable-next-line react-hooks/refs
            style={reveal(left.inView, 800).style}
            // eslint-disable-next-line react-hooks/refs
            className={`mt-12 flex flex-wrap items-end gap-x-3 ${reveal(left.inView).className}`}
          >
            <div>
              <span className={`${script.className} block text-[38px] leading-none text-[#0b1a6b]`}>
                {contactHeading.signatureScript}
              </span>
              <span className="mt-3 block h-px w-20 bg-[#0B86EE]" />
            </div>
            <div>
              <span className="block text-[16px] text-[#0B86EE]">
                {contactHeading.signatureText}
              </span>
              <span className="mt-2 block h-px w-20 bg-[#0B86EE]" />
            </div>
          </div>

          {/* call / email */}
          <div
            // eslint-disable-next-line react-hooks/refs
            style={reveal(left.inView, 900).style}
            className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 ${
              // eslint-disable-next-line react-hooks/refs
              reveal(left.inView).className
            }`}
          >
            <a href={contactInfo.phoneHref} className="group flex items-center gap-4">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#0B86EE] text-white transition group-hover:scale-105">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[12px] font-semibold text-[#0b1a6b]">
                  Need Help? Call Us
                </span>
                <span className="block text-[20px] font-bold text-[#0B86EE]">
                  {contactInfo.phone}
                </span>
              </span>
            </a>

            <span className="hidden h-10 w-px bg-[#dfe6fa] sm:block" />

            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-3"
            >
              <MailIcon className="h-6 w-6 text-[#0B86EE]" />
              <span>
                <span className="block text-[12px] font-semibold text-[#0b1a6b]">
                  Or Email Us
                </span>
                <span className="block text-[12.5px] text-[#4a5a99] transition group-hover:text-[#0B86EE]">
                  {contactInfo.email}
                </span>
              </span>
            </a>
          </div>
        </div>

        <div
          // eslint-disable-next-line react-hooks/refs
          ref={right.ref}
          // eslint-disable-next-line react-hooks/refs
          style={reveal(right.inView, 150).style}
          // eslint-disable-next-line react-hooks/refs
          className={`relative lg:mt-10 ${reveal(right.inView).className}`}
        >
          <div className="relative rounded-[22px] bg-white px-7 pb-8 pt-10 shadow-[0_30px_80px_-20px_rgba(11,94,215,0.28),0_6px_20px_rgba(11,94,215,0.06)] sm:px-10">
            <div className="flex items-center gap-4">
              <p className="text-[11.5px] font-semibold tracking-[0.3em] text-[#0B86EE]">
                {contactFormHeading.eyebrow}
              </p>
              <span className="h-px w-16 bg-[#0B86EE]" />
            </div>

            <h3 className="mt-5 max-w-[340px] text-[30px] font-extrabold leading-[1.15] text-[#0b1a6b]">
              {contactFormHeading.title}
            </h3>
            <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-[#4a5a99]">
              {contactFormHeading.description}
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <label className={`${fieldShell} h-[52px]`}>
                <span className="text-[#0b1a6b]">
                  <UserIcon />
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={set("name")}
                  placeholder="Your Name *"
                  className={fieldBase}
                />
              </label>

              <label className={`${fieldShell} h-[52px]`}>
                <span className="text-[#0b1a6b]">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={set("email")}
                  placeholder="Your Email *"
                  className={fieldBase}
                />
              </label>

              <label className={`${fieldShell} h-[52px]`}>
                <span className="text-[#0b1a6b]">
                  <PhoneIcon />
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  value={values.phone}
                  onChange={set("phone")}
                  className={fieldBase}
                />
              </label>

              <label className={`${fieldShell} relative h-[52px]`}>
                <span className="text-[#0b1a6b]">
                  <ListIcon />
                </span>
                <select
                  name="service"
                  required
                  value={values.service}
                  onChange={set("service")}
                  className={`${fieldBase} cursor-pointer appearance-none pr-8 ${
                    values.service ? "" : "text-[#7f8fc8]"
                  }`}
                >
                  <option value="" disabled>
                    Service Interested In *
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 text-[#0b1a6b]">
                  <ChevronDown />
                </span>
              </label>

              <label className={`${fieldShell} items-start py-4`}>
                <span className="mt-0.5 text-[#0b1a6b]">
                  <ChatIcon />
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project..."
                  className={`${fieldBase} resize-none`}
                />
              </label>

              {/* honeypot */}
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#0B1A6B] text-[14.5px] font-semibold text-white shadow-[0_14px_30px_-8px_rgba(11,94,215,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(11,94,215,0.7)] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    {contactFormHeading.button}
                    <span className="transition-transform group-hover:translate-x-1">
                      <ArrowRight />
                    </span>
                  </>
                )}
              </button>

              <p
                role="status"
                className={`min-h-5 text-center text-[13px] font-medium ${
                  status === "success" ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {status === "success" && contactFormHeading.successMessage}
                {status === "error" && contactFormHeading.errorMessage}
              </p>

              <p className="flex items-center justify-center gap-2 text-[11.5px] text-[#7f8fc8]">
                <ShieldCheck className="h-4 w-4 text-[#0b1a6b]" />
                {contactFormHeading.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}