import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import FloatingElement from "@/components/motion/FloatingElement";
import ParticleField from "@/components/motion/ParticleField";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@apping.tech",
    href: "mailto:hello@apping.tech",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Innovation Drive, Tech City, TC 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 gradient-hero-light relative overflow-hidden">
          <ParticleField count={15} />
          <FloatingElement className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" duration={8} />
          <FloatingElement className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" duration={10} delay={2} />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's <span className="text-gradient-hero">Grow Together</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to transform your marketing? We'd love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <ScrollReveal direction="left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={20} />
                    </Button>
                  </motion.div>
                </form>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border transition-colors duration-300 group block"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4, borderColor: "hsl(240 65% 50% / 0.3)" }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <item.icon size={24} className="text-primary-foreground" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Map placeholder */}
                <motion.div
                  className="rounded-2xl overflow-hidden border border-border bg-muted h-64 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center text-muted-foreground">
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                      <MapPin size={48} className="mx-auto mb-3 opacity-50" />
                    </motion.div>
                    <p>Interactive map coming soon</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16 md:py-20 gradient-hero-light">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Have Questions?
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our team typically responds within 24 hours.
                </p>
                <p className="text-primary font-medium">
                  We're here to help you succeed.
                </p>
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
