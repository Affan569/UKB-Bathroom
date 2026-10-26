"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, inter } from "./fonts";
import Icon from "./icon";
import ServiceBreadcrumb from "./ServiceBreadcrumb";
import ServiceSchema from "./ServiceSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import { servicesData, type ServicePageData } from "../Data/servicesData";
import { areasData } from "../Data/areasData";

interface ServiceTemplateProps {
  slug: string;
}

export default function ServiceTemplate({ slug }: ServiceTemplateProps) {
  const data = servicesData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return <div>Service not found</div>;
  }

  const breadcrumbSchemaItems = data.breadcrumbs.map(item => ({
    name: item.label,
    item: `https://ukbbathrooms.co.uk${item.href}`
  }));

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <ServiceSchema
        name={data.meta.title}
        description={data.meta.description}
        provider="UKB Bathrooms"
        areaServed={["Southampton", "Shirley", "Portswood", "Woolston", "Bitterne", "Eastleigh", "Totton"]}
      />

      {/* Breadcrumb */}
      <ServiceBreadcrumb items={data.breadcrumbs} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src={data.hero.image}
          alt="UKB Bathrooms professional bathroom services"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-transparent" />

        <div className="mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[600px] lg:px-16">
          <div className="max-w-2xl">
            <span className={`${inter.className} inline-block rounded-full bg-[#0B86EE]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#0B86EE]`}>
              {data.hero.badge}
            </span>

            <h1
              className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}
            >
              {data.hero.title}
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              {data.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                {data.hero.ctaPrimary}
                <Icon name="calendar" className="h-4 w-4" />
              </Link>

              <Link
                href="tel:+447838349520"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                {data.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.overview.highlights.map((highlight, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B86EE]/10 text-[#0B86EE]">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <p className={`${inter.className} mt-4 text-sm font-medium text-slate-900`}>
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
                Why Choose UKB Bathrooms?
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                {data.overview.intro}
              </p>
            </div>

            <div className="space-y-6">
              {data.overview.bulletPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B86EE] text-white">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className={`${montserrat.className} text-lg font-semibold text-[#0b1b33]`}>
                      {point.title}
                    </h3>
                    <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
              Our Installation Process
            </h2>
            <p className={`${inter.className} mt-4 text-slate-600`}>
              Simple, transparent, and professional
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B86EE] text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className={`${montserrat.className} mt-4 text-lg font-semibold text-[#0b1b33]`}>
                  {step.title}
                </h3>
                <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Scope */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
              Pricing & Scope
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <p className={`${inter.className} text-sm text-slate-600`}>Starting From</p>
                <p className={`${montserrat.className} mt-2 text-2xl font-bold text-[#0B86EE]`}>
                  {data.pricingScope.startingPrice}
                </p>
              </div>
              <div>
                <p className={`${inter.className} text-sm text-slate-600`}>Typical Timeline</p>
                <p className={`${montserrat.className} mt-2 text-2xl font-bold text-[#0b1b33]`}>
                  {data.pricingScope.timeline}
                </p>
              </div>
              <div>
                <p className={`${inter.className} text-sm text-slate-600`}>Workmanship Guarantee</p>
                <p className={`${montserrat.className} mt-2 text-2xl font-bold text-[#0B86EE]`}>
                  5 Years
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className={`${montserrat.className} text-lg font-semibold text-[#0b1b33]`}>
                What's Included
              </h3>
              <ul className={`${inter.className} mt-4 grid gap-2 md:grid-cols-2`}>
                {data.pricingScope.whatIsIncluded.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-[#0B86EE]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-center text-[#0b1b33]`}>
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className={`${montserrat.className} text-lg font-semibold text-[#0b1b33]`}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-6 w-6 text-slate-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <p className={`${inter.className} mt-4 text-slate-600`}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0b1b33] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>
            Ready to Start Your Project?
          </h2>
          <p className={`${inter.className} mt-4 text-white/80`}>
            Get a free, no-obligation quote for your bathroom project.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1]"
          >
            Get a Free Quote
            <Icon name="calendar" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Areas Cross-link */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-center text-[#0b1b33]`}>
            Areas We Cover
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {Object.values(areasData).slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                href={`/areas-covered/${area.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:border-[#0B86EE] hover:shadow-md"
              >
                <p className={`${inter.className} font-medium text-slate-900`}>
                  {area.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
