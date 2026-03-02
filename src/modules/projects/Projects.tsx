import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiArrowUpRight, FiGithub, FiStar } from 'react-icons/fi';
import styled from 'styled-components';

import { BentoCard } from '../../shared/components/BentoCard';
import { BREAKPOINTS, PROJECTS } from '../home/home.constants';
import { Project } from '../home/home.types';

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderLeft = styled.div``;

const SectionTag = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
`;

const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0.35rem 0.875rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid
    ${({ $active }) => ($active ? 'var(--accent)' : 'var(--card-border)')};
  background: ${({ $active }) =>
    $active ? 'var(--accent)' : 'transparent'};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-secondary)')};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--text-primary);
  }
`;

/* ---- Project card variants ---- */
const FeaturedCard = styled(BentoCard)`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const RegularCard = styled(BentoCard)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeaturedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  background: rgba(99, 102, 241, 0.08);
`;

const CategoryBadge = styled.span<{ $category: string }>`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ $category }) =>
    $category === 'fullstack'
      ? 'rgba(6, 182, 212, 0.1)'
      : $category === 'frontend'
        ? 'rgba(99, 102, 241, 0.1)'
        : 'rgba(139, 92, 246, 0.1)'};
  color: ${({ $category }) =>
    $category === 'fullstack' ? '#06b6d4' : $category === 'frontend' ? 'var(--accent)' : '#8b5cf6'};
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--text-secondary);
  flex: 1;
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const StackPill = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`;

const LinksRow = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--card-border);
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;

// ============================================
// ANIMATION
// ============================================

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

// ============================================
// PROJECT CARD
// ============================================

interface ProjectCardProps {
  project: Project;
  index: number;
  featured: boolean;
}

const ProjectCardContent: React.FC<ProjectCardProps> = ({ project, index, featured }) => {
  const content = (
    <>
      <CardTopRow>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {featured && (
            <FeaturedBadge>
              <FiStar size={10} /> Featured
            </FeaturedBadge>
          )}
          <CategoryBadge $category={project.category}>{project.category}</CategoryBadge>
        </div>
      </CardTopRow>
      <CardTitle>{project.title}</CardTitle>
      <CardDesc>{project.description}</CardDesc>
      <StackRow>
        {project.stack.map((s) => (
          <StackPill key={s}>{s}</StackPill>
        ))}
      </StackRow>
      <LinksRow>
        <CardLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FiGithub size={14} /> GitHub
        </CardLink>
        {project.demoUrl && (
          <CardLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <FiArrowUpRight size={14} /> Live demo
          </CardLink>
        )}
      </LinksRow>
    </>
  );

  return featured ? (
    <FeaturedCard
      colSpan={7}
      accent
      as={motion.div as React.ElementType}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {content}
    </FeaturedCard>
  ) : (
    <RegularCard
      colSpan={5}
      as={motion.div as React.ElementType}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {content}
    </RegularCard>
  );
};

// ============================================
// FILTERS
// ============================================

type Filter = 'all' | 'fullstack' | 'frontend' | 'backend';
const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

// ============================================
// COMPONENT
// ============================================

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = PROJECTS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <Section id="projects">
      <SectionHeader>
        <HeaderLeft>
          <SectionTag>Portfolio</SectionTag>
          <SectionTitle
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Selected projects
          </SectionTitle>
        </HeaderLeft>
        <FilterRow>
          {FILTERS.map((f) => (
            <FilterBtn key={f.value} $active={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
            </FilterBtn>
          ))}
        </FilterRow>
      </SectionHeader>

      <BentoGrid>
        {filtered.map((project, i) => (
          <ProjectCardContent
            key={project.id}
            project={project}
            index={i}
            featured={!!project.featured && i === 0}
          />
        ))}
      </BentoGrid>
    </Section>
  );
};
