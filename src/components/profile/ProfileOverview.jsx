import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, TrendingUp, Award, Calendar, User } from 'lucide-react';

const wellnessStats = [
  {
    icon: Heart,
    label: 'Mood Check-ins',
    value: '28',
    total: '30',
    percentage: 93,
    color: 'text-red-500'
  },
  {
    icon: TrendingUp,
    label: 'CBT Exercises',
    value: '12',
    total: '15',
    percentage: 80,
    color: 'text-blue-500'
  },
  {
    icon: Calendar,
    label: 'Peer Support',
    value: '4',
    total: '4',
    percentage: 100,
    color: 'text-green-500'
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'mood',
    description: 'Logged mood: 8/10',
    time: '2 hours ago',
    icon: Heart
  },
  {
    id: 2,
    type: 'journal',
    description: 'Shared journal entry: "Finding balance"',
    time: '1 day ago',
    icon: User
  },
  {
    id: 3,
    type: 'exercise',
    description: 'Completed CBT exercise: Thought Challenging',
    time: '2 days ago',
    icon: TrendingUp
  },
  {
    id: 4,
    type: 'therapy',
    description: 'Connected with Peer Listener Alex D.',
    time: '3 days ago',
    icon: Calendar
  }
];

const ProfileOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-3 gap-6"
    >
      <div className="lg:col-span-2">
        <Card className="uplifting-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest wellness activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground">{activity.description}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="uplifting-card">
          <CardHeader>
            <CardTitle>This Month's Goals</CardTitle>
            <CardDescription>Your wellness targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {wellnessStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stat.value}/{stat.total}
                    </span>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProfileOverview;