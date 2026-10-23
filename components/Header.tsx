"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Icon from "./icon";
import { inter } from "./fonts";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

function Logo({ isAtTop }: { isAtTop: boolean }) {
  return (
    <Link href="/" aria-label="UKB Bathrooms home" className="relative flex items-center bg-transparent">
      {/* Colored logo: shown on the white header (after scrolling). Sets the size of the container. */}
      <Image
        src="/images/logo2.png"
        alt="UKB Bathrooms"
        width={200}
        height={100}
        priority
        className={`h-12 w-auto transition-opacity duration-300 ${isAtTop ? "opacity-0" : "opacity-100"}`}
      />
      {/* White logo: shown on the transparent header (at the top) */}
      <Image
        src="/images/logo1.png"
        alt="UKB Bathrooms white logo"
        aria-hidden="true"
        width={200}
        height={100}
        priority
        className={`absolute inset-0 h-12 w-auto transition-opacity duration-300 ${isAtTop ? "opacity-100" : "opacity-0"}`}
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [mounted] = useState(() => typeof window !== 'undefined');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const threshold = 10;
    let ticking = false;

    const update = () => {
      const scrollY = Math.max(window.scrollY, 0);
      const atTop = scrollY <= threshold;
      const goingDown = scrollY > lastScrollY.current;

      setIsAtTop(atTop);
      // hide only while scrolling down; show again on scroll up (with white bg + colored logo)
      setIsScrolledDown(goingDown && !atTop);
      lastScrollY.current = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <header
      className={`${inter.className} fixed inset-x-0 top-0 z-30 transition-all duration-300 ease-in-out ${
        prefersReducedMotion ? "translate-y-0" : (isScrolledDown ? "-translate-y-full" : "translate-y-0")
      } ${!isAtTop ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-6 lg:px-16">
        <Logo isAtTop={isAtTop} />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = mounted ? pathname === href : false;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                  active
                    ? "text-[#0B86EE]"
                    : isAtTop
                    ? "text-white hover:text-[#2F9BF5]"
                    : "text-[#0B86EE] hover:text-[#0847A5]"
                }`}
              >
                {label}
                {active && (
                  <span className={`absolute -bottom-5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full transition-colors ${
                    isAtTop ? "bg-[#2F9BF5]" : "bg-[#0B86EE]"
                  }`} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 ${
              isAtTop
                ? "bg-[#0B86EE] text-white shadow-[#0B86EE]/20 hover:bg-[#0A75D1] focus-visible:ring-white"
                : "bg-[#0B86EE] text-white shadow-[#0B86EE]/20 hover:bg-[#0847A5] focus-visible:ring-[#0B86EE]"
            }`}
          >
            <Icon name="calendar" className="h-4 w-4" />
            Get a Free Quote
          </Link>

          <button
            type="button"
            className={`lg:hidden p-2 transition-colors ${
              isAtTop ? "text-white" : "text-[#0B86EE]"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden mx-6 flex flex-col gap-1 rounded-2xl bg-[#071a33]/95 p-4 backdrop-blur"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={mounted && pathname === href ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-medium hover:bg-white/10 ${
                mounted && pathname === href ? "text-[#2F9BF5]" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#0B86EE] px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Get a Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}