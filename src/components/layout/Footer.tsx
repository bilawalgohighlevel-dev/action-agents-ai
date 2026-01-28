import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Phone Call Agent", path: "/services/voice-agent" },
    { name: "Voice Webchat Agent", path: "/services/web-concierge" },
    { name: "Conversation Agent", path: "/services/conversation-hub" },
    { name: "Missed Call Text Back Agent", path: "/services/instant-response" },
    { name: "Reputation Management Agent", path: "/services/reputation-guard" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="The Agentic Force" className="h-12 w-12 object-contain rounded-full" />
              <div>
                <h3 className="font-heading font-bold text-lg">
                  The Agentic <span className="gradient-text">Force</span>
                </h3>
                <p className="text-xs text-muted-foreground">Your 24/7 Digital Workforce</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming businesses with autonomous AI agents that work around the clock, 
              ensuring no lead is ever lost.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                <Twitter size={18} className="text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                <Facebook size={18} className="text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <a href="mailto:bilawal@theagenticforce.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  bilawal@theagenticforce.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Lahore, Punjab, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} The Agentic Force. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
