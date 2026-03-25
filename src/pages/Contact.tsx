import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Copy, Facebook, Linkedin, Instagram, Youtube, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  query: z.string().min(10, "Please provide more detail (at least 10 characters)"),
});

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

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", query: "" },
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwBrfXKxZxRrcsotAW9BDCuToCPN9LSL_0ZBxATZ-dA5m0i8UoQ7oXLxO-e4Va1nwHd/exec";

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    const params = new URLSearchParams({
      name: data.name,
      email: data.email,
      phone: data.phone,
      query: data.query,
    });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      toast.success("Message sent! We'll get back to you shortly.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Apping Technology | Get a Free Consultation"
        description="Contact Apping Technology for business process outsourcing, AI automation, and talent outsourcing solutions. Offices in Malaysia and Hong Kong. Book a free consultation today."
        keywords="contact Apping Technology, BPO consultation, outsourcing quote, AI automation consultation, Malaysia outsourcing, Hong Kong outsourcing"
        canonical="/contact"
      />
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
                Tell us about your business processes and we'll show you how <strong className="text-foreground">AI automation</strong> and skilled talent can help you reduce costs and scale operations.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-card">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: contact info */}
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl text-foreground mb-2">Get in touch</h2>
                <p className="text-muted-foreground mb-8">Reach out directly — we're happy to help with any outsourcing enquiry.</p>

                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border/60 transition-colors hover:border-primary/20"
                      initial={{ opacity: 0, x: -20 }}
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

              {/* Right: contact form */}
              <ScrollReveal direction="right">
                <div className="rounded-2xl bg-background border border-border/60 p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Send us a message</h3>
                  <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 1 business day.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+60 11-xxxx xxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Query</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your outsourcing needs..."
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full gap-2" size="lg" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-foreground mb-6 text-center">Work With a Trusted <span className="italic text-primary/80">Outsourcing Partner</span></h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    Apping Technology has offices in <strong className="text-foreground">Malaysia and Hong Kong</strong>, serving businesses across the Asia-Pacific region. Whether you're looking to outsource a single department or transform your entire operations with AI, we provide dedicated support from initial consultation to full deployment.
                  </p>
                  <p>
                    Our team specialises in <strong className="text-foreground">business process outsourcing</strong>, AI automation, and talent deployment. We help companies of all sizes reduce overheads, improve efficiency, and gain a competitive edge through smarter outsourcing strategies.
                  </p>
                  <p>
                    Explore our <Link to="/services" className="text-primary hover:underline font-medium">full range of outsourcing services</Link>, learn more <Link to="/about" className="text-primary hover:underline font-medium">about our company</Link>, or browse our <Link to="/careers" className="text-primary hover:underline font-medium">open positions</Link> if you'd like to join our team.
                  </p>
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
