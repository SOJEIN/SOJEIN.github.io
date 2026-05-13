import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiGithub, FiStar } from 'react-icons/fi';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid, SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { CATEGORY_COLORS, PROJECTS } from './projects.constants';
import { Project } from './projects.types';

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
  border: 1px solid ${({ $active }) => ($active ? 'var(--accent)' : 'var(--card-border)')};
  background: ${({ $active }) => ($active ? 'var(--accent)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-secondary)')};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--text-primary);
  }
`;

const FeaturedCard = styled(BentoCard)`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

const CardColorBar = styled.div<{ $color: string }>`
  height: 3px;
  width: 100%;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  margin-bottom: 0.25rem;
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const CategoryBadge = styled.span<{ $bg: string; $color: string }>`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
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
  margin-top: auto;
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

  &:hover { color: var(--accent); }
`;

// ============================================
// FILTERS
// ============================================

type Filter = 'all' | Project['category'];

// ============================================
// PROJECT CARD
// ============================================

interface ProjectCardProps {
  project: Project;
  index: number;
  featured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured }) => {
  const { t } = useTranslation();
  const colors = CATEGORY_COLORS[project.category];

  const content = (
    <>
      <CardColorBar $color={colors.bar} />
      <CardTopRow>
        {featured && (
          <FeaturedBadge>
            <FiStar size={10} /> {t('projects.featured')}
          </FeaturedBadge>
        )}
        <CategoryBadge $bg={colors.bg} $color={colors.text}>
          {t(`projects.filters.${project.category}`)}
        </CategoryBadge>
      </CardTopRow>
      <CardTitle>{t(`projects.items.${project.id}.title`)}</CardTitle>
      <CardDesc>{t(`projects.items.${project.id}.description`)}</CardDesc>
      <StackRow>
        {project.stack.map((s) => (
          <StackPill key={s}>{s}</StackPill>
        ))}
      </StackRow>
      <LinksRow>
        <CardLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FiGithub size={14} /> {t('projects.github')}
        </CardLink>
        {project.demoUrl && (
          <CardLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <FiArrowUpRight size={14} /> {t('projects.liveDemo')}
          </CardLink>
        )}
      </LinksRow>
    </>
  );

  const motionProps = {
    custom: index,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true },
    variants: fadeUp,
  };

  return featured ? (
    <FeaturedCard colSpan={7} variant="accent" {...motionProps}>
      {content}
    </FeaturedCard>
  ) : (
    <RegularCard colSpan={5} {...motionProps}>
      {content}
    </RegularCard>
  );
};

// ============================================
// COMPONENT
// ============================================

export const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const FILTERS: { labelKey: string; value: Filter }[] = [
    { labelKey: 'projects.filters.all', value: 'all' },
    { labelKey: 'projects.filters.fullstack', value: 'fullstack' },
    { labelKey: 'projects.filters.frontend', value: 'frontend' },
    { labelKey: 'projects.filters.backend', value: 'backend' },
  ];

  const filtered = PROJECTS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <Section id="projects">
      <SectionHeader>
        <HeaderLeft>
          <SectionTag>{t('projects.tag')}</SectionTag>
          <SectionTitle
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {t('projects.title')}
          </SectionTitle>
        </HeaderLeft>
        <FilterRow>
          {FILTERS.map((f) => (
            <FilterBtn key={f.value} $active={filter === f.value} onClick={() => setFilter(f.value)}>
              {t(f.labelKey)}
            </FilterBtn>
          ))}
        </FilterRow>
      </SectionHeader>

      <BentoGrid>
        {filtered.map((project, i) => (
          <ProjectCard
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
