import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CheckCircle, FileText, DollarSign, Clock } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Up to HK$600,000 Funding", description: "Government funding to support technology adoption for your business." },
  { icon: FileText, title: "Wide Project Scope", description: "Covers enterprise resource planning, e-commerce, digital marketing, and more." },
  { icon: Clock, title: "Streamlined Process", description: "We handle the application and implementation so you can focus on your business." },
  { icon: CheckCircle, title: "End-to-End Support", description: "From proposal writing to project delivery and final reporting." },
];

const TechnologyVoucher = () => {
  return (
    <div className="min-h-screen">
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
                  The Technology Voucher Programme (TVP) is a Hong Kong government initiative that subsidises local businesses in using technology services and solutions to improve productivity and upgrade operations. Apping Technology is an approved service provider, helping businesses apply for and maximise their TVP funding.
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
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl text-foreground mb-6 text-center">How We Help</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>As an approved TVP service provider, Apping Technology guides you through every step — from eligibility assessment and proposal preparation to technology implementation and post-project reporting.</p>
                  <p>Whether you need a new CRM system, e-commerce platform, inventory management solution, or AI-powered tools, we tailor the project to your business needs while ensuring compliance with TVP requirements.</p>
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
