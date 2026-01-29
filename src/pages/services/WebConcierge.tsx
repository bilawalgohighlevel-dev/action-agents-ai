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
      faqs={[
        {
          question: "How does the voice feature work in the web widget?",
          answer: "Visitors can click the microphone icon and speak their question naturally. The AI transcribes their speech in real-time, processes the query, and responds both in text and optionally through voice. This creates a truly conversational experience for users who prefer speaking over typing.",
        },
        {
          question: "Can I customize how the widget looks to match my brand?",
          answer: "Yes! With the Advanced plan, you get full customization including colors, fonts, avatar, welcome messages, and positioning. The widget can be styled to seamlessly blend with your website's design while maintaining optimal user experience.",
        },
        {
          question: "How do I build the knowledge base?",
          answer: "We help you create your initial knowledge base from your existing content—website pages, FAQs, product docs, and more. You can then easily add, edit, or remove information through our dashboard. The AI learns from conversations to suggest improvements.",
        },
        {
          question: "Will the widget slow down my website?",
          answer: "No. The widget loads asynchronously and is optimized for performance. It typically adds less than 50ms to page load time. We use edge servers worldwide to ensure fast loading regardless of your visitors' location.",
        },
        {
          question: "Can the Web Concierge book appointments directly?",
          answer: "Absolutely! The widget integrates with popular calendar tools and CRMs like GoHighLevel, Calendly, and Google Calendar. Visitors can see available slots and book appointments without ever leaving your website.",
        },
        {
          question: "What happens when the AI can't answer a question?",
          answer: "The concierge is trained to recognize its limitations. When it encounters a question it can't confidently answer, it can capture the visitor's contact info and schedule a callback, hand off to live chat if available, or provide alternative ways to get help.",
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
