import { create } from 'zustand';
import { Node, Project, Skill, Memory, DNANode, QuantumState } from '../types';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { memoriesData } from '../data/memories';
import { nodesData } from '../data/nodes';
import { dnaNodesData } from '../data/dna';
import { quantumStatesData } from '../data/quantum';

type AppState = {
  currentSection: 'landing' | 'mind-map' | 'projects' | 'skills' | 'timeline' | 'blog' | 'ai-twin' | 'dna' | 'quantum';
  timelineYear: number;
  dissectMode: boolean;
  debugMode: boolean;
  activeNode: string | null;
  aiConversation: { role: 'user' | 'assistant'; content: string }[];
  nodes: Node[];
  projects: Project[];
  skills: Skill[];
  memories: Memory[];
  dnaNodes: DNANode[];
  quantumStates: QuantumState[];
  setCurrentSection: (section: AppState['currentSection']) => void;
  setTimelineYear: (year: number) => void;
  toggleDissectMode: () => void;
  toggleDebugMode: () => void;
  setActiveNode: (nodeId: string | null) => void;
  addAiMessage: (message: string, role: 'user' | 'assistant') => void;
};

export const useAppStore = create<AppState>((set) => ({
  currentSection: 'landing',
  timelineYear: 2025,
  dissectMode: false,
  debugMode: false,
  activeNode: null,
  aiConversation: [],
  nodes: nodesData,
  projects: projectsData,
  skills: skillsData,
  memories: memoriesData,
  dnaNodes: dnaNodesData,
  quantumStates: quantumStatesData,
  setCurrentSection: (section) => set({ currentSection: section }),
  setTimelineYear: (year) => set({ timelineYear: year }),
  toggleDissectMode: () => set((state) => ({ dissectMode: !state.dissectMode })),
  toggleDebugMode: () => set((state) => ({ debugMode: !state.debugMode })),
  setActiveNode: (nodeId) => set({ activeNode: nodeId }),
  addAiMessage: (message, role) => 
    set((state) => ({ 
      aiConversation: [...state.aiConversation, { role, content: message }] 
    })),
}));