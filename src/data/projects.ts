import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    name: 'COGNITOR-X',
    description: 'AI-driven defense meshnet stack and cognitive warfare OS for autonomous military ops.',
    thumbnail: 'https://images.pexels.com/photos/299772/pexels-photo-299772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'CesiumJS', 'Zustand', 'Express', 'WebSocket', 'Redis', 'YOLOv8', 'LangChain', 'LLaMA3', 'Solidity', 'IPFS', 'TensorRT'],
    layers: {
      frontend: 'React + CesiumJS for real-time 3D battle visualization',
      backend: 'Express (TypeScript), WebSocket, Redis, LangGraph for mission logic',
      database: 'In-memory telemetry + battle logs with Redis',
      deployment: 'Docker containers across edge nodes with meshnet infra',
    },
    link: 'https://github.com/adityakaaltatva/COGNITOR-X-Prime-Edition',
    repo: 'https://github.com/adityakaaltatva/COGNITOR-X-Prime-Edition',
    year: 2024,
  },
  {
    id: 'project-2',
    name: 'SentinelVault',
    description: 'AI-secured decentralized data exchange using zk-SNARKs and IPFS.',
    thumbnail: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Solidity', 'zk-SNARKs', 'IPFS', 'LangChain', 'Docker', 'Terraform', 'AWS', 'gRPC'],
    layers: {
      frontend: 'React frontend with AI-tagging previews and form validation',
      backend: 'Express, gRPC microservices for AI-agent communication',
      database: 'MongoDB with encrypted file metadata',
      deployment: 'Terraform + Docker on AWS (EKS, Lambda, S3), monitored via Prometheus & Grafana',
    },
    link: 'https://sentinel-vault.vercel.app/',
    repo: 'https://github.com/adityakaaltatva/SentinelVault',
    year: 2024,
  },
  {
    id: 'project-3',
    name: 'GIST',
    description: 'Production-level deployment CLI for frontend/backend using AWS S3 and custom build pipelines.',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Java', 'MongoDB', 'AWS S3', 'CLI', 'Docker'],
    layers: {
      frontend: 'CLI-based command interface for developers',
      backend: 'Java backend for project parsing and deployment tasks',
      database: 'MongoDB for project metadata, keys, and deployment history',
      deployment: 'Uses AWS S3 and custom pipelines; global CDN planned with Redis/SQS',
    },
    link: 'https://adityaportfolio.dev', // Placeholder until GIST is hosted
    repo: 'https://github.com/adityakaaltatva', // Add GIST repo URL when available
    year: 2024,
  },
  {
    id: 'project-4',
    name: 'PeerChain',
    description: 'P2P file-sharing system using Web3, IPFS, and decentralization logic.',
    thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'Web3', 'IPFS', 'Socket.IO', 'React'],
    layers: {
      frontend: 'React dark-themed UI for peer discovery and file selection',
      backend: 'Web3 logic and IPFS node control, smart contract-based access',
      database: 'Indexed metadata and peer list stored on-chain and in browser cache',
      deployment: 'Runs in-browser with MetaMask and optional IPFS gateway fallback',
    },
    link: 'https://adityaportfolio.dev', 
    repo: 'https://github.com/adityakaaltatva', 
    year: 2024,
  }
];
