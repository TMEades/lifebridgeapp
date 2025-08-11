import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { BrainCircuit, Activity, Puzzle, Wind, Hand as HeartHand, Users, ListChecks, BrainCog, Milestone, Target } from 'lucide-react';

const cbtToolsList = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Cognitive Restructuring',
    description: 'Challenge and replace negative thoughts with balanced perspectives.',
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: 'Behavioral Activation',
    description: 'Schedule enjoyable activities to break the cycle of low mood.',
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: 'Problem-Solving Therapy',
    description: 'Break down overwhelming issues into small, manageable steps.',
  },
  {
    icon: <Wind className="w-8 h-8 text-primary" />,
    title: 'Mindfulness & Relaxation',
    description: 'Use grounding techniques to manage stress and regulate emotions.',
  },
  {
    icon: <HeartHand className="w-8 h-8 text-primary" />,
    title: 'Address Guilt & Regret',
    description: 'Reframe self-blame and develop compassionate self-talk.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Social Skills Practice',
    description: 'Strengthen social networks and practice assertive communication.',
  },
  {
    icon: <ListChecks className="w-8 h-8 text-primary" />,
    title: 'Self-Monitoring & Tracking',
    description: 'Use journals to monitor thoughts, moods, and recognize patterns.',
  },
  {
    icon: <BrainCog className="w-8 h-8 text-primary" />,
    title: 'Cope with Overthinking',
    description: 'Identify thinking traps and apply grounding strategies.',
  },
  {
    icon: <Milestone className="w-8 h-8 text-primary" />,
    title: 'Assertiveness & Boundaries',
    description: 'Practice setting healthy boundaries to avoid burnout.',
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Values Clarification',
    description: 'Align your life choices with your core personal values.',
  },
];

const CbtTools = () => {
  const handleStartExercise = (title) => {
    toast({
      title: `Starting "${title}"`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Your CBT Toolkit</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          A collection of evidence-based exercises to help you understand your thoughts, regulate emotions, and build resilience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cbtToolsList.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col uplifting-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {tool.icon}
                <CardTitle className="text-xl">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="mb-6">{tool.description}</CardDescription>
                <Button
                  onClick={() => handleStartExercise(tool.title)}
                  className="w-full mt-auto"
                >
                  Start Exercise
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CbtTools;