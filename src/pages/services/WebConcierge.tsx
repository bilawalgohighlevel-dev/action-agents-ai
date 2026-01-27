import { Globe } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const WebConciergePage = () => {
  return (
    <ServicePageTemplate
      badge="Advanced Tier"
      title="Web"
      highlight="Concierge"
      description="An advanced website widget that allows visitors to speak or type. It uses a custom knowledge base to answer complex FAQs and guide users through your sales funnel."
      icon={<Globe size={80} className="text-primary-foreground" />}
      features={[
        "Voice-enabled chat widget",
        "Custom knowledge base",
        "Multi-modal interaction (voice + text)",
        "Lead qualification flows",
        "Appointment booking integration",
        "Seamless human handoff",
        "Custom branding & styling",
        "Multi-page deployment",
        "Visitor analytics",
        "Proactive engagement triggers",
      ]}
      benefits={[
        {
          title: "Engage Every Visitor",
          description: "Proactively engage website visitors with intelligent prompts, turning passive browsers into qualified leads.",
        },
        {
          title: "24/7 Sales Assistant",
          description: "Your digital concierge answers questions, handles objections, and guides visitors to conversion around the clock.",
        },
        {
          title: "Reduce Bounce Rate",
          description: "Keep visitors engaged with instant responses to their questions, dramatically reducing bounce rates.",
        },
      ]}
      demoDescription="Experience our Web Concierge live — ask it questions about your business and watch it guide you through a booking flow."
      basicPlan={{
        price: "$297",
        period: "month",
        features: [
          "Text-only chat widget",
          "Up to 1,000 conversations/month",
          "Basic knowledge base (50 FAQs)",
          "Standard widget styling",
          "Email support",
          "Basic analytics",
        ],
      }}
      advancedPlan={{
        price: "$597",
        period: "month",
        features: [
          "Voice + text capabilities",
          "Unlimited conversations",
          "Advanced knowledge base (unlimited)",
          "Custom branding & styling",
          "Priority support",
          "Advanced analytics",
          "Lead qualification flows",
          "CRM integration",
        ],
      }}
    />
  );
};

export default WebConciergePage;
