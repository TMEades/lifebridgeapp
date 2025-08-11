import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, MessageCircle, Heart, Plus, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { toast } from '@/components/ui/use-toast';

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportGroups = [
    {
      id: 1,
      name: 'Empty Nest Support',
      description: 'For parents adjusting to children leaving home',
      members: 1247,
      posts: 89,
      category: 'Family Transitions',
      isJoined: false
    },
    {
      id: 2,
      name: 'Career Transition Circle',
      description: 'Navigating career changes in your 40s and 50s',
      members: 892,
      posts: 156,
      category: 'Career',
      isJoined: true
    },
    {
      id: 3,
      name: 'Sandwich Generation',
      description: 'Caring for aging parents while supporting children',
      members: 2103,
      posts: 234,
      category: 'Caregiving',
      isJoined: false
    },
    {
      id: 4,
      name: 'Midlife Anxiety Warriors',
      description: 'Supporting each other through anxiety and stress',
      members: 1567,
      posts: 312,
      category: 'Mental Health',
      isJoined: true
    }
  ];

  const recentPosts = [
    {
      id: 1,
      author: 'Sarah M.',
      avatar: 'SM',
      time: '2 hours ago',
      group: 'Empty Nest Support',
      title: 'First week with an empty house',
      content: 'Just dropped off my youngest at college. The house feels so quiet. How did you all cope with this transition?',
      likes: 23,
      comments: 8,
      isAnonymous: false
    },
    {
      id: 2,
      author: 'Anonymous',
      avatar: 'A',
      time: '4 hours ago',
      group: 'Midlife Anxiety Warriors',
      title: 'Panic attacks getting worse',
      content: 'Has anyone else experienced increased anxiety in their 40s? Looking for coping strategies that actually work.',
      likes: 45,
      comments: 17,
      isAnonymous: true
    },
    {
      id: 3,
      author: 'Mike R.',
      avatar: 'MR',
      time: '6 hours ago',
      group: 'Career Transition Circle',
      title: 'Made the leap to freelancing!',
      content: 'After 20 years in corporate, I finally started my own consulting business. Scary but exciting!',
      likes: 67,
      comments: 24,
      isAnonymous: false
    }
  ];

  const handleJoinGroup = (groupId) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleCreatePost = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Community - MidLife Wellness</title>
        <meta name="description" content="Connect with peers facing similar midlife challenges. Join support groups, share experiences, and find community in your wellness journey." />
      </Helmet>

      <div className="min-h-screen pb-20 bg-background">
        <section className="px-4 pt-8 pb-6 community-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-800" />
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Community</h1>
            </div>
            <p className="text-blue-800 text-lg mb-6">
              Connect with others who understand your journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search groups or discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleCreatePost}>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="groups" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="groups">Support Groups</TabsTrigger>
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
              </TabsList>

              <TabsContent value="groups" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Support Groups</h2>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {supportGroups.map((group, index) => (
                      <motion.div
                        key={group.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="uplifting-card transition-shadow hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-xl mb-2">{group.name}</CardTitle>
                                <CardDescription>
                                  {group.description}
                                </CardDescription>
                              </div>
                              <span className="text-xs bg-primary/20 text-primary-foreground bg-primary px-2 py-1 rounded-full">
                                {group.category}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {group.members.toLocaleString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle className="w-4 h-4" />
                                  {group.posts} posts
                                </span>
                              </div>
                            </div>
                            <Button
                              onClick={() => handleJoinGroup(group.id)}
                              variant={group.isJoined ? "outline" : "default"}
                              className="w-full"
                            >
                              {group.isJoined ? 'Joined' : 'Join Group'}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="feed" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>

                  <div className="space-y-6">
                    {recentPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="uplifting-card transition-shadow hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarFallback className={post.isAnonymous ? 'bg-gray-400 text-white' : 'bg-primary text-primary-foreground'}>
                                  {post.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold">{post.author}</span>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <span className="text-xs text-muted-foreground">{post.time}</span>
                                  <span className="text-xs bg-primary/20 text-primary-foreground bg-primary px-2 py-1 rounded-full">
                                    {post.group}
                                  </span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                                <p className="text-muted-foreground">{post.content}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Heart className="w-4 h-4" />
                                {post.likes} likes
                              </button>
                              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                {post.comments} comments
                              </button>
                            </div>
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

export default CommunityPage;