import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const mindfulnessSessions = [
  {
    id: 1,
    title: 'Midlife Transitions Meditation',
    description: 'Guided meditation for navigating life changes',
    duration: '20 min',
    category: 'Life Transitions'
  },
  {
    id: 2,
    title: 'Empty Nest Healing',
    description: 'Finding peace when children leave home',
    duration: '15 min',
    category: 'Family'
  },
  {
    id: 3,
    title: 'Career Clarity Session',
    description: 'Meditation for professional direction',
    duration: '12 min',
    category: 'Career'
  },
  {
    id: 4,
    title: 'Stress Release for Caregivers',
    description: 'Self-care for those caring for others',
    duration: '18 min',
    category: 'Caregiving'
  }
];

const MindfulnessSessions = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMeditation = (sessionId) => {
    setIsPlaying(!isPlaying);
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Mindfulness & Meditation</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mindfulnessSessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="uplifting-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                    <CardDescription>{session.description}</CardDescription>
                  </div>
                  <span className="text-xs bg-primary/20 text-primary-foreground bg-primary px-2 py-1 rounded-full">
                    {session.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{session.duration}</span>
                </div>
                <Button
                  onClick={() => handlePlayMeditation(session.id)}
                  className="w-full flex items-center gap-2"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Pause' : 'Start Session'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MindfulnessSessions;