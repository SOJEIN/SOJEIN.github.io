import { motion } from 'framer-motion';
import styled from 'styled-components';

// ============================================
// STYLED COMPONENTS
// ============================================

const AboutContainer = styled.div`
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
  max-width: 1200px;
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
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 80%;
    background: linear-gradient(180deg, #6366f1, #8b5cf6);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #cbd5e1;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #6366f1;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  color: #cbd5e1;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: bold;
  }
`;

const ExperienceTimeline = styled.div`
  margin-top: 2rem;
`;

const TimelineItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #6366f1;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

const TimelineRole = styled.p`
  font-size: 1rem;
  color: #06b6d4;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: #94a3b8;
  font-style: italic;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-top: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
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
      staggerChildren: 0.15,
    },
  },
};

// ============================================
// DATOS DEL COMPONENTE
// ============================================

const skills = [
  {
    title: '🎨 Frontend',
    items: [
      'React & Next.js',
      'TypeScript',
      'HTML5 & CSS3',
      'Styled Components',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: '⚙️ Backend',
    items: [
      'Node.js & Express',
      'REST APIs',
      'GraphQL',
      'PostgreSQL & MongoDB',
      'Authentication & Security',
    ],
  },
  {
    title: '🛠️ Herramientas',
    items: ['Git & GitHub', 'Docker', 'Vite & Webpack', 'Jest & Testing Library', 'CI/CD', 'Figma'],
  },
];

const experience = [
  {
    title: 'Empresa Tech Solutions',
    role: 'Desarrollador Frontend Senior',
    date: '2023 - Presente',
    description:
      'Desarrollo de aplicaciones web modernas con React y TypeScript. Liderazgo de equipo y arquitectura de proyectos.',
  },
  {
    title: 'StartUp Digital',
    role: 'Desarrollador Full Stack',
    date: '2021 - 2023',
    description:
      'Implementación de features end-to-end, desde diseño hasta deployment. Stack: React, Node.js, PostgreSQL.',
  },
  {
    title: 'Freelance',
    role: 'Desarrollador Web',
    date: '2020 - 2021',
    description:
      'Desarrollo de sitios web y aplicaciones para diversos clientes. Enfoque en UX/UI y performance.',
  },
];

const stats = [
  { number: '3+', label: 'Años de experiencia' },
  { number: '25+', label: 'Proyectos completados' },
  { number: '15+', label: 'Clientes satisfechos' },
  { number: '100%', label: 'Código con amor' },
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </PageTitle>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Conoce más sobre mi trayectoria y habilidades profesionales
        </Subtitle>

        {/* INTRODUCCIÓN */}
        <Section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>¿Quién soy?</SectionTitle>
          <IntroText>
            Soy un desarrollador frontend apasionado por crear experiencias digitales excepcionales.
            Mi especialidad es transformar diseños complejos en aplicaciones web interactivas,
            accesibles y de alto rendimiento.
          </IntroText>
          <IntroText>
            Con más de 3 años de experiencia en el desarrollo web, he trabajado en proyectos que van
            desde startups innovadoras hasta empresas consolidadas. Me encanta aprender nuevas
            tecnologías y compartir conocimientos con la comunidad.
          </IntroText>
          <IntroText>
            Mi enfoque está en escribir código limpio, mantenible y escalable, siempre con las
            mejores prácticas de la industria. Creo firmemente en el poder de la colaboración y el
            aprendizaje continuo.
          </IntroText>
        </Section>

        {/* ESTADÍSTICAS */}
        <Section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Section>

        {/* HABILIDADES */}
        <Section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.items.map((item, i) => (
                    <SkillItem key={i}>{item}</SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Section>

        {/* EXPERIENCIA */}
        <Section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle>Experiencia Profesional</SectionTitle>
          <ExperienceTimeline>
            {experience.map((exp, index) => (
              <TimelineItem key={index} variants={fadeInUp}>
                <TimelineTitle>{exp.title}</TimelineTitle>
                <TimelineRole>{exp.role}</TimelineRole>
                <TimelineDate>{exp.date}</TimelineDate>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </ExperienceTimeline>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
};
