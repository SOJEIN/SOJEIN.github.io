import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import styled from 'styled-components';

import { BentoCard } from '../../shared/components/BentoCard';
import { ACTION_BUTTONS, BREAKPOINTS, PERSONAL, TECH_STACK } from './home.constants';

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 6rem 1.5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 5rem 1rem 3rem;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

/* ---- Bio Card ---- */
const BioCard = styled(BentoCard)`
  grid-column: span 7;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
    min-height: auto;
  }
`;

const Greeting = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent) 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.15;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;

  svg {
    flex-shrink: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const CTAButton = styled.a<{ $variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 0.625rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); }
  `
      : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--card-border);
    &:hover { border-color: var(--card-hover-border); background: var(--card-bg); transform: translateY(-2px); }
  `}
`;

/* ---- Small stat/tech cards ---- */
const SmallCard = styled(BentoCard)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  gap: 0.5rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const TechLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
`;

const TechEmoji = styled.span`
  font-size: 1.6rem;
  line-height: 1;
`;

const StatNumber = styled.span`
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

/* ---- Location card ---- */
const LocationCard = styled(BentoCard)`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const LocationLabel = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const LocationValue = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

/* ---- Social links card ---- */
const SocialCard = styled(BentoCard)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--accent);
    transform: scale(1.1);
  }
`;

/* ---- Tech stack row ---- */
const TechRowCard = styled(BentoCard)`
  grid-column: span 12;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const TechChip = styled(motion.span)<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ $color }) => $color}33;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}11;
  white-space: nowrap;
`;

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: 'easeOut' },
  }),
};

// ============================================
// COMPONENT
// ============================================

export const HomePage: React.FC = () => {
  return (
    <Section id="hero">
      <BentoGrid>
        {/* Bio Card — 7 cols */}
        <BioCard colSpan={7} accent>
          <div>
            <Greeting>{PERSONAL.greeting}</Greeting>
            <Name
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {PERSONAL.name}
            </Name>
            <Role>{PERSONAL.role}</Role>
            <MetaRow>
              <FiMapPin size={14} />
              {PERSONAL.location}
            </MetaRow>
          </div>
          <ButtonGroup>
            {ACTION_BUTTONS.map((btn) => (
              <CTAButton key={btn.label} href={btn.href} $variant={btn.variant}>
                {btn.label}
                <FiArrowUpRight size={14} />
              </CTAButton>
            ))}
          </ButtonGroup>
        </BioCard>

        {/* React chip */}
        <SmallCard colSpan={2}>
          <TechEmoji>⚛</TechEmoji>
          <TechLabel>React</TechLabel>
        </SmallCard>

        {/* TypeScript chip */}
        <SmallCard colSpan={3}>
          <TechEmoji style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3178c6' }}>TS</TechEmoji>
          <TechLabel>TypeScript</TechLabel>
        </SmallCard>

        {/* Node chip */}
        <SmallCard colSpan={2}>
          <TechEmoji>⬡</TechEmoji>
          <TechLabel>Node.js</TechLabel>
        </SmallCard>

        {/* Location */}
        <LocationCard colSpan={3}>
          <LocationLabel>Based in</LocationLabel>
          <LocationValue>📍 {PERSONAL.location}</LocationValue>
        </LocationCard>

        {/* Stats — experience */}
        <SmallCard colSpan={3}>
          <StatNumber>{PERSONAL.experience} yrs</StatNumber>
          <StatLabel>experience</StatLabel>
        </SmallCard>

        {/* Stats — projects */}
        <SmallCard colSpan={3}>
          <StatNumber>{PERSONAL.projectCount}</StatNumber>
          <StatLabel>projects</StatLabel>
        </SmallCard>

        {/* Social links */}
        <SocialCard colSpan={2}>
          <SocialLink href={PERSONAL.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </SocialLink>
          <SocialLink href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </SocialLink>
        </SocialCard>

        {/* Full tech stack row */}
        <TechRowCard colSpan={12}>
          {TECH_STACK.map((tech, i) => (
            <TechChip
              key={tech.name}
              $color={tech.color}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.07 }}
            >
              {tech.name}
            </TechChip>
          ))}
        </TechRowCard>
      </BentoGrid>
    </Section>
  );
};
