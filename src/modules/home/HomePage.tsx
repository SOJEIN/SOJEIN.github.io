import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  ABOUT_CONTENT,
  ACTION_BUTTONS,
  BREAKPOINTS,
  COLORS,
  FONTS,
  HERO_CONTENT,
  TECH_STACK,
} from './home.constants';

// ============================================
// STYLED COMPONENTS
// ============================================

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${COLORS.darker} 0%, ${COLORS.dark} 50%, #1e293b 100%);
  color: ${COLORS.text};
  font-family: ${FONTS.primary};
  overflow-x: hidden;
`;

// ============================================
// HERO SECTION
// ============================================

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;

  /* Efecto de fondo animado con gradiente */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    min-height: auto;
    padding: 4rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  text-align: center;
  z-index: 1;
`;

const Avatar = styled(motion.div)`
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  padding: 5px;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 140px;
    height: 140px;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: ${COLORS.dark};
  border: 4px solid ${COLORS.dark};
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${COLORS.textMuted};
  margin-bottom: 0.5rem;
  font-weight: 400;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 0;
  line-height: 1.2;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 2rem;
  }
`;

const Role = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${COLORS.text};
  font-weight: 500;
  margin: 1rem 0 1.5rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1.1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${COLORS.textMuted};
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)<{ $variant: 'primary' | 'secondary' }>`
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: ${FONTS.primary};
  display: inline-block;

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
    background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
    color: white;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
    }
  `
      : `
    background: transparent;
    color: ${COLORS.text};
    border: 2px solid ${COLORS.primary};

    &:hover {
      background: ${COLORS.primary};
      color: white;
      transform: translateY(-3px);
    }
  `}

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

// ============================================
// ABOUT SECTION
// ============================================

const AboutSection = styled.section`
  padding: 5rem 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: ${COLORS.text};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent});
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 2rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.9;
  color: ${COLORS.textMuted};
  text-align: center;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

// ============================================
// TECH STACK SECTION
// ============================================

const TechSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: ${COLORS.cardBg};
  backdrop-filter: blur(10px);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 3rem 1.5rem 4rem;
  }
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${COLORS.primary};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 1rem;
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 2rem;
  }
`;

const TechName = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${COLORS.text};
  margin: 0;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 0.85rem;
  }
`;

// ============================================
// ANIMACIÓN VARIANTS
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export const HomePage = () => {
  return (
    <HomeContainer>
      {/* SECCIÓN HERO */}
      <HeroSection>
        <HeroContent>
          <Avatar
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <AvatarImage
              src={HERO_CONTENT.avatarUrl}
              alt={HERO_CONTENT.name}
              onError={(e) => {
                // Fallback si no existe la imagen
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  HERO_CONTENT.name
                )}&background=6366f1&color=fff&size=200&bold=true`;
              }}
            />
          </Avatar>

          <Greeting
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {HERO_CONTENT.greeting}
          </Greeting>

          <Name variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
            {HERO_CONTENT.name}
          </Name>

          <Role variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
            {HERO_CONTENT.role}
          </Role>

          <Description
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {HERO_CONTENT.description}
          </Description>

          <ButtonGroup
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            {ACTION_BUTTONS.map((button) => (
              <Button
                key={button.label}
                to={button.to}
                $variant={button.variant}
                aria-label={button.label}
              >
                {button.label}
              </Button>
            ))}
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* SECCIÓN SOBRE MÍ */}
      <AboutSection>
        <SectionTitle
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {ABOUT_CONTENT.title}
        </SectionTitle>

        <AboutText
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {ABOUT_CONTENT.text}
        </AboutText>
      </AboutSection>

      {/* SECCIÓN TECH STACK */}
      <TechSection>
        <SectionTitle
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Tecnologías
        </SectionTitle>

        <TechGrid
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TECH_STACK.map((tech) => (
            <TechCard
              key={tech.name}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TechIcon role="img" aria-label={tech.name}>
                {tech.icon}
              </TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechGrid>
      </TechSection>
    </HomeContainer>
  );
};
