import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Zap, 
  Star, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Voice Agent",
    description: "Human-like AI that handles inbound/outbound calls, books appointments directly into your CRM, and manages live transfers seamlessly.",
    path: "/services/voice-agent",
    tier: "Advanced",
  },
  {
    icon: Globe,
    title: "Web Concierge",
    description: "Voice-enabled website widget that answers complex FAQs and guides visitors through your sales funnel 24/7.",
    path: "/services/web-concierge",
    tier: "Advanced",
  },
  {
    icon: MessageSquare,
    title: "Conversation Hub",
    description: "Unified AI brain managing DMs across WhatsApp, SMS, Facebook, and Instagram — qualifying leads instantly.",
    path: "/services/conversation-hub",
    tier: "Advanced",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Never lose a lead to a missed call. Triggers instant SMS conversations the second you can't answer.",
    path: "/services/instant-response",
    tier: "Efficiency",
  },
  {
    icon: Star,
    title: "Reputation Guard",
    description: "24/7 review monitoring across Google and Facebook. Drafts responses and proactively requests 5-star feedback.",
    path: "/services/reputation-guard",
    tier: "Efficiency",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Digital Workforce
          </span>
          <h2 className="font-heading">
            AI Agents That <span className="gradient-text">Never Sleep</span>
          </h2>
          <p>
            Deploy autonomous digital employees that handle your business operations 
            around the clock with precision and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              variants={itemVariants}
              className={`service-card group ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Tier Badge */}
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                service.tier === "Advanced" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-accent/20 text-accent"
              }`}>
                {service.tier} Tier
              </div>

              {/* Icon */}
              <div className="feature-icon">
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={service.path}
                className="inline-flex items-center text-primary font-medium group/link"
              >
                Learn More
                <ArrowRight 
                  size={16} 
                  className="ml-2 group-hover/link:translate-x-2 transition-transform" 
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
