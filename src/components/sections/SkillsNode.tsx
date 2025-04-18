import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import HolographicCard from '../UI/HolographicCard';
import NeuralText from '../UI/NeuralText';
import NeuroProgress from '../UI/NeuroProgress';
import { Cpu, Code, PaintBucket, Wrench, Brain } from 'lucide-react';

const SkillsNode: React.FC = () => {
  const { skills, projects } = useAppStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills', icon: <Cpu size={14} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code size={14} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={14} /> },
    { id: 'design', label: 'Design', icon: <PaintBucket size={14} /> },
    { id: 'soft', label: 'Soft Skills', icon: <Brain size={14} /> },
    { id: 'tool', label: 'Tools', icon: <Wrench size={14} /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);
  
  const getSkillColor = (category: string): 'blue' | 'purple' | 'aqua' => {
    switch (category) {
      case 'frontend':
        return 'blue';
      case 'backend':
        return 'purple';
      case 'design':
        return 'aqua';
      case 'tool':
        return 'blue';
      case 'soft':
        return 'purple';
      default:
        return 'blue';
    }
  };
  
  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="text-neural-blue-500" />;
      case 'backend':
        return <Server className="text-glitch-purple-500" />;
      case 'design':
        return <PaintBucket className="text-electric-aqua-500" />;
      case 'tool':
        return <Wrench className="text-neural-blue-400" />;
      case 'soft':
        return <Brain className="text-glitch-purple-400" />;
      default:
        return <Cpu className="text-white" />;
    }
  };
  
  // Function to get project names by IDs
  const getProjectNames = (projectIds: string[]) => {
    return projectIds.map(id => {
      const project = projects.find(p => p.id === id);
      return project ? project.name : '';
    }).filter(Boolean);
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
          text="Skills Helix" 
          as="h1" 
          className="text-3xl font-bold mb-4" 
          color="purple"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          A DNA-like visualization of technical abilities and knowledge nodes, 
          each with proficiency levels and project connections.
        </p>
      </motion.div>
      
      <div className="mb-8 flex justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              flex items-center px-3 py-2 rounded-sm text-sm transition-all duration-300
              ${activeCategory === category.id 
                ? 'bg-glitch-purple-500/20 text-glitch-purple-400 border border-glitch-purple-500/40' 
                : 'bg-cyber-dark-800/50 text-white/70 border border-transparent hover:border-white/10'}
            `}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <HolographicCard
              title={skill.name}
              glowColor={getSkillColor(skill.category)}
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="mt-1 flex-shrink-0">
                  {getSkillIcon(skill.category)}
                </div>
                <div>
                  <div className="text-xs font-code text-white/50 mb-2">
                    {skill.yearsExperience} years experience
                  </div>
                  <p className="text-white/80 text-sm">{skill.description}</p>
                </div>
              </div>
              
              <NeuroProgress
                value={skill.proficiency}
                color={getSkillColor(skill.category)}
                label="Proficiency"
              />
              
              {skill.projects.length > 0 && (
                <div className="mt-4">
                  <div className="text-xs font-code text-white/50 mb-2">
                    Applied in projects:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getProjectNames(skill.projects).map((name, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-sm bg-cyber-dark-800/80 text-white/70 border border-white/10"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </HolographicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Icon component for Server
const Server = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
    <line x1="6" x2="6" y1="6" y2="6"></line>
    <line x1="6" x2="6" y1="18" y2="18"></line>
  </svg>
);

export default SkillsNode;