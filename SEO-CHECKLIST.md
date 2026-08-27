# SEO Checklist — M1 Car Lift Website

## What's Already Implemented

### Technical SEO
- [x] Semantic HTML5 throughout (proper heading hierarchy, one H1 per page)
- [x] `generateMetadata()` per page with unique title, description, canonical URL
- [x] Open Graph + Twitter Card tags on all pages
- [x] `sitemap.xml` generation via next-sitemap (runs on `npm run build`)
- [x] `robots.txt` generation with AI crawler permissions (GPTBot, CCBot, Claude-Web allowed)
- [x] `next/image` for optimized images (WebP/AVIF support)
- [x] `next/font` for optimized font loading (Inter, subset only)
- [x] Mobile-first responsive design
- [x] No layout shift from fonts (font-display: swap)
- [x] Focus states and WCAG AA accessible markup
- [x] Lazy loading of below-fold sections (Next.js default)

### Structured Data (JSON-LD)
- [x] `LocalBusiness` + `TaxiService` schema on homepage (NAP, geo, hours, rating)
- [x] `FAQPage` schema on homepage
- [x] `BlogPosting` schema on each blog post
- [x] `BreadcrumbList` schema on all inner pages
- [x] `Review` microdata on testimonials
- [x] `Organization` schema on About page

### Local SEO
- [x] NAP (Name, Address, Phone) consistent across footer, contact page, and schema
- [x] Location-specific content mentioning Sharjah, Dubai, and specific zones
- [x] Route coverage section functioning as local SEO anchor block
- [x] Google Maps embed placeholder (needs real embed from client)

### AEO (Answer Engine Optimization)
- [x] FAQ section with 8 direct, complete answers to real questions
- [x] Question-based H2/H3 headings in blog posts
- [x] Answer paragraphs kept concise (40–80 words) for extractability
- [x] All key facts in server-rendered HTML (not JS-only)

### AIO / GEO (LLM/Generative Engine Optimization)
- [x] `/llms.txt` at root with plain-text business summary
- [x] First 200 words of each page establish who, what, where clearly
- [x] Consistent entity naming ("M1 Car Lift" throughout — no variants)
- [x] AI crawlers permitted in robots.txt
- [x] Key facts in static HTML, not only dynamic/JS components

### E-E-A-T
- [x] Author bio on each blog post
- [x] About page with company story, safety practices, driver vetting process
- [x] Visible trust signals: Google rating, review count, phone, email, hours, address
- [x] Real Google review quoted (with placeholder for more)
- [x] No unverifiable claims (all flagged in NOTES.md)

### Internal Linking
- [x] Homepage → Services, Blog, About, Contact (nav + contextual)
- [x] Each blog post → service pages + other posts
- [x] Service pages → contact/booking
- [x] Footer sitewide links to all key pages
- [x] Routes section on homepage and services page links to contact

---

## What You Should Do Post-Launch

### Immediate (Week 1)

1. **Google Search Console**
   - Verify ownership of your domain
   - Submit `https://www.m1carlift.com/sitemap.xml`
   - Monitor for crawl errors

2. **Google Business Profile (GMB)**
   - Ensure profile is complete: hours, photos, services, description, categories
   - Add "Car Lift Service" and "Transportation Service" as primary categories
   - Add the website URL
   - Enable messaging (WhatsApp integration)

3. **Google Analytics 4**
   - Set up GA4 property
   - Add tracking to the Next.js app (via `@next/third-parties/google` or GTM)
   - Set up conversion events for form submissions and WhatsApp button clicks

4. **Rich Results Test**
   - Test `https://www.m1carlift.com` at search.google.com/test/rich-results
   - Verify LocalBusiness and FAQ schemas are error-free

### Short-Term (Month 1)

5. **Review Generation**
   - Ask satisfied passengers to leave a Google review (share your GMB review link directly)
   - Respond to all existing and new reviews — even the 5-star ones
   - Target: 100+ reviews builds significant local trust signals

6. **Local Citations**
   - Ensure NAP is consistent on: Yellow Pages UAE, Dubai-Online.com, Yalla Classifieds, Gulf Business listings
   - Submit to UAE business directories — these are low-effort local SEO wins

7. **Content Velocity**
   - Publish 1–2 new blog posts per month targeting specific long-tail queries
   - Suggested next topics:
     - "Car Lift vs Uber from Sharjah to Dubai: Cost Comparison 2024"
     - "Best Time to Travel Sharjah to Dubai to Avoid Traffic"
     - "Car Lift Service Sharjah to Media City: What to Expect"

8. **WhatsApp Business**
   - Set up WhatsApp Business account (not personal) with business profile
   - Add quick replies for common questions
   - Enable the green "WhatsApp Business" verified badge

### Ongoing

9. **Monitor Core Web Vitals** — check Search Console's Core Web Vitals report monthly

10. **Backlink Building**
    - Reach out to UAE expat community sites and blogs for mentions
    - Partner with Sharjah residential community groups on Facebook/WhatsApp
    - Target UAE tech/media publications for transport/sustainability angle (blog post #1 is the hook)

11. **Schema Updates** — update review count in `lib/utils.ts → BUSINESS.reviewCount` as real reviews come in

12. **Hreflang preparation** — if an Arabic version is added later, the codebase is structured to support it. Add `hreflang` meta tags and an `/ar/` route structure.

---

## Target Keywords (Primary)

| Keyword | Page | Difficulty |
|---------|------|------------|
| car lift sharjah to dubai | Homepage | Medium |
| sharjah dubai car lift | Homepage | Medium |
| m1 car lift | Homepage/Brand | Low |
| car lift service uae | Services | Medium |
| daily commute sharjah dubai | Blog/Homepage | Medium |
| car lift jlt | Services/Homepage | Low |
| car lift media city | Services/Homepage | Low |
| car lift tecom sharjah | Services/Homepage | Low |
| car lift internet city sharjah | Services/Homepage | Low |
| sharjah to downtown dubai car lift | Services | Low |

---

## Monitoring Targets (6 months post-launch)

- Google Search Console: 500+ monthly impressions for primary keywords
- Average position < 20 for "car lift sharjah to dubai"
- GMB profile: 100+ reviews, 4.8+ rating
- Core Web Vitals: All Green in Search Console
- Booking form: track form completion rate via GA4
