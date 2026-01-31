# Story 2.5: Comparison + About + For Who Sections

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Pending
**Priority:** P2
**Depends On:** Story 1.3, Story 2.1

---

## User Story

As a **developer**,
I want **the Comparison, About Carol, and For Who sections**,
so that **visitors understand differentiation, trust the mentor, and self-qualify**.

---

## Acceptance Criteria

- [ ] 1. Constants populated: COMPARISON with 6 features across 3 columns; includes value breakdown
- [ ] 2. Constants populated: ABOUT with placeholder structure (bio, credentials, photo, stats - content TBD)
- [ ] 3. Constants populated: FOR_WHO with ideal profile and exclusions
- [ ] 4. `ComparisonTable.tsx` renders ComparisonGrid with Mental Fitness column highlighted in gold
- [ ] 5. `AboutCarol.tsx` renders placeholder layout adaptable when client provides bio content
- [ ] 6. `ForWho.tsx` renders green/red two-column layout with Badge variants
- [ ] 7. Value breakdown box below comparison table
- [ ] 8. All sections responsive

---

## Technical Context

### COMPARISON Constants (from original copy)

```typescript
export const COMPARISON = {
  title: "Por que Mental Fitness vs Coaching Tradicional ou Curso?",
  features: ["Foco", "Duração", "Aplicação", "Formato", "Investimento", "ROI"],
  columns: [
    {
      name: "Coaching Tradicional",
      highlighted: false,
      values: {
        "Foco": "Metas externas",
        "Duração": "6-12 meses",
        "Aplicação": "Genérica",
        "Formato": "Individual",
        "Investimento": "R$ 15-30k",
        "ROI": "Difuso"
      }
    },
    {
      name: "Curso",
      highlighted: false,
      values: {
        "Foco": "Conhecimento teórico",
        "Duração": "18-24 meses",
        "Aplicação": "Acadêmica",
        "Formato": "Teórico em massa",
        "Investimento": "R$ 80-150k",
        "ROI": "Longo prazo"
      }
    },
    {
      name: "Mental Fitness Mentoria",
      highlighted: true,
      values: {
        "Foco": "Reprogramação interna e ações externas para sustentar mudanças",
        "Duração": "90 dias com alto nível de profundidade e entregáveis",
        "Aplicação": "Imediata (segunda-feira)",
        "Formato": "Híbrido: grupo + individual + IA",
        "Investimento": "R$ 7-8.5k",
        "ROI": "5-6x em 90 dias"
      }
    }
  ],
  valueBreakdown: {
    title: "Breakdown de Valor",
    calculation: "R$ 8.500 ÷ 8 encontros = R$ 1.062/encontro",
    subtitle: "Menos que 1 sessão de coaching executivo premium.",
    features: [
      "6 sessões em grupo com C-Levels",
      "2 sessões individuais personalizadas",
      "Entregáveis e métricas de evolução individuais",
      "IA exclusiva para diagnóstico profundo",
      "Mapeamento Eneagrama + DISC",
      "Comunidade de líderes + networking estratégico",
      "Suporte entre sessões via WhatsApp"
    ]
  }
};
```

### ABOUT Constants (placeholder)

```typescript
export const ABOUT = {
  title: "Quem é sua mentora",
  note: "⚠️ CONTEÚDO A SER FORNECIDO PELO CLIENTE",
  placeholder: {
    name: "Carolina Arslanian",
    credentials: [
      "20 anos em multinacionais",
      "8 anos como Diretora de Marketing",
      "Experiência em 8 países",
      "Especialista em Mental Fitness para líderes C-Level"
    ],
    bio: null, // TBD
    photo: null, // TBD
    stats: [
      { label: "Líderes transformados", value: "X+" },
      { label: "Anos de experiência", value: "20+" }
    ]
  }
};
```

### FOR_WHO Constants (from original copy)

```typescript
export const FOR_WHO = {
  title: "Filtro de Fit: Este programa é para você?",
  idealProfile: {
    title: "✅ Perfil do Líder Ideal:",
    cargoResponsabilidade: [
      "C-Level, Diretor ou VP em empresa de médio/grande porte",
      "People leader ou líder de projetos estratégicos",
      "Faturamento pessoal anual de R$ 600k+"
    ],
    momentoCarreira: [
      "Promovido nos últimos 6-18 meses para posição de alta complexidade",
      "Passando por mudança organizacional (fusão, reestruturação, expansão)",
      "Reconhece que o próximo nível de performance exige mudança interna, não mais técnicas externas",
      "Já investiu em desenvolvimento (coaching, MBA, terapia) mas ainda sente que falta algo"
    ]
  },
  exclusions: {
    title: "❌ Este programa NÃO é para você se:",
    items: [
      "Busca soluções rápidas ou \"hacks\" de produtividade sem mudança mental profunda",
      "Não está disposto a dedicar 1h30/semana + 15-30min/dia de prática entre sessões",
      "Prefere apenas técnicas e ferramentas sem trabalhar os padrões mentais subjacentes",
      "Acredita que \"mais disciplina\" é a única solução (em vez de melhor design mental)"
    ]
  }
};
```

### Component Structures

**ComparisonTable.tsx:**
```
<section id="comparacao">
  <SectionHeader title={COMPARISON.title} />
  <ComparisonGrid features={features} columns={columns} />

  {/* Value breakdown */}
  <Card gold>
    <h3>{valueBreakdown.title}</h3>
    <p className="text-2xl font-bold">{valueBreakdown.calculation}</p>
    <p>{valueBreakdown.subtitle}</p>
    <ul>
      {valueBreakdown.features.map(f => <li key={f}>✅ {f}</li>)}
    </ul>
  </Card>
</section>
```

**AboutCarol.tsx:**
```
<section id="sobre">
  <SectionHeader title={ABOUT.title} />
  {/* Photo placeholder */}
  <div className="flex gap-8">
    <div className="w-1/3">{/* Photo or placeholder */}</div>
    <div className="w-2/3">
      <h3>{ABOUT.placeholder.name}</h3>
      <ul>{/* Credentials */}</ul>
      <p>{/* Bio when provided */}</p>
    </div>
  </div>
  {/* Stats */}
</section>
```

**ForWho.tsx:**
```
<section id="para-quem">
  <SectionHeader title={FOR_WHO.title} />
  <div className="grid md:grid-cols-2 gap-8">
    {/* Ideal profile - green */}
    <Card className="border-success">
      <Badge variant="green">{idealProfile.title}</Badge>
      <h4>Cargo & Responsabilidade:</h4>
      <ul>{/* items */}</ul>
      <h4>Momento de Carreira:</h4>
      <ul>{/* items */}</ul>
    </Card>

    {/* Exclusions - red */}
    <Card className="border-danger">
      <Badge variant="red">{exclusions.title}</Badge>
      <ul>{/* items */}</ul>
    </Card>
  </div>
</section>
```

---

## Definition of Done

- [ ] COMPARISON, ABOUT, FOR_WHO added to constants.ts
- [ ] ComparisonTable.tsx renders with highlighted Mental Fitness column
- [ ] Value breakdown box renders below comparison
- [ ] AboutCarol.tsx renders placeholder layout
- [ ] ForWho.tsx renders green/red two-column layout
- [ ] All copy matches original document exactly
- [ ] All 3 sections responsive
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
