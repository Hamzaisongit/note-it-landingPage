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
            className="flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/favicon.png" alt="Note-it logo" className="h-10 w-10" />
          </motion.div>
          <h1 className="text-xl font-bold text-foreground">Note-it</h1>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://chromewebstore.google.com/detail/note-it/ialnbadijnahcjeflecdnkficehiohce" 
            target="_blank"
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-all duration-200 flex items-center"
            aria-label="Download NoteZap Chrome Extension"
          >
            <span>Download Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
        
      </div>
      
    </header>
  );
};

export default Header;