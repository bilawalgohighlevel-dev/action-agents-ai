import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import InteractiveServicesSection from "@/components/home/InteractiveServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TargetClientsSection from "@/components/home/TargetClientsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <InteractiveServicesSection />
      <WhyChooseUsSection />
      <TargetClientsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
