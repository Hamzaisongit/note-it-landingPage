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
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Headline and Subtitle - centered at top */}
          <motion.div 
            className="text-center max-w-3xl mb-10 md:mb-14"
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
              className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A Chrome extension to track, organize, and save your notes effortlessly - all synced with Google Sheets.
            </motion.p>
            
          </motion.div>
          
          {/* Large Demo Video Area */}
          <motion.div 
            className="w-full mt-5 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full mx-auto">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"></div>
              
              <motion.div 
                className="relative w-full bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="p-4 md:p-6 lg:p-8">
                  {/* Large video placeholder area */}
                  <div className="aspect-video bg-background rounded-lg flex items-center justify-center placeholder-pulse">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="/Note-it-demo-clip.mp4" type="video/mp4" />
                    </video>
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