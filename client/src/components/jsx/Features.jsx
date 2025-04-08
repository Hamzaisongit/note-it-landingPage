import React from "react";
import { Highlighter, FolderKanban, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, colorClass, isReversed }) => {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}>
        <div className={`${colorClass} w-20 h-20 md:w-28 md:h-28 rounded-xl flex items-center justify-center flex-shrink-0`}>
          {React.cloneElement(icon, { className: "h-12 w-12 md:h-16 md:w-16" })}
        </div>
        
        <div className={`flex-1 ${isReversed ? 'md:text-right' : 'md:text-left'} text-center`}>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Highlighter className="text-primary" />,
      title: "Highlights keywords you want to track",
      description: "Never miss important information again. Note-it automatically highlights keywords you've set to track, helping you spot crucial details immediately while browsing any website.",
      colorClass: "bg-primary/20",
      isReversed: false
    },
    {
      id: 2,
      icon: <FolderKanban className="text-teal-400" />,
      title: "Makes note-taking organized and seamless",
      description: "Stay organized effortlessly with smart categories and tags. Our intuitive interface makes sorting and finding your notes simple, so you can focus on what matters.",
      colorClass: "bg-teal-400/20",
      isReversed: true
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="text-primary" />,
      title: "All notes backed up in Google Sheets",
      description: "Your notes are automatically backed up to your private Google Sheet. Access them from any device, anytime, with the security and convenience you need.",
      colorClass: "bg-primary/20",
      isReversed: false
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20 section-fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Note-it transforms how you capture, organize, and access information while browsing.</p>
        </motion.div>
        
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: feature.isReversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.colorClass}
                isReversed={feature.isReversed}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;