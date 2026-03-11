import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import appingLogo from "@/assets/apping-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "AI Automation", href: "/services" },
      { label: "Talent Outsourcing", href: "/services" },
      { label: "Marketing & Sales", href: "/services" },
      { label: "Operations & HR", href: "/services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background/80" role="contentinfo">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <img src={appingLogo} alt="Apping Technology" className="h-9 w-auto brightness-0 invert" width={36} height={36} loading="lazy" decoding="async" />
              <span className="font-serif text-xl text-background">Apping Technology</span>
            </Link>
            <p className="text-background/60 mb-6 max-w-sm leading-relaxed text-[15px]">
              Your outsourcing partner — combining AI automation and skilled talent to help businesses scale operations efficiently.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-background/50 hover:text-background transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-background/50 hover:text-background transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@appingtechnology.com" className="flex items-center gap-2 text-background/50 hover:text-background transition-colors text-sm">
                  <Mail size={14} />info@appingtechnology.com
                </a>
              </li>
              <li>
                <a href="tel:+601137672381" className="flex items-center gap-2 text-background/50 hover:text-background transition-colors text-sm">
                  <Phone size={14} />MY: +60 11-3767 2381
                </a>
              </li>
              <li>
                <a href="tel:+85298186843" className="flex items-center gap-2 text-background/50 hover:text-background transition-colors text-sm">
                  <Phone size={14} />HK: +852 9818 6843
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">© {currentYear} Apping Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal" className="text-background/40 hover:text-background text-sm transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
