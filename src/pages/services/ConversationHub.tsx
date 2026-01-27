import { MessageSquare } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const ConversationHubPage = () => {
  return (
    <ServicePageTemplate
      badge="Advanced Tier"
      title="Conversation"
      highlight="Hub"
      description="An autonomous AI brain that manages DMs across WhatsApp, SMS, Facebook, and Instagram — qualifying leads and setting appointments instantly across all channels."
      icon={<MessageSquare size={80} className="text-primary-foreground" />}
      features={[
        "Unified inbox for all channels",
        "WhatsApp Business integration",
        "SMS two-way messaging",
        "Facebook Messenger automation",
        "Instagram DM management",
        "Lead qualification workflows",
        "Appointment scheduling",
        "CRM synchronization",
        "Automated follow-up sequences",
        "Conversation analytics",
      ]}
      benefits={[
        {
          title: "One Brain, All Channels",
          description: "Manage conversations from WhatsApp, SMS, Facebook, and Instagram through a single intelligent AI system.",
        },
        {
          title: "Instant Qualification",
          description: "Automatically qualify leads based on your criteria and route hot prospects directly to your sales team.",
        },
        {
          title: "Never Drop a Lead",
          description: "Automated follow-ups ensure no conversation goes cold, keeping leads warm until they're ready to convert.",
        },
      ]}
      demoDescription="See how our Conversation Hub handles inquiries from multiple platforms simultaneously, qualifying and booking leads on autopilot."
      basicPlan={{
        price: "$397",
        period: "month",
        features: [
          "2 channels (your choice)",
          "Up to 500 conversations/month",
          "Basic lead qualification",
          "Standard response templates",
          "Email support",
          "Basic analytics",
        ],
      }}
      advancedPlan={{
        price: "$797",
        period: "month",
        features: [
          "All 4 channels included",
          "Unlimited conversations",
          "Advanced qualification workflows",
          "Custom AI personality",
          "Priority support",
          "Advanced analytics",
          "CRM integration",
          "Automated follow-up sequences",
        ],
      }}
    />
  );
};

export default ConversationHubPage;
