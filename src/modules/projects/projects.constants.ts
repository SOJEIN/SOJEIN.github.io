import { Project } from './projects.types';

export const CATEGORY_COLORS: Record<Project['category'], { bg: string; text: string; bar: string }> = {
  fullstack: { bg: 'rgba(6, 182, 212, 0.1)', text: '#06b6d4', bar: '#06b6d4' },
  frontend: { bg: 'rgba(99, 102, 241, 0.1)', text: 'var(--accent)', bar: '#6366f1' },
  backend: { bg: 'rgba(139, 92, 246, 0.1)', text: '#8b5cf6', bar: '#8b5cf6' },
  mobile: { bg: 'rgba(34, 197, 94, 0.1)', text: '#22c55e', bar: '#22c55e' },
};

export const PROJECTS: Project[] = [
  {
    id: 'billing-system',
    stack: ['Laravel', 'React', 'TypeScript', 'Docker', 'MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/billing-system',
    featured: true,
  },
  {
    id: 'sass-surveys',
    stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/sass-surveys',
    featured: true,
  },
  {
    id: 'music-app',
    stack: ['Electron', 'React', 'Firebase', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/SOJEIN/MusicApp',
    demoUrl: 'https://github.com/SOJEIN/MusicApp/releases',
    featured: true,
  },
  {
    id: 'task-management',
    stack: ['React', '.NET Core', 'JWT', 'SQL Server', 'TypeScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SOJEIN/TaskManagementSystem',
    featured: false,
  },
  {
    id: 'orbit',
    stack: ['React Native', 'TypeScript', 'Firebase', 'Zustand', 'RTK Query'],
    category: 'mobile',
    githubUrl: 'https://github.com/SOJEIN/Orbit',
    apkUrl: '/apk/Orbit-1.0.beta.apk',
    featured: false,
  },
  {
    id: 'movies-now',
    stack: ['React Native', 'Expo', 'TMDb API', 'Axios', 'React Navigation'],
    category: 'mobile',
    githubUrl: 'https://github.com/SOJEIN/Movies_now',
    featured: false,
  },
  {
    id: 'fotostory',
    stack: ['React', 'Vite', 'Firebase', 'Zustand', 'Material-UI'],
    category: 'frontend',
    githubUrl: 'https://github.com/SOJEIN/fotostory',
    demoUrl: 'https://sojein.github.io/fotostory',
    featured: false,
  },
];
