import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, Rocket, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "99.9% uptime guarantee. Your digital workforce is always available when you need it.",
  },
  {
    icon: Rocket,
    title: "Instantaneous Action",
    description: "Sub-second response times ensure no opportunity slips through the cracks.",
  },
  {
    icon: Award,
    title: "Professional Authority",
    description: "Enterprise-grade AI that represents your brand with sophistication.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "10M+", label: "Conversations Handled" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              We Build the <span className="gradient-text">Future of Work</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              The Agentic Force is a premier AI Automation Agency specialized in deploying 
              autonomous "Digital Employees" that work 24/7 to grow your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
                <img 
                  src={logo} 
                  alt="The Agentic Force" 
                  className="relative w-64 h-64 mx-auto object-contain animate-float"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Eliminating Lead Leakage, <span className="gradient-text">One Business at a Time</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike traditional software, our agency provides "Agentic AI" — autonomous agents 
                that reason, act, and resolve business workflows around the clock. Our mission is 
                to eliminate lead leakage and operational friction for local professional services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe every business deserves the power of enterprise-level automation. 
                That's why we've built a suite of AI agents that handle the heavy lifting — 
                from answering calls to managing your online reputation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Meet the <span className="gradient-text">Founder</span>
            </h2>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
              <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-foreground">B</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-2">Bilawal</h3>
              <p className="text-primary mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                With a vision to democratize AI automation for local businesses, Bilawal founded 
                The Agentic Force to bridge the gap between enterprise-level technology and 
                small business needs. Based in Lahore, Pakistan, we serve clients globally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of businesses already using our AI agents to capture more leads 
              and grow their revenue.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow px-8 py-6 text-lg font-semibold group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
