import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, DollarSign, Clock } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Up to HK$600,000 Funding", description: "Government funding to support technology adoption and digital transformation for your business." },
  { icon: FileText, title: "Wide Project Scope", description: "Covers enterprise resource planning, e-commerce, digital marketing, AI tools, and more." },
  { icon: Clock, title: "Streamlined Process", description: "We handle the application and implementation so you can focus on running your business." },
  { icon: CheckCircle, title: "End-to-End Support", description: "From proposal writing and eligibility assessment to project delivery and final reporting." },
];

const TechnologyVoucher = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="HK Technology Voucher Programme (TVP) | Apping Technology"
        description="Apply for Hong Kong's Technology Voucher Programme (TVP) with Apping Technology. Get up to HK$600,000 in government funding for technology solutions including AI, CRM, e-commerce, and digital marketing."
        keywords="Technology Voucher Programme, TVP Hong Kong, HK government funding, technology adoption, digital transformation Hong Kong, TVP approved service provider"
        canonical="/technology-voucher"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Government Funded</p>
                <h1 className="text-4xl md:text-5xl text-foreground mb-6">
                  HK Technology Voucher<br />
                  <span className="italic text-primary/80">Programme (TVP)</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The <strong className="text-foreground">Technology Voucher Programme (TVP)</strong> is a Hong Kong government initiative that subsidises local businesses in using technology services and solutions to improve productivity and upgrade operations. Apping Technology is an <strong className="text-foreground">approved TVP service provider</strong>, helping businesses apply for and maximise their funding of up to HK$600,000.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 0.1}>
                  <div className="flex gap-4 p-6 rounded-2xl border border-border/60 bg-card">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-foreground mb-6 text-center">How We Help With TVP Applications</h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    As an approved <strong className="text-foreground">TVP service provider</strong>, Apping Technology guides you through every step of the Technology Voucher Programme — from eligibility assessment and proposal preparation to technology implementation and post-project reporting. Our team has extensive experience with TVP applications and ensures high approval rates for our clients.
                  </p>
                  <p>
                    Whether you need a new <strong className="text-foreground">CRM system</strong>, e-commerce platform, inventory management solution, or <strong className="text-foreground">AI-powered tools</strong>, we tailor the project to your business needs while ensuring full compliance with TVP requirements. Our solutions span enterprise resource planning (ERP), digital marketing platforms, customer support systems, and workflow automation.
                  </p>
                  <p>
                    The TVP covers up to 75% of the approved project cost, with a cumulative funding ceiling of HK$600,000 across a maximum of six projects. This makes it an excellent opportunity for Hong Kong businesses to adopt modern technology without bearing the full financial burden.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl text-foreground mb-6 text-center">
                  Eligible <span className="italic text-primary/80">Technology Solutions</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    The Technology Voucher Programme supports a wide range of technology projects. Common solutions funded through TVP include enterprise resource planning (ERP) systems, customer relationship management (CRM) software, e-commerce platforms, point-of-sale systems, accounting and payroll solutions, and <strong className="text-foreground">AI automation tools</strong>.
                  </p>
                  <p>
                    Apping Technology specialises in implementing these solutions with a focus on <strong className="text-foreground">AI integration and automation</strong>. Our approach ensures that the technology you adopt doesn't just meet TVP requirements — it genuinely transforms your business operations and delivers lasting value.
                  </p>
                  <p>
                    Ready to apply for the Technology Voucher Programme? <Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> for a free consultation. You can also explore our <Link to="/services" className="text-primary hover:underline font-medium">outsourcing services</Link> or learn about our <Link to="/professional-training" className="text-primary hover:underline font-medium">professional training programmes</Link>.
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

export default TechnologyVoucher;
