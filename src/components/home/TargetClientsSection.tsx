import { motion } from "framer-motion";
import { Scale, Stethoscope, Home, Sparkles, Car, Building } from "lucide-react";

const clients = [
  {
    icon: Scale,
    title: "Legal Professionals",
    description: "Law firms that can't afford to miss potential client inquiries",
    examples: ["Law Firms", "Legal Consultants", "Attorneys"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Providers",
    description: "Medical practices where every call could be an emergency",
    examples: ["Medical Clinics", "Dental Practices", "Specialists"],
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Emergency contractors where speed wins the job",
    examples: ["Plumbers", "HVAC", "Electricians", "Roofers"],
  },
  {
    icon: Sparkles,
    title: "Luxury & Wellness",
    description: "Premium experiences requiring white-glove service",
    examples: ["Med-Spas", "Wellness Centers", "Luxury Salons"],
  },
  {
    icon: Car,
    title: "Auto Industry",
    description: "Dealerships competing for every qualified buyer",
    examples: ["Auto Dealers", "Service Centers", "Rentals"],
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Agents who need to respond before competitors",
    examples: ["Agencies", "Property Managers", "Brokers"],
  },
];

const TargetClientsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Who We Serve
          </span>
          <h2 className="font-heading">
            Built for <span className="gradient-text">High-Stakes</span> Businesses
          </h2>
          <p>
            We specialize in industries where response time is the primary competitive advantage.
            When seconds matter, we deliver.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <client.icon size={28} className="text-primary-foreground" />
                </div>

                <h3 className="font-heading text-xl font-semibold mb-3">
                  {client.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {client.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {client.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetClientsSection;
