import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colorClass: string;
  iconColorClass: string;
  gifPlaceholder: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  colorClass,
  iconColorClass,
  gifPlaceholder
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover section-fade-in"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0 }} // This is handled by the IntersectionObserver in Home.tsx
    >
      <div className={`${colorClass} w-16 h-16 rounded-lg mb-6 flex items-center justify-center`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <motion.div 
        className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "-200% 0%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear"
        }}
      >
        <div className="text-center text-gray-500">
          <p className="font-medium">GIF Placeholder:</p>
          <p className="text-sm">{gifPlaceholder}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
