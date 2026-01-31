# Story 2.1: Interactive Components & Hooks

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Complete
**Priority:** P1
**Depends On:** Story 1.1

---

## User Story

As a **developer**,
I want **the new interactive UI components (InteractiveChecklist, CountdownTimer, ComparisonGrid, VideoEmbed) and custom hooks (useCountdown, useChecklist)**,
so that **they can be used in the content sections**.

---

## Acceptance Criteria

- [ ] 1. `src/hooks/useCountdown.ts` created: SSR-safe, returns {days, hours, minutes, seconds, isExpired}, cleans up interval on unmount
- [ ] 2. `src/hooks/useChecklist.ts` created: manages Set of checked items, provides toggle/reset/count
- [ ] 3. `src/components/ui/InteractiveChecklist.tsx` created: renders checkboxes with animation, live counter "X de Y selecionados", dynamic threshold message at 3+ checks
- [ ] 4. `src/components/ui/CountdownTimer.tsx` created: renders 4 time segments with labels, compact mode prop for UrgencyBar, handles expiry state
- [ ] 5. `src/components/ui/ComparisonGrid.tsx` created: responsive 3-column table (desktop) / stacked cards (mobile), highlighted column with gold border
- [ ] 6. `src/components/ui/VideoEmbed.tsx` created: YouTube/Vimeo iframe or placeholder card with play button, lazy loading, 16:9 aspect ratio
- [ ] 7. All components use "use client", CSS custom properties, and Framer Motion animations
- [ ] 8. All components have proper accessibility (keyboard, ARIA attributes)
- [ ] 9. All pass type checking and lint

---

## Technical Context

### useCountdown Hook

```typescript
// src/hooks/useCountdown.ts
interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(deadline: string): CountdownState
```

**Implementation:**
- SSR-safe: returns zeros on server, starts interval in useEffect
- Uses `setInterval(1000)` for client-side updates
- Calculates diff: `new Date(deadline).getTime() - Date.now()`
- Cleans up interval on unmount

### useChecklist Hook

```typescript
// src/hooks/useChecklist.ts
interface ChecklistState {
  checked: Set<number>;
  count: number;
  toggle: (index: number) => void;
  reset: () => void;
}

export function useChecklist(totalItems: number): ChecklistState
```

### InteractiveChecklist Component

```typescript
// src/components/ui/InteractiveChecklist.tsx
interface Threshold {
  count: number;
  message: string;
}

interface InteractiveChecklistProps {
  items: string[];
  thresholds: Threshold[];
  className?: string;
}
```

**Visual:**
- Each item in Card component
- Gold check animation when checked
- Counter: muted text
- Threshold message: gold text when triggered
- Accessibility: role="checkbox", aria-checked, keyboard support

### CountdownTimer Component

```typescript
// src/components/ui/CountdownTimer.tsx
interface CountdownTimerProps {
  deadline: string; // ISO date
  compact?: boolean; // for UrgencyBar
  labels?: { days, hours, minutes, seconds };
  className?: string;
}
```

**Visual:**
- 4 segments with labels (dias, horas, min, seg)
- Compact mode: inline, no labels, smaller
- Expiry: shows "Encerrado" or hides
- Gold numbers, muted labels

### ComparisonGrid Component

```typescript
// src/components/ui/ComparisonGrid.tsx
interface Column {
  name: string;
  highlighted?: boolean;
  values: Record<string, string>;
}

interface ComparisonGridProps {
  features: string[];
  columns: Column[];
  className?: string;
}
```

**Visual:**
- Desktop: full table with header row
- Mobile: stacked cards per column
- Highlighted column: gold border
- Breakpoint: md (768px)

### VideoEmbed Component

```typescript
// src/components/ui/VideoEmbed.tsx
interface VideoEmbedProps {
  url?: string;
  placeholder?: string;
  aspectRatio?: string; // default "16/9"
  className?: string;
}
```

**Visual:**
- With URL: lazy iframe
- Without URL: placeholder card with play button
- glass-card class for placeholder
- 16:9 aspect ratio container

---

## Definition of Done

- [ ] Both hooks created and typed correctly
- [ ] All 4 UI components render correctly
- [ ] CountdownTimer updates every second
- [ ] InteractiveChecklist counter updates on click
- [ ] ComparisonGrid switches layout at md breakpoint
- [ ] VideoEmbed shows placeholder when no URL
- [ ] All keyboard accessible
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes

---

*— River, removendo obstáculos 🌊*
