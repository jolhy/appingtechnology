import { Bot, BarChart3, Share2, Calendar, Cog, Lightbulb, MessageSquare, Wand2, Rocket, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";

const services = [
  { icon: Bot, title: "AI Content Creation", description: "Professional marketing content — from eye-catching visuals to compelling copy — tailored to your brand." },
  { icon: Share2, title: "Automated Ad Production", description: "High-quality ads at a fraction of the cost, ready for any platform. No expensive agencies needed." },
  { icon: BarChart3, title: "Social Media Management", description: "We post, schedule, and optimize your ads across Facebook, Instagram, LinkedIn, and more." },
  { icon: Calendar, title: "Monthly Strategy Meetings", description: "We review results, discuss insights, and refine your campaigns for better performance every month." },
  { icon: Cog, title: "ERP & Digital Transformation", description: "Modern ERP solutions and digital tools that make your business run smoother and faster." },
  { icon: Lightbulb, title: "AI & BPO Solutions", description: "Intelligent automation and business process outsourcing to help you work smarter and scale." },
];

const steps = [
  { number: "01", icon: MessageSquare, title: "Tell us about your business", description: "A friendly conversation to understand your goals, audience, and what makes your business unique." },
  { number: "02", icon: Wand2, title: "We create your content", description: "Our AI generates professional ads and marketing materials tailored specifically to your brand." },
  { number: "03", icon: Rocket, title: "We handle the posting", description: "We schedule and publish content across all your channels at optimal times for maximum reach." },
  { number: "04", icon: LineChart, title: "Monthly review & refine", description: "We meet to review performance, share insights, and adjust strategies for continuous growth." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5">Everything you need to grow</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">From AI-powered marketing to digital transformation — the tools and expertise your business needs.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.div
                className="group p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-14 lg:p-20">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl text-foreground mb-5">Simple, transparent, effective</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Getting started is easy. Here's how we help your business grow.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
