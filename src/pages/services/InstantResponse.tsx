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
      faqs={[
        {
          question: "How fast is the SMS response after a missed call?",
          answer: "The SMS is typically sent within 3-5 seconds of a missed call being detected. This near-instant response dramatically increases engagement rates since the caller still has their phone in hand and your business on their mind.",
        },
        {
          question: "What does the automated SMS conversation look like?",
          answer: "The initial SMS is personalized and acknowledges the missed call. From there, the AI engages in natural conversation to understand their needs, answer questions, and guide them to book an appointment or provide their information. It feels like texting with a helpful human.",
        },
        {
          question: "Does this work outside of business hours?",
          answer: "Yes! With the Advanced plan, the system operates 24/7. For Basic plan users, you can configure specific hours. Even if you limit active hours, missed calls during off-hours can trigger a friendly message letting them know when you'll be available.",
        },
        {
          question: "Can I customize the response messages?",
          answer: "Absolutely. You have full control over the initial message, follow-up sequences, and how the AI handles different scenarios. We provide templates to get started, but everything can be tailored to match your brand voice and business needs.",
        },
        {
          question: "What if someone prefers a call back instead of texting?",
          answer: "The AI can offer callback scheduling. When a lead prefers a call, they can choose a convenient time slot, which is automatically added to your calendar. You'll receive a notification with all the context from the SMS conversation.",
        },
        {
          question: "How does this integrate with my existing phone system?",
          answer: "We integrate with most VoIP systems and traditional carriers through call forwarding rules. Setup typically takes less than an hour. We also integrate directly with GoHighLevel and other CRMs to sync all lead data automatically.",
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
