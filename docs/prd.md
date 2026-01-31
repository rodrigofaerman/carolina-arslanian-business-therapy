# Business Therapy - Mentoria Mental Fitness | Product Requirements Document (PRD)

---

## 1. Goals and Background Context

### Goals

- **G1:** Convert C-Level executives and senior leaders into Business Therapy Mental Fitness group mentoring participants (Turma Marco 2026)
- **G2:** Communicate the Mental Fitness methodology (3 Performance Games) and its measurable ROI (5-6x in 90 days) clearly to the target audience
- **G3:** Create urgency and scarcity through limited vacancy (8 participants max) and pre-launch pricing (R$7,000 vs R$8,500)
- **G4:** Establish Carolina Arslanian's authority as a Mental Fitness specialist for C-Level leaders
- **G5:** Provide a conversion-optimized, premium landing page matching the quality of the existing Business Therapy Code website

### Background Context

Carolina Arslanian is launching a **group mentoring program** (Business Therapy - Mental Fitness Mentoring) targeting C-Level executives, VPs, and Directors experiencing chronic stress, imposter syndrome, and burnout. The program runs for 90 days with 6 group sessions + 2 individual sessions, starting March 2026, limited to 8 participants per cohort.

An existing standalone website (`businesstherapycode.com`) already serves as the brand's main landing page for individual 1-to-1 mentoring. This new site focuses specifically on the **group mentoring format** with different pricing (R$7,000-8,500 vs R$24k-54k), different structure (hybrid group + individual), and new interactive features (symptom checklist, countdown timer, urgency mechanics).

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-01-30 | 0.1 | Initial PRD draft | Morgan (@pm) |

---

## 2. Requirements

### Functional Requirements

- **FR1:** Hero section displays headline ("Voce foi promovido 5 vezes. Mas ninguem te ensinou a comandar sua mente no nivel que comanda seu trabalho."), subheadline, 2 CTAs (primary: "Vagas limitadas, garanta a sua agora!", secondary: "Conheca o Programa Completo"), and trust badges (turma reduzida, ROI 5-6x, pesquisa TalentSmart)
- **FR2:** Problem section renders interactive checklist with 5 symptom items from the original copy; live counter updates as user checks items; dynamic result message appears at 3+ checks ("Continue lendo - este programa foi feito para voce")
- **FR3:** Framework section displays 3 Performance Games (PENSAR/AGIR/SENTIR) as color-coded cards with tools and deliverables per game; includes video embed placeholder for Carol's 2min explainer; includes quote block ("Se voce nao conseguir gerenciar o barulho interno dentro de si, como podera liderar o que esta fora?")
- **FR4:** How It Works section renders 90-day timeline with format details: 8 encontros total (6 grupo 2h + 2 individuais 1h), frequencia quinzenal (sexta 17h-19h), formato hibrido, turma boutique, grupo WhatsApp exclusivo, entregaveis (diagnostico IA + Mental Fitness Scorecard). Start date: Marco 2026
- **FR5:** Results section displays scientific stats (58% - Mental Fitness responsavel por mais da metade do sucesso; 90% - alta performance tem alto Mental Fitness; fonte TalentSmart) with animated counters; before/after metrics table with 5 indicators; 4 testimonial cards with original quotes; ROI financeiro tangivel (ganho produtividade 70%, valor ~R$150k/ano, ROI anual 18.75x, ROI 90 dias 5-6x)
- **FR6:** Comparison section renders responsive table: Mental Fitness Mentoria vs Coaching Tradicional vs Curso across 6 dimensions (Foco, Duracao, Aplicacao, Formato, Investimento, ROI) with Mental Fitness column highlighted; includes value breakdown box (R$8,500 / 8 = R$1,062/encontro with full feature list)
- **FR7:** About Carol section with bio placeholder, credentials, photo placeholder, impact stats (content TBD by client - marked critical in original doc)
- **FR8:** For Who section renders two-column layout: green ideal profile (cargo & responsabilidade, momento de carreira) vs red exclusion criteria (4 items from original copy)
- **FR9:** Investment section displays pre-launch R$7,000 (regular R$8,500), 2 bonus cards (Bonus 1: Sessao Individual Adicional R$2,000; Bonus 2: Mapeamento Personalizado Eneagrama+DISC R$1,500), satisfaction guarantee (100% reembolso apos 2 primeiros encontros), payment options (a vista 5% desconto, 12x sem juros, transferencia/cartao corporativo)
- **FR10:** Urgency section renders countdown timer to pre-launch deadline, vacancy indicator, copy: "Poucas vagas restantes" + "Proxima turma apenas em Inverno 2026"
- **FR11:** Sticky urgency bar at top of viewport after scrolling past hero: compact countdown + "3 vagas restantes" + CTA; dismissible (sessionStorage)
- **FR12:** FAQ section with 10 accordion items from original copy (dedicacao semanal, parcelamento, encontro perdido, terapia vs coaching, por que 8 participantes, reembolso, presencial/virtual, IA exclusiva, certificado, grupo WhatsApp)
- **FR13:** Next Steps section: 4-step timeline (1: garante vaga + email, 2: WhatsApp grupo, 3: IA diagnostico pre-mentoria, 4: calendario + materiais preparatorios). Inicio: Marco 2026
- **FR14:** CTA Final: "Hora de Decidir: Voce Continua no Jogo Visivel ou Domina o Jogo Invisivel?" + 2 buttons (primary: "SIM, QUERO GARANTIR MINHA VAGA NA TURMA OUTONO 2026", secondary: "Ainda tenho duvidas - Agende 15min de conversa estrategica") + trust badges (pagamento seguro, garantia, vagas limitadas)
- **FR15:** Fixed navbar with scroll-triggered styling, navigation links (Inicio, O Programa, Resultados, Conteudo, Investimento, FAQ) + CTA button "Garantir Vaga"
- **FR16:** Floating WhatsApp button with mentoring-specific pre-filled message
- **FR17:** Section navigation dots (right side, desktop only) tracking active section
- **FR18:** All content centralized in a single `constants.ts` file for easy updates

### Non-Functional Requirements

- **NFR1:** Lighthouse Performance >90, Accessibility >95, SEO >95
- **NFR2:** FCP < 2s, LCP < 2.5s, CLS < 0.1
- **NFR3:** Fully responsive: mobile (375px), tablet (768px), desktop (1280px), large (1920px)
- **NFR4:** WCAG AA accessibility: keyboard navigation, ARIA labels, focus indicators, skip-to-content, prefers-reduced-motion
- **NFR5:** Security headers: CSP, HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy
- **NFR6:** All text PT-BR; no English in user-facing content
- **NFR7:** Static site generation (SSG) - no server-side runtime dependencies
- **NFR8:** Bundle size < 200KB gzipped
- **NFR9:** CountdownTimer SSR-safe (no hydration mismatch)
- **NFR10:** Google Analytics 4 with event tracking on CTA clicks

---

## 3. User Interface Design Goals

### Overall UX Vision

Premium, conversion-optimized single-page landing page that matches the existing Business Therapy Code website's gold/navy aesthetic. The experience should feel exclusive, authoritative, and emotionally resonant - guiding C-Level leaders through problem recognition, solution understanding, social proof, and conversion in a natural scrolling flow.

The design communicates: "This is not mass-market coaching. This is an elite, boutique program for leaders who are ready for real transformation."

### Key Interaction Paradigms

- **Scroll-driven narrative:** Top-to-bottom storytelling that follows the AIDA framework (Attention -> Interest -> Desire -> Action)
- **Interactive self-assessment:** Checklist in Problem section creates personal engagement and "aha moment"
- **Urgency mechanics:** Countdown timer + vacancy indicator create legitimate scarcity
- **Multiple conversion touchpoints:** CTAs distributed at Hero, after Results, after Comparison, after FAQ, and Final CTA
- **Floating persistent access:** WhatsApp button always available; urgency bar after hero scroll

### Core Screens and Views

This is a single-page landing page with 14 scroll sections. No multi-page navigation. Core views:

1. **Hero (above the fold)** - First impression, headline, CTAs
2. **Problem identification** - Interactive checklist for self-assessment
3. **Solution framework** - Methodology explanation with video
4. **Social proof cluster** - Results, testimonials, comparison, about
5. **Conversion cluster** - Investment, urgency, FAQ, next steps, final CTA

### Accessibility: WCAG AA

- Color contrast >4.5:1 for text (gold #fbbf24 on navy #0f172a exceeds 9:1)
- Focus-visible states with gold 2px outline
- Skip-to-content link
- All interactive elements keyboard-accessible
- Reduced motion media query disables animations
- Semantic HTML (section, nav, main, footer)
- ARIA labels on all interactive components

### Branding

Reuse the existing Business Therapy Code design system:

- **Colors:** Gold (#fbbf24) accent on Navy (#0f172a) background
- **Typography:** Playfair Display (serif, headings) + Inter (sans, body)
- **Effects:** Glass morphism cards, gold gradient text, grid background pattern, gold line dividers
- **Shadows:** Card shadows with gold glow on hover
- **Animations:** Framer Motion viewport-triggered animations (fadeInUp, stagger, scaleIn)

### Target Platforms: Web Responsive

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- No native mobile app
- Optimized for modern browsers (Chrome, Safari, Firefox, Edge)

---

## 4. Technical Assumptions

### Repository Structure: Standalone Project (Sibling Directory)

New standalone Next.js project at `mentoria/` alongside existing `website/`. Not a monorepo - each project deploys independently to Vercel. Shared design system components are copied directly (not via npm package) to avoid unnecessary infrastructure complexity for a two-project setup.

### Service Architecture: Static Site (SSG)

- **Framework:** Next.js 16.1.6 with App Router
- **Runtime:** React 19.2.3
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 with PostCSS
- **Animations:** Framer Motion 12.29.2
- **Deployment:** Vercel (static export)
- **No backend:** All content is static, centralized in constants.ts
- **No database:** No user accounts, no forms, no data persistence
- **No CMS:** Content managed via code (constants.ts)

### Testing Requirements: Build + Lint + Manual

- `npm run build` - Production build must succeed with zero errors
- `npm run lint` - ESLint must pass with zero warnings
- `npx tsc --noEmit` - TypeScript type checking must pass
- Manual visual testing at 4 breakpoints (375px, 768px, 1280px, 1920px)
- Manual accessibility check (keyboard navigation, screen reader)
- Lighthouse audit for final validation
- No automated unit/e2e tests in MVP scope (can be added in future iteration)

### Additional Technical Assumptions

- **Component reuse:** 7 UI components + 2 lib files copied verbatim from `website/src/`
- **New hooks:** `useCountdown` (SSR-safe countdown) and `useChecklist` (checkbox state management)
- **CSP update:** next.config.ts must allow YouTube/Vimeo iframe embeds in frame-src
- **Analytics:** GA4 via `@vercel/analytics` + custom event tracking
- **WhatsApp integration:** Direct `wa.me` link with pre-filled message (no API)
- **Payment:** External link (no in-app payment processing) - WhatsApp or bank transfer
- **Countdown deadline:** Configurable via constants.ts (ISO date string)
- **Vacancy count:** Configurable via constants.ts (not dynamic/server-driven)

---

## 5. Epic List

### Epic 1: Foundation & Design System

**Goal:** Establish the standalone Next.js project with the shared design system, all reusable components, and core layout (navbar, footer, urgency bar), resulting in a navigable shell with all sections as placeholders.

### Epic 2: Content Sections & Interactive Features

**Goal:** Implement all 14 content sections with the original copy, build the new interactive components (checklist, countdown, comparison grid, video embed), and assemble the complete page with all conversion touchpoints active.

### Epic 3: SEO, Analytics & Launch Polish

**Goal:** Add SEO metadata, OG image, JSON-LD structured data, Google Analytics integration, and perform final quality validation (Lighthouse, accessibility, responsiveness).

---

## 6. Epic Details

---

### Epic 1: Foundation & Design System

**Goal:** Establish the standalone Next.js project with the complete design system from the existing BTC website, all reusable UI components, core layout components (Navbar, Footer, UrgencyBar, SectionDots), and a navigable page shell. By the end of this epic, the site runs locally with the correct visual identity and placeholder sections.

---

#### Story 1.1: Project Scaffolding

As a **developer**,
I want **a new Next.js 16 project initialized at `mentoria/` with the same tech stack as the existing website**,
so that **I have a working development environment to build the landing page**.

**Acceptance Criteria:**

1. Next.js 16.1.6 project created at `mentoria/` with React 19.2.3, TypeScript 5, Tailwind CSS 4, Framer Motion 12.29.2
2. Configuration files match existing site: `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`
3. `next.config.ts` copied and adapted (CSP allows YouTube/Vimeo in frame-src)
4. `.gitignore` configured (node_modules, .next, .env.local)
5. `.env.example` created with NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_WHATSAPP
6. `npm run dev` starts without errors
7. `npm run build` succeeds
8. `npm run lint` passes

---

#### Story 1.2: Design System & UI Components

As a **developer**,
I want **the complete design system and all reusable UI components copied from the existing website**,
so that **new sections can be built with the same premium gold/navy aesthetic**.

**Acceptance Criteria:**

1. `src/app/globals.css` copied with all CSS custom properties (colors, spacing, shadows, utilities)
2. `src/lib/animations.ts` copied with all Framer Motion variants
3. All 7 UI components copied to `src/components/ui/`: Button, Card, SectionHeader, Badge, Accordion, AnimatedCounter, WhatsAppButton
4. `src/lib/analytics.ts` and `src/components/providers/Analytics.tsx` copied
5. All components import correctly from `@/lib/animations` and use CSS variables
6. WhatsAppButton message text updated for mentoring context
7. `npm run build` succeeds with zero type errors

---

#### Story 1.3: Layout Components & Page Shell

As a **developer**,
I want **Navbar, Footer, SectionDots, UrgencyBar, and a page shell with placeholder sections**,
so that **the site is navigable with the correct layout structure**.

**Acceptance Criteria:**

1. `src/app/layout.tsx` created with Inter + Playfair Display fonts, lang="pt-BR", basic metadata
2. `src/components/layout/Navbar.tsx` adapted with new nav items (Inicio, O Programa, Resultados, Conteudo, Investimento, FAQ) + CTA "Garantir Vaga"
3. `src/components/layout/Footer.tsx` adapted with "Business Therapy - Mentoria Mental Fitness" branding, contact links (email, LinkedIn, Instagram)
4. `src/components/layout/SectionDots.tsx` adapted with section IDs matching the 14 sections
5. `src/components/layout/UrgencyBar.tsx` created: fixed top bar, appears after hero scroll, compact countdown placeholder + vacancy text + CTA, dismiss X button (sessionStorage)
6. `src/app/page.tsx` assembles all placeholder sections with correct IDs
7. `src/lib/constants.ts` created with SITE config and NAV_ITEMS populated
8. Navbar scroll effect, mobile menu, and section dot tracking all functional
9. Skip-to-content link present and functional

---

### Epic 2: Content Sections & Interactive Features

**Goal:** Implement all 14 content sections using the original copy from the landing page document, build the 4 new interactive UI components and 2 custom hooks, and assemble the complete conversion-optimized page. By the end of this epic, every section renders with final content and all interactive features work.

---

#### Story 2.1: Interactive Components & Hooks

As a **developer**,
I want **the new interactive UI components (InteractiveChecklist, CountdownTimer, ComparisonGrid, VideoEmbed) and custom hooks (useCountdown, useChecklist)**,
so that **they can be used in the content sections**.

**Acceptance Criteria:**

1. `src/hooks/useCountdown.ts` created: SSR-safe, returns {days, hours, minutes, seconds, isExpired}, cleans up interval on unmount
2. `src/hooks/useChecklist.ts` created: manages Set of checked items, provides toggle/reset/count
3. `src/components/ui/InteractiveChecklist.tsx` created: renders checkboxes with animation, live counter "X de Y selecionados", dynamic threshold message at 3+ checks
4. `src/components/ui/CountdownTimer.tsx` created: renders 4 time segments with labels, compact mode prop for UrgencyBar, handles expiry state
5. `src/components/ui/ComparisonGrid.tsx` created: responsive 3-column table (desktop) / stacked cards (mobile), highlighted column with gold border
6. `src/components/ui/VideoEmbed.tsx` created: YouTube/Vimeo iframe or placeholder card with play button, lazy loading, 16:9 aspect ratio
7. All components use "use client", CSS custom properties, and Framer Motion animations
8. All components have proper accessibility (keyboard, ARIA attributes)
9. All pass type checking and lint

---

#### Story 2.2: Hero + Problem Sections

As a **developer**,
I want **the Hero and Problem sections implemented with the original copy**,
so that **visitors see the main value proposition and self-identify with the pain points**.

**Acceptance Criteria:**

1. Constants populated: HERO with headline "Voce foi promovido 5 vezes. Mas ninguem te ensinou a comandar sua mente no nivel que comanda seu trabalho.", subheadline, CTAs, trust badges
2. Constants populated: PROBLEM with title "A verdade que ninguem te contou", subtitle, narrative copy, checklist items (5 symptoms from original), thresholds
3. `Hero.tsx` renders full-screen hero with stagger animation, Badge "Turma Marco 2026", 2 CTAs, 3 trust badges
4. `ProblemChecklist.tsx` renders narrative block with gold left border, InteractiveChecklist with 5 symptom checkboxes, dynamic message at 3+ checks
5. All copy matches the original document exactly (PT-BR)
6. Both sections responsive at all breakpoints
7. Section IDs correct for anchor navigation (#hero, #problema)

---

#### Story 2.3: Framework + How It Works Sections

As a **developer**,
I want **the Framework and How It Works sections with original copy**,
so that **visitors understand the methodology and program structure**.

**Acceptance Criteria:**

1. Constants populated: FRAMEWORK with title "O jogo que ninguem te ensinou", hook copy, Mental Fitness definition quote, 3 games (PENSAR with 3 C's/Zoom Out/IA/Breathwork tools; AGIR with rituais/protocolo elasticidade/gestao vazamentos; SENTIR with reprogramacao autoimagem/Authority Protocol/presenca executiva), deliverables per game
2. Constants populated: HOW_IT_WORKS with format (8 encontros: 6 grupo + 2 individuais), frequencia (quinzenal sexta 17h-19h), formato hibrido, turma boutique, WhatsApp grupo, entregaveis (diagnostico IA + Mental Fitness Scorecard), start date Marco 2026
3. `Framework.tsx` renders 3 color-coded game cards (blue/amber/purple), VideoEmbed placeholder, quote block in glass-card
4. `HowItWorks.tsx` renders 90-day timeline with gold vertical line, format detail items with checkmarks, start date badge
5. All copy from original document preserved exactly
6. Both sections responsive

---

#### Story 2.4: Results & Social Proof Section

As a **developer**,
I want **the Results section with scientific data, before/after metrics, testimonials, and ROI**,
so that **visitors see measurable proof of transformation**.

**Acceptance Criteria:**

1. Constants populated: RESULTS with science stats (58% TalentSmart, 90% alta performance), 5 metrics (Estresse 9->4 -56%, Autoconfianca 4->9 +125%, Produtividade 5->9 +80%, Clareza Mental 3->8 +166%, Energia Criativa 2->8 +300%), 4 testimonials with original quotes, ROI data (produtividade 70%, ~R$150k/ano, 18.75x anual, 5-6x em 90 dias)
2. `ResultsProof.tsx` renders science badges with AnimatedCounter
3. Before/after metrics table with animated progress bars
4. 4 testimonial cards in grid with original quotes from document (Executiva RH AbbVie quotes)
5. ROI callout box with highlight styling
6. Source attribution: "Pesquisa TalentSmart, lider mundial em inteligencia emocional"
7. All numbers animate on scroll into view
8. Section responsive with mobile-friendly table layout

---

#### Story 2.5: Comparison + About + For Who Sections

As a **developer**,
I want **the Comparison, About Carol, and For Who sections**,
so that **visitors understand differentiation, trust the mentor, and self-qualify**.

**Acceptance Criteria:**

1. Constants populated: COMPARISON with 6 features (Foco, Duracao, Aplicacao, Formato, Investimento, ROI) across 3 columns (Coaching Tradicional, Curso, Mental Fitness Mentoria) using exact original copy; includes value breakdown (R$8,500 / 8 = R$1,062/encontro + feature list)
2. Constants populated: ABOUT with placeholder structure (bio, credentials, photo, impact stats - marked as content TBD)
3. Constants populated: FOR_WHO with ideal profile (cargo/responsabilidade: C-Level/Diretor/VP; momento de carreira: 4 criteria from original) and exclusions (4 "nao e para voce" items from original)
4. `ComparisonTable.tsx` renders ComparisonGrid with Mental Fitness column highlighted in gold
5. `AboutCarol.tsx` renders placeholder layout adaptable when client provides bio content
6. `ForWho.tsx` renders green/red two-column layout with Badge variants
7. Value breakdown box below comparison table
8. All sections responsive

---

#### Story 2.6: Investment & Bonuses Section

As a **developer**,
I want **the Investment section with pricing, bonuses, guarantee, and payment options**,
so that **visitors understand the value proposition and can take action**.

**Acceptance Criteria:**

1. Constants populated: INVESTMENT with pre-launch R$7,000, regular R$8,500, bonus 1 (Sessao Individual Adicional R$2,000 - suporte intensivo, presencial/virtual 1h), bonus 2 (Mapeamento Personalizado R$1,500 - Eneagrama+DISC, relatorio antes Encontro 4), guarantee (100% reembolso apos 2 primeiros encontros), payment options (a vista 5% desconto, 12x sem juros, transferencia/cartao corporativo)
2. `Investment.tsx` renders main price card with pre-launch price highlighted, regular as strikethrough
3. 2 bonus cards with Card component showing value and details
4. Guarantee block: "Risco zero. Transformacao garantida."
5. Payment options list with checkmarks
6. CTA button links to WhatsApp/payment
7. Section responsive

---

#### Story 2.7: Urgency + FAQ + Next Steps + CTA Final

As a **developer**,
I want **the remaining conversion sections (Urgency, FAQ, Next Steps, CTA Final) with original copy**,
so that **the conversion funnel is complete**.

**Acceptance Criteria:**

1. Constants populated: URGENCY with configurable deadline (ISO date), totalVacancies: 8, filledVacancies: 5, copy from original
2. Constants populated: FAQS with all 10 Q&A items from original document (dedicacao, parcelamento, encontro perdido, terapia vs coaching, 8 participantes, reembolso, presencial/virtual, IA exclusiva, certificado, WhatsApp)
3. Constants populated: NEXT_STEPS with 4 steps (vaga confirmada + email, WhatsApp grupo, IA diagnostico, calendario + materiais), inicio Marco 2026
4. Constants populated: CTA_FINAL with title "Hora de Decidir...", 2 CTAs from original, trust badges, closing copy
5. `Urgency.tsx` renders large CountdownTimer, vacancy progress (X of 8), urgency copy
6. `FAQ.tsx` renders Accordion with 10 items
7. `NextSteps.tsx` renders 4-step timeline with gold line
8. `CTAFinal.tsx` renders two-option decision layout with trust badges
9. UrgencyBar (from Story 1.3) now wired to URGENCY constants with real countdown
10. All copy from original document preserved exactly
11. All sections responsive

---

### Epic 3: SEO, Analytics & Launch Polish

**Goal:** Add complete SEO metadata, OpenGraph image, JSON-LD structured data, Google Analytics 4 integration, and perform final quality gates. By the end of this epic, the site is production-ready for Vercel deployment.

---

#### Story 3.1: SEO, Metadata & OG Image

As a **developer**,
I want **complete SEO optimization with metadata, OG image, and structured data**,
so that **the page ranks well and displays correctly when shared on social media**.

**Acceptance Criteria:**

1. `layout.tsx` metadata complete: title "Mentoria Mental Fitness | 90 dias para lideres C-Level dominarem alta performance", description from original doc SEO section, keywords, canonical URL
2. OpenGraph tags: title, description, image (1200x630), type "website", locale "pt_BR"
3. Twitter card tags: large image summary
4. `opengraph-image.tsx` generates dynamic OG image with program branding
5. JSON-LD structured data: Course schema with name, description, provider (Carolina Arslanian), offers (price R$7,000)
6. `robots.txt` allows indexing
7. Semantic HTML verified (all sections use correct elements)

---

#### Story 3.2: Analytics & Final QA

As a **developer**,
I want **GA4 integration, event tracking, and a full quality audit**,
so that **we can track conversions and ensure production quality**.

**Acceptance Criteria:**

1. GA4 configured via Analytics provider (reads NEXT_PUBLIC_GA_ID)
2. Event tracking fires on: CTA clicks (hero, investment, final), WhatsApp button click, urgency bar CTA click, FAQ accordion opens
3. `npm run build` succeeds with zero errors
4. `npm run lint` passes with zero warnings
5. `npx tsc --noEmit` passes
6. Lighthouse scores: Performance >90, Accessibility >95, SEO >95
7. Responsive testing verified: 375px, 768px, 1280px, 1920px
8. All anchor links work from Navbar
9. All interactive features functional (checklist, countdown, accordion, urgency bar dismiss)
10. No English text leaking in user-facing content
11. All CTA buttons link to correct destinations
12. Git initialized with initial commit

---

## 7. Checklist Results Report

_(To be populated after PRD review by @architect and implementation by @dev)_

### PM Checklist

- [x] Goals clearly defined and measurable
- [x] Target audience specified (C-Level, VP, Directors, R$600k+/year)
- [x] Requirements mapped to copy document sections
- [x] UI/UX vision aligned with existing brand
- [x] Technical stack defined and validated against existing site
- [x] Epics are sequential and deliver incremental value
- [x] Stories are sized for single-session AI agent execution
- [x] Acceptance criteria are specific and testable
- [x] Non-functional requirements include performance budgets
- [x] Security requirements specified (CSP, HSTS, etc.)
- [x] Accessibility requirements specified (WCAG AA)
- [x] Copy faithfulness explicitly required in acceptance criteria

---

## 8. Next Steps

### UX Expert Prompt

> @ux-design-expert: Review the PRD at `mentoria/docs/prd.md` for the Business Therapy Mental Fitness group mentoring landing page. Focus on the conversion flow, interactive elements (checklist, countdown, urgency bar), and validate that the 14-section structure follows conversion best practices (AIDA). The design system is already defined (gold/navy from existing BTC site). Provide recommendations on interaction patterns and mobile UX for the new components.

### Architect Prompt

> @architect: Create the technical architecture document for the Business Therapy Mental Fitness landing page based on the PRD at `mentoria/docs/prd.md`. The project is a standalone Next.js 16 site at `mentoria/` reusing the design system from `website/`. Key decisions: component copy strategy, 4 new interactive components (InteractiveChecklist, CountdownTimer, ComparisonGrid, VideoEmbed), 2 custom hooks (useCountdown, useChecklist), and UrgencyBar layout component. Document the complete directory structure, component dependency graph, and file-by-file specification.

---

*— Morgan, planejando o futuro*
