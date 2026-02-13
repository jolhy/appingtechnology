import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Eye, Users, BarChart3, Check, Play } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Link } from "react-router-dom";

import heroImg from "@/assets/ai-marketing/hero.jpg";
import caseFashion from "@/assets/ai-marketing/case-fashion.jpg";
import caseEducation from "@/assets/ai-marketing/case-education.jpg";
import brandMemory from "@/assets/ai-marketing/brand-memory.jpg";

const caseStudies = [
  {
    label: "B2C Brand",
    title: "Fashion Brand Results",
    image: caseFashion,
    stats: [
      { value: "+166%", label: "Reach growth MoM" },
      { value: "+95%", label: "Profile visits increase" },
    ],
    insight: "People didn't comment much — they watched, remembered, and explored quietly.",
  },
  {
    label: "High-Consideration Brand",
    title: "Education Brand Results",
    image: caseEducation,
    stats: [
      { value: "+193%", label: "Total views growth" },
      { value: "+252%", label: "Unique viewers growth" },
      { value: "+61%", label: "Page visits increase" },
    ],
    insight: "Parents watched quietly, revisited the page, and took time before acting.",
  },
];

const patterns = [
  "Content reached new audiences first",
  "Views increased before engagement",
  "Visits came before clicks or enquiries",
  "Results held steady even during seasonal slowdowns",
];

const brandMemoryPoints = [
  "The same face appears repeatedly",
  "The product is shown naturally, not explained",
  "Moments feel familiar, not staged",
];

const plans = [
  {
    name: "Starter",
    price: "RM1,000",
    features: ["4 short AI avatar videos (30s)", "Done-for-you production", "No filming required"],
  },
  {
    name: "Growth",
    price: "RM1,500",
    features: ["6 AI avatar videos (30–60s)", "Consistent brand presence", "Done-for-you production"],
    popular: true,
  },
  {
    name: "Pro",
    price: "RM2,000",
    features: ["Up to 8 AI avatar videos (30–60s)", "No filming required", "Full content calendar"],
  },
];

const AIMarketing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-14 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">AI-Powered Marketing</motion.p>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
                  Stay Visible Online with an <span className="italic text-primary/80">AI Brand Spokesperson</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-8">
                  An AI avatar that works tirelessly — creating consistent, branded video content so you stay top of mind without filming a single thing.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                  <Button size="xl" asChild className="rounded-full px-10">
                    <Link to="/contact">Get Started <ArrowRight size={18} /></Link>
                  </Button>
                  <Button size="xl" variant="outline" asChild className="rounded-full px-10">
                    <a href="#pricing">View Pricing</a>
                  </Button>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={heroImg} alt="AI-powered marketing content creation" className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Case Studies</p>
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">
                  Real results from <span className="italic text-primary/80">real brands</span>
                </h2>
                <p className="text-muted-foreground text-lg">Despite being in different industries, the pattern was the same.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, i) => (
                <ScrollReveal key={study.title} delay={i * 0.1}>
                  <div className="bg-background rounded-2xl border border-border/60 overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">{study.label}</span>
                      <h3 className="text-xl text-foreground mt-2 mb-4">{study.title}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {study.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-muted-foreground text-sm">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm italic border-t border-border/60 pt-4">{study.insight}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pattern */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <ScrollReveal>
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">The Pattern</p>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    A consistent pattern across <span className="italic text-primary/80">very different brands</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">People don't rush. They recognise first, decide later.</p>
                  <ul className="space-y-3">
                    {patterns.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl overflow-hidden border border-border/60">
                  <img src={brandMemory} alt="Brand memory through consistent AI content" className="w-full h-auto" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Brand Memory */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why It Works</p>
                <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                  Why the same face builds <span className="italic text-primary/80">brand memory</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">We consistently see stronger recall when:</p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {brandMemoryPoints.map((point, i) => (
                    <ScrollReveal key={point} delay={i * 0.08}>
                      <div className="p-6 rounded-2xl bg-background border border-border/60">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Eye size={20} className="text-primary" />
                        </div>
                        <p className="text-foreground text-sm">{point}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <p className="text-muted-foreground mt-8 text-lg">Over time, people recognise the brand without needing to read.<br /><strong className="text-foreground">Face + product becomes a shortcut in the mind.</strong></p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">
                  Simple monthly <span className="italic text-primary/80">pricing</span>
                </h2>
                <p className="text-muted-foreground text-lg">AI avatar content, done for you. Choose the level that fits your brand.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {plans.map((plan, i) => (
                <ScrollReveal key={plan.name} delay={i * 0.08}>
                  <div className={`relative p-8 rounded-2xl h-full flex flex-col ${plan.popular ? "bg-primary text-primary-foreground border-2 border-primary" : "bg-card border border-border/60"}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                    )}
                    <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.name}</h3>
                    <p className={`text-3xl font-bold mb-1 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.price}</p>
                    <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>per month</p>
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                          <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`rounded-full mt-6 w-full ${plan.popular ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                      variant={plan.popular ? "secondary" : "outline"}
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="max-w-md mx-auto text-center p-6 rounded-2xl bg-card border border-border/60">
                <p className="text-foreground font-semibold mb-1">Optional Add-On: Posting & Monitoring</p>
                <p className="text-primary font-bold text-xl mb-3">RM300–500 / month</p>
                <ul className="text-muted-foreground text-sm space-y-1.5 text-left max-w-xs mx-auto">
                  <li className="flex items-start gap-2"><Check size={14} className="text-primary mt-0.5 flex-shrink-0" />Automatic posting to Facebook / Instagram</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-primary mt-0.5 flex-shrink-0" />Basic Meta dashboard monitoring</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-primary mt-0.5 flex-shrink-0" />Monthly performance snapshot</li>
                </ul>
                <p className="text-muted-foreground text-xs mt-3 italic">No ad management. No boosted posts. Organic content only.</p>
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

export default AIMarketing;
