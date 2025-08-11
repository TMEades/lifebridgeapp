import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CommunityPage from '@/pages/CommunityPage';
import WellnessToolsPage from '@/pages/WellnessToolsPage';
import PeerSupportPage from '@/pages/PeerSupportPage';
import JournalPage from '@/pages/JournalPage';
import ProfilePage from '@/pages/ProfilePage';
import ChatbotPage from '@/pages/ChatbotPage';
import DisclaimerPage from '@/pages/DisclaimerPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import SignUpPage from '@/pages/SignUpPage';
import SignInPage from '@/pages/SignInPage';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <>
      <Helmet>
        <title>LifeBridge - Community-Driven Emotional Support Platform</title>
        <meta name="description" content="A community-driven emotional wellness platform combining evidence-based therapeutic tools with peer support for early middle age challenges." />
      </Helmet>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-[76px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/community" element={<PrivateRoute><CommunityPage /></PrivateRoute>} />
              <Route path="/wellness" element={<PrivateRoute><WellnessToolsPage /></PrivateRoute>} />
              <Route path="/support" element={<PrivateRoute><PeerSupportPage /></PrivateRoute>} />
              <Route path="/journal" element={<PrivateRoute><JournalPage /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path="/chatbot" element={<PrivateRoute><ChatbotPage /></PrivateRoute>} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;