import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import appingLogo from "@/assets/apping-logo.png";
import ScrollReveal from "@/components/motion/ScrollReveal";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every strategy is focused on delivering measurable results for your business." },
  { icon: Users, title: "Partnership First", description: "We're an extension of your team, invested in your success." },
  { icon: Lightbulb, title: "Innovation", description: "Cutting-edge AI that makes enterprise marketing accessible to everyone." },
  { icon: Award, title: "Excellence", description: "Professional content that represents your brand with pride." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", bio: "15+ years in digital marketing and AI innovation." },
  { name: "Sarah Miller", role: "Head of AI", bio: "Former ML engineer at leading tech companies." },
  { name: "James Wilson", role: "Client Success", bio: "Passionate about helping SMEs achieve their goals." },
  { name: "Maria Santos", role: "Creative Director", bio: "Award-winning designer with a keen eye for brands." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 md:py-36 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.img src={appingLogo} alt="Apping" className="h-20 w-auto mx-auto mb-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl text-foreground mb-6">
                About <span className="text-primary">Apping</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe every growing business deserves powerful marketing. Our mission is to make AI-driven marketing accessible, affordable, and effective.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Story</p>
                  <h2 className="text-4xl md:text-5xl text-foreground mb-6">Empowering growth through technology</h2>
                </div>
              </ScrollReveal>
              <div className="space-y-6 text-muted-foreground text-[17px] leading-relaxed">
                {[
                  "Apping Technology was founded with a simple observation: small and medium businesses often struggle to compete when it comes to marketing. Agencies are expensive, tools are complex, and the time investment is massive.",
                  "By harnessing AI, we create professional-quality marketing content at a fraction of the traditional cost. But technology alone isn't enough — businesses need a partner who understands their challenges.",
                  "That's why we combine cutting-edge AI with genuine human partnership. Monthly strategy meetings ensure we're always aligned with your vision, adapting as your business grows.",
                  "Today, we serve hundreds of businesses across industries, helping them reach new customers and achieve sustainable growth.",
                ].map((text, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}><p>{text}</p></ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</p>
                <h2 className="text-4xl md:text-5xl text-foreground">What we stand for</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.08}>
                  <motion.div className="text-center p-6" whileHover={{ y: -4 }}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <value.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Team</p>
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">Meet the people behind Apping</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.08}>
                  <motion.div
                    className="text-center p-6 rounded-2xl bg-background border border-border/60"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl text-foreground mb-6">Ready to work together?</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Join the hundreds of businesses growing with Apping.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="xl" asChild className="rounded-full px-10">
                    <Link to="/contact">Get in Touch<ArrowRight size={18} /></Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild className="rounded-full px-10">
                    <Link to="/careers">Join Our Team</Link>
                  </Button>
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
