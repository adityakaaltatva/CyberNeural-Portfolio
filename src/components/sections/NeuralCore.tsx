import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldAlert, Terminal } from 'lucide-react';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import CyberButton from '../UI/CyberButton';

const NeuralCore: React.FC = () => {
  const { setCurrentSection } = useAppStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.title = 'CyberNeural Developer OS';
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-gradient-radial from-electric-aqua-500/5 via-black to-black pointer-events-none">
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-spin-slow">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,255,255,0.1)_1%,transparent_40%)] bg-repeat bg-size-[100px_100px]" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          className="w-96 h-96 rounded-full border border-glitch-purple-500"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-4 text-center" variants={itemVariants}>
          <h3 className="text-sm md:text-base font-bold tracking-wide text-white/70">
            ADITYA PANDEY
          </h3>
        </motion.div>

        {/* Neural Brain Icon */}
        <motion.div className="relative w-32 h-32 mb-8" variants={itemVariants}>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-28 h-28 rounded-full border-4 border-t-neural-blue-500 border-r-glitch-purple-500 border-b-electric-aqua-500 border-l-transparent"></div>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-t-neural-blue-300 border-r-transparent border-b-glitch-purple-300 border-l-transparent opacity-70"></div>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Brain size={40} className="text-electric-aqua-500" />
          </motion.div>
        </motion.div>

        <motion.div className="text-center max-w-xl px-4" variants={itemVariants}>
          <NeuralText
            text="This isn't a portfolio."
            as="h1"
            className="text-3xl md:text-4xl font-bold mb-2"
            glow
          />
          <NeuralText
            text="It's a Defense Grid."
            as="h2"
            className="text-2xl md:text-3xl mb-6 text-glitch-purple-500"
            glitch
            glow
          />
          <p className="text-white/70 mb-8 leading-relaxed">
            Welcome to my mind, structured like a cyber-defense neural OS. Each skill, project, and idea is
            a node in the network — scanned, shielded, and protected.
          </p>

          {/* Button Group */}
          <div className="flex flex-wrap gap-4 justify-center">
            <CyberButton onClick={() => setCurrentSection('mind-map')} size="lg" color="blue">
              <ShieldAlert className="mr-2" size={18} />
              PORTFOLIO OS
            </CyberButton>

            <CyberButton
              onClick={() => window.open('https://terminal-portfolio-roan.vercel.app/', '_blank')}
              size="lg"
              color="purple"
            >
              <Terminal className="mr-2" size={18} />
              PORTFOLIO TERMINAL
            </CyberButton>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-white/50 text-xs font-code">
            CyberNeural OS v2.5.0 
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NeuralCore;
