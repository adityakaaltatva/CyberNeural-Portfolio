import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // 16 = half the width of outer circle
      y: mousePosition.y - 16,
      rotate: 45,
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      rotate: 135,
      scale: 0.8,
    },
  };

  const innerVariants = {
    default: {
      scale: 0.5,
    },
    click: {
      scale: 0.3,
    },
  };
  
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.8 }}
      style={{ width: 32, height: 32 }}
    >
      <div className="absolute w-full h-full border-2 border-neural-blue-500 rounded-full mix-blend-difference opacity-50"></div>
      
      <motion.div 
        className="absolute w-full h-full border-2 border-glitch-purple-500 rounded-full mix-blend-difference opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      ></motion.div>
      
      <motion.div
        className="w-2 h-2 bg-electric-aqua-500 rounded-full shadow-neon-aqua"
        variants={innerVariants}
        animate={cursorVariant}
      ></motion.div>
    </motion.div>
  );
};

export default CyberCursor;