import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import { Code, Cpu, Clock, BookOpen, Zap } from 'lucide-react';

const MindMap: React.FC = () => {
  const { setCurrentSection, nodes } = useAppStore();
  
  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <Code className="text-neural-blue-500" />;
      case 'skill':
        return <Cpu className="text-glitch-purple-500" />;
      case 'memory':
        return <Clock className="text-electric-aqua-500" />;
      case 'blog':
        return <BookOpen className="text-neural-blue-300" />;
      default:
        return <Zap className="text-white" />;
    }
  };
  
  const getNodeColor = (type: string): 'blue' | 'purple' | 'aqua' => {
    switch (type) {
      case 'project':
        return 'blue';
      case 'skill':
        return 'purple';
      case 'memory':
        return 'aqua';
      default:
        return 'blue';
    }
  };
  
  const getNodePosition = (index: number) => {
    const positions = [
      { x: '50%', y: '30%' },
      { x: '75%', y: '50%' },
      { x: '25%', y: '50%' },
      { x: '50%', y: '70%' },
    ];
    return positions[index % positions.length];
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };
  
  const handleNodeClick = (nodeType: string) => {
    const sectionMap: Record<string, 'projects' | 'skills' | 'timeline' | 'blog'> = {
      'project': 'projects',
      'skill': 'skills',
      'memory': 'timeline',
      'blog': 'blog'
    };
    
    setCurrentSection(sectionMap[nodeType]);
  };
  
  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 rounded-full bg-cyber-dark-900/80 border border-neural-blue-500/50 flex items-center justify-center shadow-neon-blue"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <NeuralText 
            text="OS Core"
            as="span"
            className="text-sm font-bold"
            color="blue"
            monospace
          />
        </motion.div>
      </div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a8ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00a8ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf00ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#bf00ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-aqua" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.line 
          x1="50%" y1="50%" x2="50%" y2="30%" 
          stroke="url(#gradient-blue)" 
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.line 
          x1="50%" y1="50%" x2="75%" y2="50%" 
          stroke="url(#gradient-purple)" 
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
        <motion.line 
          x1="50%" y1="50%" x2="25%" y2="50%" 
          stroke="url(#gradient-aqua)" 
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        />
        <motion.line 
          x1="50%" y1="50%" x2="50%" y2="70%" 
          stroke="url(#gradient-blue)" 
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        />
      </svg>
      
      {/* Nodes */}
      {nodes.map((node, index) => {
        const position = getNodePosition(index);
        return (
          <motion.div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: position.y, left: position.x }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNodeClick(node.type)}
          >
            <HolographicCard 
              title={node.name}
              glowColor={getNodeColor(node.type)}
              className="w-64"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  {getNodeIcon(node.type)}
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-2">{node.description}</p>
                  <div className="text-xs font-code text-white/50">
                    Access Level: ${node.type.toUpperCase()}_USER
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        );
      })}
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-white/60 text-sm mb-1">Click on a node to explore</p>
        <div className="text-xs font-code text-neural-blue-400">
          System Uptime: <span className="text-white/70">25 Years, 3 Months, 12 Days</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MindMap;