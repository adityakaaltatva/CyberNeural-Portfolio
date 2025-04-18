import React from 'react';
import { motion } from 'framer-motion';

interface NeuralTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  glitch?: boolean;
  glow?: boolean;
  className?: string;
  color?: 'blue' | 'purple' | 'aqua' | 'white';
  monospace?: boolean;
}

const NeuralText: React.FC<NeuralTextProps> = ({ 
  text, 
  as = 'p', 
  glitch = false,
  glow = false,
  className = '',
  color = 'white',
  monospace = false,
}) => {
  const colorClasses = {
    blue: 'text-neural-blue-500',
    purple: 'text-glitch-purple-500',
    aqua: 'text-electric-aqua-500',
    white: 'text-white',
  };

  const glowClasses = {
    blue: 'text-shadow-blue',
    purple: 'text-shadow-purple',
    aqua: 'text-shadow-aqua',
    white: 'text-shadow-white',
  };

  const customClass = `
    ${colorClasses[color]} 
    ${glow ? glowClasses[color] : ''} 
    ${monospace ? 'font-code' : 'font-cyber'}
    ${className}
  `;

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
      },
    }),
  };

  const glitchAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: [1, 0.5, 1],
      x: [0, -3, 3, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: Math.random() * 8 + 2,
      },
    },
  };

  const Component = as;

  return (
    <Component className={`${customClass}`}>
      {glitch ? (
        <motion.span
          variants={glitchAnimation}
          initial="hidden"
          animate="visible"
        >
          {text}
        </motion.span>
      ) : (
        <motion.span initial="hidden" animate="visible">
          {text.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              custom={index}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      )}
    </Component>
  );
};

export default NeuralText;