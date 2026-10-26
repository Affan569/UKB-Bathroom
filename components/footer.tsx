"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const NEWSLETTER_EMAIL = process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL ?? "";

const SERVICES_LINKS = [
  { label: "Bathroom Installation", href: "/services/bathroom-installation-southampton" },
  { label: "Bathroom Renovation", href: "/services/bathroom-renovation-southampton" },
  { label: "Wet Rooms", href: "/services/wet-rooms-southampton" },
  { label: "En-suite Installation", href: "/services/ensuite-installation-southampton" },
  { label: "Bathroom Design", href: "/services/bathroom-design-southampton" },
  { label: "Bathroom Tiling", href: "/services/bathroom-tiling-southampton" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/#process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
  { label: "Services", href: "/services" },
  { label: "Areas Covered", href: "/areas-covered" },
];

const AREAS_LINKS = [
  { label: "Shirley", href: "/areas-covered/shirley" },
  { label: "Portswood", href: "/areas-covered/portswood" },
  { label: "Woolston", href: "/areas-covered/woolston" },
  { label: "Bitterne", href: "/areas-covered/bitterne" },
  { label: "Totton", href: "/areas-covered/totton" },
  { label: "Eastleigh", href: "/areas-covered/eastleigh" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/* TODO: replace "#" with your real social profile URLs */
const SOCIALS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
] as const;

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Svg = ({ className = "h-5 w-5", children }: { className?: string; children: ReactNode }) => (
  <svg {...svgBase} className={className} aria-hidden>
    {children}
  </svg>
);

const ChevronRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <Svg className={className}>
    <path strokeWidth={2.2} d="m9 6 6 6-6 6" />
  </Svg>
);

const ArrowRight = ({ className = "h-5 w-5" }: { className?: string }) => (
  <Svg className={className}>
    <path strokeWidth={2.2} d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

const MailIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </Svg>
);

const PlaneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M21.5 3 2.5 10.6c-.8.3-.8 1.4 0 1.7l4.9 1.8 2 6.1c.2.6 1 .8 1.4.3l2.6-2.7 4.6 3.4c.6.4 1.4.1 1.6-.6L23 4.4c.2-.9-.7-1.700-1.500-1.400zM9 13.400l9.500-6.700-7.400 8.100-.4 3.100z" />
  </svg>
);

function SocialIcon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  switch (name) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <Svg className="h-4 w-4">
          <rect x="2.500" y="2.500" width="19" height="19" rx="5" strokeWidth={2} />
          <circle cx="12" cy="12" r="4" strokeWidth={2} />
          <circle cx="17.500" cy="6.500" r=".6" fill="currentColor" />
        </Svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
          <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <text x="12" y="19" textAnchor="middle" fontSize="20" fontWeight="800" fill="currentColor" fontFamily="Georgia, serif">P</text>
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
          <path d="M4 9h4v11H4zM6 3.500a2.300 2.300 0 1 1 0 4.600 2.300 2.300 0 0 1 0-4.600zM10 9h3.800v1.600c.6-1 1.900-1.900 3.800-1.900 3.600 0 4.400 2.300 4.400 5.400V20h-4v-5.200c0-1.300 0-2.800-1.800-2.800-1.800 0-2.200 1.300-2.200 2.700V20h-4z" />
        </svg>
      );
  }
}

function LinkColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <span className="mb-4 mt-2 block h-[3px] w-10 rounded bg-[#1E9BF0]" />
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-2 text-sm text-white/85 transition-colors hover:text-[#2F9BF5]"
            >
              <span>{l.label}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[#1E9BF0] transition-transform group-hover:translate-x-1" />
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
    <form onSubmit={onSubmit}>
      <div className="flex items-center gap-2 rounded-full border border-[#1E6FCB] bg-[#031a35]/80 py-1 pl-4 pr-1 transition-colors focus-within:border-[#2F9BF5]">
        <MailIcon className="h-4 w-4 shrink-0 text-white/85" />
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
          className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/70 focus:outline-none"
        />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E9BF0] text-white transition hover:bg-[#3aa9f7] disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </button>
      </div>

      <p
        role="status"
        className={`mt-1 min-h-4 text-xs ${status === "success" ? "text-emerald-400" : "text-red-400"}`}
      >
        {status === "success" && "Thanks for subscribing!"}
        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const divider = "lg:border-l lg:border-[#12335f] lg:pl-4";

  return (
    <footer className="relative overflow-hidden bg-[#03152e] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06203f]/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-16 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="UKB Bathrooms home" className="inline-block">
              <Image
                src="/images/logo1.png"
                alt="UKB Bathrooms – Design / Supply / Install"
                width={420}
                height={80}
                className="h-auto w-56 lg:w-64"
                priority
              />
            </Link>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white">
              Beautiful Bathrooms.
              <br />
              <span className="text-[#1EA7FF]">Designed Around You.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              From modern designs to complete installations, UKB Bathrooms brings your
              vision to life with quality, reliability and expert craftsmanship.
            </p>

           
          </div>
          <LinkColumn title="Quick Links" links={QUICK_LINKS} className={divider} />
          <LinkColumn title="Services" links={SERVICES_LINKS} className={divider} />
          <LinkColumn title="Areas Covered" links={AREAS_LINKS} className={divider} />

          {/* Get in touch + follow */}
          <div className={`sm:col-span-2 lg:col-span-1 ${divider}`}>
            <MailIcon className="h-7 w-7 text-[#1EA7FF]" />
            <h3 className="mt-1 whitespace-nowrap text-xl font-bold text-white">Get In Touch</h3>
            <p className="mt-1 text-sm leading-snug text-white/80">
              Have a question or need a quote? We&apos;re here to help.
            </p>

            <div className="mt-3">
              <NewsletterForm />
            </div>

            <div className="mt-2 border-t border-[#12335f] pt-3">
             
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-8 border-t border-[#12335f]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-white/80 sm:px-5 md:flex-row lg:px-6">
          <p className="text-center md:text-left">
            &copy; {year} UKB Bathrooms. All rights reserved.
            <span className="mx-2 hidden text-white/30 sm:inline">|</span>
            <span className="block sm:inline">
              Created by{" "}
              <a
                href="https://tacreatives.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white transition-colors duration-300 hover:text-[#00A8FF]"
              >
                TA Creative
              </a>
            </span>
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <nav aria-label="Legal" className="flex items-center gap-5">
              {LEGAL_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="transition-colors hover:text-[#2F9BF5]">
                  {l.label}
                </Link>
              ))}
            </nav>
            
          </div>
        </div>
      </div>
    </footer>
  );
}