import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import appingLogo from "@/assets/apping-logo.png";
import ScrollReveal from "@/components/motion/ScrollReveal";
import FloatingElement from "@/components/motion/FloatingElement";
import ParticleField from "@/components/motion/ParticleField";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every strategy, every decision is focused on delivering measurable results for your business." },
  { icon: Users, title: "Partnership First", description: "We're not just a vendor — we're an extension of your team, invested in your success." },
  { icon: Lightbulb, title: "Innovation", description: "We leverage cutting-edge AI to make enterprise-level marketing accessible to growing businesses." },
  { icon: Award, title: "Excellence", description: "Quality matters. We deliver professional content that represents your brand with pride." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", bio: "15+ years in digital marketing and AI innovation." },
  { name: "Sarah Miller", role: "Head of AI Development", bio: "Former ML engineer at leading tech companies." },
  { name: "James Wilson", role: "Client Success Director", bio: "Passionate about helping SMEs achieve their goals." },
  { name: "Maria Santos", role: "Creative Director", bio: "Award-winning designer with a keen eye for brands." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 gradient-hero-light relative overflow-hidden">
          <ParticleField count={15} />
          <FloatingElement className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" duration={8} />
          <FloatingElement className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" duration={10} delay={2} />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 0.8 }}>
                <motion.img src={appingLogo} alt="Apping" className="h-24 w-auto" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient-hero">Apping</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe every growing business deserves powerful marketing. Our mission is to make AI-driven marketing accessible, affordable, and effective for SMEs worldwide.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Empowering Growth Through Technology</h2>
                </div>
              </ScrollReveal>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                {[
                  "Apping Technology was founded with a simple observation: small and medium businesses often struggle to compete with larger corporations when it comes to marketing. The agencies are expensive, the tools are complex, and the time investment is massive.",
                  "We saw an opportunity. By harnessing the power of AI, we could create professional-quality marketing content at a fraction of the traditional cost. But we knew technology alone wasn't enough — businesses need a partner who understands their unique challenges and goals.",
                  "That's why we built Apping to be more than just a tool. We combine cutting-edge AI with genuine human partnership. Our monthly strategy meetings ensure we're always aligned with your vision, adapting and improving as your business grows.",
                  "Today, we're proud to serve hundreds of businesses across industries, helping them reach new customers, build stronger brands, and achieve sustainable growth.",
                ].map((text, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <p>{text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 gradient-hero-light">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div className="text-center p-6" whileHover={{ y: -6 }}>
                    <motion.div
                      className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-glow"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <value.icon size={32} className="text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Team</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the People Behind Apping</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">A passionate team of marketers, engineers, and strategists dedicated to your success.</p>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <motion.div
                    className="text-center p-6 rounded-2xl bg-card border border-border transition-colors duration-300"
                    whileHover={{ y: -8, borderColor: "hsl(240 65% 50% / 0.3)", boxShadow: "0 16px 40px -10px hsl(240 25% 12% / 0.12)" }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
                <p className="text-muted-foreground text-lg mb-8">Join the hundreds of businesses growing with Apping. Let's create something amazing.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">Get in Touch<ArrowRight size={20} /></Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="outline" size="xl" asChild>
                      <Link to="/careers">Join Our Team</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
