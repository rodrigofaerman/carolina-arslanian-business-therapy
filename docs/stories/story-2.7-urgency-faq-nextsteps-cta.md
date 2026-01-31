# Story 2.7: Urgency + FAQ + Next Steps + CTA Final

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Pending
**Priority:** P1
**Depends On:** Story 1.3, Story 2.1

---

## User Story

As a **developer**,
I want **the remaining conversion sections (Urgency, FAQ, Next Steps, CTA Final) with original copy**,
so that **the conversion funnel is complete**.

---

## Acceptance Criteria

- [ ] 1. Constants populated: URGENCY with deadline, vacancies, copy
- [ ] 2. Constants populated: FAQS with all 10 Q&A items
- [ ] 3. Constants populated: NEXT_STEPS with 4 steps
- [ ] 4. Constants populated: CTA_FINAL with title, CTAs, trust badges, closing copy
- [ ] 5. `Urgency.tsx` renders large CountdownTimer, vacancy progress (X of 8), urgency copy
- [ ] 6. `FAQ.tsx` renders Accordion with 10 items
- [ ] 7. `NextSteps.tsx` renders 4-step timeline with gold line
- [ ] 8. `CTAFinal.tsx` renders two-option decision layout with trust badges
- [ ] 9. UrgencyBar (from Story 1.3) now wired to URGENCY constants with real countdown
- [ ] 10. All copy from original document preserved exactly
- [ ] 11. All sections responsive

---

## Technical Context

### URGENCY Constants (from original copy)

```typescript
export const URGENCY = {
  deadline: "2026-02-28T23:59:59-03:00", // Configure actual deadline
  totalVacancies: 8,
  filledVacancies: 5,
  title: "Oferta pré-lançamento expira em",
  vacancyText: "Poucas vagas restantes, depois entra na lista de espera para a próxima turma.",
  nextCohort: "Próxima turma apenas em Inverno 2026"
};
```

### FAQS Constants (from original copy)

```typescript
export const FAQS = [
  {
    question: "Quanto tempo de dedicação semanal é necessário?",
    answer: "1h30/semana durante os encontros + 15-30min/dia de prática entre sessões para implementação das ferramentas."
  },
  {
    question: "Posso parcelar o investimento?",
    answer: "Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos pagamento via transferência bancária ou cartão corporativo."
  },
  {
    question: "O que acontece se eu perder um encontro?",
    answer: "Todos os encontros são gravados e disponibilizados para os participantes. Você também pode agendar uma sessão individual de alinhamento para não perder o fio da jornada."
  },
  {
    question: "É terapia? Como difere de coaching executivo?",
    answer: "Não é terapia nem coaching tradicional. Mental Fitness é focado em performance: ferramentas práticas de neurociência aplicada que você implementa imediatamente no trabalho. Enquanto terapia olha para o passado e coaching para metas futuras, Mental Fitness treina habilidades mentais para o presente - como você funciona sob pressão HOJE."
  },
  {
    question: "Por que apenas 8 participantes?",
    answer: "Para garantir transformação real e personalização profunda. Com 8 líderes C-Level, conseguimos criar conexões genuínas, networking estratégico e adaptar as ferramentas para o contexto específico de cada um."
  },
  {
    question: "Qual a política de reembolso?",
    answer: "Garantia de Transformação: Se após os 2 primeiros encontros você sentir que o programa não é para você, devolvemos 100% do investimento. Sem perguntas, sem burocracia."
  },
  {
    question: "Os encontros são presenciais ou virtuais?",
    answer: "Formato híbrido: 6 encontros em grupo são virtuais (sexta-feira 17h-19h), e as 2 sessões individuais podem ser presenciais ou virtuais, conforme sua preferência."
  },
  {
    question: "O que é a IA exclusiva para participantes?",
    answer: "É um bate-papo com inteligência artificial criada exclusivamente para a mentoria. Ela gera um diagnóstico individual profundo sobre suas dores, desejos e nível de Mental Fitness, personalizado para você."
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim! Ao final da jornada, você recebe certificado de conclusão da Mentoria Mental Fitness + seu Dashboard personalizado com todas as métricas de evolução."
  },
  {
    question: "Como funciona o grupo WhatsApp?",
    answer: "É seu espaço de networking estratégico, suporte entre sessões e conexão com outros líderes C-Level. Usamos para compartilhar insights, ajustes rápidos e criar comunidade."
  }
];
```

### NEXT_STEPS Constants (from original copy)

```typescript
export const NEXT_STEPS = {
  title: "O que acontece depois de garantir sua vaga?",
  steps: [
    {
      number: 1,
      title: "Confirmação",
      description: "Você garante sua vaga e recebe confirmação via e-mail"
    },
    {
      number: 2,
      title: "Comunidade",
      description: "Acesso ao grupo WhatsApp exclusivo da turma para começar a criar conexões"
    },
    {
      number: 3,
      title: "Diagnóstico",
      description: "Bate-papo com IA exclusiva para diagnóstico pré-mentoria"
    },
    {
      number: 4,
      title: "Preparação",
      description: "Recebe calendário completo + materiais preparatórios"
    }
  ],
  startInfo: "🚀 INÍCIO: Primeiro encontro em Março 2026 (data específica será confirmada)"
};
```

### CTA_FINAL Constants (from original copy)

```typescript
export const CTA_FINAL = {
  title: "Hora de Decidir: Você Continua no Jogo Visível ou Domina o Jogo Invisível?",
  intro: "Você chegou até aqui porque sabe que algo precisa mudar.",
  tagline: "Não é sobre trabalhar mais. É sobre jogar melhor.",
  ctaPrimary: {
    text: "SIM, QUERO GARANTIR MINHA VAGA NA TURMA OUTONO 2026",
    href: "#investimento" // or WhatsApp/payment link
  },
  ctaSecondary: {
    text: "Ainda tenho dúvidas - Agende 15min de conversa estratégica",
    href: "#" // Calendly or WhatsApp link
  },
  trustBadges: [
    { icon: "🔒", text: "Pagamento 100% seguro" },
    { icon: "🛡️", text: "Garantia de Transformação" },
    { icon: "⏰", text: "Vagas limitadas" }
  ]
};
```

### Component Structures

**Urgency.tsx:**
```
<section id="urgencia">
  <p>{URGENCY.title}</p>
  <CountdownTimer deadline={URGENCY.deadline} />

  {/* Vacancy progress */}
  <div className="flex gap-2">
    {Array.from({ length: URGENCY.totalVacancies }).map((_, i) => (
      <div key={i} className={`w-4 h-4 rounded-full ${i < URGENCY.filledVacancies ? 'bg-accent' : 'bg-muted'}`} />
    ))}
  </div>
  <p>{URGENCY.filledVacancies} de {URGENCY.totalVacancies} vagas preenchidas</p>

  <p>{URGENCY.vacancyText}</p>
  <p className="text-muted">{URGENCY.nextCohort}</p>
</section>
```

**FAQ.tsx:**
```
<section id="faq">
  <SectionHeader title="Perguntas Frequentes" />
  <Accordion items={FAQS} />
</section>
```

**NextSteps.tsx:**
```
<section id="proximos-passos">
  <SectionHeader title={NEXT_STEPS.title} />

  {/* Timeline with gold line */}
  <div className="relative border-l-2 border-accent pl-8">
    {NEXT_STEPS.steps.map(step => (
      <div key={step.number} className="mb-8">
        <div className="absolute -left-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          {step.number}
        </div>
        <h4>✅ PASSO {step.number}: {step.title}</h4>
        <p>{step.description}</p>
      </div>
    ))}
  </div>

  <p className="font-bold">{NEXT_STEPS.startInfo}</p>
</section>
```

**CTAFinal.tsx:**
```
<section id="decisao" className="bg-elevated py-24">
  <h2>{CTA_FINAL.title}</h2>
  <p>{CTA_FINAL.intro}</p>
  <p className="font-bold">{CTA_FINAL.tagline}</p>

  <div className="flex flex-col md:flex-row gap-4 justify-center">
    <Button size="lg" href={CTA_FINAL.ctaPrimary.href}>
      {CTA_FINAL.ctaPrimary.text}
    </Button>
    <Button variant="secondary" href={CTA_FINAL.ctaSecondary.href}>
      {CTA_FINAL.ctaSecondary.text}
    </Button>
  </div>

  <div className="flex gap-8 justify-center mt-8">
    {CTA_FINAL.trustBadges.map(badge => (
      <span key={badge.text}>{badge.icon} {badge.text}</span>
    ))}
  </div>
</section>
```

**UrgencyBar Update:**
Wire UrgencyBar.tsx to use URGENCY constants:
- `deadline={URGENCY.deadline}`
- `vacancyText="{URGENCY.totalVacancies - URGENCY.filledVacancies} vagas restantes"`

---

## Definition of Done

- [ ] URGENCY, FAQS, NEXT_STEPS, CTA_FINAL added to constants.ts
- [ ] Urgency.tsx renders countdown and vacancy progress
- [ ] FAQ.tsx renders 10 accordion items
- [ ] NextSteps.tsx renders 4-step timeline
- [ ] CTAFinal.tsx renders decision layout with 2 CTAs
- [ ] UrgencyBar wired to real countdown from URGENCY constants
- [ ] All copy matches original document exactly
- [ ] All sections responsive
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
