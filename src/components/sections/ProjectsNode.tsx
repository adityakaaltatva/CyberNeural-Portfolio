import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store';
import HolographicCard from '../UI/HolographicCard';
import NeuralText from '../UI/NeuralText';
import CyberButton from '../UI/CyberButton';
import { Code, Layers, Database, Server, ExternalLink, Github } from 'lucide-react';

const ProjectsNode: React.FC = () => {
  const { projects, dissectMode } = useAppStore();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const handleSelectProject = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };
  
  const getSelectedProject = () => {
    return projects.find(p => p.id === selectedProject);
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
          text="Projects OS" 
          as="h1" 
          className="text-3xl font-bold mb-4" 
          color="blue"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          A collection of holographic chambers containing my digital creations. 
          {dissectMode ? " Dissect Mode active: explore detailed layers of each project." : ""}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * parseInt(project.id.split('-')[1]) }}
          >
            <HolographicCard 
              title={project.name}
              glowColor="blue"
              onClick={() => handleSelectProject(project.id)}
              className="h-full cursor-pointer"
            >
              <div className="relative w-full h-40 mb-4 overflow-hidden group">
                <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-900 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-neural-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <p className="text-white/80 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-sm bg-neural-blue-500/10 text-neural-blue-400 border border-neural-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="text-xs font-code text-white/50 mb-2 flex items-center">
                <Code size={12} className="mr-1 text-neural-blue-400" />
                Year: {project.year}
              </div>
            </HolographicCard>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-cyber-dark-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <HolographicCard
                title={getSelectedProject()?.name || ''}
                glowColor="blue"
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="relative w-full h-60 mb-4 overflow-hidden">
                      <img 
                        src={getSelectedProject()?.thumbnail} 
                        alt={getSelectedProject()?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <p className="text-white/80 text-sm mb-4">{getSelectedProject()?.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {getSelectedProject()?.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 rounded-sm bg-neural-blue-500/10 text-neural-blue-400 border border-neural-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 mt-6">
                      {getSelectedProject()?.link && (
                        <CyberButton
                          size="sm"
                          color="aqua"
                          onClick={() => window.open(getSelectedProject()?.link, '_blank')}
                        >
                          <div className="flex items-center">
                            <ExternalLink size={14} className="mr-1" />
                            View Live
                          </div>
                        </CyberButton>
                      )}
                      
                      {getSelectedProject()?.repo && (
                        <CyberButton
                          size="sm"
                          color="purple"
                          onClick={() => window.open(getSelectedProject()?.repo, '_blank')}
                        >
                          <div className="flex items-center">
                            <Github size={14} className="mr-1" />
                            Source Code
                          </div>
                        </CyberButton>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    {dissectMode ? (
                      <div className="border border-neural-blue-500/20 rounded-sm p-4 bg-cyber-dark-800/50">
                        <NeuralText 
                          text="Project Layers" 
                          as="h3" 
                          className="text-lg mb-4"
                          color="blue"
                        />
                        
                        {getSelectedProject()?.layers.frontend && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Layers size={16} className="mr-2 text-neural-blue-500" />
                              <h4 className="text-sm font-medium text-neural-blue-400">Frontend</h4>
                            </div>
                            <p className="text-white/70 text-sm pl-6">{getSelectedProject()?.layers.frontend}</p>
                          </div>
                        )}
                        
                        {getSelectedProject()?.layers.backend && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Server size={16} className="mr-2 text-glitch-purple-500" />
                              <h4 className="text-sm font-medium text-glitch-purple-400">Backend</h4>
                            </div>
                            <p className="text-white/70 text-sm pl-6">{getSelectedProject()?.layers.backend}</p>
                          </div>
                        )}
                        
                        {getSelectedProject()?.layers.database && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Database size={16} className="mr-2 text-electric-aqua-500" />
                              <h4 className="text-sm font-medium text-electric-aqua-400">Database</h4>
                            </div>
                            <p className="text-white/70 text-sm pl-6">{getSelectedProject()?.layers.database}</p>
                          </div>
                        )}
                        
                        {getSelectedProject()?.layers.deployment && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Server size={16} className="mr-2 text-neural-blue-300" />
                              <h4 className="text-sm font-medium text-neural-blue-300">Deployment</h4>
                            </div>
                            <p className="text-white/70 text-sm pl-6">{getSelectedProject()?.layers.deployment}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white/50 text-sm mb-4">
                            Enable Dissect Mode to view project layers
                          </div>
                          <div className="text-xs font-code text-neural-blue-400">
                            Access Level: DISSECT_USER required
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsNode;