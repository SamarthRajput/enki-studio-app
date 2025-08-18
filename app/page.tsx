import BrandClientsMarquee from "@/components/BrandClientsMarquee";
import ContactSection from "@/components/ContactSection";
import DesignInnovation from "@/components/DesignInnovation";
import EnkiBanner from "@/components/EnkiBanner";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import StatsPanel from "@/components/StatsPanel";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <EnkiBanner />
      <StatsPanel />
      <DesignInnovation />
      <ServicesGrid />
      <BrandClientsMarquee />
      <ContactSection />
      <Footer />
    </main>
  )
}