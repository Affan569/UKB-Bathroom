import Link from "next/link";
import Icon from "./icon";

export default function QuoteCard() {
  return (
    <div className="relative z-10 w-full rounded-2xl bg-white p-6 shadow-2xl shadow-black/30 lg:w-80 lg:shrink-0 lg:-mr-6">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DCEEFD] text-[#0B86EE]">
          <Icon name="calendar" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight text-[#0b1b33]">Get Your Free Quote</h2>
          <p className="mt-1 text-xs leading-snug text-slate-500">
            Quick, no obligation, and tailored to your needs.
          </p>
        </div>
      </div>

      <Link
        href="#contact"
        className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full bg-[#0B86EE] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A75D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B86EE] focus-visible:ring-offset-2"
      >
        Request a Quote
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
      </Link>
    </div>
  );
}