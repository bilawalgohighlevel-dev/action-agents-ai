import { Star } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const ReputationGuardPage = () => {
  return (
    <ServicePageTemplate
      badge="Efficiency Tier"
      title="Reputation"
      highlight="Guard"
      description="A 24/7 sentinel that monitors Google and Facebook reviews, drafts professional responses, and proactively requests 5-star feedback from happy clients."
      icon={<Star size={80} className="text-primary-foreground" />}
      features={[
        "Google review monitoring",
        "Facebook review tracking",
        "Instant review notifications",
        "AI-drafted response suggestions",
        "One-click response publishing",
        "Automated review requests",
        "Customer satisfaction surveys",
        "Sentiment analysis",
        "Review analytics dashboard",
        "Competitor review tracking",
      ]}
      benefits={[
        {
          title: "Protect Your Reputation",
          description: "Respond to negative reviews within minutes, showing potential customers you care about their experience.",
        },
        {
          title: "Grow Your 5-Star Reviews",
          description: "Automatically request reviews from satisfied customers at the perfect moment to maximize positive feedback.",
        },
        {
          title: "Save Hours Weekly",
          description: "Stop manually checking review sites. Get instant notifications and AI-drafted responses ready to publish.",
        },
      ]}
      faqs={[
        {
          question: "How does the AI know what to say in review responses?",
          answer: "The AI analyzes the review content, sentiment, and specific concerns mentioned. It crafts responses that acknowledge the customer's experience, address their points, and maintain your brand voice. You can review and edit before publishing, or set up auto-publishing for positive reviews.",
        },
        {
          question: "Which review platforms are monitored?",
          answer: "The Basic plan monitors Google reviews. The Advanced plan adds Facebook. We're expanding to cover Yelp, TripAdvisor, and industry-specific platforms based on customer needs. The system checks for new reviews every few minutes.",
        },
        {
          question: "How do automated review requests work?",
          answer: "After a customer interaction (sale, appointment, service), the system sends a friendly request for feedback. Satisfied customers are directed to leave a Google/Facebook review. Unhappy customers are routed to a private feedback form, giving you a chance to resolve issues before they become public.",
        },
        {
          question: "Can I see what my competitors' reviews look like?",
          answer: "Yes! With the Advanced plan, you can track competitor reviews to understand their strengths and weaknesses. See their average ratings, common complaints, and what customers praise them for—valuable intel for positioning your business.",
        },
        {
          question: "What is sentiment analysis and how does it help?",
          answer: "Sentiment analysis uses AI to understand the emotional tone of reviews beyond just the star rating. It identifies specific themes (service speed, staff friendliness, pricing) and trends over time. This helps you spot patterns and make operational improvements.",
        },
        {
          question: "Can I respond to reviews directly from your dashboard?",
          answer: "Absolutely. For Google reviews, you can publish responses directly through our dashboard. For Facebook, we provide one-click access to the review for quick response. All responses are tracked and logged for your records.",
        },
      ]}
      demoDescription="See how Reputation Guard monitors reviews in real-time, suggests professional responses, and automates review request campaigns."
      basicPlan={{
        price: "$147",
        period: "month",
        features: [
          "Google review monitoring",
          "Daily digest emails",
          "Basic response templates",
          "Manual review requests",
          "Basic reporting",
          "Email support",
        ],
      }}
      advancedPlan={{
        price: "$297",
        period: "month",
        features: [
          "Google + Facebook monitoring",
          "Instant notifications",
          "AI-drafted responses",
          "Automated review requests",
          "Priority support",
          "Advanced analytics",
          "Sentiment analysis",
          "Competitor tracking",
        ],
      }}
    />
  );
};

export default ReputationGuardPage;
