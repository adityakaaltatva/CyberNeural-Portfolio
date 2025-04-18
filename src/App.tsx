import React from 'react';
import { useAppStore } from './store';
import CyberCursor from './components/UI/CyberCursor';
import Header from './components/Layout/Header';
import BackgroundEffects from './components/Layout/BackgroundEffects';
import NeuralCore from './components/sections/NeuralCore';
import MindMap from './components/sections/MindMap';
import ProjectsNode from './components/sections/ProjectsNode';
import SkillsNode from './components/sections/SkillsNode';
import TimelineNode from './components/sections/TimelineNode';
import AiTwin from './components/sections/AiTwin';
import DNAStrand from './components/sections/DNAStrand';
import QuantumSelf from './components/sections/QuantumSelf';

function App() {
  const { currentSection } = useAppStore();
  
  return (
    <div className="font-cyber text-white antialiased">
      <CyberCursor />
      <BackgroundEffects />
      
      {currentSection !== 'landing' && <Header />}
      
      {currentSection === 'landing' && <NeuralCore />}
      {currentSection === 'mind-map' && <MindMap />}
      {currentSection === 'projects' && <ProjectsNode />}
      {currentSection === 'skills' && <SkillsNode />}
      {currentSection === 'timeline' && <TimelineNode />}
      {currentSection === 'dna' && <DNAStrand />}
      {currentSection === 'quantum' && <QuantumSelf />}
      {currentSection === 'ai-twin' && <AiTwin />}
    </div>
  );
}

export default App;