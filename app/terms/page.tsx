import Header from "@/components/Header";
import { inter, montserrat } from "@/components/fonts";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | UKB Bathrooms",
  description: "Read UKB Bathrooms' terms and conditions to understand our service agreements, payment terms, and warranty policies.",
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/terms",
  },
};

const NAVY = "#0b1b33";
const BLUE = "#0B86EE";
const LIGHT_BLUE = "#2F9BF5";

const Eyebrow = ({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div className={`${inter.className} flex items-center gap-3 ${className}`} style={style}>
    <span className="h-0.5 w-9" style={{ background: BLUE }} />
    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: NAVY }}>
      {children}
    </span>
  </div>
);

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b1b33]">
        <Image
          src="/images/about hero.png"
          alt="UKB Bathrooms professional bathroom services"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1b33]/90 via-[#0b1b33]/60 to-[#0b1b33]/10" />
        
        <div className="mx-auto flex min-h-[400px] max-w-[1280px] items-center px-6 pb-16 pt-36 md:min-h-[500px] lg:px-16">
          <div className="max-w-2xl">
            <Eyebrow style={{ animationDelay: '0.1s', opacity: 0 }} className="animate-fade-in-up">Legal</Eyebrow>
            <h1
              className={`${montserrat.className} mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-[56px] animate-fade-in-up`}
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Terms
              <br />
              <span style={{ color: LIGHT_BLUE }}>& Conditions</span>
            </h1>
            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90 animate-fade-in-up`} style={{ animationDelay: '0.3s', opacity: 0 }}>
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[960px] px-6 py-16 lg:px-16">
        <div className="prose prose-slate max-w-none">
          <p className={`${inter.className} text-sm leading-7 text-slate-600`}>
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-10">
            {/* Introduction */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                1. Introduction
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                Welcome to UKB Bathrooms. These Terms and Conditions govern your use of our website and our bathroom design, supply, and installation services. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                2. Our Services
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                UKB Bathrooms provides the following services:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Bathroom design and consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Bathroom supply and procurement</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Professional installation and fitting</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Tiling and finishing services</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Bathroom renovation and repair</span>
                </li>
              </ul>
            </section>

            {/* Quotations */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                3. Quotations
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                All quotations provided by UKB Bathrooms are valid for 30 days from the date of issue unless otherwise stated. Quotations are based on the information provided at the time of request. Any changes to the scope of work may result in a revised quotation.
              </p>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                A deposit of [XX]% is required to secure your booking and schedule the work. The deposit is non-refundable if you cancel the project after materials have been ordered or work has commenced.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                4. Payment Terms
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                Payment terms are as follows:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Deposit:</strong> [XX]% due upon acceptance of quotation</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Progress Payment:</strong> [XX]% due upon completion of key milestones</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Final Payment:</strong> [XX]% due upon satisfactory completion of work</span>
                </li>
              </ul>
              
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                All payments should be made by bank transfer or other agreed methods. Full payment must be received before handover of the completed bathroom.
              </p>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                5. Cancellation Policy
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                If you wish to cancel your order, please notify us in writing as soon as possible:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Cancellation before work begins:</strong> Full refund of deposit minus any material costs already incurred</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Cancellation after work begins:</strong> Deposit is non-refundable; you will be charged for work completed and materials ordered</span>
                </li>
              </ul>
            </section>

            {/* Our Responsibilities */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                6. Our Responsibilities
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                UKB Bathrooms agrees to:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Perform all work with reasonable skill and care</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Use materials that are of satisfactory quality and fit for purpose</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Complete the work within the agreed timeframe, subject to reasonable delays</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Maintain adequate insurance coverage for the duration of the project</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Leave the work area clean and tidy upon completion</span>
                </li>
              </ul>
            </section>

            {/* Customer Responsibilities */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                7. Customer Responsibilities
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                As the customer, you agree to:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Provide safe and reasonable access to the work area</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Ensure the work area is clear of personal belongings before work commences</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Make payments in accordance with the agreed schedule</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Inform us of any existing issues with the property that may affect the work</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>Arrange for water and electricity to be available as required</span>
                </li>
              </ul>
            </section>

            {/* Warranty */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                8. Warranty
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We provide the following warranties:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Workmanship Warranty:</strong> [XX] months on all installation work</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Material Warranty:</strong> As provided by the manufacturer (typically 1-10 years depending on the product)</span>
                </li>
              </ul>
              
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                The warranty does not cover damage caused by misuse, neglect, or unauthorized modifications. Any warranty work will be carried out during normal working hours at our discretion.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                9. Limitation of Liability
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                UKB Bathrooms shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or the inability to use them. Our total liability shall not exceed the total amount paid for the services in question.
              </p>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We are not responsible for delays caused by factors beyond our reasonable control, including but not limited to: adverse weather conditions, material shortages, or third-party contractor delays.
              </p>
            </section>

            {/* Force Majeure */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                10. Force Majeure
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We shall not be liable for any failure or delay in performance due to causes beyond our reasonable control, including acts of God, war, strikes, or government regulations. In such events, we may suspend performance for the duration of the force majeure event.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                11. Changes to These Terms
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                12. Governing Law
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                13. Contact Us
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className={`${inter.className} mt-4 space-y-2 text-[15px] leading-7 text-slate-600`}>
                <p><strong>Email:</strong> info@ukbbathrooms.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <BackToTop />
    </main>
  );
}
