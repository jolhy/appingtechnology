import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import appingLogo from "@/assets/apping-logo.png";
import augustWong from "@/assets/august-wong.jpg";
import joLee from "@/assets/jo-lee.jpg";
import ScrollReveal from "@/components/motion/ScrollReveal";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every solution is designed to deliver measurable operational improvements." },
  { icon: Users, title: "Partnership First", description: "We embed into your team as an extension, not just a vendor." },
  { icon: Lightbulb, title: "Innovation", description: "Combining cutting-edge AI with expert human talent for maximum impact." },
  { icon: Award, title: "Excellence", description: "Rigorous quality standards for every process we manage." },
];

const team = [
  { name: "August Wong", role: "CEO & Co-Founder", bio: "Visionary leader driving Apping Technology's mission to reimagine outsourcing through AI and human talent.", image: augustWong },
  { name: "Jo Lee", role: "COO & Co-Founder", bio: "Operational strategist ensuring seamless delivery and scalable growth across all client engagements.", image: joLee },
];

const TeamCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % team.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + team.length) % team.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const member = team[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
      <button
        onClick={prev}
        className="shrink-0 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
        aria-label="Previous member"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="relative w-64 h-64 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 text-center p-6 rounded-2xl bg-background border border-border/60 flex flex-col items-center justify-center"
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-serif text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
            <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={next}
        className="shrink-0 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
        aria-label="Next member"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

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
          <ScrollReveal delay={0.3}>
              <div className="mt-10 max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GCvIF98Bo_o?si=BPQo43MPSGZytfGo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>
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
            <TeamCarousel />
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
