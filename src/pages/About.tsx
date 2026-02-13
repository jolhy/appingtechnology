import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import appingLogo from "@/assets/apping-logo.png";
import ScrollReveal from "@/components/motion/ScrollReveal";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every solution is designed to deliver measurable operational improvements." },
  { icon: Users, title: "Partnership First", description: "We embed into your team as an extension, not just a vendor." },
  { icon: Lightbulb, title: "Innovation", description: "Combining cutting-edge AI with expert human talent for maximum impact." },
  { icon: Award, title: "Excellence", description: "Rigorous quality standards for every process we manage." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", bio: "15+ years in BPO, digital transformation, and AI innovation." },
  { name: "Sarah Miller", role: "Head of AI", bio: "Former ML engineer building intelligent automation solutions." },
  { name: "James Wilson", role: "Head of Talent", bio: "Expert in building and managing high-performing outsourced teams." },
  { name: "Maria Santos", role: "Operations Director", bio: "Streamlining business processes for companies of all sizes." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-14 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.img src={appingLogo} alt="Apping Technology" className="h-20 w-auto mx-auto mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl text-foreground mb-4">
                About <span className="text-primary">Apping Technology</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We help businesses outsource their processes — using AI automation and skilled professionals — so they can focus on what matters most: growing.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
                  <h2 className="text-4xl md:text-5xl text-foreground mb-4">Outsourcing, reimagined</h2>
                </div>
              </ScrollReveal>
              <div className="space-y-6 text-muted-foreground text-[17px] leading-relaxed">
                {[
                  "Apping Technology was founded with a clear mission: make business process outsourcing smarter, faster, and more accessible. Too many companies struggle with the cost and complexity of scaling their teams and operations.",
                  "We saw an opportunity to combine two powerful approaches — AI automation for repetitive, data-driven tasks, and skilled human professionals for work that requires judgment, creativity, and personal touch.",
                  "Whether it's marketing, operations, customer support, accounting, HR, onboarding, or sales — we help businesses outsource any process through AI, talent, or a hybrid of both.",
                  "Today, Apping Technology serves hundreds of businesses across industries, deploying over 500 professionals and AI systems that save clients an average of 50% in operational costs.",
                ].map((text, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}><p>{text}</p></ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-10">
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
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Team</p>
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">Meet the people behind Apping Technology</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.08}>
                  <motion.div className="text-center p-6 rounded-2xl bg-background border border-border/60" whileHover={{ y: -4 }}>
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
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">Ready to work together?</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">Join the hundreds of businesses outsourcing smarter with Apping Technology.</p>
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
