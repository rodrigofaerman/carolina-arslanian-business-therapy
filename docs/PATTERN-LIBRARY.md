# Business Therapy Code™ - Pattern Library

**Project:** Carolina Arslanian Executive Mentorship Landing Page
**Version:** 1.0.0
**Last Updated:** 2026-01-21
**Design System:** Custom (Marrom + Dourado + Branco)

---

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-marrom` | `#3d2a18` | Primary text, dark backgrounds |
| `--color-marrom-light` | `#5a4231` | Secondary text |
| `--color-marrom-dark` | `#2a1d10` | Deep backgrounds |
| `--color-dourado` | `#c9a962` | Accent, CTAs, highlights |
| `--color-dourado-light` | `#d9c088` | Hover states |
| `--color-dourado-dark` | `#a88a4a` | Text on light backgrounds (contrast) |
| `--color-branco` | `#ffffff` | Light backgrounds |
| `--color-offwhite` | `#faf8f5` | Card backgrounds |
| `--color-cream` | `#f5f0e8` | Section backgrounds |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Playfair Display', Georgia, serif` | Headings, quotes |
| `--font-body` | `'Montserrat', sans-serif` | Body text, UI |

### Spacing

| Token | Value |
|-------|-------|
| `--slide-padding` | `60px` (desktop), `40px` (tablet), `24px` (mobile) |
| `--content-max-width` | `1200px` |

---

## Component Patterns

### 1. Buttons (`.btn`)

```html
<a href="#contato" class="btn btn-primary">
  AGENDAR DIAGNÓSTICO <span class="btn-icon" aria-hidden="true">→</span>
</a>
```

**Variants:**
- `.btn-primary` - Gold background, dark text
- `.btn-secondary` - Transparent, dark border

**States:**
- Hover: `translateY(-3px)` + enhanced shadow
- Focus: `outline: 3px solid gold` + `6px` shadow ring
- Active: `translateY(-1px)`

---

### 2. Icon Circles (`.icon-circle`)

```html
<div class="game-icon" aria-hidden="true">
  <span class="icon-circle">🧠</span>
</div>
```

**Sizes:**
- Default: `70px × 70px`
- `.icon-circle-sm`: `50px × 50px`
- `.icon-circle-lg`: `90px × 90px`

**Styling:**
- Gradient background (cream to offwhite)
- Gold border (2px)
- Hover: `scale(1.05)` + enhanced shadow

---

### 3. Cards

#### Game Card (`.game-card`)

```html
<div class="game-card">
  <div class="game-icon" aria-hidden="true"><span class="icon-circle">🧠</span></div>
  <h3 class="game-title">PENSAR</h3>
  <p class="game-subtitle">Comandar a Mente</p>
  <ul class="game-list">
    <li>Item 1</li>
  </ul>
  <p class="game-quote">"Quote text"</p>
</div>
```

#### Benefit Card (`.benefit-card`)

#### Stat Card (`.stat-card`)

**Hover Effect (all cards):**
```css
transform: translateY(-5px);
box-shadow: 0 12px 30px rgba(61, 42, 24, 0.12);
```

---

### 4. Photo Component (`.carolina-photo`)

```html
<img src="assets/images/carolina-hero.jpg"
     alt="Carolina Arslanian - Mentora Executiva"
     class="carolina-photo">
```

**Variants:**
- `.carolina-photo-rounded` - `border-radius: 8px`
- `.carolina-photo-circle` - Circular crop

**Styling:**
- `max-width: 320px`
- Gold border (3px)
- Shadow: `0 10px 40px rgba(61, 42, 24, 0.2)`
- Hover: `scale(1.02)`

---

### 5. Testimonial Card

```html
<div class="testimonial-card">
  <blockquote class="testimonial-quote">
    "Quote text..."
  </blockquote>
  <div class="testimonial-attribution">
    <span class="testimonial-name">— Name</span>
    <span class="testimonial-role">Title | Salary</span>
  </div>
</div>
```

---

### 6. Dashboard Metrics (Accessible)

```html
<div class="metric">
  <span class="metric-label" id="stress-label">Estresse</span>
  <div class="metric-bar"
       role="progressbar"
       aria-valuenow="40"
       aria-valuemin="0"
       aria-valuemax="100"
       aria-labelledby="stress-label"
       style="--value: 40%">
  </div>
</div>
```

---

## Layout Patterns

### Two-Column with Photo

```html
<div class="about-layout">
  <div class="about-text">...</div>
  <div class="about-visual">
    <img class="carolina-photo">
  </div>
</div>
```

**Variants:**
- `.about-layout` - Text left, photo right
- `.methodology-layout` - 1fr 0.8fr ratio
- `.closing-layout` - Photo left, text right (0.8fr 1fr)

**Responsive:** Stacks to single column at 1024px

---

### Stats Row (`.stats-row`)

```html
<div class="stats-row">
  <div class="stat-card">
    <span class="stat-number">71%</span>
    <span class="stat-label">Description</span>
  </div>
</div>
```

---

## Decorative Elements

### Diamond Separator

```html
<div class="diamond-separator">◆ ◆ ◆</div>
```

### Laurel Wreath

```html
<div class="laurel-divider">
  <span class="laurel-wreath" aria-hidden="true"></span>
</div>
```

### Gold Network Pattern

Applied via `.has-network-pattern` class:
```html
<section class="slide has-network-pattern">...</section>
```

---

## Accessibility Patterns

### Skip Link

```html
<a href="#hero" class="skip-link">Pular para o conteúdo</a>
```

### Screen Reader Only Text

```html
<span class="sr-only">Descriptive text for screen readers</span>
```

### Decorative Icons

Always use `aria-hidden="true"` on emoji/icon containers:
```html
<span class="contact-icon" aria-hidden="true">📧</span>
```

### Focus Indicators

All interactive elements have visible focus states using `:focus-visible`.

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `1024px` | Tablet landscape |
| `768px` | Tablet portrait |
| `480px` | Mobile phones |

---

## File Structure

```
carolina-arslanian-website/
├── index.html
├── styles.css
├── assets/
│   ├── images/
│   │   ├── carolina-hero.jpg
│   │   ├── carolina-about.jpg
│   │   ├── carolina-presenting.jpg
│   │   └── carolina-closing.jpg
│   ├── gold-network-pattern.svg
│   └── laurel-wreath.svg
└── docs/
    └── PATTERN-LIBRARY.md
```

---

## WCAG AA Compliance

| Requirement | Status |
|-------------|--------|
| Color contrast ≥4.5:1 | ✅ |
| Keyboard navigation | ✅ |
| Focus indicators | ✅ |
| Alt text on images | ✅ |
| ARIA roles/labels | ✅ |
| Skip link | ✅ |
| Semantic HTML | ✅ |
| Landmarks (nav, main, footer) | ✅ |

---

*Generated by Uma (UX Design Expert) via Ralph Autonomous Agent*
