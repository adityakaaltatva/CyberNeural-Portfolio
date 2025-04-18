import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import NeuralText from '../UI/NeuralText';
import HolographicCard from '../UI/HolographicCard';
import CyberButton from '../UI/CyberButton';
import { MessageCircle, Zap, SendHorizonal, User, Bot } from 'lucide-react';

const AiTwin: React.FC = () => {
  const { aiConversation, addAiMessage } = useAppStore();
  const [userMessage, setUserMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = React.useRef<null | HTMLDivElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    
    // Add user message
    addAiMessage(userMessage, 'user');
    setUserMessage('');
    setIsThinking(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      generateAiResponse(userMessage);
      setIsThinking(false);
    }, 1500);
  };
  
  const generateAiResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    let response = '';
    
    if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you')) {
      response = "I'm your digital twin - an AI reflection trained on your coding style, personality, and experiences. I can answer questions about your projects, skills, and career just as you would. Well, almost as well as you would.";
    } 
    else if (lowerMessage.includes('favorite project') || lowerMessage.includes('best project')) {
      response = "My neural mapping suggests you're particularly proud of NeuroSync - it combined your AI interests with practical application. Though honestly, I think Quantum Portfolio was more technically impressive with those custom WebGL shaders.";
    }
    else if (lowerMessage.includes('skills') || lowerMessage.includes('what can you do')) {
      response = "I'm strongest in React and TypeScript with over 5 years of experience. My full-stack capabilities include Node.js and Next.js. Recently, I've been expanding my machine learning knowledge - though I'm still working on that. Want to know anything specific about these skills?";
    }
    else if (lowerMessage.includes('react') && (lowerMessage.includes('vue') || lowerMessage.includes('angular'))) {
      response = "React vs Vue or Angular? I prefer React for its flexibility and ecosystem, though Vue's simplicity is appealing. Angular is powerful but sometimes feels over-engineered for smaller projects. Each has its place - I choose based on project requirements rather than tribalism. Though I admit, React feels like home now.";
    }
    else if (lowerMessage.includes('learning') || lowerMessage.includes('study')) {
      response = "Currently deepening my knowledge in machine learning and AI - particularly with TensorFlow and natural language processing. I've also been exploring WebAssembly and Rust for high-performance web applications. Learning never stops in this field!";
    }
    else if (lowerMessage.includes('advice') || lowerMessage.includes('tip')) {
      response = "My best advice? Focus on fundamentals before frameworks, write tests before they're required, document while coding (not after), and remember: the cleanest code is often code you didn't write at all. Oh, and take breaks - burnout is real, and I've experienced it.";
    }
    else {
      response = "Interesting question! Let me think about that from my neural mapping of your experiences and knowledge. I might need a bit more context to give you a response that truly matches how you'd answer. Could you elaborate or ask something else about my projects, skills, or career journey?";
    }
    
    addAiMessage(response, 'assistant');
  };
  
  // Scroll to bottom whenever messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiConversation]);
  
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
          text="AI Twin" 
          as="h1" 
          className="text-3xl font-bold mb-4" 
          color="purple"
          glow
        />
        <p className="text-white/70 max-w-2xl mx-auto">
          Communicate with an AI reflection trained on my personality, knowledge, and experiences.
          Ask questions about my projects, skills, or get my perspective on tech topics.
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <HolographicCard
          title="Neural Interface"
          glowColor="purple"
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <MessageCircle size={16} className="text-glitch-purple-500 mr-2" />
              <span className="text-sm text-white/70">AI Twin Connection Status:</span>
            </div>
            <div className="flex items-center">
              <motion.div
                animate={{
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-electric-aqua-500 mr-2"></span>
              </motion.div>
              <span className="text-xs text-electric-aqua-500 font-code">ACTIVE</span>
            </div>
          </div>
          
          <div className="mb-4 h-80 overflow-y-auto border border-glitch-purple-500/20 rounded-sm p-4 bg-cyber-dark-800/50">
            {aiConversation.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <Zap size={30} className="text-glitch-purple-500 mx-auto mb-4" />
                  <p className="text-white/50 text-sm">
                    Start a conversation with your AI Twin
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {aiConversation.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`
                        max-w-[80%] p-3 rounded-md
                        ${message.role === 'user' 
                          ? 'bg-neural-blue-500/30 text-white border border-neural-blue-500/40' 
                          : 'bg-glitch-purple-500/30 text-white border border-glitch-purple-500/40'}
                      `}
                    >
                      <div className="flex items-center mb-1">
                        {message.role === 'user' ? (
                          <>
                            <User size={12} className="text-neural-blue-300 mr-1" />
                            <span className="text-xs text-neural-blue-300 font-code">YOU</span>
                          </>
                        ) : (
                          <>
                            <Bot size={12} className="text-glitch-purple-300 mr-1" />
                            <span className="text-xs text-glitch-purple-300 font-code">AI TWIN</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-md bg-glitch-purple-500/30 text-white border border-glitch-purple-500/40">
                      <div className="flex items-center mb-1">
                        <Bot size={12} className="text-glitch-purple-300 mr-1" />
                        <span className="text-xs text-glitch-purple-300 font-code">AI TWIN</span>
                      </div>
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', delay: 0.4 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ask your AI twin a question..."
                className="flex-1 bg-cyber-dark-800/70 text-white border border-glitch-purple-500/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-glitch-purple-500"
              />
              <CyberButton
                type="submit"
                color="purple"
                disabled={isThinking || !userMessage.trim()}
              >
                <SendHorizonal size={16} />
              </CyberButton>
            </div>
          </form>
        </HolographicCard>
        
        <div className="text-center text-white/50 text-xs font-code">
          <p>NEURAL SYNC: 98.7% COMPLETE • PERSONALITY MATCH: 94.2%</p>
          <p className="mt-1">AI TWIN VERSION 2.5.0 // LAST CALIBRATED: 2025-04-17</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AiTwin;