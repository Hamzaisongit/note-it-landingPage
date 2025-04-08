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
      gifPlaceholder: "Keyword Highlighting Demo",
      detailedDescription: "Never miss important information again. NoteZap automatically highlights keywords you've set to track, helping you spot crucial details immediately while browsing any website."
    },
    {
      id: 2,
      icon: <FolderKanban className="h-8 w-8 text-teal-400" />,
      title: "Seamless Organization",
      description: "Makes note-taking organized and seamless with smart categories, tags, and an intuitive interface.",
      colorClass: "bg-teal-400/20",
      iconColorClass: "text-teal-400",
      gifPlaceholder: "Organization System Demo",
      detailedDescription: "Stay organized effortlessly with smart categories and tags. Our intuitive interface makes sorting and finding your notes simple, so you can focus on what matters."
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: "Secure Google Sheets Backup",
      description: "All your notes are backed up in a Google Sheet – backed up and private to you, accessible anytime.",
      colorClass: "bg-primary/20",
      iconColorClass: "text-primary",
      gifPlaceholder: "Google Sheets Integration Demo",
      detailedDescription: "Your notes are automatically backed up to your private Google Sheet. Access them from any device, anytime, with the security and convenience you need."
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
                detailedDescription={feature.detailedDescription}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;