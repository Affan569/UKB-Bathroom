"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, inter } from "./fonts";
import Icon from "./icon";
import Header from "./Header";
import { areasData } from "../Data/areasData";
import { servicesData } from "../Data/servicesData";

interface AreaTemplateProps {
  slug: string;
}

const NAVY = "text-[#0a3d7a]";
const HERO_IMG = "/images/Hero.png";

/* ---------- small helpers ---------- */
function Svg({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

function Eyebrow({ children, center = false, light = false }: { children: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <p
      className={`${inter.className} flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] ${
        light ? "text-sky-300" : "text-[#0B86EE]"
      } ${center ? "justify-center" : ""}`}
    >
      <span className={`h-[2px] w-6 rounded ${light ? "bg-sky-300" : "bg-[#0B86EE]"}`} />
      {children}
    </p>
  );
}

function Photo({ pos, alt, sizes }: { pos: string; alt: string; sizes: string }) {
  return (
    <Image
      src={HERO_IMG}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover transition duration-700 group-hover:scale-110"
      style={{ objectPosition: pos }}
    />
  );
}

/* ---------- static content ---------- */
const SERVICE_META: Record<string, { text: string; icon: string; pos: string }> = {
  "Bathroom Installation": {
    text: "Complete fitting from plumbing to the final finishing touches.",
    icon: "M14 6l4 4-9 9H5v-4z M13 7l4 4",
    pos: "15% 50%",
  },
  "Bathroom Renovation": {
    text: "Transform a tired bathroom into a modern, functional space.",
    icon: "M4 12a8 8 0 0114-5l2-2v6h-6l2-2a5 5 0 00-9 3",
    pos: "35% 50%",
  },
  "Wet Rooms": {
    text: "Seamless, fully tanked and accessible wet rooms.",
    icon: "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z",
    pos: "55% 50%",
  },
  "Ensuite Installation": {
    text: "Add value and convenience with a private ensuite.",
    icon: "M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6",
    pos: "75% 50%",
  },
  "Bathroom Design": {
    text: "3D planning and expert advice from concept to completion.",
    icon: "M4 5h16v14H4z M8 9h8 M8 13h5",
    pos: "90% 50%",
  },
  "Bathroom Tiling": {
    text: "Precision wall and floor tiling with waterproofing expertise.",
    icon: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
    pos: "100% 50%",
  },
};

const TRUST = [
  { title: "5-Year Guarantee", text: "On all workmanship", icon: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z M8.5 12l2.5 2.5 4.5-4.5" },
  { title: "Fixed, Free Quotes", text: "No hidden costs", icon: "M12 2v20 M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { title: "Fully Insured", text: "Certified tradesmen", icon: "M12 12a4 4 0 100-8 4 4 0 000 8z M4 21a8 8 0 0116 0" },
  { title: "Clean & Tidy", text: "Spotless on completion", icon: "M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 3 1.1-6.2L3 9.7l6.2-.9z" },
];

const PROCESS = [
  { title: "Free Survey", text: "We visit your home, measure up and talk through your ideas.", icon: "M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" },
  { title: "Design & Quote", text: "A clear plan and a fixed, itemised quote with no surprises.", icon: "M4 20l1-4L16 5l3 3L8 19z M14 7l3 3" },
  { title: "Expert Installation", text: "Our certified team fits everything to the highest standard.", icon: "M14.7 6.3a4 4 0 005.4 5.4L11 20.8a2.1 2.1 0 01-3-3z" },
  { title: "Handover", text: "A final walkthrough and your 5-year workmanship guarantee.", icon: "M5 12l4 4 10-10" },
];

const WHY = [
  "Local team who know the area's housing",
  "Plumbing, electrics and tiling all in-house",
  "Protected floors and a spotless finish",
  "Clear communication from first call to handover",
];

export default function AreaTemplate({ slug }: AreaTemplateProps) {
  const data = areasData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) {
    return <div>Area not found</div>;
  }

  const breadcrumbSchemaItems = data.breadcrumbs.map((item) => ({
    name: item.label,
    item: `https://ukbbathrooms.co.uk${item.href}`,
  }));

  const shortName = data.name.split(",")[0];
  const otherAreas = Object.values(areasData).filter((a) => a.slug !== data.slug);

  const housing = [
    { title: "Property Types", text: data.housingSpeciality.propertyTypes, icon: "home" },
    { title: "Plumbing Challenges", text: data.housingSpeciality.plumbingChallenges, icon: "tool" },
    { title: "Local Insight", text: data.housingSpeciality.localInsight, icon: "check" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
    
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src={HERO_IMG}
          alt={`UKB Bathrooms bathroom services in ${shortName}`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/95 via-[#0b1b33]/70 to-[#0b1b33]/20" />
        <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#0B86EE]/25 blur-3xl" />

        <div className="mx-auto grid min-h-[520px] max-w-[1280px] items-center gap-10 px-5 pb-28 pt-20 md:min-h-[620px] lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <div>
           
             

            <h1
              className={`${montserrat.className} mt-5 text-4xl font-extrabold leading-[1.08] text-white md:text-[56px]`}
            >
              {data.hero.headline}
            </h1>

            <p className={`${inter.className} mt-5 max-w-lg text-[15px] leading-7 text-white/90`}>
              {data.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B86EE]/30 transition hover:-translate-y-0.5 hover:bg-[#0A75D1]"
              >
                Get a Free Quote
                <Icon name="calendar" className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+447838349520"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Call +44 7838 349520
              </Link>
            </div>

            <ul className={`${inter.className} mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/85`}>
              {["5-year guarantee", "Fully insured", "Free no-obligation quote"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B86EE] text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Glass card */}
         
        </div>
      </section>

      {/* ============================ TRUST STRIP ============================ */}
      <section className="relative z-10 mx-auto -mt-14 max-w-[1200px] px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-sky-100 shadow-[0_20px_60px_rgba(11,59,122,0.18)] md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-center gap-3 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[#0B86EE]">
                <Svg d={t.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className={`${montserrat.className} text-[13px] font-bold ${NAVY}`}>{t.title}</p>
                <p className={`${inter.className} text-[11px] text-slate-500`}>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ LOCAL HOUSING EXPERTISE ============================ */}
      <section className="bg-gradient-to-b from-white to-[#eaf3fc] pb-20 pt-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>Local Housing Expertise</Eyebrow>
              <h2 className={`${montserrat.className} mt-3 text-3xl font-extrabold leading-tight md:text-4xl ${NAVY}`}>
                We know the homes of {shortName}
              </h2>
              <p className={`${inter.className} mt-3 max-w-xl text-sm leading-7 text-slate-500`}>
                Every area has its own housing and its own quirks. Here&apos;s what we bring to bathrooms in {data.name}.
              </p>
            </div>
            <p className="hidden -rotate-3 font-serif text-xl italic leading-6 text-[#0B86EE] lg:block">
              Local knowledge,<br />better bathrooms.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {housing.map((h, i) => (
              <article
                key={h.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(11,134,238,0.10)] ring-1 ring-sky-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(11,134,238,0.20)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#38a8ff] to-[#0B86EE]" />
                <span
                  className={`${montserrat.className} pointer-events-none absolute -right-2 -top-4 text-8xl font-black text-sky-50 transition group-hover:text-sky-100`}
                >
                  0{i + 1}
                </span>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38a8ff] to-[#0B86EE] text-white shadow-lg shadow-[#0B86EE]/30">
                </div>
                <h3 className={`${montserrat.className} relative mt-5 text-lg font-bold ${NAVY}`}>{h.title}</h3>
                <p className={`${inter.className} relative mt-2 text-sm leading-7 text-slate-600`}>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SERVICES OFFERED ============================ */}
      <section className="bg-[#eaf3fc] pb-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="text-center">
            <Eyebrow center>Our Services</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-3xl font-extrabold md:text-4xl ${NAVY}`}>
              Services We Offer in {shortName}
            </h2>
            <p className={`${inter.className} mx-auto mt-3 max-w-lg text-sm text-slate-500`}>
              From first sketch to final finish, everything for your perfect bathroom under one roof.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.servicesOffered.map((service, i) => {
              const m = SERVICE_META[service] ?? {
                text: "Professional bathroom service from our local team.",
                icon: "M5 12l4 4 10-10",
                pos: `${(i * 20) % 100}% 50%`,
              };
              return (
                <Link
                  key={service}
                  href={`/services/${service.toLowerCase().replace(/ /g, "-")}-southampton`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(11,134,238,0.10)] ring-1 ring-sky-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(11,134,238,0.22)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Photo pos={m.pos} alt={service} sizes="(min-width:1024px) 33vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b33]/50 to-transparent" />
                  </div>
                  <div className="relative px-6 pb-6 pt-9">
                    <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#38a8ff] to-[#0B86EE] text-white shadow-lg ring-4 ring-white">
                      <Svg d={m.icon} className="h-5 w-5" />
                    </span>
                    <h3 className={`${montserrat.className} text-base font-bold ${NAVY}`}>{service}</h3>
                    <p className={`${inter.className} mt-2 min-h-[48px] text-[13px] leading-6 text-slate-500`}>{m.text}</p>
                    <span className={`${inter.className} mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0B86EE]`}>
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="text-center">
            <Eyebrow center>How We Work</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-3xl font-extrabold md:text-4xl ${NAVY}`}>
              Your New Bathroom in {shortName}, in 4 Simple Steps
            </h2>
          </div>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-sky-200 lg:block" />
            {PROCESS.map((p, i) => (
              <div key={p.title} className="relative flex flex-col items-center px-2 text-center">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-2 border-transparent border-l-[#0B86EE] border-t-[#0B86EE]" />
                  <span className="absolute inset-1.5 rounded-full border border-sky-200" />
                  <span className="absolute -left-1 top-1 z-10 rounded-full bg-[#0a3d7a] px-1.5 py-0.5 text-[9px] font-bold text-white">
                    0{i + 1}
                  </span>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0B86EE] shadow-lg ring-1 ring-sky-100">
                    <Svg d={p.icon} className="h-7 w-7" />
                  </span>
                </div>
                <h3 className={`${montserrat.className} mt-5 text-sm font-bold ${NAVY}`}>{p.title}</h3>
                <p className={`${inter.className} mt-2 max-w-[220px] text-xs leading-6 text-slate-500`}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY CHOOSE ============================ */}
      <section className="bg-[#eaf3fc] py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -bottom-3 -left-3 h-[92%] w-[92%] rounded-bl-[120px] rounded-tl-[40px] rounded-tr-[40px] border-b-[10px] border-l-[10px] border-[#0B86EE]" />
            <div className="relative h-[340px] overflow-hidden rounded-bl-[120px] rounded-br-[160px] rounded-tl-[40px] rounded-tr-[40px] shadow-2xl md:h-[400px]">
              <Image
                src={HERO_IMG}
                alt={`Bathroom fitted by UKB Bathrooms in ${shortName}`}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "60% 50%" }}
              />
            </div>
            <div className="absolute -right-2 bottom-6 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-sky-100">
              <p className={`${montserrat.className} text-2xl font-extrabold text-[#0B86EE]`}>5 Years</p>
              <p className={`${inter.className} text-[11px] text-slate-500`}>workmanship guarantee</p>
            </div>
          </div>

          <div>
            <Eyebrow>Why UKB Bathrooms</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-3xl font-extrabold leading-tight md:text-4xl ${NAVY}`}>
              Quality. Expertise. Reliability.
            </h2>
            <p className={`${inter.className} mt-4 max-w-lg text-sm leading-7 text-slate-600`}>
              We&apos;re more than just bathroom installers. We&apos;re your trusted local partner in creating beautiful,
              functional and long-lasting spaces across {data.name}.
            </p>

            <ul className="mt-6 space-y-3">
              {WHY.map((w) => (
                <li key={w} className={`${inter.className} flex items-start gap-3 text-sm text-slate-700`}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B86EE] text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B86EE]/30 transition hover:-translate-y-0.5 hover:bg-[#0A75D1]"
            >
              Get a Free Quote <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="bg-gradient-to-b from-[#eaf3fc] to-white py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-3xl font-extrabold leading-tight md:text-4xl ${NAVY}`}>
              Got Questions about {shortName}? We&apos;ve Got Answers.
            </h2>
            <p className={`${inter.className} mt-4 text-sm leading-7 text-slate-500`}>
              Can&apos;t find what you&apos;re looking for? Give us a call and we&apos;ll be happy to help.
            </p>
            <Link
              href="tel:+447838349520"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0B86EE] px-6 py-3 text-sm font-semibold text-[#0B86EE] transition hover:bg-[#0B86EE] hover:text-white"
            >
              Call +44 7838 349520
            </Link>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-white px-6 py-5 ring-1 transition ${
                    open ? "shadow-[0_12px_40px_rgba(11,134,238,0.15)] ring-[#0B86EE]/40" : "shadow-sm ring-sky-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3 className={`${montserrat.className} text-[15px] font-semibold ${NAVY}`}>{faq.question}</h3>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        open ? "rotate-180 bg-[#0B86EE] text-white" : "bg-sky-100 text-[#0B86EE]"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {open && <p className={`${inter.className} mt-4 text-sm leading-7 text-slate-600`}>{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ CTA BANNER ============================ */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#0b1b33] px-6 py-16 text-center shadow-2xl md:px-12">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0B86EE]/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#38a8ff]/20 blur-3xl" />
          <div className="relative">
            <Eyebrow center light>
              Free, No-Obligation Quote
            </Eyebrow>
            <h2 className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white md:text-4xl`}>
              Bathroom Services in {data.name}
            </h2>
            <p className={`${inter.className} mx-auto mt-4 max-w-lg text-white/80`}>
              Get a free, no-obligation quote for your bathroom project from your local experts.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0B86EE]/40 transition hover:-translate-y-0.5 hover:bg-[#0A75D1]"
              >
                Get a Free Quote
                <Icon name="calendar" className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+447838349520"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call +44 7838 349520
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CROSS-LINKS ============================ */}
      <section className="bg-[#eaf3fc] py-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Nearby</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-2xl font-extrabold ${NAVY}`}>Other Areas We Cover</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas-covered/${area.slug}`}
                  className={`${inter.className} group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-sky-100 transition hover:bg-[#0B86EE] hover:text-white hover:ring-[#0B86EE]`}
                >
                  {area.name.split(",")[0]}
                  <span className="text-[#0B86EE] transition group-hover:translate-x-0.5 group-hover:text-white">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Explore</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-2xl font-extrabold ${NAVY}`}>Our Services</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.values(servicesData).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`${inter.className} group flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-sky-100 transition hover:ring-[#0B86EE]`}
                >
                  <span>{service.meta.title.replace(" | UKB Bathrooms", "").replace(" Southampton", "")}</span>
                  <span className="text-[#0B86EE] transition group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}