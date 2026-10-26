"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { montserrat, inter } from "./fonts";
import Icon from "./icon";
import ServiceBreadcrumb from "./ServiceBreadcrumb";
import BreadcrumbSchema from "./BreadcrumbSchema";
import { areasData, type AreaPageData } from "../Data/areasData";
import { servicesData } from "../Data/servicesData";

interface AreaTemplateProps {
  slug: string;
}

export default function AreaTemplate({ slug }: AreaTemplateProps) {
  const data = areasData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return <div>Area not found</div>;
  }

  const breadcrumbSchemaItems = data.breadcrumbs.map(item => ({
    name: item.label,
    item: `https://ukbbathrooms.co.uk${item.href}`
  }));

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <BreadcrumbSchema items={breadcrumbSchemaItems} />

      {/* Breadcrumb */}
      <ServiceBreadcrumb items={data.breadcrumbs} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src="/images/Hero.png"
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
              Local Bathroom Experts
            </span>

            <h1
              className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}
            >
              {data.hero.headline}
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              {data.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1]"
              >
                Get a Free Quote
                <Icon name="calendar" className="h-4 w-4" />
              </Link>

              <Link
                href="tel:+447838349520"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Call +44 7838 349520
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Postcodes */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
        <div className="flex flex-wrap gap-2">
          {data.postcodes.map((postcode) => (
            <span
              key={postcode}
              className={`${inter.className} rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700`}
            >
              {postcode}
            </span>
          ))}
        </div>
      </section>

      {/* Housing Speciality */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
            Local Housing Expertise
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B86EE]/10 text-[#0B86EE]">
                <Icon name="home" className="h-6 w-6" />
              </div>
              <h3 className={`${montserrat.className} mt-4 text-lg font-semibold text-[#0b1b33]`}>
                Property Types
              </h3>
              <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                {data.housingSpeciality.propertyTypes}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B86EE]/10 text-[#0B86EE]">
                <Icon name="wrench" className="h-6 w-6" />
              </div>
              <h3 className={`${montserrat.className} mt-4 text-lg font-semibold text-[#0b1b33]`}>
                Plumbing Challenges
              </h3>
              <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                {data.housingSpeciality.plumbingChallenges}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B86EE]/10 text-[#0B86EE]">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <h3 className={`${montserrat.className} mt-4 text-lg font-semibold text-[#0b1b33]`}>
                Local Insight
              </h3>
              <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                {data.housingSpeciality.localInsight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
            Services We Offer in {data.name}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.servicesOffered.map((service) => (
              <Link
                key={service}
                href={`/services/${service.toLowerCase().replace(/ /g, '-')}-southampton`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0B86EE] hover:shadow-md"
              >
                <p className={`${montserrat.className} font-semibold text-[#0b1b33]`}>
                  {service}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
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
            Bathroom Services in {data.name}
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

      {/* Services Cross-link */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-center text-[#0b1b33]`}>
            Our Services
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(servicesData).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:border-[#0B86EE] hover:shadow-md"
              >
                <p className={`${inter.className} font-medium text-slate-900`}>
                  {service.meta.title.replace(" | UKB Bathrooms", "")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
