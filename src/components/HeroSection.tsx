import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
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
            <Button variant="hero" size="xl">
              Book Your Free Consultation
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="xl">
              See How It Works
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
      </div>
    </section>
  );
};

export default HeroSection;
