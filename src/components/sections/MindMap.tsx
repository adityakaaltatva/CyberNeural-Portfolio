import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import { Code, Cpu, Clock, BookOpen, Zap, Terminal } from 'lucide-react';

const birthday = new Date('2004-05-28T00:00:00');

const MindMap: React.FC = () => {
  const { setCurrentSection, nodes } = useAppStore();
  const [uptime, setUptime] = useState('');
  const [defenseGrid, setDefenseGrid] = useState<Array<{x: number, y: number, active: boolean}>>([]);
  const [showTerminalRedirect, setShowTerminalRedirect] = useState(false);

  // Initialize defense grid
  useEffect(() => {
    const grid = [];
    const columns = 20;
    const rows = 12;
    
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        grid.push({
          x: (x / columns) * 100,
          y: (y / rows) * 100,
          active: Math.random() > 0.8
        });
      }
    }
    setDefenseGrid(grid);

    // Animate random grid points
    const interval = setInterval(() => {
      setDefenseGrid(prev => prev.map(point => ({
        ...point,
        active: Math.random() > 0.9 ? !point.active : point.active
      })));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const updateUptime = () => {
    const now = new Date();
    const diff = now.getTime() - birthday.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365.25);
    const months = Math.floor((days % 365.25) / 30.44);
    const remainingDays = Math.floor((days % 365.25) % 30.44);

    setUptime(`${years} Years, ${months} Months, ${remainingDays} Days`);
  };

  useEffect(() => {
    updateUptime();
    const interval = setInterval(updateUptime, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const handleTerminalClick = () => {
    setShowTerminalRedirect(true);
    setTimeout(() => {
      window.open('https://terminal-portfolio-roan.vercel.app/', '_blank');
      setShowTerminalRedirect(false);
    }, 2000);
  };

  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-black via-cyber-dark-900 to-cyber-dark-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Cyber Defense Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {defenseGrid.map((point, index) => (
          <motion.div
            key={index}
            className={`absolute w-0.5 h-0.5 rounded-full ${point.active ? 'bg-neural-blue-400' : 'bg-neural-blue-900'}`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            animate={{
              opacity: point.active ? [0.3, 0.8, 0.3] : [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Grid connections */}
        <svg className="absolute inset-0 w-full h-full">
          {defenseGrid.filter(point => point.active).map((point, index) => (
            <line
              key={index}
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${point.x + Math.random() * 5}%`}
              y2={`${point.y + Math.random() * 5}%`}
              stroke="rgba(0, 168, 255, 0.1)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Animated Name */}
      <motion.div 
        className="absolute top-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <NeuralText 
          text="ADITYA PANDEY"
          as="h1"
          className="text-3xl font-bold tracking-wider"
          color="blue"
          monospace
        />
      </motion.div>

      {/* Center Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 rounded-full bg-cyber-dark-900/80 border-2 border-neural-blue-500/50 flex items-center justify-center shadow-neon-blue"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 10px rgba(0, 168, 255, 0.5)',
              '0 0 20px rgba(0, 168, 255, 0.8)',
              '0 0 10px rgba(0, 168, 255, 0.5)'
            ]
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

      {/* Terminal Icon Button */}
      <motion.button 
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cyber-dark-700 border border-neural-blue-400/40 hover:bg-cyber-dark-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleTerminalClick}
      >
        <Terminal className="text-neural-blue-400 w-5 h-5" />
      </motion.button>

      {/* Terminal Redirect Message */}
      {showTerminalRedirect && (
        <motion.div 
          className="absolute top-20 right-4 z-50 p-4 bg-cyber-dark-800 border border-neural-blue-400/30 rounded-md shadow-lg max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <div className="font-mono text-sm text-neural-blue-300">
            <p className="text-green-400">$ Connecting to terminal...</p>
            <p className="text-white mt-2">This is my terminal portfolio written in Rust</p>
            <p className="text-neural-blue-400 mt-1">Opening: terminal-portfolio-roan.vercel.app</p>
          </div>
        </motion.div>
      )}

      {/* Connection Lines */}
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
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 168, 255, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        
        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.3" />
        
        {/* Animated connections */}
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
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            style={{ top: position.y, left: position.x }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
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

      {/* System Uptime Info */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-white/60 text-sm mb-1">Click on a node to explore</p>
        <div className="text-xs font-code text-neural-blue-400">
          System Uptime: <span className="text-white/70">{uptime}</span>
        </div>
        
        {/* Defense Grid Status */}
        <div className="mt-2 text-xs font-code text-neural-blue-400">
          Defense Grid: <span className="text-green-400">ACTIVE</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MindMap;