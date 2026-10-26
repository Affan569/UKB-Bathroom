import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { montserrat, inter } from "@/components/fonts";
import { areasData } from "@/Data/areasData";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Areas Covered | UKB Bathrooms",
  description: "UKB Bathrooms serves Southampton and surrounding areas including Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton. Free quote. Call +44 7838 349520.",
  keywords: "bathroom fitters Shirley, bathroom fitters Portswood, bathroom fitters Woolston, bathroom fitters Bitterne, bathroom fitters Eastleigh, bathroom fitters Totton, bathroom fitters Hedge End, bathroom fitters Chandler's Ford, bathroom fitters Romsey, bathroom fitters Southampton, bathroom installation Southampton, bathroom renovation Southampton",
  openGraph: {
    title: "Areas Covered | UKB Bathrooms - Service Areas in Hampshire",
    description: "UKB Bathrooms serves Southampton and surrounding areas including Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton.",
    url: "https://ukbbathrooms.co.uk/areas-covered",
  },
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/areas-covered",
  },
};

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero.png"
            alt="Bathroom renovation and installation in Southampton"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/95 via-[#0b1b33]/80 to-[#0b1b33]/50" />

        <div className="mx-auto flex min-h-[400px] max-w-[1280px] items-center px-6 pb-12 pt-36 md:min-h-[500px] lg:px-8">
          <div className="max-w-2xl">
            <span className={`${inter.className} inline-flex items-center gap-2 rounded-full bg-[#0B86EE]/20 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[#2F9BF5] backdrop-blur-sm border border-[#0B86EE]/30`}>
              Areas We Cover
            </span>

            <h1 className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}>
              Bathroom Services in
              <br />
              <span className="text-[#2F9BF5]">Southampton</span>
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              Professional bathroom installation and renovation services across Southampton and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 bg-white">
        <h2 className={`${montserrat.className} text-[32px] font-bold text-[#0b1b33] mb-10`}>
          Areas we cover in Southampton
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(areasData).map((area) => (
            <Link
              key={area.slug}
              href={`/areas-covered/${area.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Map Pin Icon */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-[#0B86EE]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className={`${montserrat.className} mt-5 text-xl font-bold text-[#0b1b33]`}>
                  {area.name}
                </h3>

                <span className={`${inter.className} mt-1 inline-block text-[11px] font-bold uppercase tracking-widest text-slate-400`}>
                  SOUTHAMPTON
                </span>

                <p className={`${inter.className} mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3`}>
                  {area.meta.description}
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

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className={`${montserrat.className} text-3xl font-bold text-[#0b1b33]`}>
            Don&apos;t See Your Area?
          </h2>
          <p className={`${inter.className} mt-4 text-slate-600`}>
            Contact us to check if we serve your location in Hampshire.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}