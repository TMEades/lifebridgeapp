import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const goals = [
  {
    id: 1,
    title: 'Daily Mood Check-in',
    progress: 85,
    target: 'Track mood daily for 30 days',
    streak: 6
  },
  {
    id: 2,
    title: 'Meditation Practice',
    progress: 60,
    target: 'Meditate 5 times per week',
    streak: 3
  },
  {
    id: 3,
    title: 'CBT Exercises',
    progress: 40,
    target: 'Complete 3 exercises per week',
    streak: 2
  }
];

const WellnessGoals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Wellness Goals</h2>
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="uplifting-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      {goal.title}
                    </CardTitle>
                    <CardDescription>{goal.target}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{goal.streak}</div>
                    <div className="text-xs text-muted-foreground">day streak</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WellnessGoals;