import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
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
        title="Apping Technology | AI Marketing, AI Automation & Business Outsourcing"
        description="Apping Technology provides AI marketing, AI automation, and business process outsourcing solutions. Helping businesses scale operations with AI tools and skilled professionals across APAC."
        keywords="AI marketing, AI automation, business process outsourcing, BPO, AI marketing services, AI business solutions, talent outsourcing, AI training, digital transformation, APAC outsourcing"
        canonical="/"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />

        {/* Industries Section */}
        <section id="industries" className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 text-center">
                  Industries We Work With
                </h2>
                <p className="text-muted-foreground text-lg text-center mb-10 leading-relaxed">
                  Apping Technology delivers <strong className="text-foreground">AI marketing</strong> and <strong className="text-foreground">AI automation solutions</strong> across a wide range of industries. Our outsourcing services are designed to meet the unique challenges of each sector.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Real Estate & Property</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI-powered property marketing, automated listing management, virtual tours, and lead generation systems for real estate agencies and developers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Restaurants & F&B</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Social media automation, AI menu promotions, loyalty campaign management, and customer engagement tools for restaurants and fast food chains.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Retail & E-Commerce</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI product photography, automated ad creation, inventory-linked marketing campaigns, and customer support automation for retail businesses.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Professional Services</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Back-office automation, HR outsourcing, accounting support, and AI-driven client communication systems for consulting and legal firms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Healthcare & Wellness</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Patient communication automation, appointment management, AI content marketing, and administrative outsourcing for clinics and wellness centres.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Education & Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI-powered course marketing, student engagement automation, enrolment management, and digital transformation consulting for educational institutions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Training Section */}
        <section id="training" className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 text-center">
                  Professional AI Training Programs
                </h2>
                <p className="text-muted-foreground text-lg text-center mb-8 leading-relaxed">
                  Apping Technology offers <strong className="text-foreground">professional AI training</strong> designed for businesses, marketing teams, and operations leaders who want to harness the power of artificial intelligence.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl text-foreground mb-2">AI Marketing Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Learn how to use <strong className="text-foreground">AI marketing tools</strong> for content creation, social media automation, ad generation, and campaign optimisation. Our hands-on workshops teach teams to produce high-quality marketing output at scale.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">AI Automation Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Discover how to automate repetitive business processes using AI. From data entry and reporting to customer support workflows, our <strong className="text-foreground">AI automation training</strong> helps teams work smarter.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-foreground mb-2">Enterprise AI Implementation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For larger organisations, we provide tailored training on integrating AI across departments — marketing, operations, HR, finance, and sales — to drive company-wide digital transformation.
                    </p>
                  </div>
                </div>

                <p className="text-center">
                  <Link to="/professional-training" className="text-primary hover:underline font-medium">
                    Explore AI Training Programs →
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 text-center">
                  About Apping Technology
                </h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    <strong className="text-foreground">Apping Technology</strong> is a leading business process outsourcing company in the Asia-Pacific region. We combine <strong className="text-foreground">AI automation</strong> with skilled human talent to deliver outsourcing solutions that help businesses reduce costs, increase efficiency, and scale operations.
                  </p>
                  <p>
                    Founded with a background in enterprise software, Apping Technology has evolved into a full-service outsourcing partner serving over 300 clients across Malaysia, Hong Kong, and the wider APAC region. Our team of over 500 deployed professionals and AI systems supports businesses in marketing, operations, customer support, accounting, HR, and sales.
                  </p>
                  <p>
                    Whether you need <strong className="text-foreground">AI marketing services</strong> to automate content creation, skilled accountants to manage your books, or a complete outsourcing solution combining AI and talent — Apping Technology is your trusted partner for growth.
                  </p>
                  <p>
                    <Link to="/about" className="text-primary hover:underline font-medium">Learn more about our story →</Link>
                    {" · "}
                    <Link to="/services" className="text-primary hover:underline font-medium">View all BPO services →</Link>
                    {" · "}
                    <Link to="/ai-marketing" className="text-primary hover:underline font-medium">AI Marketing Services →</Link>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SuccessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
