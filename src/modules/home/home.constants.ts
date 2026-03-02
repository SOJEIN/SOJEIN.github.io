import { ActionButton, Project, TechIcon } from './home.types';

// ============================================
// DESIGN TOKENS
// ============================================

export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

// ============================================
// PERSONAL INFO
// ============================================

export const PERSONAL = {
  name: 'Jeisson Ochoa',
  role: 'Full Stack Developer',
  roleEs: 'Desarrollador Full Stack',
  greeting: 'Hi, I\'m',
  location: 'Bogotá, Colombia',
  experience: '6',
  projectCount: '25+',
  email: 'YOUR_EMAIL',
  linkedinUrl: 'YOUR_LINKEDIN_URL',
  githubUrl: 'https://github.com/SOJEIN',
  bio: `Full Stack Developer with 6+ years of experience building scalable web applications.
    I specialize in React, TypeScript, and modern backend technologies.
    Passionate about clean code, great UX, and delivering real business value.`,
  avatar: 'https://avatars.githubusercontent.com/SOJEIN?v=4',
} as const;

// ============================================
// TECH STACK
// ============================================

export const TECH_STACK: TechIcon[] = [
  { name: 'React', icon: '⚛', color: '#61dafb' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'Node.js', icon: '⬡', color: '#339933' },
  { name: 'NestJS', icon: 'N', color: '#e0234e' },
  { name: '.NET Core', icon: '⬡', color: '#512bd4' },
  { name: 'Laravel', icon: 'L', color: '#ff2d20' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Firebase', icon: '🔥', color: '#ffca28' },
  { name: 'Electron', icon: '⚡', color: '#47848f' },
];

// ============================================
// REAL PROJECTS
// ============================================

export const PROJECTS: Project[] = [
  {
    id: 'billing-system',
    title: 'Billing System',
    description:
      'Full-stack billing platform built with Laravel + React + TypeScript, containerized with Docker. Handles invoicing, client management, and real-time reporting.',
    stack: ['Laravel', 'React', 'TypeScript', 'Docker', 'MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/billing-system',
    featured: true,
  },
  {
    id: 'sass-surveys',
    title: 'SaaS Surveys',
    description:
      'Survey platform as a service. React frontend consuming a NestJS REST API with TypeScript. Multi-tenant architecture with analytics dashboard.',
    stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/sass-surveys',
    featured: true,
  },
  {
    id: 'music-app',
    title: 'MusicApp',
    description:
      'Cross-platform desktop music player built with Electron + React + Firebase. Real-time sync, playlist management, and offline capabilities.',
    stack: ['Electron', 'React', 'Firebase', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/SOJEIN/MusicApp',
    demoUrl: 'https://github.com/SOJEIN/MusicApp/releases',
    featured: true,
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description:
      'Enterprise task manager with React frontend and .NET Core API. JWT authentication, role-based access control, and real-time notifications.',
    stack: ['React', '.NET Core', 'JWT', 'SQL Server', 'TypeScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/TaskManagementSystem',
    featured: false,
  },
];

// ============================================
// ACTION BUTTONS
// ============================================

export const ACTION_BUTTONS: ActionButton[] = [
  {
    label: 'View Projects',
    href: '#projects',
    variant: 'primary',
  },
  {
    label: 'Contact me',
    href: '#contact',
    variant: 'secondary',
  },
];
