import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiBook, FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid, SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { EDUCATION } from './education.constants';

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
  margin-bottom: 3rem;
`;

const EduCard = styled(BentoCard)`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const InstitutionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.875rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const InstitutionName = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const StatusBadge = styled.span<{ $current: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  flex-shrink: 0;

  ${({ $current }) =>
    $current
      ? `
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
  `
      : `
    color: #06b6d4;
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.25);
  `}
`;

const Degree = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
`;

const PeriodRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`;

// ============================================
// COMPONENT
// ============================================

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="education">
      <SectionHeader>
        <SectionTag>{t('education.tag')}</SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {t('education.title')}
        </SectionTitle>
      </SectionHeader>

      <BentoGrid>
        {EDUCATION.map((edu, i) => {
          const tags = t(`education.items.${edu.id}.tags`, { returnObjects: true }) as string[];

          return (
            <EduCard
              key={edu.id}
              colSpan={6}
              variant={edu.current ? 'accent' : 'default'}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <CardTop>
                <InstitutionRow>
                  <IconBox>
                    <FiBook />
                  </IconBox>
                  <InstitutionName>{edu.institution}</InstitutionName>
                </InstitutionRow>
                <StatusBadge $current={!!edu.current}>
                  {edu.current ? (
                    <><FiClock size={10} /> {t('education.inProgress')}</>
                  ) : (
                    <><FiCheckCircle size={10} /> {t('education.completed')}</>
                  )}
                </StatusBadge>
              </CardTop>

              <div>
                <Degree>{t(`education.items.${edu.id}.degree`)}</Degree>
              </div>

              <PeriodRow>
                <FiCalendar size={13} />
                {t(`education.items.${edu.id}.period`)}
              </PeriodRow>

              <Description>{t(`education.items.${edu.id}.description`)}</Description>

              <TagRow>
                {Array.isArray(tags) && tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagRow>
            </EduCard>
          );
        })}
      </BentoGrid>
    </Section>
  );
};
