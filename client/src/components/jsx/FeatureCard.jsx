import { motion } from "framer-motion";
import React, { useState } from "react";

const FeatureCard = (props) => {
  const {
    icon,
    title,
    description,
    colorClass,
    iconColorClass,
    gifPlaceholder,
    detailedDescription
  } = props;
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 shadow-lg border border-border card-hover section-fade-in"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0 }} // This is handled by the IntersectionObserver in Home.jsx
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`${colorClass} w-16 h-16 rounded-lg mb-6 flex items-center justify-center`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <motion.div
        initial={{ height: 0, opacity: 0, marginBottom: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? 16 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground text-sm bg-background/50 p-3 rounded-lg border border-border">
          {detailedDescription}
        </p>
      </motion.div>
      
      <div className="aspect-video rounded-lg overflow-hidden flex items-center justify-center placeholder-pulse mb-2">
        <div className="text-center text-muted-foreground">
          <p className="font-medium">GIF Placeholder:</p>
          <p className="text-sm">{gifPlaceholder}</p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          className="text-xs text-primary flex items-center gap-1 hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </>
          ) : (
            <>
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;