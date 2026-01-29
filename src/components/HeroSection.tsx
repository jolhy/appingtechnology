import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Check, Clock, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Agency-quality marketing at a fraction of the cost.",
  },
  {
    icon: Clock,
    title: "Save Time & Energy",
    description: "We handle everything so you can focus on growth.",
  },
  {
    icon: Users,
    title: "Personal Partnership",
    description: "Monthly meetings keep your strategy on track.",
  },
  {
    icon: Shield,
    title: "Reliable & Consistent",
    description: "Quality content delivered week after week.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every decision backed by real performance data.",
  },
  {
    icon: Check,
    title: "All-in-One Solution",
    description: "Marketing, ERP, AI, and BPO under one roof.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span>AI-Powered Marketing for Growing Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Grow Your Business with{" "}
            <span className="text-gradient-hero">AI-Driven Marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We create high-quality AI-generated ads, manage your social media, and meet with you monthly to review performance. Focus on your business while we handle your marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">200+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">3x</p>
                <p className="text-sm">Average ROI</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-sm">Ads Created</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Apping - Benefits Section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Choose Apping?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your growth partner, not just a vendor. We combine AI with genuine partnership to help your business thrive.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                  <benefit.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
