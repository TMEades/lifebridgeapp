import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, Plus, Heart, MessageCircle, Lock, Globe, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { toast } from '@/components/ui/use-toast';

const JournalPage = () => {
  const [newEntry, setNewEntry] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const dailyPrompts = [
    "What transition in your life are you currently navigating, and how are you feeling about it?",
    "Describe a moment today when you felt grateful. What made it special?",
    "What's one thing you've learned about yourself in the past year?",
    "How are you taking care of yourself during stressful times?",
    "What would you tell your younger self about handling life's challenges?"
  ];

  const communityEntries = [
    {
      id: 1,
      author: 'Jennifer K.',
      avatar: 'JK',
      time: '3 hours ago',
      title: 'Finding myself after the kids left',
      content: 'It\'s been 6 months since my youngest went to college. I\'m slowly rediscovering who I am beyond being "mom." Started painting again for the first time in 20 years...',
      likes: 24,
      comments: 8,
      isAnonymous: false
    },
    {
      id: 2,
      author: 'Anonymous',
      avatar: 'A',
      time: '5 hours ago',
      title: 'Career change anxiety',
      content: 'At 45, I\'m considering leaving my corporate job to start my own business. The fear is overwhelming, but so is the excitement. Anyone else made a big career change in midlife?',
      likes: 31,
      comments: 12,
      isAnonymous: true
    },
    {
      id: 3,
      author: 'David M.',
      avatar: 'DM',
      time: '1 day ago',
      title: 'Caring for aging parents',
      content: 'The sandwich generation struggle is real. Balancing my teenage kids\' needs with my parents\' increasing health issues. Some days I feel like I\'m drowning...',
      likes: 45,
      comments: 18,
      isAnonymous: false
    }
  ];

  const myEntries = [
    {
      id: 1,
      date: 'Today',
      title: 'Reflection on change',
      content: 'Today I realized that change doesn\'t have to be scary. It can be an opportunity for growth...',
      isPrivate: false,
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      date: 'Yesterday',
      title: 'Gratitude practice',
      content: 'Three things I\'m grateful for today: my health, my family\'s support, and the courage to try new things...',
      isPrivate: true,
      likes: 0,
      comments: 0
    },
    {
      id: 3,
      date: '2 days ago',
      title: 'Empty nest feelings',
      content: 'The house is so quiet now. But I\'m starting to see this as a chance to rediscover myself...',
      isPrivate: false,
      likes: 8,
      comments: 5
    }
  ];

  const handleSubmitEntry = () => {
    if (!newEntry.trim()) {
      toast({
        title: "Please write something before submitting",
        variant: "destructive"
    });
      return;
    }
    
    toast({
      title: "Journal entry saved!",
      description: isPrivate ? "Your private entry has been saved." : "Your entry has been shared with the community."
    });
    setNewEntry('');
  };

  const handleUsePrompt = (prompt) => {
    setNewEntry(prompt + '\n\n');
  };

  const handleLikeEntry = (entryId) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Social Journaling - MidLife Wellness</title>
        <meta name="description" content="Reflect and share your midlife journey through community-based journaling. Daily prompts and peer support for emotional wellness." />
      </Helmet>

      <div className="min-h-screen pb-20 bg-background">
        <section className="px-4 pt-8 pb-6 mood-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-yellow-800" />
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-900">Social Journaling</h1>
            </div>
            <p className="text-yellow-800 text-lg">
              Reflect, share, and connect through your wellness journey
            </p>
          </motion.div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="write" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="write">Write Entry</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="my-entries">My Entries</TabsTrigger>
              </TabsList>

              <TabsContent value="write" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-3 gap-6"
                >
                  <div className="lg:col-span-2">
                    <Card className="uplifting-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Plus className="w-5 h-5 text-primary" />
                          New Journal Entry
                        </CardTitle>
                        <CardDescription>
                          Share your thoughts, experiences, or reflections with the community
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder="What's on your mind today? Share your thoughts, feelings, or experiences..."
                          value={newEntry}
                          onChange={(e) => setNewEntry(e.target.value)}
                          className="min-h-[200px] resize-none bg-slate-50"
                        />
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => setIsPrivate(!isPrivate)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                                isPrivate 
                                  ? 'bg-secondary text-muted-foreground' 
                                  : 'bg-primary/10 text-primary'
                              }`}
                            >
                              {isPrivate ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                              {isPrivate ? 'Private' : 'Public'}
                            </button>
                          </div>
                          <Button onClick={handleSubmitEntry}>
                            {isPrivate ? 'Save Privately' : 'Share with Community'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="uplifting-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Daily Prompts</CardTitle>
                        <CardDescription>
                          Need inspiration? Try one of these prompts
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {dailyPrompts.slice(0, 3).map((prompt, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <button
                              onClick={() => handleUsePrompt(prompt)}
                              className="w-full text-left p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors text-sm"
                            >
                              {prompt}
                            </button>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Community Reflections</h2>
                  <div className="space-y-6">
                    {communityEntries.map((entry, index) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="uplifting-card transition-shadow hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarFallback className={entry.isAnonymous ? 'bg-gray-400 text-white' : 'bg-primary text-primary-foreground'}>
                                  {entry.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-semibold">{entry.author}</span>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <span className="text-xs text-muted-foreground">{entry.time}</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
                                <p className="text-muted-foreground">{entry.content}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <button 
                                onClick={() => handleLikeEntry(entry.id)}
                                className="flex items-center gap-2 hover:text-primary transition-colors"
                              >
                                <Heart className="w-4 h-4" />
                                {entry.likes} likes
                              </button>
                              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                {entry.comments} comments
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="my-entries" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">My Journal Entries</h2>
                  <div className="space-y-6">
                    {myEntries.map((entry, index) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="uplifting-card">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Calendar className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                                  <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${entry.isPrivate ? 'bg-secondary' : 'bg-green-100 text-green-800'}`}>
                                    {entry.isPrivate ? (
                                      <>
                                        <Lock className="w-3 h-3" />
                                        Private
                                      </>
                                    ) : (
                                      <>
                                        <Globe className="w-3 h-3" />
                                        Public
                                      </>
                                    )}
                                  </span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
                                <p className="text-muted-foreground">{entry.content}</p>
                              </div>
                            </div>
                          </CardHeader>
                          {!entry.isPrivate && (
                            <CardContent>
                              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                  <Heart className="w-4 h-4" />
                                  {entry.likes} likes
                                </span>
                                <span className="flex items-center gap-2">
                                  <MessageCircle className="w-4 h-4" />
                                  {entry.comments} comments
                                </span>
                              </div>
                            </CardContent>
                          )}
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

export default JournalPage;