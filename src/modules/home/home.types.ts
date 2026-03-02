export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export interface ActionButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: 'fullstack' | 'frontend' | 'backend';
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}
