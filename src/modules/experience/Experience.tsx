import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiStar } from 'react-icons/fi';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { EXPERIENCES } from './experience.constants';

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

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 14px;
    bottom: 0;
    width: 1.5px;
    background: linear-gradient(
      to bottom,
      var(--accent) 0%,
      rgba(99, 102, 241, 0.3) 70%,
      transparent 100%
    );

    @media (max-width: ${BREAKPOINTS.tablet}) {
      left: 7px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 1.75rem;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: 1.25rem;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
`;

const Dot = styled.div<{ $current?: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: ${({ $current }) => ($current ? 'var(--accent)' : 'var(--bg-primary)')};
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${({ $current }) =>
    $current &&
    `
    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.15);
  `}
`;

const Card = styled.div`
  flex: 1;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: var(--card-hover-border);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.08);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
`;

const CompanyName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Badge = styled.span<{ $variant: 'lead' | 'current' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;

  ${({ $variant }) =>
    $variant === 'lead'
      ? `
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
  `
      : `
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
  `}
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Role = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
`;

const Period = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
`;

const StackPill = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const AchievementItem = styled.li`
  display: flex;
  gap: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);

  &::before {
    content: '▸';
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 0.75rem;
  }
`;

// ============================================
// COMPONENT
// ============================================

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="experience">
      <SectionHeader>
        <SectionTag>{t('experience.tag')}</SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {t('experience.title')}
        </SectionTitle>
      </SectionHeader>

      <Timeline>
        {EXPERIENCES.map((exp, i) => {
          const achievements = t(`experience.items.${exp.id}.achievements`, {
            returnObjects: true,
          }) as string[];

          return (
            <TimelineItem
              key={exp.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <DotWrapper>
                <Dot $current={exp.current} />
              </DotWrapper>

              <Card>
                <CardTop>
                  <CompanyName>{exp.company}</CompanyName>
                  <BadgeRow>
                    {exp.isLead && (
                      <Badge $variant="lead">
                        <FiStar size={9} />
                        {t('experience.leadBadge')}
                      </Badge>
                    )}
                    {exp.current && (
                      <Badge $variant="current">
                        {t('experience.currentBadge')}
                      </Badge>
                    )}
                  </BadgeRow>
                </CardTop>

                <RoleRow>
                  <Role>{t(`experience.items.${exp.id}.role`)}</Role>
                  <Period>{t(`experience.items.${exp.id}.period`)}</Period>
                </RoleRow>

                <StackRow>
                  {exp.stack.map((tech) => (
                    <StackPill key={tech}>{tech}</StackPill>
                  ))}
                </StackRow>

                <AchievementList>
                  {Array.isArray(achievements) &&
                    achievements.map((achievement, j) => (
                      <AchievementItem key={j}>{achievement}</AchievementItem>
                    ))}
                </AchievementList>
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
};
