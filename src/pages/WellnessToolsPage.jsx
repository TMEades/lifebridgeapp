import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import MoodTracking from '@/components/wellness/MoodTracking';
import CbtTools from '@/components/wellness/CbtTools';
import MindfulnessSessions from '@/components/wellness/MindfulnessSessions';
import WellnessGoals from '@/components/wellness/WellnessGoals';

const WellnessToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Wellness Tools - LifeBridge</title>
        <meta name="description" content="Personalized emotional wellness tools including mood tracking, CBT exercises, and mindfulness sessions tailored for midlife challenges." />
      </Helmet>

      <div className="min-h-screen pb-20 bg-background">
        <section className="px-4 pt-8 pb-6 wellness-gradient">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-green-800" />
              <h1 className="text-3xl md:text-4xl font-bold text-green-900">Wellness Tools</h1>
            </div>
            <p className="text-green-800 text-lg">
              Personalized tools for your emotional well-being journey
            </p>
          </motion.div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="mood" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="mood">Mood</TabsTrigger>
                <TabsTrigger value="cbt">CBT Tools</TabsTrigger>
                <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>

              <TabsContent value="mood">
                <MoodTracking />
              </TabsContent>
              <TabsContent value="cbt">
                <CbtTools />
              </TabsContent>
              <TabsContent value="mindfulness">
                <MindfulnessSessions />
              </TabsContent>
              <TabsContent value="goals">
                <WellnessGoals />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default WellnessToolsPage;