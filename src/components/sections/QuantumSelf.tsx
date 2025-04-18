import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import { Atom, Clock, Code, Heart, Mail, Phone, Linkedin, Github } from 'lucide-react';

const QuantumSelf: React.FC = () => {
  const { quantumStates } = useAppStore();
  const [activeState, setActiveState] = useState(quantumStates[0].id);
  const [showParallel, setShowParallel] = useState(false);

  const currentState = quantumStates.find(state => state.id === activeState);

  return (
    <motion.div
      className="container mx-auto px-4 py-20 pt-32 space-y-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NeuralText
          text="Quantum Self"
          as="h1"
          className="text-3xl font-bold mb-4"
          color="purple"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          A superposition of identities: Explore the parallel universes of my
          personal and professional evolution.
        </p>
      </motion.div>

      {/* Identity and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Identity Cube */}
        <div>
          <HolographicCard title="Identity Cube" glowColor="purple" className="mb-6">
            <div className="relative w-full h-96 mb-4 overflow-hidden rounded-sm">
              <img
                src={currentState?.image}
                alt={currentState?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-900 via-transparent to-transparent"></div>
              <motion.div
                className="absolute inset-0 bg-glitch-purple-500/20"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>

            <div className="space-y-4">
              <NeuralText
                text={currentState?.title || ''}
                as="h2"
                className="text-2xl"
                color="purple"
              />
              <p className="text-white/80">{currentState?.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-code text-white/50 mb-2">Skills</h3>
                  <div className="space-y-2">
                    {currentState?.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="text-xs px-2 py-1 rounded-sm bg-cyber-dark-800/80 text-white/70 border border-glitch-purple-500/20"
                      >
                        <Code size={12} className="inline mr-1 text-glitch-purple-400" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-code text-white/50 mb-2">Passions</h3>
                  <div className="space-y-2">
                    {currentState?.passions.map((passion, index) => (
                      <div
                        key={index}
                        className="text-xs px-2 py-1 rounded-sm bg-cyber-dark-800/80 text-white/70 border border-electric-aqua-500/20"
                      >
                        <Heart size={12} className="inline mr-1 text-electric-aqua-400" />
                        {passion}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HolographicCard>

          <div className="flex space-x-3">
            {quantumStates.map((state) => (
              <button
                key={state.id}
                onClick={() => setActiveState(state.id)}
                className={`
                  flex-1 px-3 py-2 rounded-sm text-sm font-cyber
                  transition-all duration-300
                  ${activeState === state.id
                    ? 'bg-glitch-purple-500/20 text-glitch-purple-400 border border-glitch-purple-500/40'
                    : 'bg-cyber-dark-800/50 text-white/70 border border-transparent hover:border-white/10'}
                `}
              >
                {state.title}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Tesseract */}
        <div>
          <HolographicCard title="Timeline Tesseract" glowColor="aqua">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Clock size={16} className="text-electric-aqua-500 mr-2" />
                <span className="text-sm text-white/70">Temporal Coordinates</span>
              </div>
              <button
                onClick={() => setShowParallel(!showParallel)}
                className={`
                  flex items-center space-x-1 px-2 py-1 rounded-sm text-xs
                  ${showParallel
                    ? 'bg-electric-aqua-500/20 text-electric-aqua-400'
                    : 'bg-cyber-dark-800/50 text-white/50'}
                `}
              >
                <Atom size={12} />
                <span>Parallel View</span>
              </button>
            </div>

            <div className="space-y-6">
              {currentState?.timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-xs font-code text-electric-aqua-400">
                      {event.date}
                    </div>
                    <div className="flex-1 border-l border-electric-aqua-500/30 pl-4">
                      <div className="text-white/80 text-sm">{event.event}</div>
                      {showParallel && event.parallel && (
                        <div className="mt-2 text-xs text-glitch-purple-400 italic">
                          {event.parallel}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </HolographicCard>
        </div>
      </div>

      {/* Contact Section */}
      <HolographicCard title="Contact Me" glowColor="purple">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-4 text-white/80 text-sm">
            <p><Mail size={14} className="inline mr-2 text-glitch-purple-400" />adityapandey@gmail.com</p>
            <p><Phone size={14} className="inline mr-2 text-glitch-purple-400" />+91-9876543210</p>
            <p><Linkedin size={14} className="inline mr-2 text-glitch-purple-400" /><a href="https://linkedin.com/in/adityapandey" target="_blank" rel="noreferrer" className="hover:underline text-white">LinkedIn</a></p>
            <p><Github size={14} className="inline mr-2 text-glitch-purple-400" /><a href="https://github.com/adityapandey" target="_blank" rel="noreferrer" className="hover:underline text-white">GitHub</a></p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-sm bg-cyber-dark-800 text-white/80 border border-glitch-purple-500/20 focus:outline-none focus:ring-1 focus:ring-glitch-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-sm bg-cyber-dark-800 text-white/80 border border-glitch-purple-500/20 focus:outline-none focus:ring-1 focus:ring-glitch-purple-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 rounded-sm bg-cyber-dark-800 text-white/80 border border-glitch-purple-500/20 focus:outline-none focus:ring-1 focus:ring-glitch-purple-400"
            />
            <button
              type="submit"
              className="bg-glitch-purple-500/20 hover:bg-glitch-purple-500/40 text-white py-2 px-4 rounded-sm border border-glitch-purple-500/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </HolographicCard>
    </motion.div>
  );
};

export default QuantumSelf;
