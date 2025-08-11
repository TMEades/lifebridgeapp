import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PrivacyPolicyPage = () => {
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
        <title>Privacy Policy - LifeBridge</title>
        <meta name="description" content="LifeBridge Privacy Policy explaining how we collect, use, and protect your personal information." />
      </Helmet>
      <div className="bg-slate-50 min-h-full py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
        >
          <div className="text-center mb-8">
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl gradient-text">
              LifeBridge Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: August 4, 2025</p>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>LifeBridge (“we", “us”, or “our”) is committed to protecting your privacy and ensuring that your personal information is safe and secure. This Privacy Policy explains how we collect, use, store, and disclose your information when you use the LifeBridge app.</p>

            <h2 className="text-2xl font-bold text-gray-800">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-700">Information you provide:</h3>
            <ul>
              <li>Account details, such as username, email address, and password.</li>
              <li>Profile information (e.g., age range, personal interests, wellness goals).</li>
              <li>Content you generate, post, or share, including journal entries, forum comments, responses to prompts, and messages between users.</li>
              <li>Feedback or surveys you choose to complete.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-700">Automatically collected information:</h3>
            <ul>
              <li>Usage data, such as features used, content viewed, and activity timestamps.</li>
              <li>Device and browser data: IP address, device type, operating system, and app version.</li>
              <li>Analytics data (collected via cookies or similar technologies) to help us improve the app.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-700">Sensitive Data:</h3>
            <p>Any health- or wellness-related details you choose to enter are voluntary and always user-controlled. LifeBridge does not require any specific health information for account use.</p>

            <h2 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h2>
            <ul>
              <li>To operate and improve the LifeBridge app and its features.</li>
              <li>To provide personalized content and user experiences.</li>
              <li>To moderate and maintain a safe, respectful community.</li>
              <li>To respond to user requests, feedback, or technical support inquiries.</li>
              <li>For research and analytics to understand and enhance community wellness needs (using de-identified, aggregated data).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800">3. User-Generated Content</h2>
            <ul>
              <li>All content in LifeBridge is user-generated and visible to other community members based on your privacy settings.</li>
              <li>You are solely responsible for any personal or sensitive information you share within the app.</li>
              <li>LifeBridge cannot control or prevent how other users may use or share content visible to them.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800">4. Data Sharing & Disclosure</h2>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share limited information in the following cases:</p>
            <ul>
              <li>With service providers who perform app functionality (e.g., hosting, analytics) and are contractually obligated to protect your information.</li>
              <li>As required by law, legal processes, or to protect the rights, property, or safety of LifeBridge, our users, or others.</li>
              <li>In connection with a business transfer, merger, or acquisition (with notice to users).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800">5. Security</h2>
            <p>We use standard security measures to protect your information, such as encryption, secure servers, and regular monitoring. Please understand that no method of data transmission or storage is ever 100% secure. We recommend keeping your account credentials private and choosing privacy settings that are right for you.</p>

            <h2 className="text-2xl font-bold text-gray-800">6. Children’s Privacy</h2>
            <p>LifeBridge is designed for adults 18 and over. We do not knowingly collect data from children under 18. If we become aware of such data, we will delete it promptly.</p>

            <h2 className="text-2xl font-bold text-gray-800">7. Your Choices & Rights</h2>
            <ul>
              <li>You may review, edit, or delete your profile information and content at any time using in-app settings.</li>
              <li>You can request access to, correction, or deletion of your personal information by contacting us at <a href="#" onClick={handleContactClick} className="text-primary hover:underline">our support channel</a>.</li>
              <li>You may opt out of non-essential communications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800">8. Changes to This Policy</h2>
            <p>We may update this policy as our services or legal requirements change. Major modifications will be communicated via the app. Continued use after changes means you accept the updated Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-gray-800">9. Contact Us</h2>
            <p>Questions or concerns? Contact our privacy team at <a href="#" onClick={handleContactClick} className="text-primary hover:underline">our support channel</a>.</p>

            <div className="p-4 bg-slate-100 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">Special Notes:</h3>
                <ul className="list-disc list-inside mt-2">
                    <li>LifeBridge is not a medical or health services provider, and your data is not subject to HIPAA.</li>
                    <li>All health- or wellness-related data you share is voluntary and for community support purposes only.</li>
                    <li>For sensitive wellness concerns, do not disclose private information you do not wish to be public or semi-public.</li>
                </ul>
                <p className="mt-4">This Privacy Policy reflects industry best practices for mental health and wellness apps and helps protect your rights and well-being as a user.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;