import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Play } from "lucide-react";

interface ServicePageTemplateProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: ReactNode;
  features: string[];
  benefits: { title: string; description: string }[];
  demoDescription: string;
  basicPlan: {
    price: string;
    period: string;
    features: string[];
  };
  advancedPlan: {
    price: string;
    period: string;
    features: string[];
  };
}

const ServicePageTemplate = ({
  badge,
  title,
  highlight,
  description,
  icon,
  features,
  benefits,
  demoDescription,
  basicPlan,
  advancedPlan,
}: ServicePageTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  {badge}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  {title} <span className="gradient-text">{highlight}</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground mb-8"
                >
                  {description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link to="/contact">
                    <Button size="lg" className="btn-glow px-8 py-6 text-lg font-semibold group">
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="btn-outline-glow px-8 py-6 text-lg font-semibold">
                    <Play size={20} className="mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-40 h-40 lg:w-56 lg:h-56 rounded-3xl bg-gradient-primary flex items-center justify-center animate-float"
              >
                {icon}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="font-heading">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <Check size={20} className="text-primary shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="font-heading">
              Why It <span className="gradient-text">Matters</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  Live Demo
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  See It In <span className="gradient-text">Action</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {demoDescription}
                </p>
                <div className="aspect-video rounded-2xl bg-secondary/50 border border-border flex items-center justify-center mb-6">
                  <Button size="lg" className="btn-glow group">
                    <Play size={24} className="mr-2" />
                    Play Demo Video
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Want a personalized demo?{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Schedule a call →
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="font-heading">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p>Choose the plan that fits your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pricing-card"
            >
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Basic</h3>
                <p className="text-muted-foreground text-sm">Perfect for small businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold">{basicPlan.price}</span>
                <span className="text-muted-foreground">/{basicPlan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {basicPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={18} className="text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full btn-outline-glow">
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pricing-card featured"
            >
              <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl rounded-tr-2xl bg-gradient-primary text-sm font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Advanced</h3>
                <p className="text-muted-foreground text-sm">For growing businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold gradient-text">{advancedPlan.price}</span>
                <span className="text-muted-foreground">/{advancedPlan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {advancedPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={18} className="text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="w-full btn-glow">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Need a custom solution?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact us for enterprise pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of businesses already using our AI agents to capture more leads.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow px-8 py-6 text-lg font-semibold group">
                Schedule Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageTemplate;
