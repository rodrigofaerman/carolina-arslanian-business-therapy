# Story 3.1: SEO, Metadata & OG Image

**Epic:** 3 - SEO, Analytics & Launch Polish
**Status:** Pending
**Priority:** P0
**Depends On:** Stories 2.2-2.7

---

## User Story

As a **developer**,
I want **complete SEO optimization with metadata, OG image, and structured data**,
so that **the page ranks well and displays correctly when shared on social media**.

---

## Acceptance Criteria

- [ ] 1. `layout.tsx` metadata complete: title, description, keywords, canonical URL
- [ ] 2. OpenGraph tags: title, description, image (1200x630), type "website", locale "pt_BR"
- [ ] 3. Twitter card tags: large image summary
- [ ] 4. `opengraph-image.tsx` generates dynamic OG image with program branding
- [ ] 5. JSON-LD structured data: Course schema with name, description, provider, offers
- [ ] 6. `robots.txt` allows indexing
- [ ] 7. Semantic HTML verified (all sections use correct elements)

---

## Technical Context

### Metadata Configuration (layout.tsx)

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentoria Mental Fitness | 90 dias para líderes C-Level dominarem alta performance",
  description: "Transformação mensurável em 90 dias. ROI de 5-6x. Apenas 8 líderes C-Level por turma. Turma Março 2026 com início confirmado.",
  keywords: [
    "Mental Fitness",
    "mentoria executiva",
    "liderança C-Level",
    "alta performance",
    "síndrome impostor",
    "autoconfiança executiva",
    "coaching executivo",
    "burnout executivo"
  ],
  authors: [{ name: "Carolina Arslanian" }],
  creator: "Carolina Arslanian",
  publisher: "Business Therapy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Business Therapy - Mentoria Mental Fitness",
    title: "Mentoria Mental Fitness | 90 dias para líderes C-Level",
    description: "Transformação mensurável em 90 dias. ROI de 5-6x. Apenas 8 líderes por turma.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mentoria Mental Fitness - Carolina Arslanian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria Mental Fitness | 90 dias para líderes C-Level",
    description: "Transformação mensurável em 90 dias. ROI de 5-6x.",
    images: ["/opengraph-image"],
  },
};
```

### OpenGraph Image (opengraph-image.tsx)

```typescript
// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mentoria Mental Fitness - Carolina Arslanian';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#0f172a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
      }}>
        {/* Gold accent line */}
        <div style={{ width: 120, height: 4, background: '#fbbf24', marginBottom: 40 }} />

        {/* Title */}
        <h1 style={{
          color: '#f8fafc',
          fontSize: 56,
          fontFamily: 'serif',
          textAlign: 'center',
          marginBottom: 20,
        }}>
          Mentoria Mental Fitness
        </h1>

        {/* Subtitle */}
        <p style={{
          color: '#fbbf24',
          fontSize: 28,
          textAlign: 'center',
          marginBottom: 40,
        }}>
          90 dias para líderes C-Level dominarem alta performance
        </p>

        {/* Author */}
        <p style={{
          color: '#94a3b8',
          fontSize: 24,
        }}>
          Carolina Arslanian
        </p>

        {/* Badge */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.1)',
          border: '1px solid #fbbf24',
          borderRadius: 8,
          padding: '12px 24px',
          marginTop: 40,
        }}>
          <span style={{ color: '#fbbf24', fontSize: 20 }}>
            Turma Março 2026 • ROI 5-6x em 90 dias
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
```

### JSON-LD Structured Data (layout.tsx)

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Mentoria Mental Fitness",
  description: "Mentoria exclusiva de 90 dias para líderes C-Level dominarem o jogo invisível da alta performance.",
  provider: {
    "@type": "Person",
    name: "Carolina Arslanian",
    jobTitle: "Mental Fitness Specialist",
  },
  offers: {
    "@type": "Offer",
    price: "7000",
    priceCurrency: "BRL",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-01-01",
  },
  courseMode: "Online",
  duration: "P90D",
  numberOfCredits: 0,
};

// In layout.tsx body:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### robots.txt

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://mentoria.businesstherapycode.com/sitemap.xml
```

---

## Definition of Done

- [ ] All metadata fields populated in layout.tsx
- [ ] OpenGraph tags render correctly (test with og:image debugger)
- [ ] Twitter card tags render correctly
- [ ] opengraph-image.tsx generates branded image
- [ ] JSON-LD structured data present and valid (test with Google Rich Results)
- [ ] robots.txt created and allows indexing
- [ ] All section elements use semantic HTML (section, article, nav, etc.)
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
