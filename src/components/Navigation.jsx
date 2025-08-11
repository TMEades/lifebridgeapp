import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Heart, HelpingHand as HandHelping, BookOpen, User, Bot, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const Navigation = () => {
  const location = useLocation();
  const { user, loading } = useAuth();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/wellness', icon: Heart, label: 'Wellness' },
    { path: '/support', icon: HandHelping, label: 'Support' },
    { path: '/chatbot', icon: Bot, label: 'Chatbot' },
    { path: '/journal', icon: BookOpen, label: 'Journal' },
  ];

  const authNavItem = loading
    ? null
    : user
    ? { path: '/profile', icon: User, label: 'Profile' }
    : { path: '/signin', icon: LogIn, label: 'Sign In' };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="flex justify-around items-center h-[76px] px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path} className="relative h-full flex items-center">
              <motion.div
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors w-20 ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-[10px] sm:text-xs font-medium text-center">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 w-8 h-1 bg-primary rounded-full"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
        {authNavItem && (
          <Link key={authNavItem.path} to={authNavItem.path} className="relative h-full flex items-center">
            <motion.div
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors w-20 ${
                location.pathname === authNavItem.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <authNavItem.icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] sm:text-xs font-medium text-center">{authNavItem.label}</span>
              {location.pathname === authNavItem.path && (
                <motion.div
                  className="absolute bottom-0 w-8 h-1 bg-primary rounded-full"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                />
              )}
            </motion.div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;