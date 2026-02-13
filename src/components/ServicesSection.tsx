import { Bot, Users, Headphones, BarChart3, Calculator, UserPlus, ShoppingCart, Megaphone, Cog, MessageSquare, Wand2, Rocket, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import OrganicShape from "./decorative/OrganicShape";
import SectionDivider from "./decorative/SectionDivider";

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
    <section id="services" className="py-12 md:py-20 bg-background relative overflow-hidden grain-overlay">
      {/* Decorative shapes */}
      <OrganicShape
        className="w-[400px] h-[400px] -top-32 -right-32 bg-primary/[0.03]"
        variant="blob"
      />
      <OrganicShape
        className="w-[250px] h-[250px] top-1/2 -left-20 bg-primary/[0.02]"
        variant="blob"
      />

      <div className="container relative z-10">
        {/* BPO Introduction */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6">
              Business Process<br />
              <span className="italic text-primary/80">Outsourcing (BPO)</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Business Process Outsourcing (BPO) allows companies to delegate non-core functions to specialized providers, reducing costs and freeing up resources to focus on core business activities. Apping Tech provides comprehensive BPO services, from customer support and HR management to back-office operations and technical support. By partnering with us, businesses can achieve higher efficiency, lower overheads, and improved service quality, allowing them to stay competitive in a fast-paced market.
            </p>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Services */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 mt-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5">
              Two ways to outsource<br />
              <span className="italic text-primary/80">your processes</span>
            </h2>
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
                  className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

        <SectionDivider />

        {/* Talent Outsourcing */}
        <div className="mb-28 mt-8">
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
                  className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
        <div className="relative bg-card border border-border/60 rounded-3xl p-8 md:p-14 lg:p-20 overflow-hidden">
          {/* Decorative corner element */}
          <div className="absolute -top-1 -left-1 w-32 h-32 border-t-2 border-l-2 border-primary/15 rounded-tl-3xl" />
          <div className="absolute -bottom-1 -right-1 w-32 h-32 border-b-2 border-r-2 border-primary/15 rounded-br-3xl" />
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl text-foreground mb-5">
                Simple, transparent, <span className="italic">effective</span>
              </h2>
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
