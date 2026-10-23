"use client";

import { useEffect, useRef, useState } from "react";
import {
  testimonials,
  testimonialsHeading,
  type Testimonial,
} from "@/Data/testonomial";

const PER_PAGE = 2;
const AUTOPLAY_MS = 5000;

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-[#0B86EE]" aria-hidden="true">
    <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5l-6 3.4 1.3-6.7-5-4.7 6.8-.8L12 2.5z" />
  </svg>
);

const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 40" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M0 24C0 10.5 7.5 2.5 19 0l2 5.5C14.5 7.5 11.5 11 11 16h8v24H0V24zm27 0C27 10.5 34.5 2.5 46 0l2 5.5C41.5 7.5 38.5 11 38 16h8v24H27V24z"
      transform="scale(.9) translate(2 -2)"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path
      d="M12 2.5l8 3v6.2c0 4.9-3.3 8.6-8 9.8-4.7-1.2-8-4.9-8-9.8V5.5l8-3z"
      stroke="#0B86EE"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M8.3 12.2l2.7 2.7 4.8-5.2"
      stroke="#0B86EE"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <path
      d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      stroke="#0B86EE"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- card ---------- */

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="relative flex h-full flex-col rounded-[22px] bg-white px-8 pb-7 pt-7 shadow-[0_18px_50px_-12px_rgba(29,63,224,0.18),0_4px_14px_rgba(29,63,224,0.06)] transition-transform duration-300 hover:-translate-y-1.5">
      <QuoteIcon className="absolute right-8 top-7 h-8 w-8 text-[#a9c0f7]" />

      {/* header */}
      <div className="flex items-start gap-5">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-[22px] font-semibold text-white ${item.avatarClass}`}
        >
          {item.initials}
        </div>
        <div className="pt-1">
          <h3 className="text-[15px] font-bold leading-tight text-[#0b1a6b]">
            {item.name}
          </h3>
          <p className="mt-1.5 text-[12.5px] text-[#6b7fc4]">
            {item.project} <span className="mx-1.5">•</span> {item.location}
          </p>
          <div className="mt-2 flex gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* quote */}
      <blockquote className="mt-6 flex-1 border-l-[3px] border-[#0B86EE] pl-5 text-[16px] font-medium leading-[1.6] text-[#14267a]">
        “{item.quote}”
      </blockquote>

      {/* footer */}
      <div className="mt-6 flex items-center gap-3">
        <ShieldCheckIcon />
        <span className="text-[13px] font-semibold text-[#0B86EE]">
          Verified Customer
        </span>
      </div>
    </article>
  );
}

/* ---------- ghost (peeking) card ---------- */

function GhostCard({ item, side }: { item: Testimonial; side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-6 hidden h-[calc(100%-3rem)] w-[48%] select-none opacity-70 blur-[1.5px] transition-all duration-700 lg:block ${
        side === "left" ? "left-0 -translate-x-[8%]" : "right-0 translate-x-[8%]"
      }`}
    >
      <div className="h-full overflow-hidden rounded-[22px] bg-white/80 p-8 shadow-[0_14px_40px_-12px_rgba(29,63,224,0.14)]">
        <QuoteIcon
          className={`h-8 w-8 text-[#a9c0f7] ${side === "left" ? "ml-0" : "ml-auto"}`}
        />
        <p className="mt-6 line-clamp-4 border-l-[3px] border-[#c9d5f8] pl-5 text-[16px] text-[#8fa0d6]">
          “{item.quote}”
        </p>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

export default function Testimonial() {
  const n = testimonials.length;
  const pages: Testimonial[][] = [];
  for (let i = 0; i < n; i += PER_PAGE) pages.push(testimonials.slice(i, i + PER_PAGE));
  const pageCount = pages.length;

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const heading = useInView<HTMLDivElement>(0.3);
  const stage = useInView<HTMLDivElement>(0.15);

  const start = page * PER_PAGE;
  const prevCard = testimonials[(start - 1 + n) % n];
  const nextCard = testimonials[(start + PER_PAGE) % n];

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  // autoplay: slides on its own once visible, pauses on hover/focus
  useEffect(() => {
    if (!stage.inView || paused) return;
    const id = setInterval(
      () => setPage((p) => (p + 1) % pageCount),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [stage.inView, paused, pageCount, page]);

  const reveal = (visible: boolean, delay = 0) => ({
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* heading */}
        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={heading.ref} className="text-center">
          <div
            // eslint-disable-next-line react-hooks/refs
            {...reveal(heading.inView, 0)}
            // eslint-disable-next-line react-hooks/refs
            className={`flex items-center justify-center gap-5 ${reveal(heading.inView).className}`}
          >
            <span
              // eslint-disable-next-line react-hooks/refs
              className={`h-px bg-[#0B86EE] transition-all duration-1000 ${
                // eslint-disable-next-line react-hooks/refs
                heading.inView ? "w-14" : "w-0"
              }`}
            />
            <p className="text-[14px] tracking-[0.12em] text-[#0B86EE]">
              {testimonialsHeading.eyebrowLight}{" "}
              <span className="font-bold">{testimonialsHeading.eyebrowBold}</span>
            </p>
            <span
              // eslint-disable-next-line react-hooks/refs
              className={`h-px bg-[#0B86EE] transition-all duration-1000 ${
                // eslint-disable-next-line react-hooks/refs
                heading.inView ? "w-14" : "w-0"
              }`}
            />
          </div>

          <h2
            // eslint-disable-next-line react-hooks/refs
            style={reveal(heading.inView, 150).style}
            // eslint-disable-next-line react-hooks/refs
            className={`mt-5 text-[44px] font-extrabold leading-tight tracking-tight text-[#0b1a6b] md:text-[52px] ${
              // eslint-disable-next-line react-hooks/refs
              reveal(heading.inView).className
            }`}
          >
            {testimonialsHeading.titleDark}{" "}
            <span className="text-[#0B86EE]">{testimonialsHeading.titleAccent}</span>
          </h2>

          <p
            // eslint-disable-next-line react-hooks/refs
            style={reveal(heading.inView, 300).style}
            // eslint-disable-next-line react-hooks/refs
            className={`mx-auto mt-5 max-w-[580px] text-[16px] leading-relaxed text-[#7f8fc8] ${
              // eslint-disable-next-line react-hooks/refs
              reveal(heading.inView).className
            }`}
          >
            {testimonialsHeading.subtitle}
          </p>
        </div>

        {/* carousel */}
        <div
          // eslint-disable-next-line react-hooks/refs
          ref={stage.ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          // eslint-disable-next-line react-hooks/refs
          style={reveal(stage.inView, 200).style}
          // eslint-disable-next-line react-hooks/refs
          className={`relative mx-auto mt-14 max-w-[1180px] ${reveal(stage.inView).className}`}
        >
          <GhostCard item={prevCard} side="left" />
          <GhostCard item={nextCard} side="right" />

          {/* sliding viewport */}
          <div className="relative z-10 mx-auto -my-10 max-w-[1020px] overflow-hidden px-1 py-10">
            <div
              className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, pi) => (
                <div
                  key={pi}
                  aria-hidden={pi !== page}
                  className="grid w-full shrink-0 grid-cols-1 gap-5 px-1 md:grid-cols-2"
                >
                  {group.map((item, ci) => (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 ease-out ${
                        pi === page
                          ? "scale-100 opacity-100"
                          : "scale-[0.94] opacity-40"
                      }`}
                      style={{ transitionDelay: pi === page ? `${ci * 120}ms` : "0ms" }}
                    >
                      <TestimonialCard item={item} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-20 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(29,63,224,0.22)] transition hover:scale-110 active:scale-95"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-20 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(29,63,224,0.22)] transition hover:scale-110 active:scale-95"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* dots */}
        <div
          // eslint-disable-next-line react-hooks/refs
          style={reveal(stage.inView, 400).style}
          // eslint-disable-next-line react-hooks/refs
          className={`mt-10 flex items-center justify-center gap-3 ${reveal(stage.inView).className}`}
        >
          <span className="h-px w-10 bg-[#0B86EE]" />
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to testimonials page ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === page ? "w-7 bg-[#0B86EE]" : "w-3 bg-[#d3dbf0]"
              }`}
            />
          ))}
          <span className="h-px w-10 bg-[#0B86EE]" />
        </div>
      </div>
    </section>
  );
}