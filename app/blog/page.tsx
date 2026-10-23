import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | UKB Bathrooms - Bathroom Design Tips & Inspiration',
  description: 'Discover expert bathroom design tips, installation guides, and inspiration from UKB Bathrooms. Learn about modern bathroom trends, maintenance advice, and renovation ideas for Southampton homes.',
  openGraph: {
    title: 'Blog | UKB Bathrooms - Bathroom Design Tips & Inspiration',
    description: 'Expert bathroom design tips, installation guides, and inspiration from UKB Bathrooms.',
    url: 'https://ukbbathrooms.co.uk/blog',
  },
  alternates: {
    canonical: 'https://ukbbathrooms.co.uk/blog',
  },
};

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { blogPosts, type BlogPost } from "../../Data/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
 
const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
 
export default function BlogPage() {
  const [active, setActive] = useState<BlogPost | null>(null);
 
  // Lock page scroll + close on Escape while the popup is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);
 
  return (
    <>
      <style>{css}</style>
      <Header />
 
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <Image
            src="/images/hero.png"
            alt="UKB Bathrooms modern bathroom installation featuring quality craftsmanship"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="blog-hero-inner">
          <p className="blog-eyebrow">Our blog</p>
          <h1 className="blog-title">
            Ideas, Insights &amp;
            <br />
            <span>Bathroom Inspiration</span>
          </h1>
          <p className="blog-lead">
            Discover expert tips, design ideas, and the latest trends to create
            the perfect bathroom space.
          </p>
        </div>
      </section>
 
      {/* Cards */}
      <main className="blog-main">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <button
                type="button"
                className="blog-card-btn"
                onClick={() => setActive(post)}
                aria-haspopup="dialog"
                aria-label={`Read: ${post.title}`}
              >
                <div className="blog-media">
                  <Image
                    src={post.image}
                    alt={`${post.title} - bathroom design and inspiration`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date"><CalendarIcon />{formatDate(post.date)}</span>
                    <span className="blog-cat">{post.category}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-more">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </main>
 
      {/* Popup */}
      {active && (
        <div className="blog-overlay" onClick={() => setActive(null)}>
          <div
            className="blog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="blog-close"
              onClick={() => setActive(null)}
              aria-label="Close"
              autoFocus
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
 
            <div className="blog-modal-media">
              <Image
                src={active.image}
                alt={`${active.title} - bathroom article featured image`}
                fill
                sizes="(min-width: 768px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
 
            <div className="blog-modal-body">
              <div className="blog-meta">
                <span className="blog-date"><CalendarIcon />{formatDate(active.date)}</span>
                <span className="blog-cat">{active.category}</span>
                <span className="blog-read">{active.readTime}</span>
              </div>
              <h2 id="blog-modal-title" className="blog-modal-title">{active.title}</h2>
              <p className="blog-author">By {active.author}</p>
              <div className="blog-article">
                {active.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <button type="button" className="blog-back" onClick={() => setActive(null)}>
                Back to all articles
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 
const css = `
.blog-hero{position:relative;overflow:hidden;background:#08121f;color:#fff}
.blog-hero-bg{position:absolute;inset:0;width:100%;height:100%}
.blog-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(5,12,22,.94) 0%,rgba(5,12,22,.7) 45%,rgba(5,12,22,.15) 100%)}
.blog-hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:72px 24px 56px}
.blog-eyebrow{display:flex;align-items:center;gap:14px;margin:0 0 18px;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}
.blog-eyebrow::before{content:"";width:36px;height:2px;background:#028efa}
.blog-title{margin:0 0 18px;font-size:clamp(32px,5vw,48px);line-height:1.15;font-weight:700;letter-spacing:-.02em}
.blog-title span{color:#028efa}
.blog-lead{margin:0;max-width:460px;font-size:15px;line-height:1.65;color:rgba(255,255,255,.85)}
 
.blog-main{background:#fff;padding:48px 24px 96px}
.blog-grid{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.blog-card{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 14px rgba(15,30,55,.08);transition:box-shadow .25s}
.blog-card:hover{box-shadow:0 10px 28px rgba(15,30,55,.14)}
.blog-card-btn{all:unset;box-sizing:border-box;display:flex;flex-direction:column;width:100%;height:100%;cursor:pointer}
.blog-card-btn:focus-visible{outline:3px solid #028efa;outline-offset:-3px}
.blog-media{aspect-ratio:16/7.6;overflow:hidden;background:#e8edf2}
.blog-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.blog-card:hover .blog-media img{transform:scale(1.04)}
.blog-body{padding:14px 18px 18px;display:flex;flex-direction:column;flex:1}
.blog-meta{display:flex;align-items:center;flex-wrap:wrap;font-size:11px;margin-bottom:12px}
.blog-date{display:inline-flex;align-items:center;gap:6px;color:#6b7785;padding-right:12px}
.blog-cat{color:#028efa;font-weight:600;padding-left:12px;border-left:1px solid #d5dce4}
.blog-read{color:#6b7785;padding-left:12px;margin-left:12px;border-left:1px solid #d5dce4}
.blog-card-title{margin:0 0 8px;font-size:15px;line-height:1.4;font-weight:700;color:#0f2340}
.blog-excerpt{margin:0 0 14px;font-size:12.5px;line-height:1.6;color:#5d6b7a;flex:1}
.blog-more{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:#028efa}
.blog-more svg{transition:transform .25s}
.blog-card:hover .blog-more svg{transform:translateX(4px)}
 
.blog-overlay{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(5,12,22,.7);backdrop-filter:blur(4px);animation:blogFade .2s}
.blog-modal{position:relative;width:100%;max-width:720px;max-height:90vh;overflow-y:auto;background:#fff;border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,.4);animation:blogPop .25s}
.blog-close{position:absolute;top:14px;right:14px;z-index:2;width:38px;height:38px;border:0;border-radius:50%;background:#fff;color:#0f2340;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2);transition:background .2s,color .2s}
.blog-close:hover{background:#028efa;color:#fff}
.blog-close:focus-visible{outline:3px solid #028efa;outline-offset:2px}
.blog-modal-media{aspect-ratio:16/8;background:#e8edf2}
.blog-modal-media img{width:100%;height:100%;object-fit:cover;display:block}
.blog-modal-body{padding:28px 32px 32px}
.blog-modal-body .blog-meta{font-size:12px}
.blog-modal-title{margin:0 0 6px;font-size:26px;line-height:1.25;font-weight:700;letter-spacing:-.01em;color:#0f2340}
.blog-author{margin:0 0 20px;font-size:13px;color:#6b7785}
.blog-article p{margin:0 0 14px;font-size:15px;line-height:1.75;color:#3d4b5c;max-width:62ch}
.blog-back{margin-top:10px;padding:11px 22px;border:0;border-radius:999px;background:#028efa;color:#fff;font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s}
.blog-back:hover{background:#0a76cf}
.blog-back:focus-visible{outline:3px solid #0f2340;outline-offset:2px}
 
@keyframes blogFade{from{opacity:0}to{opacity:1}}
@keyframes blogPop{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}
@media(min-width:961px){.blog-hero-inner{padding-top:120px}}
@media(max-width:960px){.blog-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){.blog-grid{grid-template-columns:1fr}.blog-overlay{padding:12px}.blog-modal-body{padding:22px 20px 26px}.blog-modal-title{font-size:22px}}
@media(prefers-reduced-motion:reduce){.blog-overlay,.blog-modal{animation:none}.blog-card:hover .blog-media img,.blog-card:hover .blog-more svg{transform:none}}
`;