import { MessageSquare, Wand2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us About Your Business",
    description: "We start with a friendly conversation to understand your goals, audience, and what makes your business unique.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "We Create Your Content",
    description: "Our AI generates professional ads and marketing materials tailored to your brand — no templates, no generic content.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We Handle the Posting",
    description: "Sit back while we schedule and publish your content across all your social media channels at optimal times.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Monthly Review & Refine",
    description: "Every month, we meet to review performance, share insights, and adjust strategies to maximize your results.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 gradient-hero-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent, Effective
          </h2>
          <p className="text-muted-foreground text-lg">
            We've made working with us as easy as possible. Here's how we help you grow.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 md:gap-10 mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[35px] top-20 w-0.5 h-[calc(100%-2rem)] bg-border" />
              )}

              {/* Step number and icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                    <step.icon size={28} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-accent-glow">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
