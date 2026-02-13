import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@appingtechnology.com", href: "mailto:info@appingtechnology.com" },
  { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-14 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl text-foreground mb-4">
                Let's <span className="text-primary">outsource smarter</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tell us about your business processes and we'll show you how AI and talent can help.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ScrollReveal direction="left">
                <h2 className="text-3xl md:text-4xl text-foreground mb-2">Send us a message</h2>
                <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                      <Input id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" value={formData.email} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input id="company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                      <Input id="subject" name="subject" required placeholder="How can we help?" value={formData.subject} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea id="message" name="message" required placeholder="Tell us about the processes you'd like to outsource..." rows={6} value={formData.message} onChange={handleChange} className="resize-none rounded-xl" />
                  </div>
                  <Button type="submit" size="xl" disabled={isSubmitting} className="rounded-full px-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                </form>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl text-foreground mb-2">Get in touch</h2>
                <p className="text-muted-foreground mb-8">Reach out directly — we're happy to help.</p>

                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border/60 block transition-colors hover:border-primary/20"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-0.5">{item.label}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border/60">
                  <p className="font-semibold text-foreground text-sm mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: "https://www.facebook.com/Appingtech?mibextid=ZbWKwL", label: "Facebook" },
                      { icon: Linkedin, href: "https://www.linkedin.com/company/apping-technology/posts/?feedView=all", label: "LinkedIn" },
                      { icon: Instagram, href: "https://www.instagram.com/appingtechnology", label: "Instagram" },
                      { icon: Youtube, href: "https://www.youtube.com/@appingtechnology6975", label: "YouTube" },
                    ].map((social) => (
                      <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={social.label}>
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
