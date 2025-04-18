import React from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  title?: string;
  glowColor?: 'blue' | 'purple' | 'aqua';
  onClick?: () => void;
  className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  title, 
  glowColor = 'blue',
  onClick,
  className = ''
}) => {
  const glowClasses = {
    blue: 'shadow-neon-blue border-neural-blue-500/30',
    purple: 'shadow-neon-purple border-glitch-purple-500/30',
    aqua: 'shadow-neon-aqua border-electric-aqua-500/30',
  };

  return (
    <motion.div 
      className={`
        relative overflow-hidden bg-cyber-dark-900/70 backdrop-blur-sm 
        border border-opacity-30 rounded-md
        ${glowClasses[glowColor]} ${className}
      `}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30 animate-scan" />
      </div>
      
      {/* Title bar */}
      {title && (
        <div className="py-2 px-3 border-b border-neural-blue-500/20 flex items-center justify-between">
          <h3 className="font-cyber text-sm uppercase tracking-wider">
            {title}
          </h3>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-electric-aqua-500/70"></div>
            <div className="w-2 h-2 rounded-full bg-glitch-purple-500/70"></div>
          </div>
        </div>
      )}
      
      {/* Card content */}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default HolographicCard;