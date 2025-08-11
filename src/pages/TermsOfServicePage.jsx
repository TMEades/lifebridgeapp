import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TermsOfServicePage = () => {
  const { toast } = useToast();

  const handleContactClick = (e) => {
    e.preventDefault();
    toast({
      title: "Feature Coming Soon!",
      description: "The contact method will be set up soon. Thanks for your patience!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - LifeBridge</title>
        <meta name="description" content="LifeBridge Terms of Service outlining the rules and guidelines for using the platform." />
      </Helmet>
      <div className="bg-slate-50 min-h-full py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
        >
          <div className="text-center mb-8">
            <ScrollText className="mx-auto h-12 w-12 text-indigo-500" />
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl gradient-text">
              LifeBridge Terms of Service
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Last Updated: August 4, 2025</p>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>Welcome to LifeBridge (“we”, “us,” “our,” or “the app”). Please read these Terms of Service (“Terms”) carefully before using LifeBridge. By accessing or using the LifeBridge app, you agree to be legally bound by these Terms.</p>

            <h2 className="text-2xl font-bold text-gray-800">1. Eligibility</h2>
            <p>LifeBridge is intended for individuals aged 18 and over. By using this app, you confirm that you meet this requirement.</p>

            <h2 className="text-2xl font-bold text-gray-800">2. Nature of Service</h2>
            <p>LifeBridge is a peer support and wellness platform. We do not provide medical, psychological, diagnostic, or therapeutic services. All content is user-generated and not reviewed or endorsed by licensed professionals. LifeBridge is not a substitute for medical or mental health advice, diagnosis, or treatment. If you are in crisis or require immediate assistance, contact emergency services or a qualified professional.</p>

            <h2 className="text-2xl font-bold text-gray-800">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-700">Account Security:</h3>
            <p>You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.</p>
            <h3 className="text-xl font-semibold text-gray-700">Community Guidelines:</h3>
            <p>You agree not to post or share content that is harmful, abusive, harassing, defamatory, obscene, or otherwise inappropriate, and not to violate any local, state, national, or international law.</p>
            <h3 className="text-xl font-semibold text-gray-700">Content Ownership:</h3>
            <p>You retain ownership of any content you post but give LifeBridge a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content within the platform.</p>
            <h3 className="text-xl font-semibold text-gray-700">Reporting:</h3>
            <p>If you encounter inappropriate content or behavior, please report it immediately using the app’s reporting features.</p>

            <h2 className="text-2xl font-bold text-gray-800">4. User-Generated Content</h2>
            <h3 className="text-xl font-semibold text-gray-700">Accuracy:</h3>
            <p>All content on LifeBridge is user-generated and may not be accurate, complete, or up-to-date. We do not monitor or verify the quality, safety, or legality of posts.</p>
            <h3 className="text-xl font-semibold text-gray-700">Assumption of Risk:</h3>
            <p>You use LifeBridge at your own risk. We are not liable for the actions, content, or conduct of any user.</p>

            <h2 className="text-2xl font-bold text-gray-800">5. Privacy and Data</h2>
            <p>Your use of LifeBridge is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.</p>

            <h2 className="text-2xl font-bold text-gray-800">6. Modifications and Termination</h2>
            <p>We reserve the right to modify, suspend, or terminate LifeBridge or any part of it (including your account) at any time, for any reason, and without notice.</p>

            <h2 className="text-2xl font-bold text-gray-800">7. Disclaimers</h2>
            <p>LifeBridge is provided “AS IS” and “AS AVAILABLE.” We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that LifeBridge will be uninterrupted, secure, error-free, or meet your needs.</p>

            <h2 className="text-2xl font-bold text-gray-800">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, LifeBridge and its creators, administrators, and affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages or any loss or damages whatsoever resulting from your use of, or inability to use, LifeBridge.</p>

            <h2 className="text-2xl font-bold text-gray-800">9. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction where LifeBridge operates, without regard to conflict of law principles.</p>

            <h2 className="text-2xl font-bold text-gray-800">10. Changes to Terms</h2>
            <p>We may revise these Terms at any time. We will notify users of significant changes via the app. Your continued use signifies acceptance of any updated Terms.</p>

            <h2 className="text-2xl font-bold text-gray-800">11. Contact</h2>
            <p>If you have questions about these Terms, please contact us at <a href="#" onClick={handleContactClick} className="text-primary hover:underline">our support channel</a>.</p>

            <p>By using LifeBridge, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfServicePage;