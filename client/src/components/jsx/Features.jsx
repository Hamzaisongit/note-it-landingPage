import React from "react";
import { Highlighter, FolderKanban, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, colorClass }) => {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 shadow-lg border border-border overflow-hidden h-full flex flex-col"
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className={`${colorClass} w-16 h-16 rounded-lg mb-6 flex items-center justify-center`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Highlighter className="h-8 w-8 text-primary" />,
      title: "Highlights keywords you want to track",
      description: "Never miss important information again. NoteZap automatically highlights keywords you've set to track, helping you spot crucial details immediately while browsing any website.",
      colorClass: "bg-primary/20"
    },
    {
      id: 2,
      icon: <FolderKanban className="h-8 w-8 text-teal-400" />,
      title: "Makes note-taking organized and seamless",
      description: "Stay organized effortlessly with smart categories and tags. Our intuitive interface makes sorting and finding your notes simple, so you can focus on what matters.",
      colorClass: "bg-teal-400/20"
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: "All notes backed up in Google Sheets",
      description: "Your notes are automatically backed up to your private Google Sheet. Access them from any device, anytime, with the security and convenience you need.",
      colorClass: "bg-primary/20"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 section-fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Features</h2>
          <p className="text-xl text-muted-foreground">NoteZap transforms how you capture, organize, and access information while browsing.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.colorClass}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;