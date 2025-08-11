import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Heart, Users, HelpingHand, BookOpen, Bot, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: 'Community Groups',
      description: 'Connect with peers facing similar midlife challenges.',
      gradient: 'community-gradient',
      link: '/community'
    },
    {
      icon: Heart,
      title: 'Wellness Tools',
      description: 'Personalized mood tracking and CBT exercises.',
      gradient: 'wellness-gradient',
      link: '/wellness'
    },
    {
      icon: HelpingHand,
      title: 'Peer Support',
      description: 'Find a listening ear from someone who gets it.',
      gradient: 'support-gradient',
      link: '/support'
    },
    {
      icon: BookOpen,
      title: 'Social Journaling',
      description: 'Reflect and share your journey with the community.',
      gradient: 'mood-gradient',
      link: '/journal'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Get 24/7 empathetic support and coping strategies.',
      gradient: 'profile-gradient',
      link: '/chatbot'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '1,200+', label: 'Peer Listeners' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>MidLife Wellness - Your Journey to Emotional Well-being</title>
        <meta name="description" content="Join thousands in our community-driven platform for midlife emotional wellness. Get support, tools, and professional help for your unique challenges." />
      </Helmet>
      
      <div className="bg-background">
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10 animate-gradient-xy"></div>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-76px)] py-20 lg:py-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  <span className="gradient-text">Your Midlife Wellness Journey Starts Here</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0">
                  A community-driven platform combining evidence-based tools with peer support for the unique challenges of early middle age.
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button asChild size="lg" className="px-8 py-3 text-base pulse-glow">
                    <Link to="/community">Join Our Community</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base">
                    <Link to="/wellness">Explore Tools</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                className="flex justify-center items-center"
              >
                <img alt="LifeBridge logo - emotional support and wellness" className="w-80 h-80 md:w-96 md:h-96 floating-animation" src="https://horizons-cdn.hostinger.com/1381d3c0-385b-4f58-ab1b-8ea0feb4af13/740b0d50149ac453f17e48024d43225c.png" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Everything You Need for <span className="gradient-text">Emotional Wellness</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive platform addresses the unique challenges of midlife with community support, peer connections, and personalized tools.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="uplifting-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full hover:-translate-y-2">
                      <Link to={feature.link} className="block h-full">
                        <CardHeader className="pb-4">
                          <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-foreground" />
                          </div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-lg text-muted-foreground">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Privacy & Safety Come First
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We maintain the highest standards of privacy and security. All conversations are confidential, 
                and we provide 24/7 access to support resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  End-to-End Encryption
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Anonymous Options
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  24/7 Support
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-20 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Wellness Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of others navigating midlife with confidence, support, and guidance.
            </p>
            <Button asChild size="lg" className="px-12 py-4 text-lg pulse-glow">
              <Link to="/community">Get Started Today</Link>
            </Button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default HomePage;