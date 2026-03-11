import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SuccessSection from "@/components/SuccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/motion/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Apping Technology | Business Process Outsourcing with AI & Talent"
        description="Apping Technology helps businesses outsource smarter with AI automation and skilled professionals. Marketing, operations, helpdesk, accounting, HR, sales outsourcing services across APAC."
        keywords="business process outsourcing, BPO, AI automation, talent outsourcing, outsourcing company, AI marketing, operations outsourcing, APAC outsourcing"
        canonical="/"
      />
      <Header />
      <main>
        <HeroSection />
        <SuccessSection />

        {/* SEO Content Section */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 text-center">
                  Why Choose Apping Technology for <span className="italic text-primary/80">Business Process Outsourcing</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    <strong className="text-foreground">Business process outsourcing (BPO)</strong> is one of the most effective strategies for companies looking to reduce costs, increase efficiency, and focus on core business activities. Apping Technology is a leading BPO provider in the Asia-Pacific region, combining <strong className="text-foreground">AI automation</strong> with skilled human talent to deliver results that traditional outsourcing firms simply cannot match.
                  </p>
                  <p>
                    Whether you need help with <strong className="text-foreground">AI-powered marketing</strong>, customer support, accounting, HR administration, or sales operations, our team designs custom outsourcing solutions tailored to your business. We deploy advanced AI tools alongside experienced professionals to ensure every process runs smoothly, cost-effectively, and at scale.
                  </p>
                  <p>
                    Our clients typically save up to 50% in operational costs while gaining access to a pool of over 500 deployed professionals and AI systems. From startups to enterprise companies, Apping Technology has served over 300 clients across Malaysia, Hong Kong, and the wider APAC region.
                  </p>
                  <p>
                    Explore our <Link to="/services" className="text-primary hover:underline font-medium">business process outsourcing services</Link> to see how AI automation and talent outsourcing can transform your operations. Interested in AI-driven content and brand visibility? Check out our <Link to="/ai-marketing" className="text-primary hover:underline font-medium">AI marketing services</Link>. We also offer <Link to="/professional-training" className="text-primary hover:underline font-medium">professional AI training programmes</Link> to upskill your team.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
