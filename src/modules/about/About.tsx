import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid, SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { PERSONAL } from '../home/home.constants';
import { SKILLS } from './about.constants';

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
  margin-bottom: 2rem;
`;

const BioMainCard = styled(BentoCard)`
  grid-column: span 7;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const BioText = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-secondary);
  white-space: pre-line;
`;

const SkillCard = styled(BentoCard)`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SkillIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  flex-shrink: 0;
`;

const SkillTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SkillPill = styled.li`
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.775rem;
  font-weight: 500;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`;

const StatCard = styled(BentoCard)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.25rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const StatNum = styled.span`
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatDesc = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.3;
`;

const FunCard = styled(BentoCard)`
  grid-column: span 8;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const FunTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const FunText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

// ============================================
// COMPONENT
// ============================================

export const About: React.FC = () => {
  const { t } = useTranslation();

  const STATS = [
    { num: `${PERSONAL.experience}+`, desc: t('about.stats.experienceDesc') },
    { num: PERSONAL.projectCount, desc: t('about.stats.projectsDesc') },
  ];

  return (
    <Section id="about">
      <SectionHeader>
        <SectionTag>{t('about.tag')}</SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {t('about.title')}
        </SectionTitle>
      </SectionHeader>

      <BentoGrid>
        {/* Bio */}
        <BioMainCard colSpan={7} variant="accent">
          <BioText>{t('about.bio')}</BioText>
        </BioMainCard>

        {/* Stats */}
        {STATS.map((s) => (
          <StatCard key={s.num} colSpan={2}>
            <StatNum>{s.num}</StatNum>
            <StatDesc>{s.desc}</StatDesc>
          </StatCard>
        ))}

        {/* Skill cards */}
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.titleKey} colSpan={6}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SkillCardHeader>
                <SkillIcon>
                  <skill.icon />
                </SkillIcon>
                <SkillTitle>{t(skill.titleKey)}</SkillTitle>
              </SkillCardHeader>
            </motion.div>
            <SkillList>
              {skill.items.map((item) => (
                <SkillPill key={item}>{item}</SkillPill>
              ))}
            </SkillList>
          </SkillCard>
        ))}

        {/* Fun fact */}
        <FunCard colSpan={8}>
          <FunTitle>{t('about.funFact.title')}</FunTitle>
          <FunText>{t('about.funFact.text')}</FunText>
        </FunCard>
      </BentoGrid>
    </Section>
  );
};
