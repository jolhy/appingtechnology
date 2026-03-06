import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Copy, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@appingtechnology.com", href: "mailto:info@appingtechnology.com" },
  { icon: Phone, label: "Malaysia", value: "+60 11-3767 2381", href: "tel:+601137672381" },
  { icon: Phone, label: "Hong Kong", value: "+852 9818 6843", href: "tel:+85298186843" },
];

const Contact = () => {
  const handleCopy = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard!");
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
          <div className="container max-w-xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl text-foreground mb-2">Get in touch</h2>
              <p className="text-muted-foreground mb-8">Reach out directly — we're happy to help.</p>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border/60 transition-colors hover:border-primary/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -2 }}
                  >
                    <a href={item.href} className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm mb-0.5">{item.label}</p>
                        <p className="text-muted-foreground text-sm truncate">{item.value}</p>
                      </div>
                    </a>
                    <button
                      onClick={(e) => handleCopy(e, item.value)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                      aria-label={`Copy ${item.value}`}
                    >
                      <Copy size={16} />
                    </button>
                  </motion.div>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
