import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Bell, Shield, Loader2, Check, ChevronsUpDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { locations } from "@/lib/locations";

const ProfileSettings = ({ onProfileUpdate }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  
  const [originalData, setOriginalData] = useState({ name: '', location: '' });

  const [popoverOpen, setPopoverOpen] = useState(false);

  const fetchProfileData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, location')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        const profileName = data.full_name || '';
        const profileLocation = data.location || '';
        setName(profileName);
        setLocation(profileLocation);
        setOriginalData({ name: profileName, location: profileLocation });
      }
      setEmail(user.email || '');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to load settings",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: name,
          location: location,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated successfully!",
        description: "Your changes have been saved."
      });
      setIsEditing(false);
      setOriginalData({ name, location });
      if (onProfileUpdate) {
        onProfileUpdate();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to update profile",
        description: error.message,
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setName(originalData.name);
    setLocation(originalData.location);
    setIsEditing(false);
  };
  
  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  const allLocations = locations.flatMap(country => country.items);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-6"
    >
      <Card className="uplifting-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-end mb-4">
            {isEditing ? (
              <>
                <Button onClick={handleSaveProfile} disabled={saving} className="mr-2">
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </Button>
                <Button variant="outline" onClick={handleCancelEdit} disabled={saving}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing || saving}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <Input
              id="email"
              value={email}
              disabled={true}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="location">Location</label>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="w-full justify-between"
                  disabled={!isEditing || saving}
                >
                  {location
                    ? allLocations.find((loc) => loc.value === location)?.label
                    : "Select location..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search location..." />
                  <CommandList>
                    <CommandEmpty>No location found.</CommandEmpty>
                    {locations.map((group) => (
                      <CommandGroup key={group.group} heading={group.group}>
                        {group.items.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            onSelect={(currentValue) => {
                              setLocation(currentValue === location ? "" : currentValue);
                              setPopoverOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                location === item.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {item.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="uplifting-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleNotImplemented} variant="outline" className="w-full">
              <Settings className="w-4 h-4 mr-2" />
              Notification Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="uplifting-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>Control your privacy settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleNotImplemented} variant="outline" className="w-full">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProfileSettings;