import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Left Section: Copyright and Disclaimer */}
          <div className="flex-shrink-0 text-center md:text-left mb-4 md:mb-0">
            <span className="block text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LifeBridge. All Rights Reserved.</span>
            <p className="text-xs text-muted-foreground/70 mt-1">
              This application is not associated with LifeBridge Health,<br />LifeBridge Partnership, Lifebridge North Shore or any such entity.
            </p>
          </div>

          {/* Center Section: Navigation */}
          <nav className="flex-grow flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 md:mb-0">
            <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Disclaimer
            </Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              Terms of Service
            </Link>
          </nav>

          {/* Right Section: Social Icons */}
          <div className="flex-shrink-0 flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">TikTok</span>
              <Play className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;