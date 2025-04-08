import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="text-foreground">Supercharge Your </span>
              <span className="text-primary">Note-Taking</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-muted-foreground md:pr-12"
              variants={itemVariants}
            >
              A Chrome extension to track, organize, and save your notes effortlessly - all synced with Google Sheets.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#features" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#features" 
                className="text-primary hover:text-primary/80 font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                See how it works
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center space-x-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">AS</div>
                <div className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">MK</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold">10,000+</span> note takers
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"></div>
              
              <motion.div 
                className="relative w-full max-w-md bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="bg-background/50 py-3 px-4 border-b border-border flex items-center">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 py-1 px-3 rounded-md bg-card border border-border text-xs text-muted-foreground flex-grow text-center">
                    chrome-extension://notezap
                  </div>
                </div>
                <div className="p-5">
                  <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-12 h-12 bg-card rounded-full mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="mt-2 text-muted-foreground text-sm">Extension Screenshot Placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;