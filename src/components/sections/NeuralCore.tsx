import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import CyberButton from '../UI/CyberButton';

const NeuralCore: React.FC = () => {
  const { setCurrentSection } = useAppStore();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.title = "CyberNeural Developer OS";
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="h-screen w-full flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="relative w-32 h-32 mb-8"
        variants={itemVariants}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="w-28 h-28 rounded-full border-4 border-t-neural-blue-500 border-r-glitch-purple-500 border-b-electric-aqua-500 border-l-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-t-neural-blue-300 border-r-transparent border-b-glitch-purple-300 border-l-transparent opacity-70"></div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Brain size={40} className="text-electric-aqua-500" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-center max-w-xl px-4"
        variants={itemVariants}
      >
        <NeuralText 
          text="This isn't a portfolio." 
          as="h1"
          className="text-3xl md:text-4xl font-bold mb-2" 
          glow
        />
        <NeuralText 
          text="It's how I think." 
          as="h2"
          className="text-2xl md:text-3xl mb-8 text-glitch-purple-500"
          glitch
          glow
        />
        <p className="text-white/70 mb-8 leading-relaxed">
          Welcome to my mind, mapped as a neural network. Navigate through my skills, projects, 
          and experiences as interconnected nodes in this interactive digital reflection of my 
          developer consciousness.
        </p>
        
        <CyberButton
          onClick={() => setCurrentSection('mind-map')}
          size="lg"
          color="blue"
        >
          EXECUTE: Boot OS
        </CyberButton>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-white/50 text-xs font-code">
          CyberNeural OS v2.5.0 // Memory Access Protocol: Initialized
        </p>
      </motion.div>
    </motion.div>
  );
};

export default NeuralCore;