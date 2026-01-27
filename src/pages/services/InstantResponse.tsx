import { Zap } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const InstantResponsePage = () => {
  return (
    <ServicePageTemplate
      badge="Efficiency Tier"
      title="Instant"
      highlight="Response"
      description="Never lose a lead to a missed call again. This immediate-response system triggers an SMS conversation the second a call is missed, ensuring no lead goes to a competitor."
      icon={<Zap size={80} className="text-primary-foreground" />}
      features={[
        "Instant missed call detection",
        "Automated SMS response",
        "Conversational AI engagement",
        "Lead capture forms",
        "Appointment scheduling links",
        "Custom response templates",
        "Business hours configuration",
        "Call-back scheduling",
        "CRM integration",
        "Real-time notifications",
      ]}
      benefits={[
        {
          title: "Capture Lost Opportunities",
          description: "Studies show 85% of callers who reach voicemail never call back. Instant Response ensures you never lose them.",
        },
        {
          title: "Beat Your Competition",
          description: "While competitors let calls go to voicemail, your AI is already engaging the lead within seconds.",
        },
        {
          title: "Set It and Forget It",
          description: "Once configured, the system works automatically — no manual intervention required.",
        },
      ]}
      demoDescription="Watch what happens when a call is missed — see the instant SMS engagement and how quickly leads are captured and qualified."
      basicPlan={{
        price: "$197",
        period: "month",
        features: [
          "Up to 100 missed calls/month",
          "Basic SMS templates",
          "Business hours only",
          "Email notifications",
          "Basic reporting",
          "Email support",
        ],
      }}
      advancedPlan={{
        price: "$397",
        period: "month",
        features: [
          "Unlimited missed calls",
          "AI-powered conversations",
          "24/7 operation",
          "Custom SMS templates",
          "Priority support",
          "Advanced analytics",
          "CRM integration",
          "Appointment scheduling",
        ],
      }}
    />
  );
};

export default InstantResponsePage;
