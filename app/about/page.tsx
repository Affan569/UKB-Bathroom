// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { ReactNode, ImgHTMLAttributes } from "react";
import Header from "@/components/Header";
import { inter, montserrat } from "@/components/fonts";
import BackToTop from "@/components/BackToTop";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about UKB Bathrooms - your trusted bathroom experts with 15+ years of experience. Discover our story, values, and commitment to quality bathroom services across the UK.",
  keywords: ["about UKB Bathrooms", "bathroom company UK", "bathroom fitters", "bathroom installation experts", "UK bathroom services"],
  openGraph: {
    title: "About Us | UKB Bathrooms - Your Trusted Bathroom Experts",
    description: "Learn about UKB Bathrooms - your trusted bathroom experts with 15+ years of experience serving homes and businesses across the UK.",
    url: "https://ukbbathrooms.co.uk/about",
  },
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/about",
  },
};

const NAVY = "#0b1b33";
const BLUE = "#0B86EE";
const LIGHT_BLUE = "#2F9BF5";
const SCRIPT_FONT = "'Brush Script MT', 'Segoe Script', cursive";

/* ---------- Icons ---------- */

type IconProps = { className?: string };

const Svg = ({ className = "h-6 w-6", children }: { className?: string; children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ShieldCheck = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </Svg>
);
const Users = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M17 14c2.2 0 4 1.8 4 4" />
  </Svg>
);
const Handshake = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M2 11l4-4 5 1 3-2 6 5-3 5-4 2-3-1-3 1-5-5z" />
    <path d="M10 14l2 2M13 12l2 2" />
  </Svg>
);
const Clock = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);
const Star = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
  </Svg>
);
const Home = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M3 11l9-8 9 8" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </Svg>
);
const Building = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" />
  </Svg>
);
const Wrench = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M14.5 6.5a4 4 0 005 5l-9.8 9.8a2 2 0 01-2.8-2.8L16.7 8.7" />
    <path d="M14.5 6.5l3-3 3 3-3 3" />
  </Svg>
);
const Phone = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Svg>
);
const Arrow = ({ className = "h-4 w-4" }: IconProps) => (
  <Svg className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
const CheckCircle = () => (
  <span
    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
    style={{ background: NAVY }}
  >
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  </span>
);

const Eyebrow = ({ children, light = false, className = "", style = {} }: { children: ReactNode; light?: boolean; className?: string; style?: React.CSSProperties }) => (
  <div className={`${inter.className} flex items-center gap-3 ${className}`} style={style}>
    <span className="h-0.5 w-9" style={{ background: BLUE }} />
    <span
      className="text-[11px] font-semibold uppercase tracking-wider"
      style={{ color: light ? "#fff" : NAVY }}
    >
      {children}
    </span>
  </div>
);

// Fixed Logo component with proper TypeScript typing
interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
}

const Logo = ({ src = "/images/logo1.png", alt = "Company Logo", className = "h-11 w-auto", ...props }: LogoProps) => (
  <img src={src} alt={alt} className={className} {...props} />
);

/* ---------- Data ---------- */

const HERO_FEATURES = [
  { icon: <ShieldCheck className="h-7 w-7" />, label: ["Reliable", "Service"] },
  { icon: <Users className="h-7 w-7" />, label: ["Skilled", "Professionals"] },
  { icon: <Handshake className="h-7 w-7" />, label: ["Customer", "Satisfaction"] },
];

const STATS = [
  { icon: <Users className="h-8 w-8" />, value: "1000+", label: "Happy Customers" },
  { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Emergency Support" },
  { icon: <Star className="h-8 w-8" />, value: "5 Star", label: "Rated Service" },
  { icon: <Home className="h-8 w-8" />, value: "15+", label: "Years of Experience" },
];

const WHY = [
  "Fast Response Times",
  "Competitive Pricing",
  "Clean & Tidy Workmanship",
  "Friendly & Professional Team",
];

const SERVICES = [
  { icon: <Home className="h-7 w-7" />, label: ["Bathroom", "Design"] },
  { icon: <Building className="h-7 w-7" />, label: ["Complete", "Renovation"] },
  { icon: <ShieldCheck className="h-7 w-7" />, label: ["Quality", "Installation"] },
  { icon: <Wrench className="h-7 w-7" />, label: ["Repairs &", "Maintenance"] },
];

/* ---------- Page ---------- */

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", item: "https://ukbbathrooms.co.uk" },
    { name: "About Us", item: "https://ukbbathrooms.co.uk/about" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src="/images/about hero.png"
          alt="UKB Bathrooms fitter working on a bathroom installation"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-[#0b1b33]/10 md:via-[#0b1b33]/45"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[600px] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[700px] lg:px-16">
          <div className="max-w-xl">
            <Eyebrow light style={{ animationDelay: '0.1s', opacity: 0 }} className="animate-fade-in-up">About Us</Eyebrow>
            <h1
              className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px] animate-fade-in-up`}
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Your Trusted
              <br />
              <span style={{ color: LIGHT_BLUE }}>Bathroom Experts</span>
            </h1>
            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90 animate-fade-in-up`} style={{ animationDelay: '0.3s', opacity: 0 }}>
              At UKB Bathrooms we fit, repair and renovate bathrooms for homes and businesses across the UK.
              We turn up on time, do the job properly and leave the place clean.
            </p>
            <ul className="mt-9 flex flex-wrap items-center gap-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {HERO_FEATURES.map((f, i) => (
                <li
                  key={f.label.join()}
                  className={`flex items-center gap-3 pr-5 text-white ${i > 0 ? "border-l border-white/30 pl-5" : ""}`}
                >
                  <span style={{ color: LIGHT_BLUE }}>{f.icon}</span>
                  <span className={`${inter.className} text-xs leading-4 text-white/90`}>
                    {f.label[0]}
                    <br />
                    {f.label[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-16">
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h2
            className={`${montserrat.className} mt-6 text-3xl font-extrabold leading-tight md:text-[38px]`}
            style={{ color: NAVY }}
          >
            Local Service.
            <br />
            <span style={{ color: BLUE }}>Professional Results.</span>
          </h2>
          <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-slate-600`}>
            UKB Bathrooms started with a simple aim: fair prices and good work for people in our local area.
            Over the years we have built our name on doing the job right the first time.
          </p>
          <p className="mt-8 text-[34px] italic" style={{ color: NAVY, fontFamily: SCRIPT_FONT }}>
            UKB Bathrooms
          </p>
          <p className={`${inter.className} mt-3 text-[11px] uppercase tracking-[0.25em]`} style={{ color: BLUE }}>
            Quality &nbsp;/&nbsp; Trust &nbsp;/&nbsp; Long Term Solutions
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] pb-10 md:pb-0">
          <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[24px] shadow-xl">
            <Image
              src="/images/about 2.png"
              alt="Bathroom fitter at work"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-4 w-[44%] rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(11,42,91,0.18)] md:bottom-auto md:right-[-28px] md:top-[42%] md:w-[38%]">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ background: BLUE }}
            >
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className={`${montserrat.className} mt-3 text-[14px] font-bold leading-5`} style={{ color: NAVY }}>
              Fully Insured
              <br />&amp; Certified
            </h3>
            <p className={`${inter.className} mt-1.5 text-[11px] leading-4 text-slate-500`}>
              Your home and business are in safe hands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="grid grid-cols-2 rounded-2xl bg-[#f3f7fc] py-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center px-4 py-3 text-center ${
                i > 0 ? "md:border-l md:border-slate-200" : ""
              }`}
            >
              <span style={{ color: NAVY }}>{s.icon}</span>
              <span className={`${montserrat.className} mt-2 text-3xl font-extrabold`} style={{ color: NAVY }}>
                {s.value}
              </span>
              <span className={`${inter.className} mt-1 text-sm text-slate-600`}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2 lg:px-16">
        <div>
          <Eyebrow>Why Choose UKB Bathrooms</Eyebrow>
          <h2
            className={`${montserrat.className} mt-6 text-3xl font-extrabold leading-tight md:text-[36px]`}
            style={{ color: NAVY }}
          >
            We Look After
            <br />
            <span style={{ color: BLUE }}>Every Customer</span>
          </h2>
          <p className={`${inter.className} mt-5 max-w-md text-[15px] leading-7 text-slate-600`}>
            Whether it is a small repair or a full renovation, you get the same care and attention to detail.
            We want you to be happy with your bathroom long after we have left.
          </p>
          <ul className="mt-7 grid max-w-lg gap-x-6 gap-y-4 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w} className={`${inter.className} flex items-center gap-3 text-sm text-slate-700`}>
                <CheckCircle />
                {w}
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className={`${inter.className} mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90`}
            style={{ background: NAVY }}
          >
            Get a Free Quote <Arrow />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div
            className="absolute -left-4 top-4 h-[92%] w-[90%] rounded-[28px]"
            style={{ background: "#dcecf9", transform: "rotate(-3deg)" }}
          />
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] shadow-xl">
            <Image
              src="/images/about 3.png"
              alt="UKB Bathrooms team member"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-24 right-0 hidden rotate-[-8deg] md:block">
            <p className="text-2xl leading-7" style={{ color: BLUE, fontFamily: SCRIPT_FONT }}>
              Bathrooms
              <br />
              Done Right!
            </p>
            <svg viewBox="0 0 120 12" className="ml-auto mt-1 h-3 w-28" fill="none" stroke={BLUE} strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="M2 8c30-8 70-8 116-2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services banner */}
      <section style={{ background: NAVY }}>
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-6 py-9 text-white lg:grid-cols-[1fr_2fr] lg:px-16">
          <div>
            <Eyebrow light>Our Services</Eyebrow>
            <h2 className={`${montserrat.className} mt-3 text-xl font-bold leading-7`}>
              Trusted by Homes
              <br />
              and Businesses <span style={{ color: LIGHT_BLUE }}>Across the UK</span>
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
            {SERVICES.map((p, i) => (
              <li
                key={p.label.join()}
                className={`flex flex-col items-center px-3 text-center ${i > 0 ? "md:border-l md:border-white/20" : ""}`}
              >
                <span className="text-[#9fd3f7]">{p.icon}</span>
                <span className={`${inter.className} mt-2 text-xs font-semibold leading-4`}>
                  {p.label[0]}
                  <br />
                  {p.label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 py-10 lg:px-16">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#f3f7fc] px-8 py-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-5">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
              style={{ background: NAVY }}
            >
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <h3 className={`${montserrat.className} text-lg font-bold`} style={{ color: NAVY }}>
                Need Bathroom Help?
              </h3>
              <p className={`${inter.className} text-[13px] text-slate-600`}>
                Get in touch for a free quote. No obligation.
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className={`${inter.className} inline-flex items-center gap-2 rounded-full px-8 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90`}
            style={{ background: NAVY }}
          >
            Contact Us <Arrow />
          </Link>

        </div>
      </section>
      <BackToTop />
    </main>
  );
}