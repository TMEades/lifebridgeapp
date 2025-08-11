import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - LifeBridge</title>
        <meta name="description" content="Important disclaimer regarding the use of the LifeBridge platform for peer support and wellness information." />
      </Helmet>
      <div className="bg-slate-50 min-h-full py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
        >
          <div className="text-center mb-8">
            <ShieldAlert className="mx-auto h-12 w-12 text-amber-500" />
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl gradient-text">
              Disclaimer
            </h1>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              LifeBridge is a community platform for sharing personal experiences, peer support, and general wellness information. The content available on LifeBridge—including user posts, comments, discussion forums, wellness resources, and all other materials—is entirely user-generated and has not been reviewed, evaluated, or endorsed by licensed mental health professionals.
            </p>
            <p className="font-semibold text-gray-800">
              LifeBridge does not provide, nor claim to provide, any form of therapy, counseling, diagnosis, or treatment for mental health conditions. The app’s resources and tools are intended solely for informational and peer support purposes and are not a substitute for professional advice, diagnosis, or treatment from qualified medical or mental health practitioners.
            </p>
            <p>
              You should never disregard or delay seeking professional medical advice because of information found on this app. If you have questions about your mental health or require help, please consult a qualified mental health professional. If you are in crisis or feel that you may harm yourself or others, please seek immediate assistance by contacting your local emergency services or a helpline.
            </p>
            <p>
              By using LifeBridge, you acknowledge that you understand and accept these terms. All actions you take based on content found within this app are at your own risk, and the creators, developers, and administrators of LifeBridge assume no liability or responsibility for any outcomes associated with your use of this app.
            </p>
            <p>
              This disclaimer both establishes that LifeBridge is for informational and community purposes only and does not create any professional client-therapist relationship or guarantee the accuracy of the information provided.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DisclaimerPage;