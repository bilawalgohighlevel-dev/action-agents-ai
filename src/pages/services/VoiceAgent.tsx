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
