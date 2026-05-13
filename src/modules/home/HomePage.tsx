import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid } from '@/shared/components/Section';
import { Typewriter } from '@/shared/components/Typewriter';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { ACTION_BUTTONS, PERSONAL, TECH_STACK } from './home.constants';

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

const BioCard = styled(BentoCard)`
  grid-column: span 7;
  min-height: 280px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
    min-height: auto;
  }
`;

const BioInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`;

const BioText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AvatarWrapper = styled(motion.div)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 2.5px;
  background: linear-gradient(135deg, var(--accent), #8b5cf6, #06b6d4);
  flex-shrink: 0;
  display: grid;
  place-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 70px;
    height: 70px;
  }
`;

const AvatarImg = styled.img`
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  border-radius: 50%;
  object-fit: cover;
  background: var(--bg-primary);
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

  svg { flex-shrink: 0; }
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

const ScrollIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const ScrollLine = styled(motion.div)`
  width: 1.5px;
  background: linear-gradient(to bottom, var(--text-secondary), transparent);
  margin: 0 auto;
`;

const ScrollDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-secondary);
`;

const ScrollLabel = styled.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ScrollInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

// ============================================
// COMPONENT
// ============================================

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <BentoGrid>
        {/* Bio Card */}
        <BioCard colSpan={7} variant="accent">
          <BioInner>
            <BioText>
              <Greeting>{t('hero.greeting')}</Greeting>
              <Name
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {PERSONAL.name}
              </Name>
              <Role>
                <Typewriter words={t('hero.roles', { returnObjects: true }) as string[]} />
              </Role>
              <MetaRow>
                <FiMapPin size={14} />
                {PERSONAL.location}
              </MetaRow>
              <ButtonGroup>
                {ACTION_BUTTONS.map((btn) => (
                  <CTAButton
                    key={btn.href}
                    href={btn.href}
                    $variant={btn.variant}
                    download={btn.download ? true : undefined}
                  >
                    {t(btn.labelKey)}
                    <FiArrowUpRight size={14} />
                  </CTAButton>
                ))}
              </ButtonGroup>
            </BioText>

            <AvatarWrapper
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(99,102,241,0.4)',
                  '0 0 0 10px rgba(99,102,241,0)',
                  '0 0 0 0px rgba(99,102,241,0)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <AvatarImg src={PERSONAL.avatar} alt={PERSONAL.name} loading="lazy" />
            </AvatarWrapper>
          </BioInner>
        </BioCard>

        <SmallCard colSpan={2}>
          <TechEmoji>⚛</TechEmoji>
          <TechLabel>React</TechLabel>
        </SmallCard>

        <SmallCard colSpan={3}>
          <TechEmoji style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3178c6' }}>TS</TechEmoji>
          <TechLabel>TypeScript</TechLabel>
        </SmallCard>

        <SmallCard colSpan={2}>
          <TechEmoji>⬡</TechEmoji>
          <TechLabel>Node.js</TechLabel>
        </SmallCard>

        <LocationCard colSpan={3}>
          <LocationLabel>{t('hero.basedIn')}</LocationLabel>
          <LocationValue>📍 {PERSONAL.location}</LocationValue>
        </LocationCard>

        <SmallCard colSpan={3}>
          <StatNumber>{PERSONAL.experience} yrs</StatNumber>
          <StatLabel>{t('hero.experienceLabel')}</StatLabel>
        </SmallCard>

        <SmallCard colSpan={3}>
          <StatNumber>{PERSONAL.projectCount}</StatNumber>
          <StatLabel>{t('hero.projectsLabel')}</StatLabel>
        </SmallCard>

        <SocialCard colSpan={2}>
          <SocialLink href={PERSONAL.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </SocialLink>
          <SocialLink href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </SocialLink>
        </SocialCard>

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

      <ScrollIndicatorWrapper>
        <ScrollInner>
          <ScrollLabel>{t('hero.scroll')}</ScrollLabel>
          <ScrollLine
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
          />
          <ScrollDot
            animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </ScrollInner>
      </ScrollIndicatorWrapper>
    </Section>
  );
};
