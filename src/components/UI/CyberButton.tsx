import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'blue' | 'purple' | 'aqua';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  onClick, 
  color = 'blue', 
  size = 'md',
  glitch = false
}) => {
  const colorClasses = {
    blue: 'border-neural-blue-500 text-neural-blue-500 hover:bg-neural-blue-500/10 shadow-neon-blue',
    purple: 'border-glitch-purple-500 text-glitch-purple-500 hover:bg-glitch-purple-500/10 shadow-neon-purple',
    aqua: 'border-electric-aqua-500 text-electric-aqua-500 hover:bg-electric-aqua-500/10 shadow-neon-aqua',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden font-cyber uppercase tracking-wider
        border-2 rounded-sm font-medium
        transition-all duration-300 ease-in-out
        ${colorClasses[color]} ${sizeClasses[size]}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={glitch ? { x: [-1, 1, -1, 0] } : {}}
      transition={glitch ? { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.2 
      } : {}}
    >
      {children}
      <span className="absolute inset-0 flex items-center justify-center">
        {glitch && (
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 hover:opacity-20 animate-scan"></span>
        )}
      </span>
    </motion.button>
  );
};

export default CyberButton;