# Business Therapy - Mentoria Mental Fitness | Stories

## Overview

This directory contains all user stories for the Business Therapy Mental Fitness Group Mentoring landing page project.

## Epic Structure

### Epic 1: Foundation & Design System
**Goal:** Establish the standalone Next.js project with the shared design system and core layout.

| Story | Title | Priority | Depends On |
|-------|-------|----------|------------|
| 1.1 | Project Scaffolding | P0 | - |
| 1.2 | Design System & UI Components | P0 | 1.1 |
| 1.3 | Layout Components & Page Shell | P0 | 1.2 |

### Epic 2: Content Sections & Interactive Features
**Goal:** Implement all 14 content sections with original copy and new interactive components.

| Story | Title | Priority | Depends On |
|-------|-------|----------|------------|
| 2.1 | Interactive Components & Hooks | P1 | 1.1 |
| 2.2 | Hero + Problem Sections | P1 | 1.3, 2.1 |
| 2.3 | Framework + How It Works | P1 | 1.3, 2.1 |
| 2.4 | Results & Social Proof | P1 | 1.3 |
| 2.5 | Comparison + About + For Who | P2 | 1.3, 2.1 |
| 2.6 | Investment & Bonuses | P1 | 1.3 |
| 2.7 | Urgency + FAQ + Next Steps + CTA Final | P1 | 1.3, 2.1 |

### Epic 3: SEO, Analytics & Launch Polish
**Goal:** Add SEO, analytics, and perform final quality validation.

| Story | Title | Priority | Depends On |
|-------|-------|----------|------------|
| 3.1 | SEO, Metadata & OG Image | P0 | 2.2-2.7 |
| 3.2 | Analytics & Final QA | P0 | 3.1 |

## Execution Order

```
1.1 Project Scaffolding (FIRST - blocks everything)
    ├── 1.2 Design System
    │   └── 1.3 Layout Components
    │       ├── 2.2 Hero + Problem
    │       ├── 2.3 Framework + How It Works
    │       ├── 2.4 Results & Social Proof
    │       ├── 2.5 Comparison + About + For Who
    │       ├── 2.6 Investment & Bonuses
    │       └── 2.7 Urgency + FAQ + Next Steps + CTA
    └── 2.1 Interactive Components (can run parallel with 1.2)
            └── (feeds into 2.2, 2.3, 2.5, 2.7)

3.1 SEO & Metadata (after all content sections)
    └── 3.2 Analytics & Final QA (LAST)
```

## References

- **PRD:** `../prd.md`
- **Architecture:** `../architecture.md`
- **Source Project:** `../../website/` (design system reference)
- **Copy Document:** `../../_DOCS/BUSINESS THERAPY/ESTRUTURA MENTORIA _ MENTAL FITNESS-11.11.25.md`

---

*— River, removendo obstáculos 🌊*
