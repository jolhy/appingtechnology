import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/motion/ScrollReveal";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Business Process Outsourcing Services | AI & Talent | Apping Technology"
        description="Apping Technology provides business process outsourcing (BPO) services using AI automation and skilled professionals. Outsource marketing, operations, customer support, accounting, HR, and sales."
        keywords="BPO services, business process outsourcing, AI automation services, talent outsourcing, marketing outsourcing, operations outsourcing, customer support outsourcing, accounting outsourcing"
        canonical="/services"
      />
      <Header />
      <main className="pt-20">
        <ServicesSection />
        <FAQSection />

        {/* SEO Content */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 text-center">
                  Comprehensive <span className="italic text-primary/80">Outsourcing Solutions</span> for Growing Businesses
                </h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    Apping Technology offers a complete range of <strong className="text-foreground">business process outsourcing services</strong> designed to help companies operate more efficiently. Our dual approach — combining <strong className="text-foreground">AI automation</strong> with experienced human professionals — ensures that every business function is handled with precision and care.
                  </p>
                  <p>
                    Our <strong className="text-foreground">AI automation services</strong> cover marketing, operations, customer support, accounting, HR, and sales. Each AI solution is designed to eliminate repetitive tasks, reduce human error, and accelerate workflows. Meanwhile, our talent outsourcing division provides skilled professionals who integrate seamlessly into your team.
                  </p>
                  <p>
                    From small businesses to large enterprises, we tailor our outsourcing plans to match your unique requirements. Our team handles everything from initial assessment to deployment and ongoing optimisation, so you can focus on growing your business.
                  </p>
                  <p>
                    Looking for AI-driven content creation and brand marketing? Visit our <Link to="/ai-marketing" className="text-primary hover:underline font-medium">AI marketing page</Link>. Want to upskill your team? Explore our <Link to="/professional-training" className="text-primary hover:underline font-medium">professional training programmes</Link>. Hong Kong businesses can also benefit from the <Link to="/technology-voucher" className="text-primary hover:underline font-medium">HK Technology Voucher Programme</Link>.
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

export default Services;
