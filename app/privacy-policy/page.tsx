import Header from "@/components/Header";
import { inter, montserrat } from "@/components/fonts";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | UKB Bathrooms",
  description: "Read UKB Bathrooms' privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/privacy-policy",
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

export default function PrivacyPolicyPage() {
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
              Privacy
              <br />
              <span style={{ color: LIGHT_BLUE }}>Policy</span>
            </h1>
            <p className={`${inter.className} mt-6 max-w-md text-[15px] leading-7 text-white/90 animate-fade-in-up`} style={{ animationDelay: '0.3s', opacity: 0 }}>
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                UKB Bathrooms  is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                2. Information We Collect
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className={`${montserrat.className} text-lg font-semibold`} style={{ color: NAVY }}>
                    Personal Data
                  </h3>
                  <p className={`${inter.className} mt-2 text-[15px] leading-7 text-slate-600`}>
                    Personally identifiable information, such as your name, email address, telephone number, and postal address, that you voluntarily provide to us when you register for an account, make an enquiry, request a quote, or contact us.
                  </p>
                </div>

                <div>
                  <h3 className={`${montserrat.className} text-lg font-semibold`} style={{ color: NAVY }}>
                    Derivative Data
                  </h3>
                  <p className={`${inter.className} mt-2 text-[15px] leading-7 text-slate-600`}>
                    Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, the referring web page, the pages visited, the time spent on those pages, and device identifiers.
                  </p>
                </div>

                <div>
                  <h3 className={`${montserrat.className} text-lg font-semibold`} style={{ color: NAVY }}>
                    Cookies
                  </h3>
                  <p className={`${inter.className} mt-2 text-[15px] leading-7 text-slate-600`}>
                    We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                3. How We Use Your Information
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We use the information we collect in the following ways:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To provide, maintain, and improve our services</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To process transactions and send related information</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To send technical notices and support messages</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To respond to your comments, questions, and customer service requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To send you marketing and promotional communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To monitor and analyse trends, usage, and activities</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>To detect, prevent, and address technical issues and fraud</span>
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                4. Information Sharing
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We only share information with third parties in the following circumstances:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and email services.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests, such as court orders or subpoenas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>With Your Consent:</strong> We may share your information with your consent for any other purpose.</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                5. Data Security
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                6. Your Rights
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                Under applicable data protection laws, you have the following rights regarding your personal information:
              </p>
              
              <ul className={`${inter.className} mt-4 space-y-3 text-[15px] leading-7 text-slate-600`}>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Access:</strong> Request access to your personal information that we hold.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Deletion:</strong> Request deletion of your personal information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Objection:</strong> Object to our processing of your personal information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span><strong>Portability:</strong> Request transfer of your personal information to another organisation.</span>
                </li>
              </ul>
              
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                To exercise these rights, please contact us using the details provided below.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                7. Third-Party Links
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                Our Site may contain links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                8. Children&apos;s Privacy
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                9. Changes to This Policy
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className={`${montserrat.className} text-2xl font-bold`} style={{ color: NAVY }}>
                10. Contact Us
              </h2>
              <p className={`${inter.className} mt-4 text-[15px] leading-7 text-slate-600`}>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
