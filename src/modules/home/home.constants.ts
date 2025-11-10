import { ActionButton, TechIcon } from './home.types';

// ============================================
// CONSTANTES DE DISEÑO Y CONTENIDO
// ============================================

export const COLORS = {
  primary: '#6366f1', // Indigo
  secondary: '#8b5cf6', // Violet
  accent: '#06b6d4', // Cyan
  dark: '#0f172a', // Slate 900
  darker: '#020617', // Slate 950
  light: '#f1f5f9', // Slate 100
  text: '#e2e8f0', // Slate 200
  textMuted: '#94a3b8', // Slate 400
  cardBg: 'rgba(15, 23, 42, 0.6)', // Transparente oscuro
} as const;

export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

export const FONTS = {
  primary: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'Fira Code', 'Consolas', monospace",
} as const;

// ============================================
// CONTENIDO DEL HOME
// ============================================

export const HERO_CONTENT = {
  greeting: '👋 Hola, soy',
  name: 'Jeisson Ochoa',
  role: 'Desarrollador Frontend especializado en React',
  description:
    'Creo experiencias web modernas, interactivas y accesibles utilizando las últimas tecnologías del ecosistema JavaScript.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/YOUR_GITHUB_ID?v=4', // GitHub avatar
} as const;

export const ABOUT_CONTENT = {
  title: 'Sobre mí',
  text: `Soy un desarrollador frontend apasionado por crear interfaces intuitivas y experiencias 
    de usuario excepcionales. Me especializo en React, TypeScript y el diseño de sistemas 
    escalables. Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para 
    entregar soluciones de alta calidad.`,
} as const;

export const ACTION_BUTTONS: ActionButton[] = [
  {
    label: 'Ver Proyectos',
    to: '/projects',
    variant: 'primary',
  },
  {
    label: 'Contáctame',
    to: '/contact',
    variant: 'secondary',
  },
];

export const TECH_STACK: TechIcon[] = [
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'JavaScript', icon: '💛', color: '#f7df1e' },
  { name: 'CSS3', icon: '🎨', color: '#1572b6' },
  { name: 'Git', icon: '🔀', color: '#f05032' },
  { name: 'Vite', icon: '⚡', color: '#646cff' },
  { name: 'Styled', icon: '💅', color: '#db7093' },
];
