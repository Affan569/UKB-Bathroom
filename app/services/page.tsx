import type { Metadata } from "next";
import Link from "next/link";
import { montserrat, inter } from "@/components/fonts";
import Image from "next/image";
import { servicesData } from "@/Data/servicesData";

export const metadata: Metadata = {
  title: "Services | UKB Bathrooms",
  description: "Professional bathroom services in Southampton. Installation, renovation, wet rooms, ensuites, design, and tiling. Free quote. Call +44 7838 349520.",
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
    <main className="min-h-screen bg-white text-slate-800">
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

        <div className="mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[600px] lg:px-16">
          <div className="max-w-2xl">
            <span className={`${inter.className} inline-block rounded-full bg-[#0B86EE]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#0B86EE]`}>
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

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(servicesData).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="aspect-video w-full bg-slate-100">
                <Image
                  src={service.hero.image}
                  alt={service.meta.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className={`${inter.className} inline-block rounded-full bg-[#0B86EE]/10 px-3 py-1 text-[11px] font-semibold text-[#0B86EE]`}>
                  {service.hero.badge}
                </span>
                <h3 className={`${montserrat.className} mt-3 text-xl font-bold text-[#0b1b33]`}>
                  {service.meta.title.replace(" | UKB Bathrooms", "")}
                </h3>
                <p className={`${inter.className} mt-2 text-sm text-slate-600`}>
                  {service.meta.description}
                </p>
                <span className={`${inter.className} mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B86EE] group-hover:gap-3 transition-all`}>
                  Learn More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
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
    </main>
  );
}
