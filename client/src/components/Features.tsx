import FeatureCard from "./FeatureCard";
import { Highlighter, FolderKanban, FileSpreadsheet } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Highlighter className="h-8 w-8 text-primary" />,
      title: "Smart Keyword Tracking",
      description: "Highlights the keywords you want to track across any webpage, making important information instantly visible.",
      colorClass: "bg-primary/10",
      iconColorClass: "text-primary",
      gifPlaceholder: "Keyword Highlighting Demo"
    },
    {
      id: 2,
      icon: <FolderKanban className="h-8 w-8 text-secondary" />,
      title: "Seamless Organization",
      description: "Makes note-taking organized and seamless with smart categories, tags, and an intuitive interface.",
      colorClass: "bg-secondary/10",
      iconColorClass: "text-secondary",
      gifPlaceholder: "Organization System Demo"
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="h-8 w-8 text-highlight" />,
      title: "Secure Google Sheets Backup",
      description: "All your notes are backed up in a Google Sheet – backed up and private to you, accessible anytime.",
      colorClass: "bg-highlight/10",
      iconColorClass: "text-highlight",
      gifPlaceholder: "Google Sheets Integration Demo"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Better Notes</h2>
          <p className="text-xl text-gray-600">NoteZap transforms how you capture, organize, and access information while browsing.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
              iconColorClass={feature.iconColorClass}
              gifPlaceholder={feature.gifPlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
