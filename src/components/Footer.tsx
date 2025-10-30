import { Code2 } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "Web Design", href: "#services" },
      { label: "Development", href: "#services" },
      { label: "E-Commerce", href: "#services" },
      { label: "Maintenance", href: "#services" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8" />
              <span className="text-2xl font-bold">WebCraft</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Building exceptional digital experiences that drive business growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2025 WebCraft. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80">
              Crafted with care in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
