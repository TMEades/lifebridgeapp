import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';

const moodData = [
  { day: 'Mon', mood: 6 },
  { day: 'Tue', mood: 7 },
  { day: 'Wed', mood: 5 },
  { day: 'Thu', mood: 8 },
  { day: 'Fri', mood: 7 },
  { day: 'Sat', mood: 9 },
  { day: 'Sun', mood: 8 }
];

const MoodTracking = () => {
  const [currentMood, setCurrentMood] = useState([7]);

  const handleMoodSubmit = () => {
    toast({
      title: "Mood logged successfully!",
      description: "Your mood has been recorded for today."
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-6"
    >
      <Card className="uplifting-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Today's Mood Check-in
          </CardTitle>
          <CardDescription>
            How are you feeling today? Rate your overall mood.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Very Low</span>
              <span>Excellent</span>
            </div>
            <Slider
              value={currentMood}
              onValueChange={setCurrentMood}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-primary">
                {currentMood[0]}/10
              </span>
            </div>
          </div>
          <Button onClick={handleMoodSubmit} className="w-full">
            Log Mood
          </Button>
        </CardContent>
      </Card>

      <Card className="uplifting-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Weekly Mood Trend
          </CardTitle>
          <CardDescription>
            Your mood patterns over the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {moodData.map((day) => (
              <div key={day.day} className="flex items-center gap-4">
                <span className="w-8 text-sm text-muted-foreground">{day.day}</span>
                <div className="flex-1">
                  <Progress value={day.mood * 10} className="h-2" />
                </div>
                <span className="w-8 text-sm font-medium text-foreground">{day.mood}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MoodTracking;