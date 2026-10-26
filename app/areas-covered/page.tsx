import type { Metadata } from "next";
import Link from "next/link";
import { montserrat, inter } from "@/components/fonts";
import { areasData } from "@/Data/areasData";

export const metadata: Metadata = {
  title: "Areas Covered | UKB Bathrooms",
  description: "UKB Bathrooms serves Southampton and surrounding areas including Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton. Free quote. Call +44 7838 349520.",
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
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-transparent" />

        <div className="mx-auto flex min-h-[400px] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[500px] lg:px-16">
          <div className="max-w-2xl">
            <span className={`${inter.className} inline-block rounded-full bg-[#0B86EE]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#0B86EE]`}>
              Areas We Cover
            </span>

            <h1 className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px]`}>
              Bathroom Services in
              <br />
              <span className="text-[#2F9BF5]">Southampton & Hampshire</span>
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              Professional bathroom installation and renovation services across Southampton and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(areasData).map((area) => (
            <Link
              key={area.slug}
              href={`/areas-covered/${area.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0B86EE] hover:shadow-md"
            >
              <h3 className={`${montserrat.className} text-xl font-bold text-[#0b1b33]`}>
                {area.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {area.postcodes.map((postcode) => (
                  <span
                    key={postcode}
                    className={`${inter.className} rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600`}
                  >
                    {postcode}
                  </span>
                ))}
              </div>
              <p className={`${inter.className} mt-4 text-sm text-slate-600`}>
                {area.meta.description}
              </p>
              <span className={`${inter.className} mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B86EE] group-hover:gap-3 transition-all`}>
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Don't See Your Area?
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
