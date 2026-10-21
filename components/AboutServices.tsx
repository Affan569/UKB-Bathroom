'use client';

import Image from "next/image";
import Icon from "./icon";
import { inter, montserrat } from "./fonts";
import { ICONS } from "./icon";
import { useEffect, useRef, useState } from "react";

type ServiceIcon = keyof typeof ICONS | "diamond";

const SERVICES: {
  icon: ServiceIcon;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    icon: "grid",
    title: "Bathroom Design",
    description: "3D designs tailored to your space and style.",
    image: "/images/design.jpg",
  },
  {
    icon: "bath",
    title: "Bathroom Supply",
    description: "Premium quality fittings & fixtures.",
    image: "/images/supply.jpg",
  },
  {
    icon: "tools",
    title: "Installation",
    description: "Skilled professionals, flawless finish.",
    image: "/images/installation.jpg",
  },
  {
    icon: "layout",
    title: "Tiling",
    description: "Perfect tiles for a polished look.",
    image: "/images/tiling.jpg",
  },
  {
    icon: "diamond",
    title: "Bathroom Renovation",
    description: "Upgrade your space, add more value.",
    image: "/images/bathroom renovetion.jpg",
  },
];

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20" />
      <path d="m12 21-4-12 3-6" />
      <path d="m12 21 4-12-3-6" />
    </svg>
  );
}

function ServiceIconView({ name, className }: { name: ServiceIcon; className?: string }) {
  if (name === "diamond") return <DiamondIcon className={className} />;
  return <Icon name={name} className={className} />;
}

export default function AboutServices() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(SERVICES.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setCardsVisible(prev => {
            const newVisible = [...prev];
            newVisible[index] = entry.isIntersecting;
            return newVisible;
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <section
      className={`${inter.className} relative overflow-hidden bg-[#04152b] py-14 lg:py-16`}
    >
      {/* Soft base glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071f3d]/60 via-transparent to-transparent" />

      {/* Increased container max-width for wider cards */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className={`mb-10 text-center scroll-reveal ${headingVisible ? 'visible' : ''}`}>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">
            Our Services
          </p>
          <h2
            className={`${montserrat.className} mb-3 text-3xl font-bold text-white sm:text-4xl`}
          >
            Complete <span className="text-[#1E9BF0]">Bathroom Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-[15px]">
            From design to installation, we offer a full range of services to
            create your perfect bathroom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              ref={el => { cardRefs.current[index] = el; }}
              // Increased height from h-[190px] / lg:h-[180px] to h-[220px] / lg:h-[210px]
              className={`group relative h-[220px] overflow-hidden rounded-2xl border border-[#1E6FD9]/70 bg-[#04152b] shadow-[0_0_18px_rgba(30,111,217,0.18)] transition-all duration-300 hover:border-[#2F9BF5] hover:shadow-[0_0_26px_rgba(47,155,245,0.35)] lg:h-[210px] scroll-reveal-scale ${cardsVisible[index] ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Lighter gradient overlay (reduced opacity from /15 to /05) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3555]/05 via-transparent to-transparent" />
              
              {/* Photo on the right, fading into card */}
              <div className="absolute inset-y-0 right-0 w-[62%]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Lighter horizontal image fade gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061c38]/90 via-[#061c38]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full max-w-[68%] flex-col justify-between p-5">
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3A78]">
                    <ServiceIconView
                      name={service.icon}
                      className="h-5 w-5 text-[#2F9BF5]"
                    />
                  </div>

                  <h3 className="mb-1 text-[15px] font-semibold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-[12px] leading-snug text-white/75">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2F9BF5] transition-all hover:text-white group-hover:gap-2.5"
                >
                  Learn More
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}