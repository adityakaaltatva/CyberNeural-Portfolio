import { DNANode } from '../types';

export const dnaNodesData: DNANode[] = [
  {
    id: 'dna-speaking',
    name: 'Public Speaking',
    category: 'life',
    description: 'Sharing knowledge and inspiring others through tech talks and workshops',
    achievements: [
      'TEDx Speaker: "The Future of Human-AI Collaboration"',
      'Regular conference speaker on React and AI topics',
      'Workshop leader at local developer meetups'
    ],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    stats: {
      talks: 25,
      workshops: 12,
      attendees: 5000
    }
  },
  {
    id: 'dna-running',
    name: 'Distance Running',
    category: 'life',
    description: 'Finding clarity and discipline through long-distance running',
    achievements: [
      'Completed 3 marathons',
      'Daily 5k runner',
      'Running club mentor'
    ],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    stats: {
      marathons: 3,
      totalKm: 5000,
      bestTime: 205
    }
  },
  {
    id: 'dna-philosophy',
    name: 'Philosophy',
    category: 'life',
    description: 'Exploring the intersection of technology and human consciousness',
    achievements: [
      'Published essays on tech ethics',
      'Book club founder',
      'Philosophy podcast guest'
    ],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    quote: "Technology should amplify human potential, not replace it."
  },
  {
    id: 'dna-coding',
    name: 'Software Development',
    category: 'tech',
    description: 'Building digital experiences that merge art and technology',
    achievements: [
      'Open source contributor',
      'Tech blog author',
      'Hackathon mentor'
    ],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    stats: {
      repositories: 50,
      contributions: 1200,
      stars: 500
    }
  },
  {
    id: 'dna-ai',
    name: 'AI Research',
    category: 'tech',
    description: 'Exploring the frontiers of machine learning and neural networks',
    achievements: [
      'Published ML papers',
      'Created AI art installations',
      'Built neural network visualizations'
    ],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    stats: {
      papers: 3,
      projects: 15,
      accuracy: 95
    }
  }
];