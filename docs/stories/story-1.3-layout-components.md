# Story 1.3: Layout Components & Page Shell

**Epic:** 1 - Foundation & Design System
**Status:** Complete
**Priority:** P0
**Depends On:** Story 1.2

---

## User Story

As a **developer**,
I want **Navbar, Footer, SectionDots, UrgencyBar, and a page shell with placeholder sections**,
so that **the site is navigable with the correct layout structure**.

---

## Acceptance Criteria

- [x] 1. `src/app/layout.tsx` created with Inter + Playfair Display fonts, lang="pt-BR", basic metadata
- [x] 2. `src/components/layout/Navbar.tsx` adapted with new nav items (Inicio, O Programa, Resultados, Conteudo, Investimento, FAQ) + CTA "Garantir Vaga"
- [x] 3. `src/components/layout/Footer.tsx` adapted with "Business Therapy - Mentoria Mental Fitness" branding, contact links (email, LinkedIn, Instagram)
- [x] 4. `src/components/layout/SectionDots.tsx` adapted with section IDs matching the 14 sections
- [x] 5. `src/components/layout/UrgencyBar.tsx` created: fixed top bar, appears after hero scroll, compact countdown placeholder + vacancy text + CTA, dismiss X button (sessionStorage)
- [x] 6. `src/app/page.tsx` assembles all placeholder sections with correct IDs
- [x] 7. `src/lib/constants.ts` created with SITE config and NAV_ITEMS populated
- [x] 8. Navbar scroll effect, mobile menu, and section dot tracking all functional
- [x] 9. Skip-to-content link present and functional

---

## Technical Context

**Source Files to Adapt from `website/src/`:**

| Source | Destination | Changes |
|--------|-------------|---------|
| `components/layout/Navbar.tsx` | `src/components/layout/Navbar.tsx` | New NAV_ITEMS, new CTA |
| `components/layout/Footer.tsx` | `src/components/layout/Footer.tsx` | New branding, links |
| `components/layout/SectionDots.tsx` | `src/components/layout/SectionDots.tsx` | New section IDs |

**New Files to Create:**

| File | Purpose |
|------|---------|
| `src/components/layout/UrgencyBar.tsx` | Sticky top bar with countdown + vacancy |
| `src/lib/constants.ts` | Centralized content (start with SITE + NAV_ITEMS) |
| `src/app/layout.tsx` | Root layout with fonts and providers |
| `src/app/page.tsx` | Page shell with placeholder sections |

**NAV_ITEMS Configuration:**
```typescript
export const NAV_ITEMS = [
  { label: 'Início', href: '#hero' },
  { label: 'O Programa', href: '#metodo' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Conteúdo', href: '#como-funciona' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
];
```

**Section IDs (14 sections):**
1. `#hero`
2. `#problema`
3. `#metodo`
4. `#como-funciona`
5. `#resultados`
6. `#comparacao`
7. `#sobre`
8. `#para-quem`
9. `#investimento`
10. `#urgencia`
11. `#faq`
12. `#proximos-passos`
13. `#decisao`

**UrgencyBar Specification:**
- Position: `fixed top-0 z-[60]`
- Visibility: Hidden by default, appears after scrolling past hero (IntersectionObserver)
- Content: Compact countdown (placeholder) + "X vagas restantes" + CTA button
- Dismiss: X button that sets sessionStorage flag
- Height: ~44px
- Background: `--color-bg-primary` with slight transparency

---

## Definition of Done

- [x] Layout renders correctly with Navbar, Footer, WhatsAppButton
- [x] Navbar shows correct nav items and CTA
- [x] Footer shows correct branding and links
- [x] SectionDots track active section on scroll
- [x] UrgencyBar appears after scrolling past hero
- [x] UrgencyBar dismisses and stays dismissed (sessionStorage)
- [x] Skip-to-content link works
- [x] Mobile menu opens/closes correctly
- [x] Page shell has all 14 placeholder sections with correct IDs
- [x] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
