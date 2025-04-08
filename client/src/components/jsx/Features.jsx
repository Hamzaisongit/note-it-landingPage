import React from "react";
import FeatureCard from "./FeatureCard";
import { Highlighter, FolderKanban, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Highlighter className="h-8 w-8 text-primary" />,
      title: "Smart Keyword Tracking",
      description: "Highlights the keywords you want to track across any webpage, making important information instantly visible.",
      colorClass: "bg-primary/20",
      iconColorClass: "text-primary",
      gifPlaceholder: "Keyword Highlighting Demo"
    },
    {
      id: 2,
      icon: <FolderKanban className="h-8 w-8 text-indigo-400" />,
      title: "Seamless Organization",
      description: "Makes note-taking organized and seamless with smart categories, tags, and an intuitive interface.",
      colorClass: "bg-indigo-400/20",
      iconColorClass: "text-indigo-400",
      gifPlaceholder: "Organization System Demo"
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="h-8 w-8 text-purple-400" />,
      title: "Secure Google Sheets Backup",
      description: "All your notes are backed up in a Google Sheet – backed up and private to you, accessible anytime.",
      colorClass: "bg-purple-400/20",
      iconColorClass: "text-purple-400",
      gifPlaceholder: "Google Sheets Integration Demo"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Smart Features for Better Notes</h2>
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
                iconColorClass={feature.iconColorClass}
                gifPlaceholder={feature.gifPlaceholder}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;