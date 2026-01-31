# Story 1.2: Design System & UI Components

**Epic:** 1 - Foundation & Design System
**Status:** Complete
**Priority:** P0
**Depends On:** Story 1.1

---

## User Story

As a **developer**,
I want **the complete design system and all reusable UI components copied from the existing website**,
so that **new sections can be built with the same premium gold/navy aesthetic**.

---

## Acceptance Criteria

- [x] 1. `src/app/globals.css` copied with all CSS custom properties (colors, spacing, shadows, utilities)
- [x] 2. `src/lib/animations.ts` copied with all Framer Motion variants
- [x] 3. All 7 UI components copied to `src/components/ui/`: Button, Card, SectionHeader, Badge, Accordion, AnimatedCounter, WhatsAppButton
- [x] 4. `src/lib/analytics.ts` and `src/components/providers/Analytics.tsx` copied
- [x] 5. All components import correctly from `@/lib/animations` and use CSS variables
- [x] 6. WhatsAppButton message text updated for mentoring context
- [x] 7. `npm run build` succeeds with zero type errors

---

## Technical Context

**Source Files to Copy from `website/src/`:**

| Source | Destination | Action |
|--------|-------------|--------|
| `app/globals.css` | `src/app/globals.css` | Copy verbatim |
| `lib/animations.ts` | `src/lib/animations.ts` | Copy verbatim |
| `lib/analytics.ts` | `src/lib/analytics.ts` | Copy verbatim |
| `components/ui/Button.tsx` | `src/components/ui/Button.tsx` | Copy verbatim |
| `components/ui/Card.tsx` | `src/components/ui/Card.tsx` | Copy verbatim |
| `components/ui/SectionHeader.tsx` | `src/components/ui/SectionHeader.tsx` | Copy verbatim |
| `components/ui/Badge.tsx` | `src/components/ui/Badge.tsx` | Copy verbatim |
| `components/ui/Accordion.tsx` | `src/components/ui/Accordion.tsx` | Copy verbatim |
| `components/ui/AnimatedCounter.tsx` | `src/components/ui/AnimatedCounter.tsx` | Copy verbatim |
| `components/ui/WhatsAppButton.tsx` | `src/components/ui/WhatsAppButton.tsx` | Copy + update message |
| `components/providers/Analytics.tsx` | `src/components/providers/Analytics.tsx` | Copy verbatim |

**WhatsAppButton Message Update:**
Change pre-filled message to mentoring context (e.g., "Olá! Tenho interesse na Mentoria Mental Fitness...")

---

## Definition of Done

- [x] All 11 files copied to correct locations
- [x] WhatsAppButton message updated for mentoring
- [x] All imports resolve correctly (no red squiggles)
- [x] `npm run build` succeeds
- [x] `npm run lint` passes

---

*— River, removendo obstáculos 🌊*
