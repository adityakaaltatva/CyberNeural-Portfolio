export type Node = {
  id: string;
  type: 'project' | 'skill' | 'memory' | 'blog' | 'dna' | 'quantum';
  name: string;
  description: string;
  position: [number, number, number];
  connections: string[];
  year?: number;
  details?: Record<string, unknown>;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  layers: {
    frontend?: string;
    backend?: string;
    database?: string;
    deployment?: string;
  };
  link?: string;
  repo?: string;
  year: number;
};

export type Skill = {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tool' | 'soft'| 'blockchain' | 'database'| 'ai'|'ml'| 'devops'|'cloud';
  proficiency: number; // 0-100
  yearsExperience: number;
  projects: string[];
  description: string;
};

export type Memory = {
  id: string;
  title: string;
  description: string;
  date: string;
  year: number;
  type: 'achievement' | 'milestone' | 'learning';
  image?: string;
};

export type DNANode = {
  id: string;
  name: string;
  category: 'tech' | 'life';
  description: string;
  achievements: string[];
  image?: string;
  stats?: Record<string, number>;
  quote?: string;
};

export type QuantumState = {
  id: string;
  title: string;
  description: string;
  timeline: {
    date: string;
    event: string;
    parallel?: string;
  }[];
  skills: string[];
  passions: string[];
  image?: string;
};