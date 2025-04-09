import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  // Animation for floating particles - more structured pattern for academic feel
  const particles = Array.from({ length: 20 }, (_, i) => {
    // Create a more structured grid-like pattern for academic feel
    const row = Math.floor(i / 5);
    const col = i % 5;
    
    return {
      id: i,
      size: Math.random() * 5 + 2,
      x: 10 + col * 20 + (Math.random() * 10 - 5),
      y: 10 + row * 25 + (Math.random() * 10 - 5),
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    };
  });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background/80">
      {/* Academic-style animation particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Academic decoration lines */}
      <motion.div
        className="absolute h-[1px] bg-primary/15 w-20 md:w-40 -left-10 top-1/4 transform -rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[1px] bg-primary/15 w-20 md:w-40 -right-10 top-1/3 transform rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[1px] bg-teal-400/15 w-20 md:w-40 -left-10 bottom-1/3 transform rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[1px] bg-teal-400/15 w-20 md:w-40 -right-10 bottom-1/4 transform -rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-2xl p-8 md:p-12 bg-card border border-border shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative academic elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Transform Your Note-Taking Experience?
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Start capturing, organizing, and accessing information in a new way with Note-it today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.a
                href="https://chromewebstore.google.com/detail/note-it/ialnbadijnahcjeflecdnkficehiohce" 
                target="_blank"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200 text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
            
            {/* Academic decoration inside card */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
              {/* Subtle grid background for academic feel */}
              <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
              
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary/10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-teal-400/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.05, 0.15],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              
              {/* Academic dots pattern */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/10"></div>
              <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-primary/10"></div>
              <div className="absolute top-8 right-4 w-2 h-2 rounded-full bg-primary/10"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-teal-400/10"></div>
              <div className="absolute bottom-4 left-8 w-2 h-2 rounded-full bg-teal-400/10"></div>
              <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-teal-400/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;