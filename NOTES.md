# M1 Car Lift Website — Client Notes & Placeholders

This file lists every piece of information that requires client confirmation before the site goes live.
Search the codebase for `PLACEHOLDER` to find each location quickly.

---

## 1. Business Address ✅ RESOLVED

**Confirmed value:** "Cluster I-Golden Tower - Al Wasl - Dubai"
Matches GMB listing. Plus Code: 673C+W8 Dubai. No further action needed.

---

## 2. Geo-Coordinates ✅ RESOLVED

**Current value:** `{ lat: 25.20485413139283, lng: 55.268207874154065 }` — extracted from GMB embed URL.
**No further action needed.**

---

## 3. Google Reviews & Review Count

**Current value used:** 47 reviews (approximation)
**File:** `lib/utils.ts` → `BUSINESS.reviewCount`
**Action needed:** Confirm the actual review count from your Google Business Profile. Also provide 2–3 additional real review quotes and reviewer names to replace the placeholders in `components/home/Testimonials.tsx`.

---

## 4. Google Maps Embed ✅ RESOLVED

Real GMB embed live in Footer (compact thumbnail) and Contact page (full-size with hover "Open in Maps" overlay).
Coordinates confirmed. No further action needed.

---

## 5. Founding Story / Company History

**Current state:** Generic narrative used
**File:** `app/about/page.tsx`
**Action needed:** Provide the real founding story: When did M1 Car Lift start? Who founded it? What was the personal motivation? How many drivers/vehicles do you have?

---

## 6. Driver Count / Fleet Size

**File:** `app/about/page.tsx`, `components/home/TrustBar.tsx`
**Action needed:** Confirm the actual number of drivers and vehicles. The TrustBar currently shows "200+ Daily Commuters" — please verify this number.

---

## 7. Pricing

**Current state:** No pricing shown — links to "Contact for quote"
**Files:** `app/services/page.tsx`
**Action needed:** Decide whether to publish pricing tiers on the website. Even a range (e.g., "from AED 30/day") helps conversion. If you'd prefer to keep it off-site, the current approach works.

---

## 8. Certifications & Regulatory Body

**File:** `app/about/page.tsx` → safetySteps array
**Current line:** "Compliance with UAE transport authority regulations"
**Action needed:** If you hold a specific permit or are registered with the RTA (Roads and Transport Authority) or another UAE authority, provide the specific name/permit number to replace the generic statement.

---

## 9. Logo Image

**Current state:** Text-only "M1" logo (gold square + text)
**Files:** `components/layout/Header.tsx`, `components/layout/Footer.tsx`
**Action needed:** Provide a logo file (PNG with transparent background, at least 400×400px). Place in `public/images/m1carlift-logo.png` and update the Header/Footer to use `<Image>` from `next/image`.

---

## 10. OG Image / Social Share Image

**Current state:** Referenced as `/images/og-image.jpg` but not yet created
**Action needed:** Create a 1200×630px image (JPG or PNG) for social sharing previews. Place at `public/images/og-image.jpg`. Should include logo, business name, and tagline on dark background.

---

## 11. WhatsApp Form Fallback

**Current state:** Booking form and contact form both open WhatsApp with a pre-filled message as the submission mechanism.
**Files:** `components/home/BookingForm.tsx`, `components/contact/ContactForm.tsx`
**Action needed:** For production, wire up a proper email API (recommended: Resend, Formspree, or a Next.js API route) so submissions go to email, not just WhatsApp. WhatsApp fallback works but has limitations (users must have WhatsApp installed and open on desktop).

---

## 12. Domain & Site URL

**Current value:** `https://www.m1carlift.com`
**File:** `lib/utils.ts` → `BUSINESS.url`, `next-sitemap.config.js`
**Action needed:** Confirm this is the exact domain being used. Update if different.

---

## 13. Social Media Links

**Current state:** Not included in footer
**File:** `components/layout/Footer.tsx`
**Action needed:** Provide Instagram, Facebook, or LinkedIn handles if the business has active accounts. Add to Footer social links section.

---

## 14. Privacy Policy & Terms of Service

**Current state:** Footer links exist but pages not built
**Action needed:** Either provide actual privacy policy and terms text, or link to an external document. Recommended before launch — especially important if collecting user data via the booking form.

---

## 15. Years in Business

**File:** `app/about/page.tsx`
**Action needed:** Confirm how many years M1 Car Lift has been operating so it can be stated factually in the About page copy.

---

## Pre-Launch Checklist

Before going live, also complete:
- [ ] Set `SITE_URL` environment variable to production domain in hosting platform
- [ ] Run `npm run build` and verify zero TypeScript/build errors
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify site in Google Search Console
- [ ] Set up Google Analytics 4 (add `<GoogleAnalytics>` component or GTM)
- [ ] Test all forms with real submissions
- [ ] Test on mobile at 375px (iOS Safari) and Android Chrome
- [ ] Check WCAG contrast on all text elements
- [ ] Verify Open Graph previews using opengraph.xyz or similar
- [ ] Test structured data using Google's Rich Results Test
