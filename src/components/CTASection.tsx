import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's grow your brand together. Book a free consultation and discover how AI-powered marketing can work for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="accent" size="xl" className="w-full sm:w-auto">
              <Calendar size={20} />
              Book Your Free Consultation
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              <Mail size={20} />
              Contact Us
            </Button>
          </div>

          {/* Additional reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ArrowRight size={16} className="text-primary" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight size={16} className="text-primary" />
              <span>30-minute discovery call</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight size={16} className="text-primary" />
              <span>Tailored recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
