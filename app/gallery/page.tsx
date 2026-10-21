"use client";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
// app/gallery/page.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryItem,
} from "@/Data/gallery";

/* ---------- tiny inline icons (no extra packages needed) ---------- */
const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);
const ICONS = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  close: "M6 6l12 12M18 6L6 18",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  pin: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  shield: "M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6l8-3zM9 12l2 2 4-4",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  wrench: "M14.7 6.3a4 4 0 005 5L21 10l-3-3-1.3 1.3zM13 11l-9 9 2 2 9-9",
  drop: "M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z",
  tile: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  check: "M5 12l5 5 9-10",
};

const filterIcon: Record<string, string> = {
  All: ICONS.grid,
  "Bathroom Plumbing": ICONS.wrench,
  "Bathroom Designing": ICONS.drop,
  "Bathroom Tiling": ICONS.tile,
};

/* ---------- bento layout: item 0 of every 9 is the big card ---------- */
function cardSpan(index: number) {
  const pos = index % 9;
  if (pos === 0) return "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2";
  return "col-span-1 row-span-1";
}

export default function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Update metadata for client component
  useEffect(() => {
    document.title = "Gallery | UKB Bathrooms - Our Completed Bathroom Projects";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse our bathroom installation gallery showcasing our completed projects. See the quality and craftsmanship of UKB Bathrooms' work across the UK.");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://ukbbathrooms.co.uk/gallery");
    }

    // Add breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ukbbathrooms.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://ukbbathrooms.co.uk/gallery"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const items = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active]
  );

  const open = (item: GalleryItem) => {
    setSelected(item);
    setImgIndex(0);
  };
  const close = useCallback(() => setSelected(null), []);
  const next = useCallback(
    () => selected && setImgIndex((i) => (i + 1) % selected.images.length),
    [selected]
  );
  const prev = useCallback(
    () =>
      selected &&
      setImgIndex((i) => (i - 1 + selected.images.length) % selected.images.length),
    [selected]
  );

  // keyboard + scroll lock while the popup is open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, close, next, prev]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <img
          src="/images/gallery 1.png"
          alt="UKB Bathrooms gallery showcasing professional bathroom installations"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-20 md:py-28 lg:px-10">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="h-px w-10 bg-sky-400" />
            Our Work
          </div>

          <h1 className="text-6xl font-extrabold leading-none text-white md:text-8xl animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Gal<span className="text-sky-500">lery</span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-slate-300 md:text-base animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            Explore our latest projects and see the quality, precision and care we
            bring to every bathroom and plumbing solution.
          </p>

          <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-200">
            {[
              { l: "Quality Workmanship", i: ICONS.shield },
              { l: "On-Time Delivery", i: ICONS.clock },
              { l: "Trusted Experts", i: ICONS.star },
            ].map((b) => (
              <li key={b.l} className="flex items-center gap-2">
                <Icon d={b.i} className="h-5 w-5 text-sky-400" />
                {b.l}
              </li>
            ))}
          </ul>
        </div>

        <p className="absolute bottom-6 right-8 hidden text-right font-serif text-xl italic text-white/90 md:block">
          Better Bathrooms,
          <br />
          Brighter Homes
        </p>
      </section>

      {/* ================= CATEGORY BAR ================= */}
      <section className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4 lg:justify-center lg:px-10">
          {galleryCategories.map((c) => {
            const on = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={on}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition
                  ${on
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600"}`}
              >
                <Icon d={filterIcon[c]} className="h-4 w-4" />
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {items.length === 0 ? (
          <p className="py-24 text-center text-slate-500">
            No projects in this category yet. Check back soon.
          </p>
        ) : (
          <div className="grid auto-rows-[190px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4 md:auto-rows-[230px]">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => open(item)}
                className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left shadow-sm outline-none ring-sky-500 transition hover:shadow-xl focus-visible:ring-2 ${cardSpan(index)}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                {item.images.length > 1 && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    {item.images.length} photos
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-300">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-white md:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <Icon
                    d={ICONS.arrow}
                    className="h-5 w-5 shrink-0 text-white transition group-hover:translate-x-1"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              <span className="h-px w-8 bg-sky-500" />
              Our Gallery
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Quality Work <br />
              <span className="text-sky-500">You Can See</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              From modern bathroom upgrades to essential plumbing repairs, our
              gallery showcases the standards we’re proud to deliver.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
            >
              Get a Free Quote
              <Icon d={ICONS.arrow} className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mx-auto h-64 w-full max-w-sm">
            <img
              src={galleryItems[0].images[0]}
              alt="UKB Bathrooms completed bathroom project example"
              className="absolute left-0 top-4 h-52 w-44 -rotate-6 rounded-xl border-4 border-white object-cover shadow-xl"
            />
            <img
              src={galleryItems[4].images[0]}
              alt="UKB Bathrooms bathroom renovation completed project"
              className="absolute right-0 top-12 h-52 w-40 rotate-6 rounded-xl border-4 border-white object-cover shadow-xl"
            />
            <p className="absolute -top-2 right-2 -rotate-6 text-right font-serif text-lg italic text-sky-700">
              Real Projects,
              <br />
              Real Results
            </p>
          </div>

          <dl className="grid gap-5">
            {[
              { v: "1000+", l: "Projects Completed", i: ICONS.check },
              { v: "5 ★", l: "Customer Rated", i: ICONS.star },
              { v: "24/7", l: "Emergency Support", i: ICONS.phone },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Icon d={s.i} />
                </span>
                <div>
                  <dt className="text-2xl font-bold">{s.v}</dt>
                  <dd className="text-sm text-slate-500">{s.l}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
           <div
            className="relative grid h-[92vh] w-full max-w-5xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-3xl bg-white shadow-2xl md:h-[65vh] md:grid-cols-[1.5fr_1fr] md:grid-rows-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow transition hover:bg-white"
            >
              <Icon d={ICONS.close} />
            </button>

            {/* images */}
            <div className="flex min-h-0 flex-col bg-slate-950">
              <div className="relative h-[40vh] w-full min-h-0 md:h-auto md:flex-1">
                <img
                  key={selected.images[imgIndex]}
                  src={selected.images[imgIndex]}
                  alt={`${selected.title} – photo ${imgIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-contain"
                />
                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                    >
                      <Icon d={ICONS.left} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                    >
                      <Icon d={ICONS.right} />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                      {imgIndex + 1} / {selected.images.length}
                    </span>
                  </>
                )}
              </div>

              {selected.images.length > 1 && (
                <div className="flex shrink-0 gap-2 overflow-x-auto bg-slate-900 p-3">
                  {selected.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setImgIndex(i)}
                      aria-label={`Show photo ${i + 1}`}
                      className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                        i === imgIndex ? "border-sky-400" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt={`${selected.title} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* details */}
            <div className="flex min-h-0 flex-col gap-5 overflow-y-auto p-7 md:p-8">
              <span className="w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                {selected.category}
              </span>
              <h2 className="text-2xl font-bold leading-snug">{selected.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {selected.description}
              </p>

              <a
                href="/#contact"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
              >
                Get a Free Quote
                <Icon d={ICONS.arrow} className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
      <BackToTop />
    </main>
  );
}