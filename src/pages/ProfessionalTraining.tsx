import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { GraduationCap, Users, BarChart3, Award } from "lucide-react";

const programmes = [
  { icon: GraduationCap, title: "AI & Automation Training", description: "Upskill your team on AI tools, prompt engineering, and workflow automation." },
  { icon: Users, title: "Leadership Development", description: "Build management capabilities and leadership skills across your organisation." },
  { icon: BarChart3, title: "Digital Marketing Mastery", description: "Hands-on training in SEO, social media, paid advertising, and analytics." },
  { icon: Award, title: "Custom Corporate Programmes", description: "Tailored training solutions designed around your team's specific needs and goals." },
];

const ProfessionalTraining = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Grow Your Team</p>
                <h1 className="text-4xl md:text-5xl text-foreground mb-6">
                  Professional<br />
                  <span className="italic text-primary/80">Training</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Invest in your team's growth with Apping Technology's professional training programmes. We deliver practical, results-oriented training that equips your workforce with the skills they need to thrive in today's fast-moving business landscape.
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
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl text-foreground mb-6">Why Train With Us</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our trainers bring real-world industry experience and combine it with engaging, interactive delivery. Whether it's a half-day workshop or a multi-week programme, we ensure your team walks away with actionable skills they can apply immediately.
                </p>
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
