import { ActionButton, TechIcon } from './home.types';

export { BREAKPOINTS } from '@/shared/constants/breakpoints';

// ============================================
// PERSONAL INFO (non-translatable)
// ============================================

export const PERSONAL = {
  name: 'Jeisson Ochoa',
  location: 'Bogotá, Colombia',
  experience: '6',
  projectCount: '25+',
  email: 'jeisson.ochoa21@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/jeissonochoa',
  githubUrl: 'https://github.com/SOJEIN',
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
// ACTION BUTTONS
// ============================================

export const ACTION_BUTTONS: ActionButton[] = [
  { labelKey: 'hero.cta.viewProjects', href: '#projects', variant: 'primary' },
  { labelKey: 'hero.cta.contact', href: '#contact', variant: 'secondary' },
  { labelKey: 'hero.cta.downloadCV', href: '/CV_Jeisson_Ochoa.pdf', variant: 'secondary', download: true },
];
