import { motion } from 'framer-motion';
import React from 'react';
import { FiCode, FiLayers, FiServer, FiTool } from 'react-icons/fi';
import styled from 'styled-components';

import { BentoCard } from '../../shared/components/BentoCard';
import { BREAKPOINTS, PERSONAL } from '../home/home.constants';

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

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
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
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const SkillCardSmall = styled(BentoCard)`
  grid-column: span 4;
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
  grid-column: span 5;
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
  grid-column: span 7;

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
// DATA
// ============================================

const SKILLS = [
  {
    icon: <FiCode />,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Styled-Components', 'Framer Motion', 'Vite'],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Laravel', '.NET Core', 'REST APIs', 'JWT'],
  },
  {
    icon: <FiLayers />,
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Firebase', 'MongoDB'],
  },
  {
    icon: <FiTool />,
    title: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Agile / Scrum'],
  },
];

const STATS = [
  { num: '6+', desc: 'Years of experience' },
  { num: '25+', desc: 'Projects delivered' },
];

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
// COMPONENT
// ============================================

export const About: React.FC = () => {
  return (
    <Section id="about">
      <SectionHeader>
        <SectionTag>About me</SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Crafting software that matters
        </SectionTitle>
      </SectionHeader>

      <BentoGrid>
        {/* Bio */}
        <BioMainCard colSpan={7} accent>
          <BioText>{PERSONAL.bio}</BioText>
        </BioMainCard>

        {/* Stats */}
        {STATS.map((s, i) => (
          <StatCard key={s.num} colSpan={i === 0 ? 3 : 2}>
            <StatNum>{s.num}</StatNum>
            <StatDesc>{s.desc}</StatDesc>
          </StatCard>
        ))}

        {/* Skill cards */}
        {SKILLS.map((skill, i) => {
          const Card = i < 2 ? SkillCard : SkillCardSmall;
          return (
            <Card key={skill.title} colSpan={i < 2 ? 5 : 4}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SkillCardHeader>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillCardHeader>
              </motion.div>
              <SkillList>
                {skill.items.map((item) => (
                  <SkillPill key={item}>{item}</SkillPill>
                ))}
              </SkillList>
            </Card>
          );
        })}

        {/* Fun fact */}
        <FunCard colSpan={7}>
          <FunTitle>Fun fact</FunTitle>
          <FunText>
            Based in Bogotá, Colombia — one of Latin America&apos;s fastest-growing tech hubs.
            I love combining solid engineering fundamentals with modern design sensibilities
            to build products that users actually enjoy.
          </FunText>
        </FunCard>
      </BentoGrid>
    </Section>
  );
};
