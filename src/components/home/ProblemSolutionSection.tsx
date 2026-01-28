import { motion } from "framer-motion";
import { Clock, Brain, Zap, Users, Settings } from "lucide-react";

const ProblemSolutionSection = () => {
  const advantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Zero lead leakage, even at 3:00 AM.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-Grade Interaction",
      description: "AI that sounds and feels like your best employee.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Deep Integration",
      description: "Fully synced with GoHighLevel for seamless operations.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow Effects */}
      <motion.div
        className="glow-orb w-80 h-80 -top-40 left-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* The Core Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            The Core Problem
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Modern businesses don't have a{" "}
            <span className="gradient-text">traffic problem</span>; they have a{" "}
            <span className="text-destructive">response problem</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            If a lead isn't contacted within five minutes, the chance of conversion drops by{" "}
            <span className="text-foreground font-semibold">80%</span>. Human teams need sleep, breaks, 
            and weekends. The Agentic Force provides a workforce that{" "}
            <span className="gradient-text font-semibold">never clocks out</span>.
          </p>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            {/* Solution Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">The Solution</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                The <span className="gradient-text">Agentic Advantage</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We don't just "automate" tasks. We build{" "}
                <span className="text-foreground font-medium">Agentic AI</span>—systems that understand 
                context, handle objections, and perform complex actions across your CRM.
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{advantage.icon}</div>
                  </div>
                  <h4 className="font-heading text-xl font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
