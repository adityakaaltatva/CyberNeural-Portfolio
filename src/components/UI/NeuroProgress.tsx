import React from 'react';
import { motion } from 'framer-motion';

interface NeuroProgressProps {
  value: number;
  max?: number;
  color?: 'blue' | 'purple' | 'aqua';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  label?: string;
}

const NeuroProgress: React.FC<NeuroProgressProps> = ({
  value,
  max = 100,
  color = 'blue',
  size = 'md',
  animated = true,
  label,
}) => {
  const percentage = (value / max) * 100;
  
  const colorClasses = {
    blue: 'bg-neural-blue-500',
    purple: 'bg-glitch-purple-500',
    aqua: 'bg-electric-aqua-500',
  };
  
  const shadowClasses = {
    blue: 'shadow-neon-blue',
    purple: 'shadow-neon-purple',
    aqua: 'shadow-neon-aqua',
  };
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1 text-xs">
          <span className="font-cyber text-white/70">{label}</span>
          <span className="font-code text-white/70">{value}/{max}</span>
        </div>
      )}
      <div className={`w-full bg-cyber-dark-800 rounded-sm overflow-hidden ${sizeClasses[size]}`}>
        <motion.div
          className={`${colorClasses[color]} ${shadowClasses[color]} rounded-sm`}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {animated && (
            <motion.div 
              className="h-full w-full bg-white/30"
              animate={{ 
                x: ['0%', '100%', '0%'],
                opacity: [0, 0.3, 0] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NeuroProgress;