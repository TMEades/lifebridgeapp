import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileOverview from '@/components/profile/ProfileOverview';
import ProgressTracker from '@/components/profile/ProgressTracker';
import Achievements from '@/components/profile/Achievements';
import ProfileSettings from '@/components/profile/ProfileSettings';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    if (!user) return;

    try {
      // No need to set loading here again if we're just refreshing
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') { // Ignore error for no rows found on initial load maybe
        throw error;
      }

      if (data) {
        setProfileData({
          name: data.full_name || 'New User',
          email: user.email,
          location: data.location || 'Not set',
          joinDate: new Date(user.created_at).toLocaleString('default', { month: 'long', year: 'numeric' }),
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to load profile",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast]);
  
  useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, [fetchProfile]);


  const getInitials = (name) => {
    if (!name) return 'NU';
    const names = name.split(' ');
    if (names.length > 1 && names[1]) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name.substring(0, 2).toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Profile - LifeBridge</title>
        <meta name="description" content="Manage your wellness profile, track progress, view achievements, and customize your LifeBridge experience." />
      </Helmet>

      <div className="min-h-screen pb-20 bg-background">
        <section className="px-4 pt-8 pb-6 profile-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {getInitials(profileData?.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-900">{profileData?.name}</h1>
                <p className="text-muted-foreground">{`Member since ${profileData?.joinDate}`}</p>
                <p className="text-muted-foreground">{profileData?.location}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <ProfileOverview />
              </TabsContent>
              <TabsContent value="progress">
                <ProgressTracker />
              </TabsContent>
              <TabsContent value="achievements">
                <Achievements />
              </TabsContent>
              <TabsContent value="settings">
                <ProfileSettings onProfileUpdate={fetchProfile} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;