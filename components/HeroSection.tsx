import Image from "next/image";
import Link from "next/link";
import FeatureBlocks from "./FeatureBlocks";
import HeroQuoteForm from "./Heroquoteform";
import Icon from "./icon";
import { inter, montserrat } from "./fonts";

interface HeroSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onVideoOpen: () => void;
}

export default function HeroSection({ onVideoOpen }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`${inter.className} relative flex min-h-[calc(100svh-100px)] w-full flex-col overflow-hidden bg-[#071a33] lg:min-h-[700px]`}
    >
      {/* Background photo: put your image at /public/images/hero-bathroom.jpg */}
      <Image
        src="/images/Hero.png"
        alt="UKB Bathrooms professional bathroom installation showcasing modern design and quality craftsmanship"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />
       <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex">
  <a
    href="#process"
    className="animate-scroll-bounce flex flex-col items-center gap-2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-colors hover:text-[#2F9BF5]"
  >
    <span className="text-[11px] font-semibold uppercase tracking-widest">Scroll</span>
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </a>
</div>
      {/* Navy overlays: strong on the left for text, darker at top and bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: [
            // Left: dark navy -> transparent
            "linear-gradient(90deg, rgba(4, 16, 34, 0.86) 0%, rgba(6,24,48,0.88) 22%, rgba(8, 32, 62, 0.42) 42%, rgba(8,32,62,0.15) 62%, rgba(8,32,62,0) 80%)",
            // Top: behind header
            "linear-gradient(180deg, rgba(4, 16, 34, 0.7) 0%, rgba(4,16,34,0.30) 16%, rgba(4,16,34,0) 30%)",
            // Bottom: behind features row
            "linear-gradient(0deg, rgba(4, 16, 34, 0.51) 0%, rgba(4,16,34,0.70) 12%, rgba(4,16,34,0.25) 28%, rgba(4,16,34,0) 42%)",
          ].join(", "),
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pt-24 pb-6 lg:px-16">
       

        {/* Text (left) + form (right) */}
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-12">
          <div className="max-w-[560px]">
            <p className="mb-5 text-[11px] font-medium tracking-[0.32em] text-white sm:text-[13px] animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              BEAUTIFUL BATHROOMS. BUILT AROUND YOU.
            </p>

            <h1
              id="hero-heading"
              className={`${montserrat.className} mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up`}
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Bathroom Fitters in
              <br />
              <span className="text-[#2F9BF5]">Southampton</span>
            </h1>

            <p className="mb-8 max-w-[520px] text-base leading-relaxed text-white/90 lg:text-lg animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Expert bathroom installation, renovation, wet rooms and ensuites in Southampton and surrounding areas. Serving Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton, Hedge End, Chandler&apos;s Ford and Romsey.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Link
                href="tel:+447838349520"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                <Icon name="calendar" className="h-4 w-4" />
                Call +44 7838 349520
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Hero quote form */}
          <div className="animate-fade-in-up lg:justify-self-end" style={{ animationDelay: '0.35s', opacity: 0 }}>
            <HeroQuoteForm />
          </div>
        </div>

        {/* Bottom row: in normal flow so it never overlaps the text */}
        <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <FeatureBlocks />
        </div>
      </div>
      
    </section>
  );
}