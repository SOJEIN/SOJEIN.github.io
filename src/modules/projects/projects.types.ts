export interface Project {
  id: string;
  stack: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  githubUrl: string;
  demoUrl?: string;
  apkUrl?: string;
  featured?: boolean;
}
