import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/providers/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mentoria.businesstherapycode.com"),
  title: "Mentoria Mental Fitness | 90 dias para líderes C-Level dominarem alta performance",
  description:
    "Transformação mensurável em 90 dias. ROI de 5-6x. Apenas 8 líderes C-Level por turma. Turma Março 2026 com início confirmado.",
  keywords: [
    "Mental Fitness",
    "mentoria executiva",
    "liderança C-Level",
    "alta performance",
    "síndrome impostor",
    "autoconfiança executiva",
    "coaching executivo",
    "burnout executivo",
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
    description:
      "Transformação mensurável em 90 dias. ROI de 5-6x. Apenas 8 líderes por turma.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Mentoria Mental Fitness",
  description:
    "Mentoria exclusiva de 90 dias para líderes C-Level dominarem o jogo invisível da alta performance.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-theme="elegant">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-[#0f172a] focus:px-4 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
