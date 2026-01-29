import { Check, Clock, DollarSign, Users, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Get agency-quality marketing at a fraction of the cost. Our AI makes professional content accessible to every business.",
  },
  {
    icon: Clock,
    title: "Save Time & Energy",
    description: "Stop juggling marketing tasks. We handle everything from content creation to posting, so you can focus on what you do best.",
  },
  {
    icon: Users,
    title: "Personal Partnership",
    description: "You're not just a number. Monthly meetings ensure we understand your evolving needs and keep your strategy on track.",
  },
  {
    icon: Shield,
    title: "Reliable & Consistent",
    description: "No more inconsistent posting or missed opportunities. We deliver reliable, quality content week after week.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "We track what works and adjust accordingly. Every decision is backed by real performance data.",
  },
  {
    icon: Check,
    title: "All-in-One Solution",
    description: "Marketing, ERP, AI, and BPO services under one roof. One partner for all your technology and growth needs.",
  },
];

const WhyAppingSection = () => {
  return (
    <section id="why-apping" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Apping
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Growth Partner, Not Just a Vendor
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe SMEs deserve the same marketing power as big corporations — without the big price tag or complexity. At Apping, we combine cutting-edge AI with genuine partnership to help your business thrive.
            </p>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-foreground font-medium italic">
                "We don't just deliver content. We become an extension of your team, invested in your success and committed to continuous improvement."
              </p>
            </div>
          </div>

          {/* Right side - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAppingSection;
