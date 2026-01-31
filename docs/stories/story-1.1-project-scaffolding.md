# Story 1.1: Project Scaffolding

**Epic:** 1 - Foundation & Design System
**Status:** Complete
**Priority:** P0 (Blocker)
**Depends On:** None

---

## User Story

As a **developer**,
I want **a new Next.js 16 project initialized at `mentoria/` with the same tech stack as the existing website**,
so that **I have a working development environment to build the landing page**.

---

## Acceptance Criteria

- [x] 1. Next.js 16.1.6 project created at `mentoria/` with React 19.2.3, TypeScript 5, Tailwind CSS 4, Framer Motion 12.29.2
- [x] 2. Configuration files match existing site: `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`
- [x] 3. `next.config.ts` copied and adapted (CSP allows YouTube/Vimeo in frame-src)
- [x] 4. `.gitignore` configured (node_modules, .next, .env.local)
- [x] 5. `.env.example` created with NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_WHATSAPP
- [x] 6. `npm run dev` starts without errors
- [x] 7. `npm run build` succeeds
- [x] 8. `npm run lint` passes

---

## Technical Context

**Source Reference:** `website/` (existing Business Therapy Code project)

**Files to Create:**
- `mentoria/package.json` - Dependencies matching website
- `mentoria/tsconfig.json` - Copy from website
- `mentoria/postcss.config.mjs` - Copy from website
- `mentoria/eslint.config.mjs` - Copy from website
- `mentoria/next.config.ts` - Copy and update CSP for video embeds
- `mentoria/.gitignore` - Standard Next.js gitignore
- `mentoria/.env.example` - Environment template

**Dependencies (package.json):**
```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "framer-motion": "12.29.2"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

**CSP Update (next.config.ts):**
Add to frame-src: `https://www.youtube.com https://player.vimeo.com`

---

## Definition of Done

- [x] All files created as specified
- [x] `npm install` completes without errors
- [x] `npm run dev` starts dev server on localhost:3000
- [x] `npm run build` produces production build
- [x] `npm run lint` passes with zero warnings
- [x] Directory structure matches architecture.md specification

---

## Notes

This is the critical path story - all other stories depend on this completing first.

---

*— River, removendo obstáculos 🌊*
