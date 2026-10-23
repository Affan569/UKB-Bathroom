import Link from "next/link";
import { montserrat, inter } from "@/components/fonts";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src="/images/hero.png"
          alt="UKB Bathrooms professional bathroom installation"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-[#0b1b33]/10" />

        <div className="mx-auto flex min-h-[70vh] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[80vh] lg:px-16">
          <div className="max-w-2xl">
            <p className={`${inter.className} text-[11px] font-medium tracking-[0.32em] text-[#2F9BF5] uppercase`}>
              Page Not Found
            </p>

            <h1
              className={`${montserrat.className} mt-6 text-5xl font-extrabold leading-[1.1] text-white md:text-7xl`}
            >
              404
            </h1>

            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90`}>
              We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B86EE] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                Go to Homepage
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#071a33]/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a33]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
