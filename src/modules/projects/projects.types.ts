export interface Project {
  id: string;
  stack: string[];
  category: 'fullstack' | 'frontend' | 'backend';
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}
