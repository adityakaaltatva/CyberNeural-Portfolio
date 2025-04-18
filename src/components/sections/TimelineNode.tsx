import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import CyberButton from '../UI/CyberButton';
import { Clock, Award, Milestone, BookOpen } from 'lucide-react';

const TimelineNode: React.FC = () => {
  const { memories, timelineYear, setTimelineYear } = useAppStore();
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  
  // Get list of years from memories
  const years = Array.from(
    new Set(memories.map(memory => memory.year))
  ).sort((a, b) => b - a); // Sort in descending order
  
  // Filter memories by selected year
  const filteredMemories = memories.filter(
    memory => memory.year === timelineYear
  );
  
  const handleSelectMemory = (memoryId: string) => {
    setSelectedMemory(memoryId === selectedMemory ? null : memoryId);
  };
  
  const getSelectedMemory = () => {
    return memories.find(m => m.id === selectedMemory);
  };
  
  const getMemoryIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award className="text-neural-blue-500" />;
      case 'milestone':
        return <Milestone className="text-glitch-purple-500" />;
      case 'learning':
        return <BookOpen className="text-electric-aqua-500" />;
      default:
        return <Clock className="text-white" />;
    }
  };
  
  const getMemoryColor = (type: string): 'blue' | 'purple' | 'aqua' => {
    switch (type) {
      case 'achievement':
        return 'blue';
      case 'milestone':
        return 'purple';
      case 'learning':
        return 'aqua';
      default:
        return 'blue';
    }
  };
  
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
          text="Memory Corridor" 
          as="h1" 
          className="text-3xl font-bold mb-4" 
          color="aqua"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          Walk through a timeline of experiences, achievements, and pivotal moments.
          Rewind through career history using the timeline controls.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Clock size={20} className="text-electric-aqua-500 mr-2" />
          <NeuralText 
            text={`Time Rewind: ${timelineYear}`} 
            as="h2"
            className="text-xl" 
            color="aqua"
          />
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="relative h-1 bg-cyber-dark-800 rounded-full w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 bg-electric-aqua-500 rounded-full" 
                 style={{ 
                   width: `${((timelineYear - Math.min(...years)) / (Math.max(...years) - Math.min(...years))) * 100}%`,
                   transition: 'width 0.5s ease'
                 }}
            ></div>
            
            {years.map(year => (
              <button
                key={year}
                className={`absolute top-0 w-4 h-4 -mt-1.5 rounded-full transition-all
                  ${year === timelineYear ? 'bg-electric-aqua-500 shadow-neon-aqua' : 'bg-cyber-dark-700'}`}
                style={{ 
                  left: `${((year - Math.min(...years)) / (Math.max(...years) - Math.min(...years))) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
                onClick={() => setTimelineYear(year)}
                title={year.toString()}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-3 mb-10">
          {years.map(year => (
            <CyberButton
              key={year}
              color={year === timelineYear ? 'aqua' : 'blue'}
              size="sm"
              onClick={() => setTimelineYear(year)}
            >
              {year}
            </CyberButton>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMemories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <HolographicCard
              title={memory.title}
              glowColor={getMemoryColor(memory.type)}
              onClick={() => handleSelectMemory(memory.id)}
              className="h-full cursor-pointer"
            >
              <div className="relative w-full h-40 mb-4 overflow-hidden group">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-900 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-electric-aqua-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="flex items-start space-x-3 mb-4">
                <div className="mt-1 flex-shrink-0">
                  {getMemoryIcon(memory.type)}
                </div>
                <div>
                  <div className="text-xs font-code text-white/50 mb-2">
                    {memory.date}
                  </div>
                  <p className="text-white/80 text-sm">{memory.description}</p>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        ))}
        
        {filteredMemories.length === 0 && (
          <div className="col-span-full text-center py-10">
            <div className="text-electric-aqua-500 mb-4">
              <Clock size={40} className="mx-auto" />
            </div>
            <NeuralText
              text="No memories recorded for this year"
              as="h3"
              className="text-xl mb-2"
              color="aqua"
            />
            <p className="text-white/60">
              Try selecting a different year from the timeline
            </p>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-cyber-dark-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div 
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <HolographicCard
                title={getSelectedMemory()?.title || ''}
                glowColor={getMemoryColor(getSelectedMemory()?.type || 'achievement')}
                className="w-full"
              >
                <div className="relative w-full h-60 mb-6 overflow-hidden">
                  <img 
                    src={getSelectedMemory()?.image} 
                    alt={getSelectedMemory()?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="mt-1 flex-shrink-0">
                    {getMemoryIcon(getSelectedMemory()?.type || 'achievement')}
                  </div>
                  <div>
                    <div className="text-sm font-code text-white/50 mb-2">
                      {getSelectedMemory()?.date}
                    </div>
                    <p className="text-white/90 text-base">{getSelectedMemory()?.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <CyberButton
                    size="sm"
                    color="aqua"
                    onClick={() => setSelectedMemory(null)}
                  >
                    Close Memory
                  </CyberButton>
                </div>
              </HolographicCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimelineNode;