import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const PrivacyPage = () => {
  const sections = [
    {
      title: "Introduction",
      content: `The Agentic Force ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website theagenticforce.com or use our AI automation services.`,
    },
    {
      title: "Information We Collect",
      content: `We may collect personal information that you voluntarily provide to us when you:
      • Fill out forms on our website
      • Subscribe to our newsletter
      • Request a demo or consultation
      • Use our AI agent services
      
      This information may include your name, email address, phone number, company name, and any other information you choose to provide.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to:
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send promotional communications (with your consent)
      • Respond to your comments, questions, and requests
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions`,
    },
    {
      title: "Information Sharing",
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
      • To trusted third parties who assist us in operating our website and services
      • When required by law or to protect our rights
      • In connection with a merger, acquisition, or sale of assets`,
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: "AI Agent Data Processing",
      content: `When you use our AI agent services:
      • Conversations may be recorded and analyzed to improve service quality
      • Data is processed in accordance with your service agreement
      • We implement strict access controls and encryption
      • You retain ownership of your business data`,
    },
    {
      title: "Your Rights",
      content: `You have the right to:
      • Access the personal information we hold about you
      • Request correction of inaccurate information
      • Request deletion of your information
      • Opt-out of marketing communications
      • Withdraw consent at any time`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.`,
    },
    {
      title: "Third-Party Links",
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
    },
    {
      title: "Contact Us",
      content: `If you have questions about this Privacy Policy, please contact us at:
      
      Email: bilawal@theagenticforce.com
      Location: Shahdara, Lahore, Punjab, Pakistan`,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6"
            >
              Privacy <span className="gradient-text">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Last Updated: January 27, 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-10"
              >
                <h2 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
