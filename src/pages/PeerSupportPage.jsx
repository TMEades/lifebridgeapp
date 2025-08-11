import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { HelpingHand as HandHelping, MessageCircle, Users, Shield, Phone, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { toast } from '@/components/ui/use-toast';

const PeerSupportPage = () => {
  const peerListeners = [
    {
      id: 1,
      name: 'Alex D.',
      avatar: 'AD',
      focusAreas: ['Career Change', 'Parenting Teens'],
      availability: 'Online Now',
      bio: 'Navigated a major career shift at 42. Happy to listen and share my experience.'
    },
    {
      id: 2,
      name: 'Maria S.',
      avatar: 'MS',
      focusAreas: ['Empty Nest', 'Rediscovering Hobbies'],
      availability: 'Available Evenings',
      bio: 'My kids recently left for college. I\'m rediscovering my passions and can lend an ear.'
    },
    {
      id: 3,
      name: 'Anonymous',
      avatar: 'A',
      focusAreas: ['Caregiver Stress', 'Anxiety'],
      availability: 'Online Now',
      bio: 'Here to offer a safe, anonymous space for anyone feeling overwhelmed.'
    }
  ];

  const listeningCircles = [
    {
      id: 1,
      name: 'Sandwich Generation Circle',
      description: 'A weekly drop-in chat for those caring for parents and kids.',
      members: 8,
      time: 'Wednesdays at 7 PM EST'
    },
    {
      id: 2,
      name: 'Midlife Mindfulness Group',
      description: 'Share and practice mindfulness techniques together.',
      members: 12,
      time: 'Fridays at 12 PM EST'
    }
  ];
  
  const crisisResources = [
    {
      name: 'Crisis Hotline',
      number: '988',
      description: '24/7 Suicide & Crisis Lifeline',
      type: 'emergency'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free 24/7 crisis support via text',
      type: 'text'
    },
    {
      name: 'Emergency Services',
      number: '911',
      description: 'For immediate medical emergencies',
      type: 'emergency'
    }
  ];

  const handleConnect = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleJoinCircle = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  
  const handleCrisisContact = (resource) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Peer Support - MidLife Wellness</title>
        <meta name="description" content="Connect with trained peer listeners, join support circles, and find a community that understands your journey." />
      </Helmet>

      <div className="min-h-screen pb-20 bg-background">
        <section className="px-4 pt-8 pb-6 support-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <HandHelping className="w-8 h-8 text-blue-800" />
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Peer Support</h1>
            </div>
            <p className="text-blue-800 text-lg mb-6">
              Connect with someone who gets it. Support from people like you.
            </p>
          </motion.div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="buddies" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="buddies">Find a Buddy</TabsTrigger>
                <TabsTrigger value="circles">Listening Circles</TabsTrigger>
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
              </TabsList>

              <TabsContent value="buddies" className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h2 className="text-2xl font-bold mb-6">Connect with a Peer Listener</h2>
                  <div className="space-y-6">
                    {peerListeners.map((peer, index) => (
                      <motion.div key={peer.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                        <Card className="uplifting-card transition-shadow hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Avatar className="w-16 h-16">
                                <AvatarFallback className="bg-primary text-primary-foreground text-lg">{peer.avatar}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <CardTitle className="text-xl">{peer.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">Peer Listener</CardDescription>
                                  </div>
                                  <span className="text-sm flex items-center gap-1 text-green-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    {peer.availability}
                                  </span>
                                </div>
                                <p className="text-muted-foreground mb-4">{peer.bio}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {peer.focusAreas.map((area) => (
                                    <span key={area} className="text-xs bg-primary/20 text-primary-foreground bg-primary px-2 py-1 rounded-full">{area}</span>
                                  ))}
                                </div>
                                <Button onClick={handleConnect}><MessageCircle className="w-4 h-4 mr-2" /> Connect</Button>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="circles" className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h2 className="text-2xl font-bold mb-6">Listening Circles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {listeningCircles.map((circle, index) => (
                      <motion.div key={circle.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                        <Card className="uplifting-card transition-shadow hover:shadow-lg">
                          <CardHeader>
                            <CardTitle>{circle.name}</CardTitle>
                            <CardDescription>{circle.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <span>{circle.time}</span>
                              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {circle.members} members</span>
                            </div>
                            <Button onClick={handleJoinCircle} className="w-full">Join Circle</Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="how-it-works" className="space-y-6">
                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Card className="uplifting-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Info className="w-6 h-6 text-primary"/> How Peer Support Works</CardTitle>
                            <CardDescription>Your guide to safe and effective peer connections.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">What is a Peer Listener?</h3>
                                <p>A Peer Listener is a community member, just like you, who has volunteered to offer a listening ear. They have experience with certain life challenges and are here to provide support and empathy. You can connect for one-on-one chats.</p>
                            </div>
                             <div>
                                <h3 className="font-semibold text-foreground mb-1">What are Listening Circles?</h3>
                                <p>Listening Circles are small, moderated group chats focused on specific topics. They provide a safe space to share experiences and listen to others in a supportive group setting.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">Important Safety Guidelines</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Peer support is not a substitute for professional therapy or crisis intervention.</li>
                                    <li>Be respectful and maintain confidentiality. What's shared here, stays here.</li>
                                    <li>Do not share sensitive personal information like addresses or financial details.</li>
                                    <li>If you feel unsafe or uncomfortable at any time, please use the report button.</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="font-semibold text-foreground mb-1">In Crisis?</h3>
                                <p>If you are in crisis or need immediate help, please navigate to the "Crisis Support" tab for resources. Peer support is not equipped for emergencies.</p>
                            </div>
                        </CardContent>
                    </Card>
                 </motion.div>
              </TabsContent>
              
              <TabsContent value="crisis" className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <div className="text-center mb-8">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-red-500" />
                    <h2 className="text-2xl font-bold mb-4">Crisis Support Resources</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      If you're experiencing a mental health crisis, immediate help is available. 
                      These resources provide 24/7 support from trained professionals.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {crisisResources.map((resource, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                        <Card className="uplifting-card border-red-200 hover:shadow-lg transition-shadow">
                          <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              {resource.type === 'text' ? <MessageCircle className="w-8 h-8 text-red-500" /> : <Phone className="w-8 h-8 text-red-500" />}
                            </div>
                            <CardTitle className="text-xl">{resource.name}</CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="text-2xl font-bold text-red-600 mb-4">{resource.number}</div>
                            <Button onClick={() => handleCrisisContact(resource)} variant="destructive">Contact Now</Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

            </Tabs>
          </div>
        </section>
        <Navigation />
      </div>
    </>
  );
};

export default PeerSupportPage;