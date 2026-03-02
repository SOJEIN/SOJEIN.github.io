import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

// ============================================
// STYLED COMPONENTS
// ============================================

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #6366f1;
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
`;

const InfoLink = styled.a`
  color: #06b6d4;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-color: transparent;
    transform: translateY(-3px);
  }
`;

const FormSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #cbd5e1;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #e2e8f0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #64748b;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #e2e8f0;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #64748b;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
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
// COMPONENTE PRINCIPAL
// ============================================

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctame
        </PageTitle>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </Subtitle>

        <ContactGrid>
          {/* INFORMACIÓN DE CONTACTO */}
          <ContactInfo
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <InfoCard variants={fadeInUp}>
              <InfoIcon>📧</InfoIcon>
              <InfoTitle>Email</InfoTitle>
              <InfoText>
                <InfoLink href="mailto:jeisson.ochoa21@gmail.com">
                  jeisson.ochoa21@gmail.com
                </InfoLink>
              </InfoText>
            </InfoCard>

            <InfoCard variants={fadeInUp}>
              <InfoIcon>📱</InfoIcon>
              <InfoTitle>Teléfono</InfoTitle>
              <InfoText>
                <InfoLink href="tel:+573228084806">+57 322 808 4806</InfoLink>
              </InfoText>
            </InfoCard>

            <InfoCard variants={fadeInUp}>
              <InfoIcon>📍</InfoIcon>
              <InfoTitle>Ubicación</InfoTitle>
              <InfoText>Bogotá, Colombia</InfoText>
              <InfoText style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Disponible para trabajo remoto
              </InfoText>
            </InfoCard>

            <InfoCard variants={fadeInUp}>
              <InfoIcon>🌐</InfoIcon>
              <InfoTitle>Redes Sociales</InfoTitle>
              <SocialLinks>
                <SocialButton
                  href="https://github.com/SOJEIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  💻
                </SocialButton>
                <SocialButton
                  href="https://www.linkedin.com/in/jeissonochoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  💼
                </SocialButton>
              </SocialLinks>
            </InfoCard>
          </ContactInfo>

          {/* FORMULARIO DE CONTACTO */}
          <FormSection
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿De qué quieres hablar?"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Mensaje</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </SubmitButton>

              {showSuccess && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
                </SuccessMessage>
              )}
            </Form>
          </FormSection>
        </ContactGrid>
      </ContentWrapper>
    </ContactContainer>
  );
};
