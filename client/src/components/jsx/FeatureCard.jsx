import { motion } from "framer-motion";
import React from "react";

const FeatureCard = (props) => {
  const {
    icon,
    title,
    description,
    colorClass,
    iconColorClass,
    gifPlaceholder
  } = props;
  
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 shadow-lg border border-border card-hover section-fade-in"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0 }} // This is handled by the IntersectionObserver in Home.jsx
    >
      <div className={`${colorClass} w-16 h-16 rounded-lg mb-6 flex items-center justify-center`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="aspect-video rounded-lg overflow-hidden flex items-center justify-center placeholder-pulse">
        <div className="text-center text-muted-foreground">
          <p className="font-medium">GIF Placeholder:</p>
          <p className="text-sm">{gifPlaceholder}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;