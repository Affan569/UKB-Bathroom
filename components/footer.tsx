"use client";

import { useState, useEffect, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { inter } from "./fonts";

const NEWSLETTER_EMAIL = process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL ?? "";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/#process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];


const USEFUL_LINKS = [
  { label: "FAQs", href: "#faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ChevronRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg {...svgBase} strokeWidth={2} className={className}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

const ArrowRight = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgBase} strokeWidth={2} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const MailIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.300 7-9.500V6l-7-3Z" />
    <path d="m8.800 12 2.400 2.400 4.200-4.400" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="m12 3.500 2.600 5.300 5.800.8-4.200 4.100 1 5.800-5.200-2.700-5.200 2.700 1-5.800-4.200-4.100 5.800-.8L12 3.500Z" />
  </svg>
);

const ToolsIcon = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="m4 20 8.500-8.500M12.500 11.500 17 7M15 4a4 4 0 0 0-1 4.500l-1.500 1.500 2 2 1.500-1.500A4 4 0 0 0 20 9l-2.500 1-1.500-1.500L17 6l-2-2Z" />
    <path d="M20 20 11.500 11.500M7 7 4 4l1-1 3 3M8 6 6 8" />
  </svg>
);

const DiamondIcon = ({ className }: { className?: string }) => (
  <svg {...svgBase} className={className}>
    <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
    <path d="M2 9h20M12 21 8 9l3-6M12 21l4-12-3-6" />
  </svg>
);

const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M13.500 21v-7.500h2.600l.4-3h-3V8.600c0-.9.300-1.500 1.600-1.500h1.500V4.400c-.3 0-1.200-.1-2.200-.1-2.300 0-3.900 1.400-3.900 4v2.200H8v3h2.500V21h3Z" />
  </svg>
);

const Instagram = () => (
  <svg {...svgBase} strokeWidth={1.8} className="h-4 w-4">
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.200" cy="6.800" r=".6" fill="currentColor" />
  </svg>
);

const Youtube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3L10 15Z" />
  </svg>
);


const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  { label: "Facebook", href: "#", icon: <Facebook /> },
  { label: "Instagram", href: "#", icon: <Instagram /> },
  { label: "YouTube", href: "#", icon: <Youtube /> },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="xl:col-span-2">
      <h3 className="text-xs font-bold uppercase tracking-widest text-white">
        {title}
      </h3>
      <span className="mt-2.5 mb-5 block h-0.5 w-8 bg-[#1E9BF0]" />
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-5 text-sm text-white/85 transition-colors hover:text-[#2F9BF5]"
            >
              {l.label}
              <ChevronRight className="h-3.5 w-3.5 text-[#1E9BF0] transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = new FormData(e.currentTarget);
    if (form.get("_honey")) return;

    if (!NEWSLETTER_EMAIL) {
      console.error("Missing NEXT_PUBLIC_NEWSLETTER_EMAIL in .env.local");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(NEWSLETTER_EMAIL)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            email,
            _subject: "New newsletter subscriber",
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="flex items-center gap-2.5 rounded-full border border-[#1E4F9A] bg-[#04203f]/70 py-1 pl-4 pr-1 transition-colors focus-within:border-[#2F9BF5]">
        <MailIcon className="h-4 w-4 shrink-0 text-white/80" />
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Your email address"
          aria-label="Your email address"
          className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/65 focus:outline-none"
        />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E9BF0] text-white transition hover:bg-[#3aa9f7] disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <ArrowRight />
          )}
        </button>
      </div>

      <p
        role="status"
        className={`mt-3 min-h-5 text-xs ${
          status === "success" ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {status === "success" && "Thanks for subscribing!"}
        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#04152b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06203f]/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 lg:px-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 xl:gap-8">
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3">
            <Link href="/" aria-label="UKB Bathrooms home">
              <Image
                src="/images/logo1.png"
                alt="UKB Bathrooms – Design / Supply / Install"
                width={420}
                height={80}
                className="h-auto w-56 lg:w-64"
                priority
              />
            </Link>

            <h2 className="mt-9 text-xl font-bold leading-tight text-white">
              Beautiful Bathrooms.
              <br />
              <span className="text-[#1E9BF0]">Designed Around You.</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              From modern designs to complete installations, UKB Bathrooms brings your
              vision to life with quality, reliability and expert craftsmanship.
            </p>
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Useful Links" links={USEFUL_LINKS} />

          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3 xl:border-l xl:border-[#12335f] xl:pl-10">
            <MailIcon className="h-7 w-7 text-[#1E9BF0]" />
            <h3 className="mt-2.5 text-lg font-bold">Get In Touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Have a question or need a quote?
              <br />
              We&apos;re here to help.
            </p>

            <div className="mt-6">
              <NewsletterForm />
            </div>

            <p className="mt-5 max-w-60 text-xs leading-relaxed text-white/70">
              Follow us for inspiration, latest projects and expert tips.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#12335f] bg-[#061d3a] text-white transition hover:border-[#2F9BF5] hover:bg-[#0B86EE]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-t border-[#12335f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-12">
         <p className="text-white/75">
  &copy; {year} UKB Bathrooms. All rights reserved.{" "}
  <span className="mx-2">|</span>
  Created by{" "}
  <a
    href="https://tacreatives.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#00A8FF] transition-colors duration-300"
  >
    TA Creative
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}
