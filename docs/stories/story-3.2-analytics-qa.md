# Story 3.2: Analytics & Final QA

**Epic:** 3 - SEO, Analytics & Launch Polish
**Status:** Pending
**Priority:** P0
**Depends On:** Story 3.1

---

## User Story

As a **developer**,
I want **GA4 integration, event tracking, and a full quality audit**,
so that **we can track conversions and ensure production quality**.

---

## Acceptance Criteria

- [ ] 1. GA4 configured via Analytics provider (reads NEXT_PUBLIC_GA_ID)
- [ ] 2. Event tracking fires on: CTA clicks (hero, investment, final), WhatsApp button click, urgency bar CTA click, FAQ accordion opens
- [ ] 3. `npm run build` succeeds with zero errors
- [ ] 4. `npm run lint` passes with zero warnings
- [ ] 5. `npx tsc --noEmit` passes
- [ ] 6. Lighthouse scores: Performance >90, Accessibility >95, SEO >95
- [ ] 7. Responsive testing verified: 375px, 768px, 1280px, 1920px
- [ ] 8. All anchor links work from Navbar
- [ ] 9. All interactive features functional (checklist, countdown, accordion, urgency bar dismiss)
- [ ] 10. No English text leaking in user-facing content
- [ ] 11. All CTA buttons link to correct destinations
- [ ] 12. Git initialized with initial commit

---

## Technical Context

### Analytics Event Tracking

Add event tracking to key conversion points using the existing `analytics.ts` helper:

```typescript
// src/lib/analytics.ts (already copied)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

**Events to Track:**

| Event | Component | Trigger |
|-------|-----------|---------|
| `cta_click_hero` | Hero.tsx | Click on primary CTA |
| `cta_click_investment` | Investment.tsx | Click on pricing CTA |
| `cta_click_final` | CTAFinal.tsx | Click on primary CTA |
| `cta_click_urgency_bar` | UrgencyBar.tsx | Click on CTA |
| `whatsapp_click` | WhatsAppButton.tsx | Click on floating button |
| `faq_expand` | FAQ.tsx | Click to expand accordion item |
| `checklist_complete` | ProblemChecklist.tsx | User checks 3+ items |

**Implementation Example:**

```typescript
// In Hero.tsx
import { trackEvent } from '@/lib/analytics';

<Button
  onClick={() => trackEvent('cta_click_hero', 'conversion', 'hero_primary')}
  href={HERO.ctaPrimary.href}
>
  {HERO.ctaPrimary.text}
</Button>
```

### Quality Audit Checklist

**Build Verification:**
- [ ] `npm run build` - zero errors
- [ ] `npm run lint` - zero warnings
- [ ] `npx tsc --noEmit` - zero type errors
- [ ] No console errors in browser

**Lighthouse Audit:**
- [ ] Performance: >90
- [ ] Accessibility: >95
- [ ] Best Practices: >90
- [ ] SEO: >95

**Responsive Testing (manual):**
- [ ] 375px (iPhone SE) - all sections readable, no horizontal scroll
- [ ] 768px (iPad) - proper tablet layout
- [ ] 1280px (Desktop) - full desktop experience
- [ ] 1920px (Large) - content centered, no stretching

**Functionality Testing:**
- [ ] Navbar links scroll to correct sections
- [ ] Mobile menu opens/closes
- [ ] Section dots track active section
- [ ] UrgencyBar appears after scrolling past hero
- [ ] UrgencyBar dismisses and stays dismissed
- [ ] InteractiveChecklist counter updates
- [ ] Threshold message appears at 3+ checks
- [ ] CountdownTimer updates every second
- [ ] FAQ accordion expands/collapses
- [ ] All CTAs link to correct destinations
- [ ] WhatsApp button opens with pre-filled message

**Content Verification:**
- [ ] All text is PT-BR (no English)
- [ ] All prices correct (R$7,000 / R$8,500)
- [ ] All dates correct (Março 2026)
- [ ] All quotes match original document
- [ ] No placeholder text visible

### Git Initialization

```bash
cd mentoria
git init
git add .
git commit -m "feat: initial commit - Business Therapy Mentoria landing page

- 14 section landing page for Mental Fitness group mentoring
- Interactive features: checklist, countdown, urgency bar
- Gold/navy design system from BTC website
- Full SEO optimization with OG image and JSON-LD
- GA4 event tracking for conversions

Co-Authored-By: River (@sm) 🌊
Co-Authored-By: Dex (@dev) 💻"
```

---

## Definition of Done

- [ ] GA4 provider active and receiving events
- [ ] All event tracking implemented and firing
- [ ] All build checks pass (build, lint, typecheck)
- [ ] Lighthouse scores meet targets
- [ ] Responsive testing complete at all breakpoints
- [ ] All functionality tested and working
- [ ] Content verified against original document
- [ ] Git repo initialized with initial commit
- [ ] Ready for Vercel deployment

---

## Final Handoff

After this story completes:

> @github-devops: The mentoria project at `mentoria/` is ready for deployment. Please:
> 1. Create a new GitHub repository
> 2. Push the initial commit
> 3. Set up Vercel project connected to the repo
> 4. Configure environment variables (NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_WHATSAPP)
> 5. Deploy to production

---

*— River, removendo obstáculos 🌊*
