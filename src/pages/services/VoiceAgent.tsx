import { Phone } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const VoiceAgentPage = () => {
  return (
    <ServicePageTemplate
      badge="Advanced Tier"
      title="Voice"
      highlight="Agent"
      description="A human-standard telephony interface that handles inbound and outbound calls, books appointments directly into your CRM, and manages live call transfers seamlessly."
      icon={<Phone size={80} className="text-primary-foreground" />}
      features={[
        "24/7 inbound call handling",
        "Outbound call campaigns",
        "Natural language understanding",
        "Direct CRM integration",
        "Live call transfer capability",
        "Appointment scheduling",
        "Call recording & transcription",
        "Custom voice personality",
        "Multi-language support",
        "Real-time analytics dashboard",
      ]}
      benefits={[
        {
          title: "Never Miss a Call",
          description: "Every call is answered within seconds, even during peak hours or after business hours. No more voicemails, no more lost opportunities.",
        },
        {
          title: "Reduce Staffing Costs",
          description: "Replace or augment your reception team with AI that works 24/7 without breaks, sick days, or overtime pay.",
        },
        {
          title: "Increase Bookings",
          description: "Convert more callers into booked appointments with instant availability checking and seamless scheduling.",
        },
      ]}
      faqs={[
        {
          question: "How does the AI Voice Agent sound? Will callers know it's not human?",
          answer: "Our Voice Agent uses cutting-edge natural language processing and voice synthesis to deliver human-like conversations. The AI speaks naturally with appropriate pauses, tone variations, and can even handle interruptions gracefully. Most callers can't distinguish it from a real receptionist.",
        },
        {
          question: "Can the Voice Agent handle complex questions or objections?",
          answer: "Yes! The AI is trained on your specific business information and can answer detailed questions about your services, pricing, and availability. For questions beyond its scope, it seamlessly transfers the call to your team or schedules a callback.",
        },
        {
          question: "How long does setup take?",
          answer: "Most businesses are up and running within 48-72 hours. We handle the technical setup, customize the voice and scripts to match your brand, and integrate with your existing CRM (especially GoHighLevel). Training and optimization continue in the first weeks.",
        },
        {
          question: "What happens if the AI can't help a caller?",
          answer: "The Voice Agent is configured with intelligent escalation rules. If a caller requests to speak with a human, has a complex issue, or the AI detects frustration, it can instantly transfer the call to your team or schedule a callback at their preferred time.",
        },
        {
          question: "Can I customize what the Voice Agent says?",
          answer: "Absolutely. We work with you to create custom scripts, define the agent's personality, and set specific responses for your most common inquiries. You can update scripts anytime, and the AI learns from successful calls to improve over time.",
        },
        {
          question: "How does billing work? Are there any per-minute charges?",
          answer: "Our Basic plan includes up to 500 minutes/month, while the Advanced plan offers unlimited minutes. There are no hidden per-minute charges. You simply pay the monthly fee and the AI handles all your calls.",
        },
      ]}
      demoDescription="Watch our Voice Agent handle a real customer inquiry, qualify the lead, and book an appointment — all without human intervention."
      basicPlan={{
        price: "$497",
        period: "month",
        features: [
          "Up to 500 minutes/month",
          "Basic CRM integration",
          "Business hours support",
          "Standard voice options",
          "Email support",
          "Basic analytics",
        ],
      }}
      advancedPlan={{
        price: "$997",
        period: "month",
        features: [
          "Unlimited minutes",
          "Full CRM integration (GoHighLevel)",
          "24/7 availability",
          "Custom voice personality",
          "Priority support",
          "Advanced analytics & reporting",
          "Live call transfer",
          "Multi-language support",
        ],
      }}
    />
  );
};

export default VoiceAgentPage;
