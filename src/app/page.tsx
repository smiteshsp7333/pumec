import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import InsightsPreview from "@/components/InsightsPreview";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-800 overflow-x-hidden pt-20">
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Clients />
      <Testimonials />
      <InsightsPreview />
      <CtaBanner />
    </main>
  );
}

