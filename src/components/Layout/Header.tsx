import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, Dna, Atom } from 'lucide-react';
import { useAppStore } from '../../store';
import CyberButton from '../UI/CyberButton';
import NeuralText from '../UI/NeuralText';

const Header: React.FC = () => {
  const { currentSection, setCurrentSection, toggleDissectMode, dissectMode } = useAppStore();
  
  const sections = [
    { id: 'mind-map', label: 'Mind Map' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'dna', label: 'Neural DNA' },
    { id: 'quantum', label: 'Quantum Self' },
    { id: 'ai-twin', label: 'AI Twin' },
  ];
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-cyber-dark-900/80 backdrop-blur-md border-b border-neural-blue-500/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <motion.div 
            className="flex items-center justify-center w-8 h-8 bg-neural-blue-500/20 rounded-sm"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Brain size={20} className="text-neural-blue-500" />
          </motion.div>
          <div className="flex items-center">
            <NeuralText 
              text="CyberNeural" 
              as="h1" 
              className="text-xl font-bold mr-2" 
              color="blue"
            />
            <div className="flex items-center space-x-1">
              <Code size={14} className="text-glitch-purple-500" />
              <NeuralText 
                text="OS" 
                as="span" 
                className="text-sm" 
                color="purple"
                monospace
              />
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Zap size={10} className="text-electric-aqua-500" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id as any)}
              className={`px-3 py-1 text-sm font-cyber uppercase tracking-wider transition-all duration-300
                ${currentSection === section.id 
                  ? 'text-neural-blue-500 border-b-2 border-neural-blue-500' 
                  : 'text-white/70 hover:text-white border-b-2 border-transparent'
                }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <CyberButton 
            size="sm" 
            color={dissectMode ? "aqua" : "purple"}
            onClick={toggleDissectMode}
            glitch={dissectMode}
          >
            {dissectMode ? "Exit Dissect" : "Dissect Mode"}
          </CyberButton>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;