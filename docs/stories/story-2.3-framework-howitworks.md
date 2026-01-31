# Story 2.3: Framework + How It Works Sections

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Pending
**Priority:** P1
**Depends On:** Story 1.3, Story 2.1

---

## User Story

As a **developer**,
I want **the Framework and How It Works sections with original copy**,
so that **visitors understand the methodology and program structure**.

---

## Acceptance Criteria

- [ ] 1. Constants populated: FRAMEWORK with title, hook copy, Mental Fitness definition quote, 3 games with tools and deliverables
- [ ] 2. Constants populated: HOW_IT_WORKS with format (8 encontros), frequencia, formato hibrido, turma boutique, WhatsApp grupo, entregaveis, start date
- [ ] 3. `Framework.tsx` renders 3 color-coded game cards (blue/amber/purple), VideoEmbed placeholder, quote block in glass-card
- [ ] 4. `HowItWorks.tsx` renders 90-day timeline with gold vertical line, format detail items with checkmarks, start date badge
- [ ] 5. All copy from original document preserved exactly
- [ ] 6. Both sections responsive

---

## Technical Context

### FRAMEWORK Constants (from original copy)

```typescript
export const FRAMEWORK = {
  title: "O jogo que ninguém te ensinou",
  hook: "Você domina o jogo visível. Mas excelência virou commodity. O 1% joga o jogo que ninguém te ensinou.",
  results: [
    "✅ Resultado comprovado e palpável inclusive financeiro",
    "✅ De \"afogando nas demandas\" para \"respirando\" e \"no controle\"",
    "✅ De se sentir uma fraude para discutir \"cifras concretas\"",
    "✅ De \"sem tempo hábil e culpado\" para \"tenho o controle do meu tempo\""
  ],
  intro: "50% da sua energia está no jogo errado. Você domina planejamento, gestão, estratégia, resultados. Mas não está jogando o Inner Game — o jogo invisível que separa o 1% do resto.",
  definition: {
    title: "O que é Mental Fitness?",
    text: "Mental Fitness é a musculação da mente. Assim como você treina o corpo para performance física, você pode treinar a mente para performance emocional e estratégica. É o segredo invisível dos líderes que se destacam sob pressão.",
    quote: "Se você não conseguir gerenciar o 'barulho interno' dentro de si, como poderá liderar o que está fora?"
  },
  games: [
    {
      id: "pensar",
      title: "PENSAR (MÊS 1)",
      subtitle: "O Controle Remoto do Estresse",
      description: "Você para de ser refém dos seus pensamentos. Aprende a desligar o modo \"alerta constante\" sem perder performance. Eleve sua Resiliência Mental: recupere sua energia em horas, não em semanas.",
      tools: [
        "Framework Reprogramação Mental 3 C's: Catch It, Challenge It, Change It",
        "Técnicas de Zoom Out",
        "Diagnóstico pré-início via IA exclusivo",
        "Práticas de alta performance: Visualização, Breathwork"
      ],
      deliverable: "Mental Fitness Scorecard individual com métricas de evolução",
      color: "blue"
    },
    {
      id: "agir",
      title: "AGIR (MÊS 2)",
      subtitle: "Sistemas que sustentam alta performance",
      description: "Você redesenha sua energia e tempo. Você não precisa de mais disciplina. Precisa de melhor estratégias para sair do piloto automático e voltar a liderar sua própria vida.",
      tools: [
        "Rituais adaptativos",
        "Protocolo de elasticidade",
        "Gestão de vazamentos de energia e tempo"
      ],
      deliverable: "Sistema de rituais e práticas para maximizar produtividade criativa",
      color: "amber"
    },
    {
      id: "sentir",
      title: "SENTIR (MÊS 2)",
      subtitle: "Autoconfiança e Influência Inabalável",
      description: "Você reconstrói confiança real (não máscara). Livre da busca por validação, você destrava sua voz de líder. Seu poder de influência se torna sua nova moeda.",
      tools: [
        "Reprogramação de autoimagem",
        "Authority Protocol",
        "Presença executiva"
      ],
      deliverable: null,
      color: "purple"
    }
  ],
  videoUrl: null // placeholder until provided
};
```

### HOW_IT_WORKS Constants (from original copy)

```typescript
export const HOW_IT_WORKS = {
  title: "Como funciona a jornada de 90 dias",
  format: [
    { icon: "check", text: "8 encontros total (virtual): 6 encontros em grupo (2h cada) + 2 encontros individuais (1h cada)" },
    { icon: "check", text: "Frequência: Quinzenal (sexta-feira 17h-19h)" },
    { icon: "check", text: "Formato híbrido: Sessões Individuais (Híbridas): Virtual ou Presencial (SP/FL) sob consulta" },
    { icon: "check", text: "Turma boutique: Para transformação real e personalização" },
    { icon: "check", text: "Grupo WhatsApp exclusivo: Networking, suporte entre sessões e conexões estratégicas" },
    { icon: "check", text: "Entregáveis: Diagnóstico e Perfil Comportamental individual via inteligência artificial exclusiva para participantes" },
    { icon: "check", text: "Mental Fitness Scorecard: Acompanhamento de evolução com métricas tangíveis" }
  ],
  startDate: "Março 2026",
  nextCohort: "Próxima turma apenas em Inverno 2026"
};
```

### Framework.tsx Structure

```
<section id="metodo">
  <SectionHeader title={title} />
  <p>{hook}</p>
  <div>{/* Results checkmarks */}</div>
  <p>{intro}</p>

  {/* Definition box with glass-card */}
  <Card className="glass-card">
    <h3>{definition.title}</h3>
    <p>{definition.text}</p>
    <blockquote>{definition.quote}</blockquote>
  </Card>

  {/* Video placeholder */}
  <VideoEmbed url={videoUrl} placeholder="Carol explica o Framework Mental Fitness" />

  {/* 3 Game Cards */}
  <div className="grid md:grid-cols-3">
    {games.map(game => (
      <Card key={game.id} className={`border-${game.color}`}>
        <h4>{game.title}</h4>
        <p>{game.subtitle}</p>
        <p>{game.description}</p>
        <ul>{/* tools */}</ul>
        <p>{/* deliverable */}</p>
      </Card>
    ))}
  </div>
</section>
```

### HowItWorks.tsx Structure

```
<section id="como-funciona">
  <SectionHeader title={title} />

  {/* Timeline with gold vertical line */}
  <div className="border-l-2 border-accent">
    {format.map(item => (
      <div key={item.text}>
        <span>✔</span>
        <p>{item.text}</p>
      </div>
    ))}
  </div>

  <Badge variant="gold">{startDate}</Badge>
  <p className="text-muted">{nextCohort}</p>
</section>
```

---

## Definition of Done

- [ ] FRAMEWORK and HOW_IT_WORKS added to constants.ts
- [ ] Framework.tsx renders all elements including 3 color-coded cards
- [ ] VideoEmbed shows placeholder (no URL yet)
- [ ] HowItWorks.tsx renders timeline with gold line
- [ ] All copy matches original document exactly
- [ ] Both sections responsive
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
