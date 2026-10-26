"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, inter } from "./fonts";
import Icon from "./icon";
import Header from "./Header";
import { servicesData } from "../Data/servicesData";

interface ServiceTemplateProps {
  slug: string;
}

/* ------------------------------------------------------------------
   IMAGES: every image below falls back to the page's hero image (which
   is known to exist) at a different crop, so nothing renders broken.
   To use real photos, set `src` to your own file, e.g. "/images/design.jpg".
------------------------------------------------------------------- */
const NAVY = "text-[#0a3d7a]";

const solutions = [
  { title: "Bathroom Design", text: "Bespoke layouts and designs tailored to your space, style and budget.", href: "/services/bathroom-design", src: null as string | null, pos: "10% 50%", icon: "M4 5h16v14H4z M8 9h8 M8 13h5" },
  { title: "Bathroom Supply", text: "Premium quality fittings, fixtures and materials from trusted brands.", href: "/services/bathroom-supply", src: null, pos: "40% 50%", icon: "M3 4h2l2 11h10l2-8H7 M9 20h.01 M17 20h.01" },
  { title: "Bathroom Installation", text: "Skilled professionals, flawless finish, completed on time.", href: "/services/bathroom-installation", src: null, pos: "70% 50%", icon: "M14 6l4 4-9 9H5v-4z M13 7l4 4" },
  { title: "Bathroom Renovation", text: "Upgrade your space and add more value to your home.", href: "/services/bathroom-renovation", src: null, pos: "100% 50%", icon: "M4 12a8 8 0 0114-5l2-2v6h-6l2-2a5 5 0 00-9 3 M20 12a8 8 0 01-14 5l-2 2v-6h6l-2 2a5 5 0 009-3" },
];

const stepIcons = [
  "M7 4h10v16H7z M10 8h4 M10 12h4 M10 16h2",
  "M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6",
  "M4 20l1-4L16 5l3 3L8 19z M14 7l3 3",
  "M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2",
];

const features = [
  { title: "Experienced Team", text: "Skilled and certified professionals.", icon: "M12 12a4 4 0 100-8 4 4 0 000 8z M4 21a8 8 0 0116 0" },
  { title: "Premium Quality", text: "Top brands and high-grade materials.", icon: "M3 11l9-8 9 8 M5 10v10h14V10" },
  { title: "Transparent Pricing", text: "No hidden costs, no surprises.", icon: "M12 2v20 M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { title: "Customer Satisfaction", text: "Your happiness is our priority.", icon: "M12 21s-8-5-8-11a5 5 0 018-4 5 5 0 018 4c0 6-8 11-8 11z" },
];

const gallery = [
  { label: "Before", pos: "0% 50%" },
  { label: "After", pos: "50% 50%" },
  { label: "Before", pos: "75% 50%" },
  { label: "After", pos: "100% 50%" },
];

const testimonials = [
  { name: "Sarah Thompson", place: "Manchester", text: "The team at UKB Bathrooms were fantastic. From start to finish, the design process was smooth, communication was excellent and the finished bathroom is absolutely stunning!" },
  { name: "James Carter", place: "Leeds", text: "Professional, reliable and a pleasure to work with. They transformed our old bathroom into a modern and functional space. Highly recommended!" },
  { name: "Olivia Wilson", place: "Birmingham", text: "Excellent service, great attention to detail and high-quality workmanship. We couldn't be happier with our new bathroom!" },
];

function SvgIcon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`${inter.className} text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B86EE] ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

function Photo({ src, pos, alt, sizes }: { src: string; pos: string; alt: string; sizes: string }) {
  return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: pos }} />;
}

export default function ServiceTemplate({ slug }: ServiceTemplateProps) {
  const data = servicesData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) return <div>Service not found</div>;

  const fallback = data.hero.image;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      {/* ============================ HERO (unchanged) ============================ */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image src={data.hero.image} alt="UKB Bathrooms professional bathroom services" fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-transparent" />
        <div className="mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 pb-16 pt-24 md:min-h-[600px] lg:px-16">
          <div className="max-w-2xl">
            <h1 className={`${montserrat.className} text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}>{data.hero.title}</h1>
            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>{data.hero.subtitle}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]">
                {data.hero.ctaPrimary}
                <Icon name="calendar" className="h-4 w-4" />
              </Link>
              <Link href="tel:+447838349520" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]">
                {data.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 1. COMPLETE BATHROOM SOLUTIONS ================= */}
      <section className="bg-gradient-to-b from-[#f4f8fd] to-white pb-20 pt-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <Eyebrow center>Our Services</Eyebrow>
            <h2 className={`${montserrat.className} mt-2 text-3xl font-extrabold md:text-4xl ${NAVY}`}>Complete Bathroom Solutions</h2>
            <p className={`${inter.className} mx-auto mt-3 max-w-lg text-[13px] text-slate-500`}>
              From concept to completion, we provide a full range of services to create your perfect bathroom.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => {
              const cardSrc = data.images?.cards?.[i];
              return (
              <Link key={s.title} href={s.href} className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,134,238,0.10)] ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,134,238,0.18)]">
                <div className="relative h-44 w-full overflow-hidden">
                  <Photo src={cardSrc ?? fallback} pos={cardSrc ? "50% 50%" : s.pos} alt={s.title} sizes="(min-width:1024px) 25vw, 50vw" />
                </div>
                <div className="relative px-6 pb-6 pt-9">
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#38a8ff] to-[#0B86EE] text-white shadow-lg ring-4 ring-white">
                    <SvgIcon d={s.icon} />
                  </div>
                  <h3 className={`${montserrat.className} text-[15px] font-bold ${NAVY}`}>{s.title}</h3>
                  <p className={`${inter.className} mt-2 min-h-[60px] text-[13px] leading-6 text-slate-500`}>{s.text}</p>
                  <span className={`${inter.className} mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0B86EE]`}>
                    Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 2. YOUR DREAM BATHROOM IN 4 SIMPLE STEPS ================= */}
      <section className="bg-[#eaf3fc] py-16">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 lg:grid-cols-[260px_1fr]">
          <div>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className={`${montserrat.className} mt-2 text-[32px] font-extrabold leading-tight ${NAVY}`}>
              Your Dream Bathroom <span className="underline decoration-[#0B86EE] decoration-2 underline-offset-4">in 4 Simple Steps</span>
            </h2>
            <p className={`${inter.className} mt-4 text-[13px] leading-6 text-slate-500`}>
              We make the entire process easy and stress-free, from your first enquiry to the final result. Our expert team is with you at every step.
            </p>
            <p className="mt-8 -rotate-6 font-serif text-lg italic leading-6 text-[#0B86EE]">
              Simple Steps,<br />Stunning Results.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {data.process.slice(0, 4).map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center px-3 text-center">
                {i < 3 && (
                  <div className="absolute right-[-18px] top-12 hidden items-center text-[#0B86EE] lg:flex">
                    <span className="h-px w-8 bg-[#0B86EE]/50" />
                    <span className="-ml-1 text-xs">›</span>
                  </div>
                )}
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-2 border-transparent border-l-[#0B86EE] border-t-[#0B86EE]" />
                  <span className="absolute inset-1.5 rounded-full border border-sky-200" />
                  <span className="absolute left-0 top-1 z-10 rounded-full bg-[#0a3d7a] px-1.5 py-0.5 text-[9px] font-bold text-white">0{step.step}</span>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0B86EE] shadow-md">
                    <SvgIcon d={stepIcons[i]} className="h-8 w-8" />
                  </span>
                </div>
                <h3 className={`${montserrat.className} mt-4 text-[13px] font-bold ${NAVY}`}>{step.title}</h3>
                <p className={`${inter.className} mt-2 text-[11px] leading-5 text-slate-500`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. QUALITY. EXPERTISE. RELIABILITY. ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -bottom-3 -left-3 h-[92%] w-[92%] rounded-bl-[120px] rounded-tl-[40px] rounded-tr-[40px] border-b-[10px] border-l-[10px] border-[#0B86EE]" />
            <div className="relative h-[320px] overflow-hidden rounded-bl-[120px] rounded-br-[160px] rounded-tl-[40px] rounded-tr-[40px] shadow-xl md:h-[360px]">
              <Photo src={data.images?.quality ?? fallback} pos={data.images?.quality ? "50% 50%" : "60% 50%"} alt="Quality bathroom installation by UKB Bathrooms" sizes="(min-width:1024px) 35vw, 100vw" />
            </div>
          </div>

          <div>
            <Eyebrow>Why Choose UKB Bathrooms</Eyebrow>
            <h2 className={`${montserrat.className} mt-2 text-3xl font-extrabold md:text-4xl ${NAVY}`}>Quality. Expertise. Reliability.</h2>
            <p className={`${inter.className} mt-3 max-w-xl text-[13px] leading-6 text-slate-500`}>{data.overview.intro}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-[#0B86EE]">
                    <SvgIcon d={f.icon} />
                  </div>
                  <h3 className={`${montserrat.className} mt-3 text-[12px] font-bold ${NAVY}`}>{f.title}</h3>
                  <p className={`${inter.className} mt-1 text-[11px] leading-5 text-slate-500`}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. REAL BATHROOMS. REAL TRANSFORMATIONS. ================= */}
      <section className="bg-[#eaf3fc] py-14">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-[250px_1fr]">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2 className={`${montserrat.className} mt-2 text-[32px] font-extrabold leading-tight ${NAVY}`}>
              Real Bathrooms.<br />Real Transformations.
            </h2>
            <p className={`${inter.className} mt-3 text-[12px] leading-5 text-slate-500`}>
              Take a look at some of our recent projects and get inspired for your own space.
            </p>
            <Link href="/gallery" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0B86EE] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A75D1]">
              View Full Gallery <span>→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[0, 2].map((start) => (
              <div key={start} className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-lg ring-1 ring-sky-100">
                {gallery.slice(start, start + 2).map((g, i) => {
                  const item = data.images?.gallery?.[start + i];
                  const label = item?.label ?? g.label;
                  return (
                  <div key={i} className="relative h-44 md:h-52">
                    <Photo src={item?.src ?? fallback} pos={item?.src ? "50% 50%" : g.pos} alt={`${label} bathroom transformation`} sizes="(min-width:1024px) 20vw, 50vw" />
                    <span className={`${inter.className} absolute bottom-2 left-2 rounded px-2.5 py-1 text-[10px] font-bold text-white ${label === "Before" ? "bg-[#0a3d7a]" : "bg-[#0B86EE]"}`}>{label}</span>
                  </div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. WHAT OUR CUSTOMERS SAY ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className={`${montserrat.className} mt-2 text-32px] font-extrabold ${NAVY}`}>What Our Customers Say</h2>
          <p className={`${inter.className} mt-2 text-[13px] text-slate-500`}>
            We take pride in delivering exceptional service and beautiful results. Here's what our happy customers have to say.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(11,134,238,0.10)] ring-1 ring-sky-50">
                <span className="font-serif text-4xl leading-none text-[#0B86EE]">“</span>
                <blockquote className={`${inter.className} -mt-2 text-[12.5px] leading-6 text-slate-600`}>{t.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#38a8ff] to-[#0a3d7a] text-sm font-bold text-white">{t.name.charAt(0)}</div>
                  <div>
                    <div className="text-[11px] tracking-widest text-amber-400">★★★★★</div>
                    <p className={`${montserrat.className} text-[12px] font-bold ${NAVY}`}>{t.name}</p>
                    <p className={`${inter.className} text-[10px] text-slate-400`}>{t.place}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. FAQ ================= */}
      <section className="bg-gradient-to-b from-white to-[#eaf3fc] py-16">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className={`${montserrat.className} mt-2 text-[32px] font-extrabold leading-tight ${NAVY}`}>Got Questions? We've Got Answers.</h2>
            <p className={`${inter.className} mt-3 text-[13px] text-slate-500`}>Find quick answers to the most common questions about our bathroom services.</p>
          </div>

          <div className="space-y-2">
            {data.faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white px-5 py-3.5 shadow-sm ring-1 ring-sky-100">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between gap-4 text-left">
                  <h3 className={`${inter.className} text-[13px] font-medium text-slate-700`}>{faq.question}</h3>
                  <svg className={`h-4 w-4 shrink-0 text-[#0B86EE] transition-transform ${openFaq === index ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 7.5L10 13l4.5-5.5z" />
                  </svg>
                </button>
                {openFaq === index && <p className={`${inter.className} mt-3 text-[12.5px] leading-6 text-slate-500`}>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-[#0b1b33] py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>Ready to Start Your Project?</h2>
          <p className={`${inter.className} mt-3 text-white/80`}>Get a free, no-obligation quote for your bathroom project.</p>
          <Link href="/#contact" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1]">
            Get a Free Quote <Icon name="calendar" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}