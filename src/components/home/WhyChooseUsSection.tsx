import { motion } from "framer-motion";
import { Shield, Clock, TrendingUp, Headphones, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI workforce never sleeps, ensuring every lead is captured regardless of timezone or hour.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Sub-2-second response times mean leads are engaged before they even think about your competitors.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance-ready infrastructure protect your business data.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Handle 10 or 10,000 conversations simultaneously without additional overhead.",
  },
  {
    icon: Headphones,
    title: "Human-Like Quality",
    description: "Advanced AI that understands context, emotion, and nuance for natural conversations.",
  },
  {
    icon: Lock,
    title: "CRM Integration",
    description: "Seamless integration with GoHighLevel and other major CRM platforms.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Competitive Edge Your Business <span className="gradient-text">Deserves</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In a world where response time determines who wins the deal, 
              The Agentic Force ensures you're always first. Our autonomous AI agents 
              work tirelessly to capture, qualify, and nurture every opportunity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-1">78%</div>
                <div className="text-sm text-muted-foreground">More Leads Captured</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-1">5x</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
