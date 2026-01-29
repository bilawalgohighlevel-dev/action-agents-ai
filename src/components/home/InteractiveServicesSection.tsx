import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Zap, 
  Star, 
  ArrowRight,
  Check,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "voice-agent",
    icon: Phone,
    tabLabel: "Voice Agent",
    title: "AI Voice Agent",
    subtitle: "Human-Like Phone Conversations 24/7",
    description: "A human-standard telephony interface that handles inbound and outbound calls with natural conversation. Your AI Voice Agent books appointments directly into your CRM, qualifies leads through intelligent questioning, and manages live call transfers seamlessly—all without missing a single call.",
    features: [
      "24/7 inbound & outbound call handling",
      "Natural language understanding",
      "Direct CRM integration (GoHighLevel)",
      "Live call transfer capability",
      "Call recording & transcription",
      "Custom voice personality"
    ],
    pricing: {
      basic: "$497",
      advanced: "$997"
    },
    path: "/services/voice-agent",
    tier: "Advanced",
  },
  {
    id: "web-concierge",
    icon: Globe,
    tabLabel: "Web Concierge",
    title: "Voice-Enabled Web Concierge",
    subtitle: "Speak or Type — Your Website Responds",
    description: "An advanced website widget that allows visitors to speak or type their questions. Powered by a custom knowledge base, it answers complex FAQs, guides users through your sales funnel, and captures qualified leads—even while you sleep.",
    features: [
      "Voice + text chat capabilities",
      "Custom knowledge base integration",
      "Lead qualification workflows",
      "Appointment booking built-in",
      "Seamless human handoff",
      "Proactive engagement triggers"
    ],
    pricing: {
      basic: "$297",
      advanced: "$597"
    },
    path: "/services/web-concierge",
    tier: "Advanced",
  },
  {
    id: "conversation-hub",
    icon: MessageSquare,
    tabLabel: "Conversation Hub",
    title: "Multi-Channel Conversation Hub",
    subtitle: "One AI Brain, All Your Channels",
    description: "An autonomous AI brain that manages DMs across WhatsApp, SMS, Facebook, and Instagram from a unified inbox. It qualifies leads using your criteria, sets appointments instantly, and ensures no conversation ever goes cold with automated follow-ups.",
    features: [
      "Unified inbox for all channels",
      "WhatsApp, SMS, FB & Instagram",
      "Automated lead qualification",
      "Smart appointment scheduling",
      "CRM synchronization",
      "Follow-up sequence automation"
    ],
    pricing: {
      basic: "$397",
      advanced: "$797"
    },
    path: "/services/conversation-hub",
    tier: "Advanced",
  },
  {
    id: "instant-response",
    icon: Zap,
    tabLabel: "Instant Response",
    title: "Missed Call Text-Back",
    subtitle: "Never Lose a Lead to Voicemail Again",
    description: "Studies show 85% of callers who reach voicemail never call back. Instant Response triggers an SMS conversation the second a call is missed, engaging leads immediately while you're busy—ensuring no opportunity slips to a competitor.",
    features: [
      "Instant missed call detection",
      "Automated SMS engagement",
      "AI-powered conversations",
      "Lead capture & qualification",
      "Appointment scheduling links",
      "Real-time notifications"
    ],
    pricing: {
      basic: "$197",
      advanced: "$397"
    },
    path: "/services/instant-response",
    tier: "Efficiency",
  },
  {
    id: "reputation-guard",
    icon: Star,
    tabLabel: "Reputation Guard",
    title: "AI Reputation Manager",
    subtitle: "Protect & Grow Your Online Reviews",
    description: "A 24/7 sentinel that monitors Google and Facebook reviews in real-time. It drafts professional responses instantly, proactively requests 5-star feedback from happy clients, and provides sentiment analysis—protecting your reputation around the clock.",
    features: [
      "Google & Facebook monitoring",
      "Instant review notifications",
      "AI-drafted response suggestions",
      "Automated review requests",
      "Sentiment analysis dashboard",
      "Competitor review tracking"
    ],
    pricing: {
      basic: "$147",
      advanced: "$297"
    },
    path: "/services/reputation-guard",
    tier: "Efficiency",
  },
];

const InteractiveServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  
  const currentService = services.find(s => s.id === activeService) || services[0];
  const ServiceIcon = currentService.icon;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="glow-orb w-96 h-96 -top-48 -right-48" />
      <div className="glow-orb w-64 h-64 bottom-0 left-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Your 24/7 Digital Workforce
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            AI Agents That <span className="gradient-text">Never Sleep</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy autonomous digital employees that handle your business operations 
            around the clock with precision and professionalism.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`
                px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium 
                transition-all duration-300 border-2
                ${activeService === service.id 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30" 
                  : "bg-card/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }
              `}
            >
              {service.tabLabel}
            </button>
          ))}
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Tier Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  currentService.tier === "Advanced" 
                    ? "bg-primary/20 text-primary" 
                    : "bg-accent/20 text-accent"
                }`}>
                  <ServiceIcon size={14} />
                  {currentService.tier} Tier
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                  {currentService.title}
                </h3>
                <p className="text-lg text-primary mb-4">
                  {currentService.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentService.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {currentService.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Video Placeholder & CTA */}
              <div className="flex flex-col gap-6">
                {/* Video Placeholder */}
                <div className="aspect-video rounded-2xl bg-secondary/50 border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex flex-col items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow"
                    >
                      <Play size={32} className="text-primary-foreground ml-1" />
                    </motion.div>
                    <p className="text-muted-foreground text-sm">Watch Demo Video</p>
                  </motion.div>
                </div>

                {/* Pricing Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card/50 p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Starting From</p>
                    <p className="text-2xl font-bold text-foreground">
                      {currentService.pricing.basic}
                    </p>
                    <p className="text-xs text-muted-foreground">/month</p>
                  </div>
                  <div className="rounded-xl border-2 border-primary bg-primary/10 p-4 text-center">
                    <p className="text-xs text-primary mb-1">Advanced</p>
                    <p className="text-2xl font-bold text-foreground">
                      {currentService.pricing.advanced}
                    </p>
                    <p className="text-xs text-muted-foreground">/month</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="btn-glow flex-1 h-12 text-base"
                  >
                    <Link to={currentService.path}>
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="btn-outline-glow flex-1 h-12 text-base"
                  >
                    <Link to={currentService.path + "#demo"}>
                      <Play size={16} className="mr-2" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveServicesSection;
