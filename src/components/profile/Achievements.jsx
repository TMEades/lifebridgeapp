import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const achievements = [
  {
    id: 1,
    title: 'Consistent Tracker',
    description: 'Logged mood for 7 consecutive days',
    icon: '🎯',
    earned: true,
    date: 'Earned 3 days ago'
  },
  {
    id: 2,
    title: 'Community Helper',
    description: 'Received 50 likes on journal entries',
    icon: '❤️',
    earned: true,
    date: 'Earned 1 week ago'
  },
  {
    id: 3,
    title: 'Mindful Warrior',
    description: 'Complete 10 meditation sessions',
    icon: '🧘',
    earned: false,
    progress: 7,
    target: 10
  },
  {
    id: 4,
    title: 'Support Champion',
    description: 'Help 25 community members',
    icon: '🤝',
    earned: false,
    progress: 12,
    target: 25
  }
];

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className={`uplifting-card transition-shadow hover:shadow-lg ${
              achievement.earned ? 'bg-green-50' : ''
            }`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`text-3xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className={`text-lg ${achievement.earned ? 'text-primary' : ''}`}>
                      {achievement.title}
                    </CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                    {achievement.earned ? (
                      <p className="text-sm text-primary mt-2">{achievement.date}</p>
                    ) : (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.target}</span>
                        </div>
                        <Progress value={(achievement.progress / achievement.target) * 100} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;