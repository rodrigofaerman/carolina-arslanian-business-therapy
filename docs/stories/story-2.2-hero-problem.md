# Story 2.2: Hero + Problem Sections

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Pending
**Priority:** P1
**Depends On:** Story 1.3, Story 2.1

---

## User Story

As a **developer**,
I want **the Hero and Problem sections implemented with the original copy**,
so that **visitors see the main value proposition and self-identify with the pain points**.

---

## Acceptance Criteria

- [ ] 1. Constants populated: HERO with headline, subheadline, CTAs, trust badges
- [ ] 2. Constants populated: PROBLEM with title, subtitle, narrative copy, checklist items (5 symptoms), thresholds
- [ ] 3. `Hero.tsx` renders full-screen hero with stagger animation, Badge "Turma Marco 2026", 2 CTAs, 3 trust badges
- [ ] 4. `ProblemChecklist.tsx` renders narrative block with gold left border, InteractiveChecklist with 5 symptom checkboxes, dynamic message at 3+ checks
- [ ] 5. All copy matches the original document exactly (PT-BR)
- [ ] 6. Both sections responsive at all breakpoints
- [ ] 7. Section IDs correct for anchor navigation (#hero, #problema)

---

## Technical Context

### HERO Constants (from original copy)

```typescript
export const HERO = {
  headline: "Você foi promovido 5 vezes.",
  headlineLine2: "Mas ninguém te ensinou a comandar sua mente no nível que comanda seu trabalho.",
  subheadline: "Mentoria exclusiva de 90 dias para líderes C-Level dominarem o jogo invisível da alta performance.",
  ctaPrimary: {
    text: "Vagas limitadas, garanta a sua agora!",
    href: "#investimento" // or WhatsApp link
  },
  ctaSecondary: {
    text: "Conheça o Programa Completo",
    href: "#metodo"
  },
  badges: [
    "Turma reduzida para troca de alto nível",
    "ROI de 5-6x em apenas 90 dias",
    "Pesquisa TalentSmart, líder mundial em inteligência emocional"
  ],
  turmaBadge: "Turma Março 2026"
};
```

### PROBLEM Constants (from original copy)

```typescript
export const PROBLEM = {
  title: "A verdade que ninguém te contou",
  subtitle: "Não é estresse. É que você está rodando um sistema operacional obsoleto.",
  narrative: [
    "Você achava que a promoção resolveria tudo. Mais poder. Mais impacto. Mais reconhecimento.",
    "Mas agora você trabalha mais do que nunca, dorme pior, e ainda assim sente que está deixando algo importante passar.",
    "**Você não está sozinho. Você não é fraco. Você não é incompetente.**",
    "Você está apenas lutando a batalha errada — tentando controlar o caos externo sem dominar o interno."
  ],
  checklistTitle: "Quantos destes sinais você reconhece?",
  checklistItems: [
    "Você acorda às 3h da manhã com o cérebro já em modo reunião",
    "Você tem medo de que descubram que você não é tão bom quanto parece",
    "Seu calendário é um Tetris impossível de encaixar",
    "Sente culpa quando está parado. Produtividade e disciplina são sinônimo de alta performance",
    "Já investiu em coaching tradicional, terapia, cursos de liderança mas não sentiu transformação real"
  ],
  thresholds: [
    { count: 3, message: "Continue lendo - este programa foi feito para você." }
  ]
};
```

### Hero.tsx Structure

```
<section id="hero" className="relative min-h-screen">
  {/* Background grid */}
  <motion.div variants={staggerContainer}>
    <Badge>Turma Março 2026</Badge>
    <h1>{headline}</h1>
    <p>{subheadline}</p>
    <div>{/* 2 CTAs */}</div>
    <div>{/* 3 trust badges */}</div>
  </motion.div>
</section>
```

### ProblemChecklist.tsx Structure

```
<section id="problema">
  <SectionHeader title={title} subtitle={subtitle} />
  <div className="border-l-4 border-accent">
    {/* Narrative paragraphs */}
  </div>
  <h3>{checklistTitle}</h3>
  <InteractiveChecklist items={checklistItems} thresholds={thresholds} />
</section>
```

---

## Definition of Done

- [ ] HERO and PROBLEM added to constants.ts
- [ ] Hero.tsx renders with all elements
- [ ] ProblemChecklist.tsx renders with InteractiveChecklist
- [ ] Checking 3+ items shows threshold message
- [ ] All copy matches original document exactly
- [ ] Sections responsive at all breakpoints
- [ ] Anchor navigation works (#hero, #problema)
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
