import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyAppingSection from "@/components/WhyAppingSection";
import SuccessSection from "@/components/SuccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyAppingSection />
        <SuccessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
