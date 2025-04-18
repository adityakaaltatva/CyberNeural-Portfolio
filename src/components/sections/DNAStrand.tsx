import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import {  useFrame } from '@react-three/fiber';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import { Dna, Activity, Book, Code, Brain } from 'lucide-react';

const DNAStrand: React.FC = () => {
  const { dnaNodes } = useAppStore();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [category, setCategory] = useState<'all' | 'tech' | 'life'>('all');
  
  const getNodeIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'public speaking':
        return <Activity className="text-neural-blue-500" />;
      case 'distance running':
        return <Activity className="text-glitch-purple-500" />;
      case 'philosophy':
        return <Book className="text-electric-aqua-500" />;
      case 'software development':
        return <Code className="text-neural-blue-500" />;
      case 'ai research':
        return <Brain className="text-glitch-purple-500" />;
      default:
        return <Dna className="text-white" />;
    }
  };
  
  // Removed unused DNAHelix function to resolve the error.
  
  const filteredNodes = category === 'all' 
    ? dnaNodes 
    : dnaNodes.filter(node => node.category === category);
  
  return (
    <motion.div 
      className="container mx-auto px-4 py-20 pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NeuralText 
          text="Neural DNA" 
          as="h1" 
          className="text-3xl font-bold mb-4" 
          color="aqua"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          The code beyond coding: A biomechanical visualization of skills and passions 
          that shape my developer DNA.
        </p>
      </motion.div>
      
      <div className="mb-8 flex justify-center space-x-4">
        {['all', 'tech', 'life'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as 'all' | 'tech' | 'life')}
            className={`
              px-4 py-2 rounded-sm text-sm font-cyber uppercase tracking-wider
              transition-all duration-300
              ${category === cat 
                ? 'bg-electric-aqua-500/20 text-electric-aqua-400 border border-electric-aqua-500/40' 
                : 'bg-cyber-dark-800/50 text-white/70 border border-transparent hover:border-white/10'}
            `}
          >
            {cat === 'all' ? 'All Strands' : `${cat} Strand`}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <HolographicCard
              title={node.name}
              glowColor={node.category === 'tech' ? 'blue' : 'aqua'}
              onClick={() => setSelectedNode(node.id)}
              className="cursor-pointer h-full"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="mt-1 flex-shrink-0">
                  {getNodeIcon(node.name)}
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-2">{node.description}</p>
                  <div className="text-xs font-code text-white/50">
                    Category: {node.category.toUpperCase()}_STRAND
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {node.achievements.map((achievement, idx) => (
                  <div 
                    key={idx}
                    className="text-xs px-2 py-1 rounded-sm bg-cyber-dark-800/80 text-white/70 border border-white/10"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
              
              {node.quote && (
                <div className="mt-4 p-2 border border-electric-aqua-500/20 rounded-sm bg-cyber-dark-800/50">
                  <p className="text-electric-aqua-400 text-sm italic">"{node.quote}"</p>
                </div>
              )}
            </HolographicCard>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNode(null)}
          >
            {/* Detailed node view would be rendered here */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DNAStrand;