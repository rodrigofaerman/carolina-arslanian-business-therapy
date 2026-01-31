import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionDots from "@/components/layout/SectionDots";
import UrgencyBar from "@/components/layout/UrgencyBar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {
  Hero,
  Problem,
  Framework,
  HowItWorks,
  Results,
  Comparison,
  About,
  ForWho,
  Investment,
  Urgency,
  FAQ,
  NextSteps,
  CTAFinal,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <UrgencyBar />
      <SectionDots />

      <main>
        <Hero />
        <Problem />
        <Framework />
        <HowItWorks />
        <Results />
        <Comparison />
        <About />
        <ForWho />
        <Investment />
        <Urgency />
        <FAQ />
        <NextSteps />
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppButton />
      <ThemeToggle />
    </>
  );
}
