import { FiCode, FiLayers, FiServer, FiTool } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface Skill {
  icon: IconType;
  titleKey: string;
  items: string[];
}

export const SKILLS: Skill[] = [
  {
    icon: FiCode,
    titleKey: 'about.skills.frontend.title',
    items: ['React', 'TypeScript', 'Next.js', 'Styled-Components', 'Framer Motion', 'Vite'],
  },
  {
    icon: FiServer,
    titleKey: 'about.skills.backend.title',
    items: ['Node.js', 'NestJS', 'Laravel', '.NET Core', 'REST APIs', 'JWT'],
  },
  {
    icon: FiLayers,
    titleKey: 'about.skills.databases.title',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Firebase', 'MongoDB'],
  },
  {
    icon: FiTool,
    titleKey: 'about.skills.devops.title',
    items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Agile / Scrum'],
  },
];
