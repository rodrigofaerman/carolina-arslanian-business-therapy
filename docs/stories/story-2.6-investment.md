# Story 2.6: Investment & Bonuses Section

**Epic:** 2 - Content Sections & Interactive Features
**Status:** Pending
**Priority:** P1
**Depends On:** Story 1.3

---

## User Story

As a **developer**,
I want **the Investment section with pricing, bonuses, guarantee, and payment options**,
so that **visitors understand the value proposition and can take action**.

---

## Acceptance Criteria

- [ ] 1. Constants populated: INVESTMENT with all pricing, bonuses, guarantee, payment options
- [ ] 2. `Investment.tsx` renders main price card with pre-launch price highlighted, regular as strikethrough
- [ ] 3. 2 bonus cards with Card component showing value and details
- [ ] 4. Guarantee block: "Risco zero. Transformação garantida."
- [ ] 5. Payment options list with checkmarks
- [ ] 6. CTA button links to WhatsApp/payment
- [ ] 7. Section responsive

---

## Technical Context

### INVESTMENT Constants (from original copy)

```typescript
export const INVESTMENT = {
  title: "Seu Investimento na Transformação",
  pricing: {
    regular: 8500,
    preLaunch: 7000,
    preLaunchLabel: "OFERTA PRÉ-LANÇAMENTO",
    validUntil: "Válido até [DATA ESPECÍFICA]", // to be configured
    ctaText: "Garanta Seu valor especial"
  },
  bonuses: {
    title: "2 Bônus Exclusivos Pré-Lançamento (Valor R$ 3.500)",
    items: [
      {
        icon: "🎁",
        title: "BÔNUS 1: Sessão Individual Adicional",
        value: 2000,
        details: [
          "Quando usar: Suporte intensivo em desafio específico",
          "Formato: Presencial ou virtual (1h)"
        ]
      },
      {
        icon: "🎁",
        title: "BÔNUS 2: Mapeamento Personalizado de Perfil",
        value: 1500,
        details: [
          "Inclui: Eneagrama + DISC",
          "Entrega: Relatório personalizado antes do Encontro 4",
          "Benefício: Entender o que te motiva, o que te limita e seu perfil de liderança"
        ]
      }
    ]
  },
  guarantee: {
    icon: "🛡️",
    title: "POLÍTICA DE SATISFAÇÃO:",
    text: "Se após os 2 primeiros encontros você sentir que o programa não é para você, devolvemos 100% do investimento.",
    tagline: "Risco zero. Transformação garantida."
  },
  paymentOptions: {
    title: "Opções de Pagamento",
    options: [
      "Pagamento à vista (desconto adicional de 5%)",
      "Parcelamento em até 12x sem juros",
      "Pagamento via transferência ou cartão corporativo"
    ]
  }
};
```

### Investment.tsx Structure

```
<section id="investimento">
  <SectionHeader title={INVESTMENT.title} />

  {/* Main price card */}
  <Card gold className="text-center">
    <p className="text-muted line-through">Valor Regular: R$ {pricing.regular.toLocaleString('pt-BR')}</p>
    <Badge variant="gold">{pricing.preLaunchLabel}</Badge>
    <p className="text-5xl font-bold">R$ {pricing.preLaunch.toLocaleString('pt-BR')}</p>
    <p className="text-muted">{pricing.validUntil}</p>
    <Button size="lg">{pricing.ctaText}</Button>
  </Card>

  {/* Bonuses */}
  <h3>{bonuses.title}</h3>
  <div className="grid md:grid-cols-2 gap-6">
    {bonuses.items.map(bonus => (
      <Card key={bonus.title}>
        <p className="text-2xl">{bonus.icon}</p>
        <h4>{bonus.title}</h4>
        <p className="text-accent">Valor: R$ {bonus.value.toLocaleString('pt-BR')}</p>
        <ul>
          {bonus.details.map(d => <li key={d}>{d}</li>)}
        </ul>
      </Card>
    ))}
  </div>

  {/* Guarantee */}
  <Card className="border-accent">
    <p className="text-2xl">{guarantee.icon} {guarantee.title}</p>
    <p>{guarantee.text}</p>
    <p className="font-bold text-accent">{guarantee.tagline}</p>
  </Card>

  {/* Payment options */}
  <h3>{paymentOptions.title}</h3>
  <ul>
    {paymentOptions.options.map(opt => (
      <li key={opt}>✅ {opt}</li>
    ))}
  </ul>
</section>
```

---

## Definition of Done

- [ ] INVESTMENT added to constants.ts with all data
- [ ] Investment.tsx renders main price card with styling
- [ ] Pre-launch price prominent, regular price struck through
- [ ] 2 bonus cards display correctly
- [ ] Guarantee block stands out
- [ ] Payment options listed
- [ ] CTA button present and functional
- [ ] All copy matches original document exactly
- [ ] Section responsive
- [ ] `npm run build` succeeds

---

*— River, removendo obstáculos 🌊*
