import { Bot, Users, Headphones, BarChart3, Calculator, UserPlus, ShoppingCart, Megaphone, Cog, MessageSquare, Wand2, Rocket, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";

const aiServices = [
  { icon: Bot, title: "AI-Powered Marketing", description: "Automated content creation, ad production, and campaign optimization — all driven by AI." },
  { icon: Cog, title: "AI Operations Automation", description: "Streamline workflows, data entry, reporting, and routine tasks with intelligent automation." },
  { icon: Headphones, title: "AI Customer Support", description: "24/7 AI chatbots and virtual assistants that handle inquiries, tickets, and escalations." },
  { icon: Calculator, title: "AI Accounting & Finance", description: "Automated invoicing, bookkeeping, expense tracking, and financial reporting." },
  { icon: UserPlus, title: "AI HR & Onboarding", description: "Automate recruitment screening, employee onboarding, and HR administration." },
  { icon: ShoppingCart, title: "AI Sales Automation", description: "Lead qualification, CRM management, follow-ups, and pipeline optimization with AI." },
];

const talentServices = [
  { icon: Megaphone, title: "Marketing Teams", description: "Skilled marketers for social media, content, SEO, PPC, and brand strategy." },
  { icon: Cog, title: "Operations Specialists", description: "Experienced ops professionals to manage logistics, procurement, and daily workflows." },
  { icon: Headphones, title: "Helpdesk & Support", description: "Trained support agents for customer service, technical support, and ticket resolution." },
  { icon: Calculator, title: "Accounting & Finance", description: "Qualified accountants and bookkeepers for payroll, AP/AR, and compliance." },
  { icon: UserPlus, title: "HR & Recruitment", description: "HR professionals for talent acquisition, onboarding, payroll, and employee management." },
  { icon: ShoppingCart, title: "Sales Representatives", description: "Dedicated sales reps for lead generation, outreach, closing deals, and account management." },
];

const steps = [
  { number: "01", icon: MessageSquare, title: "Tell us what you need", description: "Share your business challenges and the processes you want to outsource — AI, talent, or both." },
  { number: "02", icon: Wand2, title: "We build your solution", description: "We design a custom outsourcing plan — deploying AI tools, skilled professionals, or a hybrid approach." },
  { number: "03", icon: Rocket, title: "Seamless onboarding", description: "Our team integrates with your workflow. AI systems go live and talent gets up to speed quickly." },
  { number: "04", icon: LineChart, title: "Ongoing optimization", description: "Regular reviews to measure performance, refine processes, and scale as your business grows." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5">Two ways to outsource your processes</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Whether you need AI automation or skilled professionals, Apping Technology has you covered.</p>
          </div>
        </ScrollReveal>

        {/* AI Automation */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot size={22} className="text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl text-foreground">AI Automation</h3>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, i) => (
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
        </div>

        {/* Talent Outsourcing */}
        <div className="mb-28">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users size={22} className="text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl text-foreground">Talent Outsourcing</h3>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentServices.map((service, i) => (
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
        </div>

        {/* How It Works */}
        <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-14 lg:p-20">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl text-foreground mb-5">Simple, transparent, effective</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Getting started with Apping Technology is easy.</p>
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
