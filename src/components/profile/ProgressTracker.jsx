import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, TrendingUp, Award, Calendar } from 'lucide-react';

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
  },
  {
    icon: Award,
    label: 'Journal Entries',
    value: '18',
    total: '20',
    percentage: 90,
    color: 'text-purple-500'
  }
];

const ProgressTracker = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Wellness Progress</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {wellnessStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="uplifting-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{stat.label}</CardTitle>
                      <CardDescription>This month's progress</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                      <span className="text-muted-foreground">of {stat.total}</span>
                    </div>
                    <Progress value={stat.percentage} className="h-3" />
                    <p className="text-sm text-muted-foreground">
                      {stat.percentage}% completed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProgressTracker;