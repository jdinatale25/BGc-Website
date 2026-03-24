# Blueprint Growth Marketing — Claude Context File

> Read this file at the start of every session before making any changes to the website.

---

## Business Overview

**Company:** Blueprint Growth Marketing
**Website:** https://www.blueprintgrowthco.com
**Owner / Founder:** Jake DiNatale
**Email:** jake@blueprintgrowthco.com
**Phone:** +1-978-806-6103
**Location:** Fort Worth, TX (serves Fort Worth, Tarrant County, and greater DFW Metroplex)
**GTM Container:** GTM-M3PWRDP8

Blueprint Growth Marketing is a digital marketing agency built specifically for Fort Worth small businesses. The agency was founded by Jake DiNatale, who has a background in data pipelines, financial automation, and analytics. The core idea: enterprise-grade marketing systems — local SEO, automated outreach, social media management — delivered at small-business prices with no long-term contracts.

---

## Target Audience

**Primary:** Fort Worth and DFW small business owners across all industries. No single vertical is exclusively targeted — the client base spans home services, professional services, health & wellness, restaurants, retail, and more. The unifying trait is that they are local, growth-oriented, and don't have an in-house marketing team.

**Geographic focus:** Fort Worth, Tarrant County, DFW Metroplex, Texas (broader Texas on a case-by-case basis).

---

## Services & Pricing

### 1. Website Creation & SEO Optimization
- **Setup fee:** $599 (one-time) — covers design, development, mobile optimization, contact forms, and initial on-page SEO
- **Monthly retainer:** $249/month — ongoing SEO maintenance, Google Business Profile optimization, monthly reporting
- Deliverables include: custom pages, mobile-responsive design, on-page SEO, schema markup

### 2. Automated Customer Outreach
- **$179/month**
- Includes: automated email sequences, SMS reminders, review request campaigns, win-back campaigns
- Runs in the background; no ongoing work required from the client

### 3. Social Media Management
- **$229/month**
- Includes: 12 branded posts/month across Facebook and Instagram, custom graphics, caption writing, hashtag research, monthly analytics report

### Bundle
- All three services bundled saves the client **$107/month**
- Services are mix-and-match; no requirement to buy more than one

### Key Policy Points
- **No long-term contracts** — all plans are month-to-month, cancel anytime
- Onboarding for outreach and social: 3–5 business days
- New website projects: typically 2–3 weeks depending on content availability

---

## Site Structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Primary landing page; hero, how-it-works (4 steps), 4-service overview grid, CTA strip |
| About | `about.html` | Company story, founder bio (Jake DiNatale), values (Transparency, Results, Local Focus) |
| Website Design | `website-design.html` | Service page: custom build, mobile optimization, contact forms, branded design, storytelling session. $599 one-time. |
| SEO | `seo.html` | Service page: Google Business Profile management, metadata, competitor analysis, local rankings. $249/month. |
| Customer Outreach | `customer-outreach.html` | Service page: automated email/SMS, reviews, win-back, appointment reminders, newsletters. $179/month. |
| Social Media | `social-media.html` | Service page: branded content across Facebook & Instagram, 12 posts/month, analytics. $229/month. |
| Contact | `contact.html` | Contact form (Tally embed), inquiry capture |

**Navigation:** Home → About → Services (dropdown: Website Design, SEO, Customer Outreach, Social Media) → Contact Us
**Primary CTA throughout site:** "Book a Free Strategy Call" → Calendly link: https://calendly.com/jacobadinatale/30min
**Secondary CTA:** "View Our Services" / "Send Us a Message"

---

## Tech Stack

### Website / Frontend
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no framework)
- **Fonts:** Inter (Google Fonts) — weights 400, 500, 600, 700, 800, 900
- **Analytics / Tag Management:** Google Tag Manager (GTM-M3PWRDP8)
- **Scheduling / Booking:** Calendly (https://calendly.com/jacobadinatale/30min)
- **CSS file:** `css/styles.css`
- **JS file:** `js/main.js`
- **Assets:** `assets/images/` (logo.png, jake.jpg, etc.)
- **No CMS** — all pages are static HTML files edited directly

### Hosting & Deployment
- **Netlify** — hosts and serves the static site. Connected to the GitHub repo so that every push to the main branch triggers an automatic deploy.
- **GitHub** — version control for the website codebase. All site changes should be committed and pushed here; Netlify picks them up automatically.
- **Squarespace** — domain registrar only. The domain (blueprintgrowthco.com) was originally purchased through Google Domains, which was acquired by Squarespace in 2023. Squarespace manages DNS records and domain renewal but has no role in building or serving the site itself.

> **Going forward (new client sites):** The preferred stack is **GitHub + Cloudflare Pages + Cloudflare Registrar**. Cloudflare Pages offers unlimited bandwidth and unlimited sites on the free tier (versus Netlify's capped free tier), the same push-to-deploy GitHub integration, and zero DNS configuration when the domain is also registered through Cloudflare. Register new domains on Cloudflare Registrar (at-cost pricing, ~$8–10/year per .com). When blueprintgrowthco.com comes up for renewal, migrate the domain to Cloudflare Registrar and point it at Cloudflare Pages. Do not migrate mid-term — wait for the natural renewal window.

### Lead Capture & Forms
- **Tally** — used for lead capture forms embedded on or linked from the website. Tally forms are the primary mechanism for capturing inbound inquiries outside of the Calendly booking flow.

### Automation & Integrations
- **Zapier** — connects form submissions (Tally, contact forms) to downstream tools including BigMailer. Acts as the glue layer between lead capture and outreach sequences. When a lead submits a form, Zapier routes that data into the appropriate BigMailer list/campaign automatically.

### Email Delivery (Automated Customer Outreach Service)
- **BigMailer** — the email marketing platform used to build and send automated outreach campaigns on behalf of clients. Handles email sequences, review request campaigns, win-back campaigns, and list management.
- **AWS SES (Simple Email Service)** — the underlying email delivery infrastructure powering BigMailer. Provides high deliverability and scalable sending volume. BigMailer sits on top of SES; SES is not managed directly in day-to-day operations.

> **How these connect:** Tally (lead capture) → Zapier (routing) → BigMailer via AWS SES (delivery)

---

## Design System

### Color Palette (CSS Variables)
```css
--navy:    #0d1b2a   /* Primary dark background */
--navy2:   #112236   /* Secondary dark */
--navy3:   #0a1520   /* Deep dark */
--blue:    #3d85c8   /* Primary accent / CTA color */
--blue-h:  #2d72b8   /* Hover state for blue */
--blue-lt: #5a9fd4   /* Light blue accent */
--white:   #ffffff
--light:   #f0f5fa   /* Light section backgrounds */
--light2:  #e4eef7
--text:    #1a2535   /* Primary body text */
--text-2:  #4a5c6a   /* Secondary / muted text */
```

### Typography
- **Font family:** Inter (sans-serif), all weights
- Headings use heavier weights (700–900); body uses 400–500
- Section labels use a `.section-label` class (small, styled category tag above headings)

### Key UI Patterns
- `.reveal` class — scroll-triggered animation on elements
- `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` — staggered delays
- `#float-cta` — fixed floating "Book Free Strategy Call" button (bottom-right), appears on scroll
- `#progress-bar` — thin scroll progress bar at top of page
- `.btn-primary` — solid blue CTA button
- `.btn-ghost` — outlined secondary button
- `.btn-nav` — nav bar contact button
- Grid layouts: `.services-grid`, `.process-grid`, `.values-grid`

---

## Brand Voice & Tone

**Professional and polished** — the copy is credible, direct, and results-focused. It communicates competence without being cold. Avoid fluff, marketing clichés, and vague promises. Lead with specific outcomes and concrete numbers where possible.

**Key messaging pillars:**
1. Built specifically for Fort Worth small businesses
2. Systems-driven approach (rooted in Jake's data/automation background)
3. Transparent pricing, no contracts, no surprises
4. Real results — measurable, reportable, honest

**Words and phrases to use:** growth, results, systems, local, Fort Worth, DFW, small business, automated, transparent, no contracts, data-driven
**Words and phrases to avoid:** "world-class," "cutting-edge," "synergy," vague superlatives, enterprise jargon

---

## SEO Guidelines

**Primary geo-target:** Fort Worth, TX / Tarrant County / DFW
**Core keyword themes:**
- `digital marketing agency Fort Worth TX`
- `small business marketing Fort Worth`
- `local SEO Fort Worth`
- `website design Fort Worth`
- `social media management Fort Worth`
- `SEO services Fort Worth TX`
- `affordable marketing agency Fort Worth`
- `DFW small business marketing`

**On-page SEO standards:**
- Every page has a unique `<title>` tag using format: `[Page Topic] | Blueprint Growth Marketing – [Keyword phrase]`
- Every page has a unique `<meta name="description">` under 160 characters
- Canonical tags are set on every page (`<link rel="canonical">`)
- Geo meta tags present on all pages (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
- Schema markup: LocalBusiness JSON-LD on all pages; Service schema on each of the 4 service pages (website-design.html, seo.html, customer-outreach.html, social-media.html); BreadcrumbList on all pages
- OG tags present on all pages for social sharing
- `<meta name="robots" content="index, follow">` on all pages
- `alt` attributes on all meaningful images should include keywords naturally

**When adding new pages:** always include the full set of meta tags, canonical, geo tags, OG tags, and relevant JSON-LD schema. Mirror the structure of existing pages.

---

## Founder Background (for copy reference)

Jake DiNatale grew up in Boston, moved to Fort Worth in 2018 to attend TCU (AddRan College of Liberal Arts, Economics degree). Post-graduation, he built data pipelines, automated financial workflows, and delivered analytics for major Texas financial institutions. He started Blueprint Growth Marketing to apply that systematic, results-driven approach to helping local Fort Worth businesses compete online. Outside work, he practices and coaches Brazilian jiu-jitsu.

---

## Files Reference

```
BGc-Website/
├── index.html               ← Homepage
├── about.html               ← About / Founder
├── website-design.html      ← Service: Website Design ($599 one-time)
├── seo.html                 ← Service: Local SEO ($249/month)
├── customer-outreach.html   ← Service: Customer Outreach ($179/month)
├── social-media.html        ← Service: Social Media Management ($229/month)
├── contact.html             ← Contact form (Tally embed)
├── css/
│   └── styles.css           ← All styles (single stylesheet)
├── js/
│   └── main.js              ← JS (scroll animations, nav, progress bar)
├── assets/
│   └── images/              ← logo.png, jake.jpg, etc.
├── BGM_100_Leads.xlsx          ← Lead data
├── BGM_Tarrant_Lead_List.xlsx  ← Tarrant County leads
└── CLAUDE.md                ← This file
```

---

## Common Tasks & How to Handle Them

**SEO improvements:** Always update meta title, description, canonical, geo tags, OG tags, and JSON-LD schema together. Never change one in isolation. Ensure keywords appear naturally in headings and body copy — don't keyword-stuff.

**Adding a new page:** Copy the full `<head>` from an existing page, update all meta tags for the new page's topic, add a BreadcrumbList schema entry, and register the page in the nav on all existing pages.

**Copy edits:** Match the existing professional, results-focused tone. Keep sentences concise. Lead with the client benefit. Use "Fort Worth" or "DFW" in copy where it fits naturally for local SEO value.

**Design changes:** Use the CSS variables defined above. Do not introduce new colors outside the palette without explicit approval. Maintain Inter font throughout.

**Schema / structured data:** Validate any new JSON-LD with Google's Rich Results Test before shipping. Keep schema consistent with the on-page content (prices, descriptions must match).
