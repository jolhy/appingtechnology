import { Bot, Users, Headphones, BarChart3, Calculator, UserPlus, ShoppingCart, Megaphone, Cog, MessageSquare, Wand2, Rocket, LineChart, ArrowRight } from "lucide-react";
import aiMarketingBg from "@/assets/ai-marketing-bg.jpg";
import aiOperationsBg from "@/assets/ai-operations-bg.jpg";
import aiSupportBg from "@/assets/ai-support-bg.jpg";
import aiAccountingBg from "@/assets/ai-accounting-bg.jpg";
import aiHrBg from "@/assets/ai-hr-bg.jpg";
import aiSalesBg from "@/assets/ai-sales-bg.jpg";
import talentMarketingBg from "@/assets/talent-marketing-bg.jpg";
import talentOperationsBg from "@/assets/talent-operations-bg.jpg";
import talentHelpdeskBg from "@/assets/talent-helpdesk-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./motion/ScrollReveal";
import OrganicShape from "./decorative/OrganicShape";
import SectionDivider from "./decorative/SectionDivider";

const aiServices = [
  { icon: Bot, title: "AI-Powered Marketing", description: "Automated content creation, ad production, and campaign optimization — all driven by AI.", link: "/ai-marketing" },
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
    <section id="services" className="py-8 md:py-14 bg-background relative overflow-hidden grain-overlay">
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">
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
          <div className="text-center max-w-2xl mx-auto mb-10 mt-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">
              Two ways to outsource<br />
              <span className="italic text-primary/80">your processes</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Whether you need AI automation or skilled professionals, Apping Technology has you covered.</p>
          </div>
        </ScrollReveal>

        {/* AI Automation */}
        <div className="mb-12">
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
                {(() => {
                  const isMarketing = service.title === "AI-Powered Marketing";
                  const isOperations = service.title === "AI Operations Automation";
                  const isSupport = service.title === "AI Customer Support";
                  const isAccounting = service.title === "AI Accounting & Finance";
                  const isHR = service.title === "AI HR & Onboarding";
                  const isSales = service.title === "AI Sales Automation";
                  const hasBackground = isMarketing || isOperations || isSupport || isAccounting || isHR || isSales;
                  const bgImage = isMarketing ? aiMarketingBg : isOperations ? aiOperationsBg : isSupport ? aiSupportBg : isAccounting ? aiAccountingBg : isHR ? aiHrBg : isSales ? aiSalesBg : undefined;
                  return (
                    <motion.div
                      className={`group relative p-8 rounded-2xl border border-border/60 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden ${hasBackground ? "bg-cover bg-center" : "bg-card"}`}
                      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {isMarketing && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(235,70%,30%)]/85 via-[hsl(235,60%,20%)]/80 to-[hsl(25,85%,25%)]/75 rounded-2xl" />}
                      {isOperations && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,80%,28%)]/85 via-[hsl(25,70%,20%)]/80 to-[hsl(225,30%,15%)]/80 rounded-2xl" />}
                      {isSupport && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(225,50%,28%)]/85 via-[hsl(230,45%,22%)]/80 to-[hsl(25,60%,22%)]/75 rounded-2xl" />}
                      {isAccounting && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,75%,25%)]/85 via-[hsl(15,65%,18%)]/80 to-[hsl(235,40%,18%)]/80 rounded-2xl" />}
                      {isHR && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(235,55%,25%)]/85 via-[hsl(260,40%,20%)]/80 to-[hsl(25,70%,22%)]/75 rounded-2xl" />}
                      {isSales && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,85%,30%)]/85 via-[hsl(20,70%,22%)]/80 to-[hsl(235,50%,18%)]/80 rounded-2xl" />}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${hasBackground ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/15"}`}>
                        <service.icon size={24} className={hasBackground ? "text-white" : "text-primary"} />
                      </div>
                      <h3 className={`relative z-10 text-xl mb-3 ${hasBackground ? "text-white" : "text-foreground"}`}>{service.title}</h3>
                      <p className={`relative z-10 leading-relaxed mb-4 ${hasBackground ? "text-white/80" : "text-muted-foreground"}`}>{service.description}</p>
                      {"link" in service && service.link && (
                        <Link to={service.link} className={`relative z-10 inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${hasBackground ? "text-white" : "text-primary"}`}>
                          Learn more <ArrowRight size={14} />
                        </Link>
                      )}
                    </motion.div>
                  );
                })()}
              </ScrollReveal>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Talent Outsourcing */}
        <div className="mb-16 mt-6">
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
                {(() => {
                  const isMarketingTeam = service.title === "Marketing Teams";
                  const isOpsTeam = service.title === "Operations Specialists";
                  const isHelpdesk = service.title === "Helpdesk & Support";
                  const hasTalentBg = isMarketingTeam || isOpsTeam || isHelpdesk;
                  const talentBgImage = isMarketingTeam ? talentMarketingBg : isOpsTeam ? talentOperationsBg : isHelpdesk ? talentHelpdeskBg : undefined;
                  return (
                    <motion.div
                      className={`group relative p-8 rounded-2xl border border-border/60 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden ${hasTalentBg ? "bg-cover bg-center" : "bg-card"}`}
                      style={talentBgImage ? { backgroundImage: `url(${talentBgImage})` } : undefined}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {isMarketingTeam && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(235,70%,30%)]/85 via-[hsl(235,60%,20%)]/80 to-[hsl(25,85%,25%)]/75 rounded-2xl" />}
                      {isOpsTeam && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,80%,28%)]/85 via-[hsl(25,70%,20%)]/80 to-[hsl(225,30%,15%)]/80 rounded-2xl" />}
                      {isHelpdesk && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(225,50%,28%)]/85 via-[hsl(230,45%,22%)]/80 to-[hsl(25,60%,22%)]/75 rounded-2xl" />}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${hasTalentBg ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/15"}`}>
                        <service.icon size={24} className={hasTalentBg ? "text-white" : "text-primary"} />
                      </div>
                      <h3 className={`relative z-10 text-xl mb-3 ${hasTalentBg ? "text-white" : "text-foreground"}`}>{service.title}</h3>
                      <p className={`relative z-10 leading-relaxed ${hasTalentBg ? "text-white/80" : "text-muted-foreground"}`}>{service.description}</p>
                    </motion.div>
                  );
                })()}
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="relative bg-card border border-border/60 rounded-3xl p-8 md:p-10 lg:p-14 overflow-hidden">
          {/* Decorative corner element */}
          <div className="absolute -top-1 -left-1 w-32 h-32 border-t-2 border-l-2 border-primary/15 rounded-tl-3xl" />
          <div className="absolute -bottom-1 -right-1 w-32 h-32 border-b-2 border-r-2 border-primary/15 rounded-br-3xl" />
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
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
