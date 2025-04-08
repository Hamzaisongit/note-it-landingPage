import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  // Animation for floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="py-20 relative overflow-hidden">
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
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
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
        className="absolute h-[2px] bg-primary/20 w-20 md:w-40 -left-10 top-1/4 transform -rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[2px] bg-primary/20 w-20 md:w-40 -right-10 top-1/3 transform rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[2px] bg-teal-400/20 w-20 md:w-40 -left-10 bottom-1/3 transform rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute h-[2px] bg-teal-400/20 w-20 md:w-40 -right-10 bottom-1/4 transform -rotate-45"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="rounded-2xl p-8 md:p-12 bg-card border border-border shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative academic elements */}
            <div className="absolute -top-5 -left-5 w-10 h-10 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute -top-5 -right-5 w-10 h-10 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute -bottom-5 -left-5 w-10 h-10 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
            <div className="absolute -bottom-5 -right-5 w-10 h-10 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Transform Your Note-Taking Experience?
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join thousands of students and professionals who've revolutionized how they capture and organize information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                href="#features"
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
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-teal-400/10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;