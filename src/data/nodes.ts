import { Node } from '../types';

export const nodesData: Node[] = [
  {
    id: 'node-projects',
    type: 'project',
    name: 'Projects OS',
    description: 'Interactive holographic projects gallery',
    position: [0, 0, 10],
    connections: ['node-skills', 'node-timeline'],
  },
  {
    id: 'node-skills',
    type: 'skill',
    name: 'Skills Helix',
    description: 'Dynamic DNA visualization of technical and soft skills',
    position: [10, 0, 0],
    connections: ['node-projects', 'node-blog'],
  },
  {
    id: 'node-timeline',
    type: 'memory',
    name: 'Memory Corridor',
    description: 'Time-travel through career milestones and achievements',
    position: [-10, 0, 0],
    connections: ['node-projects', 'node-blog'],
  },
  {
    id: 'node-blog',
    type: 'blog',
    name: 'Thought Garden',
    description: 'Growing collection of ideas, articles, and insights',
    position: [0, 0, -10],
    connections: ['node-skills', 'node-timeline'],
  },
  {
    id: 'node-quantum',
    type: 'quantum',
    name: 'Quantum portfilo',
    description: 'Quantum state of my portfolio',
    position: [0, 0, -10],
    connections: ['node-skills', 'node-timeline'],
  }
];