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
