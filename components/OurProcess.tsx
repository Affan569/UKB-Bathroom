'use client';

import Icon from "./icon";
import { inter, montserrat } from "./fonts";
import { ICONS } from "./icon";
import { useEffect, useRef, useState } from "react";

const STEPS: {
  number: string;
  icon: keyof typeof ICONS;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: "calendar",
    title: "Fill Our Form & Get Consultation",
    description: "Tell us about your ideas and requirements. We'll get back to you with expert advice and a free quote.",
  },
  {
    number: "02",
    icon: "shield",
    title: "Our Expert Will Visit",
    description: "Our team will visit your home, take measurements and discuss your needs in detail.",
  },
  {
    number: "03",
    icon: "star",
    title: "We Will Design For You",
    description: "We create a tailored 3D design that brings your dream bathroom to life.",
  },
  {
    number: "04",
    icon: "tools",
    title: "Make It Happen",
    description: "We handle everything — from supply to installation — and deliver a stunning finish.",
  },
];

export default function OurProcess() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(STEPS.length).fill(false));

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
    <section className={`${inter.className} relative py-20 bg-white overflow-hidden`} id="process">


      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-16">
        <div ref={headingRef} className={`text-center mb-16 scroll-reveal ${headingVisible ? 'visible' : ''}`}>
          <h2 className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1b33] mb-4`}>
            OUR PROCESS
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our streamlined process ensures your bathroom transformation is smooth, stress-free, and delivered on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              ref={el => { cardRefs.current[index] = el; }}
              className={`relative scroll-reveal-scale ${cardsVisible[index] ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Number circle */}
<div className="relative mb-8">
  <div className="w-16 h-16 rounded-full bg-[#0B86EE] flex items-center justify-center text-white font-bold text-xl mx-auto">
    {step.number}
  </div>

  {/* Icon circle */}
  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
    <Icon name={step.icon} className="h-5 w-5 text-[#0B86EE]" />
  </div>
</div>

              <h3 className="text-center font-semibold text-[#0b1b33] text-lg mb-3 min-h-[60px] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-center text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for steps except last */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-[#0B86EE]">
                  <Icon name="arrow" className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
