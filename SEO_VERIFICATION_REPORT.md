# SEO Verification Report

## Overall Score: 33 of 40 items PASS (82.5%)

## Summary Table

| # | Check | PASS / FAIL / PARTIAL | Evidence |
|---|-------|----------------------|----------|
| A1 | No social media icons/links | PASS | No matches found for facebook, instagram, twitter, linkedin, youtube, tiktok, whatsapp, sameAs |
| A2 | No placeholder phone | PASS | No matches for "+44 123 456 7890" or "123 456" |
| A3 | Real phone used consistently | FAIL | Footer uses tel:07838349520 (components/footer.tsx:280) without +44 prefix, while schema and Hero use +44 7838 349520 |
| A4 | Email info@ukbbathroom.co.uk with mailto | FAIL | Privacy policy (line 279) and terms (line 323) use info@ukbbathrooms.com (wrong domain) |
| A5 | No verification code | PASS | No matches for "your-google-verification-code" |
| A6 | No href="#" | PASS | No matches for href="#" |
| A7 | Testimonials hidden, data empty | PASS | testimonials array is empty (Data/testonomial.ts:38) |
| A8 | No unproven claims | PASS | No matches for "1000+", "15+ years", "24/7", "Fully Insured", "Certified", "Happy Customers" |
| A9 | Footer year dynamic | PASS | useState(() => new Date().getFullYear()) (components/footer.tsx:221) |
| B10 | No UK-wide claims | PASS | No matches for "across the UK", "in the UK", "UK-wide", "nationwide" |
| B11 | Homepage title under 60 chars | PASS | "Bathroom Fitters Southampton \| UKB Bathrooms" (47 characters) |
| B12 | Homepage description under 155 chars | PASS | 125 characters, contains Southampton and phone +44 7838 349520 |
| B13 | Homepage H1 exact match | PASS | "Bathroom Fitters in Southampton" (components/HeroSection.tsx:75-77) |
| B14 | Server-side metadata export | PASS | app/page.tsx uses server-side metadata export (lines 4-15) |
| B15 | Phone and quote above fold | PASS | HeroSection has phone button (line 86) and quote button (line 94) above fold |
| B16 | No "Learn More" buttons | PASS | Only found in README.md (not in UI) |
| C17 | Footer has all business info | PASS | Name, phone, email, hours, address, service areas list (components/footer.tsx:252-309) |
| C18 | LocalBusiness schema exists | PASS | components/StructuredData.tsx (lines 2-45) with name, telephone, email, address, openingHours, areaServed |
| C19 | Opening hours match | FAIL | Schema has "Mo-Fr 08:00-18:00", "Sa 08:00-18:00" (lines 18-20), footer just says "Opening Hours: 8am - 6pm" (line 307) without specifying days |
| C20 | No review/rating markup | PASS | No aggregateRating or review found in schema |
| D21 | FAQ content local | PASS | Questions about cost, timescale, building regs, waterproofing, guarantees, quote contents (components/faqs.ts:16-57) |
| D22 | FAQPage schema exists | PASS | components/faq.tsx (lines 71-79) matches faqs.ts data |
| D23 | BreadcrumbList schema | PARTIAL | /about has it (app/about/page.tsx:182), /blog has it (app/blog/BlogPageContent.tsx:44-61), /gallery has it (app/gallery/GalleryPageContent.tsx:62-77). No individual blog guide pages exist. |
| D24 | No Service schema | PASS | No @type "Service" found |
| E25 | Server-side metadata for key pages | PASS | /blog, /gallery, /privacy-policy, /terms all use server-side metadata exports |
| E26 | Old 2025 posts removed/noindex | PARTIAL | "Trending Bathroom Colors for 2025" has noindex:true (Data/blog.ts:81), but other 2025 posts exist without noindex (ids 1, 2, 3, 5) |
| E27 | 3 required guides exist | FAIL | No guides found: "How long does a bathroom installation take in Southampton", "Wet room vs walk-in shower", "What to check before hiring a bathroom fitter" |
| E28 | Gallery has descriptive fields | PASS | Fields exist in GalleryItem type (area, propertyType, scope) but not populated on actual items |
| F29 | All images have alt text | FAIL | components/AboutServices.tsx:168 uses alt={service.title} which is not descriptive enough; about/page.tsx:140 has alt="Company Logo" placeholder |
| F30 | No "renovetion" in filenames | FAIL | File "bathroom renovetion.jpg" exists in public/images (typo in "renovation") |
| F31 | Sitemap includes all routes | PARTIAL | sitemap.ts has /about, /blog, /gallery, /privacy-policy, /terms. Missing individual blog guide pages (which don't exist) |
| F32 | Robots allows crawling | PASS | app/robots.ts allows / and points to sitemap (lines 8-16) |
| F33 | One H1 per page | PASS | Homepage: 1 (HeroSection:70), Blog: 1 (BlogPageContent:90), Gallery: 1 (GalleryPageContent:148), About: 1 (about/page.tsx:203), Privacy: 1 (privacy-policy/page.tsx:50), Terms: 1 (terms/page.tsx:50) |
| F34 | Unique titles/descriptions | PASS | See metadata table below |
| F35 | Domain consistency | PASS | All canonicals and sitemap use ukbbathrooms.co.uk |
| G36 | Lint output | PASS | 0 errors, 33 warnings (react-hooks/refs and react-hooks/set-state-in-effect warnings acceptable) |
| G37 | Build output | PASS | Build successful, all routes generated |
| G38 | No console/TypeScript errors | PASS | Build completed without errors |
| H39 | Business data consistency | FAIL | Email inconsistency: privacy-policy and terms use info@ukbbathrooms.com instead of info@ukbbathroom.co.uk |
| H40 | Address shown publicly | PASS | Address shown in footer (51 Westfield Road, Southampton SO15 4HQ) |

## FAIL and PARTIAL Items

### FAIL Items

1. **A3 - Phone format inconsistency**: Footer uses `tel:07838349520` (components/footer.tsx:280) without +44 prefix, while schema and Hero use `+44 7838 349520`.
2. **A4 - Email domain mismatch**: Privacy policy (app/privacy-policy/page.tsx:279) and terms (app/terms/page.tsx:323) use `info@ukbbathrooms.com` instead of `info@ukbbathroom.co.uk`.
3. **C19 - Opening hours mismatch**: Schema specifies "Mo-Fr 08:00-18:00" and "Sa 08:00-18:00" (components/StructuredData.tsx:18-20), but footer just says "Opening Hours: 8am - 6pm" (components/footer.tsx:307) without specifying which days.
4. **E27 - Required guides missing**: The 3 required blog guides do not exist:
   - "How long does a bathroom installation take in Southampton"
   - "Wet room vs walk-in shower"
   - "What to check before hiring a bathroom fitter"
5. **F29 - Insufficient alt text**: components/AboutServices.tsx:168 uses `alt={service.title}` which is dynamic and not descriptive enough; about/page.tsx:140 has `alt="Company Logo"` placeholder.
6. **F30 - Filename typo**: File "bathroom renovetion.jpg" exists in public/images (should be "renovation").
7. **H39 - Email consistency**: Same as A4 - privacy-policy and terms pages use wrong email domain.

### PARTIAL Items

1. **D23 - BreadcrumbList schema**: Exists on /about, /blog, and /gallery pages, but individual blog guide pages don't exist (no [slug] route), so can't verify breadcrumbs on guide pages.
2. **E26 - Old 2025 posts**: "Trending Bathroom Colors for 2025" has `noindex: true`, but other 2025-dated posts (ids 1, 2, 3, 5) exist without noindex. Either all 2025 posts should be noindexed or dates should be updated to current year.
3. **E28 - Gallery fields**: The GalleryItem type has area, propertyType, and scope fields, but none of the actual gallery items populate these fields. They're all undefined.
4. **F31 - Sitemap completeness**: Sitemap includes all main routes. Individual blog guide pages don't exist, so they can't be in the sitemap.

## Page Metadata Table

| URL | Title | Title Length | Meta Description | Description Length | H1 | Canonical | Robots |
|-----|-------|--------------|------------------|-------------------|-----|-----------|--------|
| / | Bathroom Fitters Southampton \| UKB Bathrooms | 47 | Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838 349520. | 125 | Bathroom Fitters in Southampton | https://ukbbathrooms.co.uk | Default |
| /about | About Us \| UKB Bathrooms | 23 | Learn about UKB Bathrooms - your local bathroom experts in Southampton. Discover our commitment to quality bathroom services in Hampshire. | 128 | Your Trusted Bathroom Experts | https://ukbbathrooms.co.uk/about | Default |
| /blog | Blog \| UKB Bathrooms - Bathroom Design Tips & Inspiration | 54 | Discover expert bathroom design tips, installation guides, and inspiration from UKB Bathrooms. Learn about modern bathroom trends, maintenance advice, and renovation ideas for Southampton homes. | 165 | Our blog | https://ukbbathrooms.co.uk/blog | Default |
| /gallery | Gallery \| UKB Bathrooms - Bathroom Installation Projects | 50 | Browse our bathroom installation gallery showcasing completed projects in Southampton. See the quality and craftsmanship of UKB Bathrooms' work. | 133 | Gallery | https://ukbbathrooms.co.uk/gallery | Default |
| /privacy-policy | Privacy Policy \| UKB Bathrooms | 28 | Read UKB Bathrooms' privacy policy to understand how we collect, use, and protect your personal information. | 111 | Privacy Policy | https://ukbbathrooms.co.uk/privacy-policy | Default |
| /terms | Terms & Conditions \| UKB Bathrooms | 31 | Read UKB Bathrooms' terms and conditions to understand our service agreements, payment terms, and warranty policies. | 119 | Terms & Conditions | https://ukbbathrooms.co.uk/terms | Default |

**Note**: /blog description is 165 characters (exceeds 155 char recommendation).

## Raw Outputs

### Lint Output
```
✖ 33 problems (0 errors, 33 warnings)
  0 errors and 1 warning potentially fixable with the `--fix` option.
```
Warnings are:
- 1 @next/next/no-img-element (about/page.tsx:140)
- 1 react-hooks/set-state-in-effect (Header.tsx:58)
- 1 @typescript-eslint/no-unused-vars (HeroSection.tsx:9, 13)
- 30 react-hooks/refs (contact.tsx and testinomial.tsx - these are warnings per eslint.config.mjs)

### Build Output
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /blog
├ ○ /gallery
├ ○ /manifest.webmanifest
├ ○ /privacy-policy
├ ○ /robots.txt
├ ○ /sitemap.xml
└ ○ /terms

○  (Static)  prerendered as static content
```

### Sitemap
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ukbbathrooms.co.uk'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
```

### Robots
```typescript
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ukbbathrooms.co.uk'
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "UKB Bathrooms",
  "description": "Professional bathroom design, supply, and installation services in Southampton and surrounding areas",
  "url": "https://ukbbathrooms.co.uk",
  "telephone": "+44 7838 349520",
  "email": "info@ukbbathroom.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "51 Westfield Road",
    "addressLocality": "Southampton",
    "addressRegion": "Hampshire",
    "postalCode": "SO15 4HQ",
    "addressCountry": "GB"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-18:00"
  ],
  "priceRange": "££",
  "areaServed": [
    "Southampton",
    "Shirley",
    "Portswood",
    "Woolston",
    "Bitterne",
    "Eastleigh",
    "Totton",
    "Hedge End",
    "Chandler's Ford",
    "Romsey"
  ],
  "serviceType": [
    "Bathroom Design",
    "Bathroom Installation",
    "Bathroom Renovation",
    "Bathroom Fitting",
    "Bathroom Plumbing",
    "Bathroom Tiling",
    "Wet Room Installation",
    "Ensuite Installation"
  ]
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What bathroom services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover the full journey: 3D bathroom design, supply of premium fittings and fixtures, professional installation, tiling and complete bathroom renovations in Southampton and surrounding areas."
      }
    },
    // ... 7 more FAQs
  ]
}
```

## Owner Must Still Do

1. **Domain launch/redirect**: Ensure ukbbathrooms.co.uk is the live domain and properly redirects if needed
2. **Confirm address/hours/showroom**: Verify 51 Westfield Road, Southampton SO15 4HQ is correct. Decide if this is a showroom or just an office address (if no showroom, consider hiding address)
3. **Google Search Console**: Verify domain ownership and submit sitemap
4. **Google Business Profile**: Create/verify GBP with correct NAP (name, address, phone)
5. **Real reviews**: Collect genuine customer reviews from service areas (Data/testonomial.ts is currently empty)
6. **Project photos/data**: Populate gallery items with real project photos and fill in area, propertyType, scope fields
7. **Insurance/accreditation proof**: Add insurance details and any trade accreditations if available
8. **Directory listings**: List on Checkatrade, MyBuilder, Which? Trusted Traders, Trustpilot, Yell, Bing Places
9. **Fix email domain**: Update privacy-policy and terms pages to use info@ukbbathroom.co.uk
10. **Fix phone format**: Update footer tel: link to use +44 prefix for consistency
11. **Clarify opening hours**: Update footer to specify which days (match schema or update schema)
12. **Fix filename typo**: Rename "bathroom renovetion.jpg" to "bathroom-renovation.jpg"
13. **Improve alt text**: Add descriptive alt text for AboutServices images and remove placeholder alt text
14. **Create required blog guides**: Write the 3 required guides for local SEO
15. **Update blog dates**: Either noindex all 2025 posts or update dates to current year

## Skipped by Owner

- **Service pages**: Individual service pages (e.g., /bathroom-design, /bathroom-installation) were not built by choice
- **Area pages**: Individual area pages (e.g., /southampton, /shirley, /portswood) were not built by choice

Note: These are the biggest ranking levers per the SEO audit but were skipped for simplicity. Owner may want to add these later for better local SEO performance.
