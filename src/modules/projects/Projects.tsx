import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

// ============================================
// STYLED COMPONENTS
// ============================================

const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
  color: #e2e8f0;
  font-family:
    'Poppins',
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  padding: 6rem 2rem 4rem;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.7rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  background: ${(props) =>
    props.$active ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${(props) => (props.$active ? 'white' : '#cbd5e1')};
  border: 1px solid ${(props) => (props.$active ? 'transparent' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #6366f1;
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
  }
`;

const ProjectImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 220px;
  background: ${(props) =>
    props.$imageUrl ? `url(${props.$imageUrl})` : 'linear-gradient(135deg, #6366f1, #8b5cf6)'};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  background: rgba(99, 102, 241, 0.2);
  color: #a5b4fc;
  border-radius: 6px;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectLink = styled.a`
  font-size: 0.9rem;
  color: #06b6d4;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: #6366f1;
    transform: translateX(3px);
  }
`;

// ============================================
// ANIMACIONES
// ============================================

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ============================================
// DATOS DE PROYECTOS
// ============================================

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Puntos',
    description:
      'Sistema de gestión de puntos y recompensas. Aplicación para administrar y rastrear puntos de usuarios.',
    image: '',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/Puntos',
    codeLink: 'https://github.com/SOJEIN/Puntos',
  },
  {
    id: 2,
    title: 'Movies Now',
    description:
      'Aplicación de películas que consume APIs para mostrar información actualizada de películas, tráilers y calificaciones.',
    image: '',
    tech: ['React', 'API', 'JavaScript', 'CSS'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/Movies_now',
    codeLink: 'https://github.com/SOJEIN/Movies_now',
  },
  {
    id: 3,
    title: 'Login Animado',
    description:
      'Interfaz de login moderna con animaciones suaves y transiciones elegantes para una mejor experiencia de usuario.',
    image: '',
    tech: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/Login_animado',
    codeLink: 'https://github.com/SOJEIN/Login_animado',
  },
  {
    id: 4,
    title: 'Music App',
    description:
      'Aplicación de música con reproductor interactivo, playlists y controles de reproducción personalizados.',
    image: '',
    tech: ['React', 'JavaScript', 'Web Audio API'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/MusicApp',
    codeLink: 'https://github.com/SOJEIN/MusicApp',
  },
  {
    id: 5,
    title: 'Gestión de Tareas',
    description:
      'Aplicación completa para la gestión de tareas con funcionalidades de creación, edición y organización de proyectos.',
    image: '',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/gestion-tareas',
    codeLink: 'https://github.com/SOJEIN/gestion-tareas',
  },
  {
    id: 6,
    title: 'Sass Surveys',
    description:
      'Sistema de encuestas y formularios dinámicos con validación y análisis de resultados en tiempo real.',
    image: '',
    tech: ['React', 'Sass', 'JavaScript', 'Forms'],
    category: 'frontend',
    demoLink: 'https://sojein.github.io/sass-surveys',
    codeLink: 'https://github.com/SOJEIN/sass-surveys',
  },
];

const categories = ['Todos', 'Frontend', 'Backend', 'Fullstack'];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'Todos') return true;
    return project.category === activeFilter.toLowerCase();
  });

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </PageTitle>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Una selección de proyectos en los que he trabajado
        </Subtitle>

        {/* FILTROS */}
        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              $active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              aria-label={`Filtrar por ${category}`}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        {/* GRID DE PROYECTOS */}
        <ProjectsGrid variants={staggerContainer} initial="hidden" animate="visible" layout>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} variants={fadeInUp} layout whileHover={{ scale: 1.02 }}>
              <ProjectImage
                $imageUrl={project.image}
                role="img"
                aria-label={`Imagen de ${project.title}`}
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectLinks>
                  <ProjectLink
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    💻 Ver Código
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </ProjectsContainer>
  );
};
