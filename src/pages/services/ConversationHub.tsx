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
      faqs={[
        {
          question: "Which messaging platforms are supported?",
          answer: "The Conversation Hub supports WhatsApp Business, SMS, Facebook Messenger, and Instagram DMs. With the Basic plan, you choose any 2 channels. The Advanced plan includes all 4 channels. We're continuously adding new platforms based on customer demand.",
        },
        {
          question: "How does lead qualification work?",
          answer: "You define your ideal customer criteria—budget, timeline, needs, etc. The AI naturally weaves qualifying questions into conversations. When a lead meets your criteria, they're flagged as 'hot' and can be instantly notified to your sales team or auto-scheduled for a call.",
        },
        {
          question: "Can the AI handle multiple conversations simultaneously?",
          answer: "Yes! Unlike human agents who can only handle 2-3 conversations at once, our AI can manage hundreds of simultaneous conversations across all channels without any delay in response times.",
        },
        {
          question: "What about compliance with messaging platform rules?",
          answer: "We stay fully compliant with each platform's messaging policies. For WhatsApp, we use the official Business API. For Meta platforms, we follow their automation guidelines. All messaging includes proper opt-out mechanisms.",
        },
        {
          question: "How do automated follow-ups work?",
          answer: "You set up follow-up rules based on time elapsed since last contact, specific actions taken (or not taken), and lead quality. The AI sends personalized follow-up messages that feel natural, not automated. You can customize timing, content, and conditions.",
        },
        {
          question: "Can my team still jump into conversations?",
          answer: "Absolutely. Your team can view all conversations in the unified inbox and take over at any time. The AI recognizes when a human has joined and gracefully steps back. When the human conversation ends, the AI can resume if configured to do so.",
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
