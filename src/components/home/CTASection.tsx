import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl bg-primary/20 -top-48 -left-48"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl bg-accent/20 -bottom-48 -right-48"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-8"
          >
            <Calendar size={36} className="text-primary-foreground" />
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Deploy Your{" "}
            <span className="gradient-text">Digital Workforce?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Stop losing leads to slow response times. Let's schedule a call to discuss 
            your specific business needs and show you exactly how our AI agents can work for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-glow px-10 py-6 text-lg font-semibold group">
                Let's Schedule a Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • Free consultation • Setup in 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
