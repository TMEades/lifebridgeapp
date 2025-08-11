import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Brain, Calendar, Video, MessageCircle, Clock, Star, Shield, Phone, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { toast } from '@/components/ui/use-toast';

const TherapyPage = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const therapists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Midlife Transitions & Anxiety',
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      availability: 'Available today',
      sessionTypes: ['Individual', 'Group'],
      image: 'SJ',
      bio: 'Specializes in helping adults navigate major life transitions, career changes, and empty nest syndrome.',
      price: '$120/session'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Career Counseling & Stress Management',
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      availability: 'Next available: Tomorrow',
      sessionTypes: ['Individual'],
      image: 'MC',
      bio: 'Expert in career transitions, workplace stress, and helping professionals find purpose in midlife.',
      price: '$110/session'
    },
    {
      id: 3,
      name: 'Dr. Lisa Rodriguez',
      specialty: 'Family Dynamics & Caregiving Stress',
      experience: '18 years',
      rating: 4.9,
      reviews: 156,
      availability: 'Available today',
      sessionTypes: ['Individual', 'Family', 'Group'],
      image: 'LR',
      bio: 'Focuses on sandwich generation challenges, family relationships, and caregiver burnout prevention.',
      price: '$130/session'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      therapist: 'Dr. Sarah Johnson',
      date: 'Today',
      time: '3:00 PM',
      type: 'Video Session',
      duration: '50 min'
    },
    {
      id: 2,
      therapist: 'Dr. Lisa Rodriguez',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'Group Session',
      duration: '90 min'
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

  const handleBookSession = (therapistId) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleJoinSession = (appointmentId) => {
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
        <title>Professional Therapy - MidLife Wellness</title>
        <meta name="description" content="Access licensed therapists specializing in midlife issues. Book individual or group sessions with crisis intervention support available 24/7." />
      </Helmet>

      <div className="min-h-screen pb-20">
        {/* Header */}
        <section className="px-4 pt-8 pb-6 therapy-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-white" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">Professional Therapy</h1>
            </div>
            <p className="text-purple-100 text-lg mb-6">
              Licensed therapists specializing in midlife challenges
            </p>
            
            {/* Crisis Banner */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-300" />
                <div>
                  <h3 className="font-semibold text-white">Crisis Support Available 24/7</h3>
                  <p className="text-red-100 text-sm">If you're in crisis, immediate help is available. Click here for resources.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="therapists" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="therapists">Find Therapist</TabsTrigger>
                <TabsTrigger value="appointments">My Sessions</TabsTrigger>
                <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
              </TabsList>

              {/* Therapists */}
              <TabsContent value="therapists" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Licensed Therapists</h2>
                  <div className="space-y-6">
                    {therapists.map((therapist, index) => (
                      <motion.div
                        key={therapist.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-white/10 hover:border-primary/30 transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Avatar className="w-16 h-16">
                                <AvatarFallback className="bg-primary text-white text-lg">
                                  {therapist.image}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <CardTitle className="text-xl">{therapist.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">
                                      {therapist.specialty}
                                    </CardDescription>
                                  </div>
                                  <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                      <span className="font-semibold">{therapist.rating}</span>
                                      <span className="text-sm text-muted-foreground">
                                        ({therapist.reviews})
                                      </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {therapist.experience} experience
                                    </div>
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-4">{therapist.bio}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {therapist.sessionTypes.map((type) => (
                                    <span
                                      key={type}
                                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                                    >
                                      {type}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1 text-green-400">
                                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                                      {therapist.availability}
                                    </span>
                                    <span className="text-muted-foreground">{therapist.price}</span>
                                  </div>
                                  <Button onClick={() => handleBookSession(therapist.id)}>
                                    Book Session
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Appointments */}
              <TabsContent value="appointments" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Upcoming Sessions</h2>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment, index) => (
                      <motion.div
                        key={appointment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-white/10">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                  {appointment.type === 'Video Session' ? (
                                    <Video className="w-6 h-6 text-primary" />
                                  ) : (
                                    <Users className="w-6 h-6 text-primary" />
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg">{appointment.therapist}</h3>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      {appointment.date} at {appointment.time}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      {appointment.duration}
                                    </span>
                                  </div>
                                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                    {appointment.type}
                                  </span>
                                </div>
                              </div>
                              <Button onClick={() => handleJoinSession(appointment.id)}>
                                Join Session
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Crisis Support */}
              <TabsContent value="crisis" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-red-400" />
                    <h2 className="text-2xl font-bold mb-4">Crisis Support Resources</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      If you're experiencing a mental health crisis, immediate help is available. 
                      These resources provide 24/7 support from trained professionals.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {crisisResources.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-white/10 hover:border-red-400/30 transition-all duration-300">
                          <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              {resource.type === 'text' ? (
                                <MessageCircle className="w-8 h-8 text-red-400" />
                              ) : (
                                <Phone className="w-8 h-8 text-red-400" />
                              )}
                            </div>
                            <CardTitle className="text-xl">{resource.name}</CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="text-2xl font-bold text-red-400 mb-4">
                              {resource.number}
                            </div>
                            <Button
                              onClick={() => handleCrisisContact(resource)}
                              variant="outline"
                              className="w-full border-red-400/50 text-red-400 hover:bg-red-400/10"
                            >
                              Contact Now
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <h3 className="font-semibold text-yellow-400 mb-2">When to Seek Crisis Support:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Thoughts of self-harm or suicide</li>
                      <li>• Feeling overwhelmed and unable to cope</li>
                      <li>• Severe anxiety or panic attacks</li>
                      <li>• Substance abuse concerns</li>
                      <li>• Any situation where you feel unsafe</li>
                    </ul>
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

export default TherapyPage;