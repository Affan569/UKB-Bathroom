"use client";

import { useState, useEffect, useRef } from "react";
import { inter } from "./fonts";
import { FAQS } from "./faqs";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [accordionVisible, setAccordionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAccordionVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        observer.unobserve(accordionRef.current);
      }
    };
  }, []);

  // SEO: lets Google show your FAQs in search results. Updates automatically with faqs.ts
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className={`${inter.className} bg-slate-50 py-16 lg:py-24`} id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 lg:gap-5">
          {/* Heading */}
          <div ref={headingRef} className={`lg:col-span-5 scroll-reveal ${headingVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1E9BF0]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1E9BF0]">
                FAQs
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F4B] sm:text-5xl">
              Your Questions,
              <br />
              <span className="text-[#1E9BF0]">Our Answers</span>
            </h2>
          </div>

          {/* Accordion */}
          <div ref={accordionRef} className={`space-y-4 lg:col-span-7 scroll-reveal ${accordionVisible ? 'visible' : ''}`}>
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border bg-white shadow-sm shadow-blue-900/5 transition-all duration-300 ${
                    isOpen ? "border-blue-200 shadow-md" : "border-blue-100 hover:border-blue-200"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-[#0B1F4B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-base font-medium text-[#0B1F4B]">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#0B1F4B] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pl-[4.5rem] pr-6 text-sm leading-relaxed text-slate-600 sm:pl-[4.75rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}