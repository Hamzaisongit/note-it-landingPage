import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <motion.div 
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Pencil className="h-5 w-5 text-white" />
          </motion.div>
          <h1 className="text-xl font-bold text-foreground">NoteZap</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200">How it works</a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">FAQ</a>
        </nav>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-all duration-200 flex items-center"
            aria-label="Download NoteZap Chrome Extension"
          >
            <span>Download Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-muted-foreground hover:text-primary focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuVisible ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuVisible}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuVisible ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-4 py-3 space-y-2 bg-card/80 backdrop-blur-sm">
          <a href="#features" className="block text-muted-foreground hover:text-primary py-2">Features</a>
          <a href="#how-it-works" className="block text-muted-foreground hover:text-primary py-2">How it works</a>
          <a href="#faq" className="block text-muted-foreground hover:text-primary py-2">FAQ</a>
        </div>
      </div>
    </header>
  );
};

export default Header;