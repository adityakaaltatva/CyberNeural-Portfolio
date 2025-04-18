import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAppStore } from '../../store';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';

interface ParticleProps {
  position: [number, number, number];
  speed?: number;
  color?: string;
  size?: number;
}

const Particle: React.FC<ParticleProps> = ({ 
  position, 
  speed = 0.01, 
  color = '#00a8ff',
  size = 0.05
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += speed;
      mesh.current.rotation.y += speed * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const ParticleField: React.FC = () => {
  const particles = [];
  const colors = ['#00a8ff', '#bf00ff', '#00ffff'];
  
  for (let i = 0; i < 100; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    const size = Math.random() * 0.05 + 0.02;
    const speed = Math.random() * 0.01 + 0.005;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particles.push(
      <Particle 
        key={i} 
        position={[x, y, z]} 
        size={size} 
        speed={speed}
        color={color}
      />
    );
  }
  
  return <>{particles}</>;
};

const NeuralConnection: React.FC = () => {
  const { currentSection } = useAppStore();
  
  // Different background based on section
  let backgroundColor = '#0a0e17';
  if (currentSection === 'projects') {
    backgroundColor = '#0b0e1a';
  } else if (currentSection === 'skills') {
    backgroundColor = '#0e0a17';
  } else if (currentSection === 'timeline') {
    backgroundColor = '#0a1212';
  }
  
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <ParticleField />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.05} />
        </EffectComposer>
      </Canvas>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark-900/50 to-cyber-dark-900/80" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border border-neural-blue-500/10" 
             style={{ 
               backgroundImage: `linear-gradient(to right, rgba(0, 168, 255, 0.05) 1px, transparent 1px), 
                                linear-gradient(to bottom, rgba(0, 168, 255, 0.05) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>
    </div>
  );
};

export default NeuralConnection;