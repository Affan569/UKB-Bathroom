import type { Metadata } from "next";
import Link from "next/link";
import { montserrat, inter } from "@/components/fonts";
import Image from "next/image";
import Header from "@/components/Header";
import { servicesData } from "@/Data/servicesData";

export const metadata: Metadata = {
  title: "Services | UKB Bathrooms",
  description: "Professional bathroom services in Southampton. Installation, renovation, wet rooms, ensuites, design, and tiling. Free quote. Call +44 7838 349520.",
  keywords: "bathroom installation Southampton, bathroom renovation Southampton, wet room installation Southampton, wet room fitters Southampton, ensuite bathroom installation Southampton, bathroom tiling Southampton, bathroom design Southampton, 3D bathroom design, walk-in shower installation Southampton, bathroom suppliers and fitters Southampton, small bathroom renovation Southampton, bath to shower conversion Southampton",
  openGraph: {
    title: "Services | UKB Bathrooms - Bathroom Services in Southampton",
    description: "Professional bathroom services in Southampton. Installation, renovation, wet rooms, ensuites, design, and tiling.",
    url: "https://ukbbathrooms.co.uk/services",
  },
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      {/* Hero */}
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

        <div className="mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 pb-16 pt-24 md:min-h-[600px] lg:px-16">
          <div className="max-w-2xl">
            <span className={`${inter.className} inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0B86EE]`}>
              Our Services
            </span>
            <h1 className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}>
              Bathroom Services in
              <br />
              <span className="text-[#2F9BF5]">Southampton</span>
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              Complete bathroom solutions from design to installation. Professional services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with 32px Heading */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-12 bg-white">
        <h2 className={`${montserrat.className} text-[32px] font-bold text-[#0b1b33] mb-4`}>
          SERVICES WE<span className="text-[#0B86EE]"> OFFER</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(servicesData).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Icon wrapper styling matching reference */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-[#0B86EE]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                <h3 className={`${montserrat.className} mt-5 text-xl font-bold text-[#0b1b33]`}>
                  {service.meta.title.replace(" | UKB Bathrooms", "")}
                </h3>

                <span className={`${inter.className} mt-1 inline-block text-[11px] font-bold uppercase tracking-widest text-slate-400`}>
                  SOUTHAMPTON
                </span>

                <p className={`${inter.className} mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3`}>
                  {service.meta.description}
                </p>
              </div>

              <span className={`${inter.className} mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B86EE] group-hover:text-[#0A75D1]`}>
                Learn More
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
            Ready to Start Your Project?
          </h2>
          <p className={`${inter.className} mt-4 text-slate-600`}>
            Get a free, no-obligation quote for your bathroom project.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}