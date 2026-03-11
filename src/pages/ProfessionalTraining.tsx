import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BarChart3, Award } from "lucide-react";

const programmes = [
  { icon: GraduationCap, title: "AI & Automation Training", description: "Upskill your team on AI tools, prompt engineering, and workflow automation to streamline business operations." },
  { icon: Users, title: "Leadership Development", description: "Build management capabilities and leadership skills across your organisation with practical workshops." },
  { icon: BarChart3, title: "Digital Marketing Mastery", description: "Hands-on training in SEO, social media marketing, paid advertising, analytics, and AI-powered content creation." },
  { icon: Award, title: "Custom Corporate Programmes", description: "Tailored training solutions designed around your team's specific needs, goals, and industry requirements." },
];

const ProfessionalTraining = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Professional AI Training Programmes | Apping Technology"
        description="Professional AI training programs for businesses, developers, and marketing teams. Learn AI automation, AI marketing, prompt engineering, and digital transformation with Apping Technology."
        keywords="AI training, professional AI training, AI marketing training, digital transformation training, AI automation training, prompt engineering training, corporate training Malaysia"
        canonical="/professional-training"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Grow Your Team</p>
                <h1 className="text-4xl md:text-5xl text-foreground mb-6">
                  Professional AI<br />
                  <span className="italic text-primary/80">Training Programmes</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Invest in your team's growth with Apping Technology's <strong className="text-foreground">professional AI training programmes</strong>. We deliver practical, results-oriented training that equips your workforce with the skills they need to thrive in today's fast-moving business landscape. Our courses cover <strong className="text-foreground">AI automation</strong>, <strong className="text-foreground">AI marketing</strong>, digital transformation, and leadership development.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {programmes.map((prog, i) => (
                <ScrollReveal key={prog.title} delay={i * 0.1}>
                  <div className="flex gap-4 p-6 rounded-2xl border border-border/60 bg-card">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <prog.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-2">{prog.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{prog.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-foreground mb-6 text-center">Why Train With Apping Technology</h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    Our trainers bring real-world industry experience and combine it with engaging, interactive delivery. Whether it's a half-day workshop or a multi-week programme, we ensure your team walks away with actionable skills they can apply immediately to improve business performance.
                  </p>
                  <p>
                    <strong className="text-foreground">AI marketing training</strong> is one of our most popular offerings. Teams learn how to leverage AI tools for content creation, social media management, customer engagement, and campaign optimisation. Our <strong className="text-foreground">AI automation training</strong> teaches businesses how to streamline repetitive tasks using modern automation platforms and prompt engineering techniques.
                  </p>
                  <p>
                    We also offer specialised <strong className="text-foreground">digital transformation training</strong> for companies undergoing technology upgrades. This includes hands-on sessions with CRM platforms, data analytics dashboards, and AI-powered customer support systems. Our corporate programmes are designed for teams of all sizes and can be customised to your industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl text-foreground mb-6 text-center">
                  <span className="italic text-primary/80">AI Tools</span> for Business Professionals
                </h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    In today's competitive market, understanding <strong className="text-foreground">AI tools for business</strong> is no longer optional — it's essential. Our training programmes cover the latest AI technologies, from generative AI and large language models to specialised tools for marketing, sales, and operations.
                  </p>
                  <p>
                    Participants learn practical applications such as AI-assisted copywriting, automated reporting, intelligent lead scoring, and AI chatbot deployment. These skills directly translate to improved productivity, reduced costs, and better customer experiences.
                  </p>
                  <p>
                    Whether your team is just starting with AI or looking to deepen their expertise, our structured programmes provide a clear learning path. We cover everything from fundamentals to advanced implementation strategies, ensuring every participant gains confidence in using AI tools effectively.
                  </p>
                  <p>
                    Ready to upskill your team? <Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> to discuss a custom training programme. You can also explore our <Link to="/services" className="text-primary hover:underline font-medium">business process outsourcing services</Link> or learn about our <Link to="/ai-marketing" className="text-primary hover:underline font-medium">AI marketing solutions</Link>.
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

export default ProfessionalTraining;
