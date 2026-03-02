import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import styled from 'styled-components';

import { BentoCard } from '../../shared/components/BentoCard';
import { BREAKPOINTS, PERSONAL } from '../home/home.constants';

// ============================================
// EmailJS config — replace with your real keys
// ============================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 5rem 1.5rem 7rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 3rem 1rem 5rem;
  }
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
  margin-bottom: 2rem;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

/* ---- Form card ---- */
const FormCard = styled(BentoCard)`
  grid-column: span 7;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const inputStyles = `
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-primary);
  border: 1px solid var(--card-border);
  border-radius: 0.625rem;
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--card-hover-border);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.08);
  }

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.5;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 130px;
  resize: vertical;
`;

const SubmitBtn = styled.button<{ $loading?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 0.625rem;
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  align-self: flex-start;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`;

const FeedbackMsg = styled(motion.p)<{ $success: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  color: ${({ $success }) => ($success ? '#22c55e' : '#ef4444')};
  background: ${({ $success }) =>
    $success ? 'rgba(34, 197, 94, 0.08)' : 'rgba(239, 68, 68, 0.08)'};
  border: 1px solid
    ${({ $success }) =>
      $success ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
`;

/* ---- Info cards ---- */
const InfoCard = styled(BentoCard)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  border: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1rem;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const InfoLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-secondary);
`;

const InfoValue = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--accent);
    transform: scale(1.1);
  }
`;

const AvailabilityCard = styled(BentoCard)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const AvailDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  margin-right: 0.5rem;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
`;

const AvailTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
`;

const AvailText = styled.p`
  font-size: 0.825rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

// ============================================
// COMPONENT
// ============================================

type FormState = { name: string; email: string; subject: string; message: string };
const INITIAL: FormState = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setFeedback({ msg: '✓ Message sent! I\'ll get back to you soon.', success: true });
      setForm(INITIAL);
    } catch {
      setFeedback({ msg: '✗ Something went wrong. Please try emailing me directly.', success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTag>Contact</SectionTag>
      <SectionTitle
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        Let&apos;s work together
      </SectionTitle>

      <BentoGrid>
        {/* Form */}
        <FormCard colSpan={7} accent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitBtn type="submit" disabled={loading} $loading={loading}>
              <FiSend size={15} />
              {loading ? 'Sending…' : 'Send message'}
            </SubmitBtn>

            <AnimatePresence>
              {feedback && (
                <FeedbackMsg
                  $success={feedback.success}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {feedback.msg}
                </FeedbackMsg>
              )}
            </AnimatePresence>
          </Form>
        </FormCard>

        {/* Contact info */}
        <InfoCard colSpan={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <InfoRow>
              <InfoIcon><FiMail /></InfoIcon>
              <InfoText>
                <InfoLabel>Email</InfoLabel>
                <InfoValue href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</InfoValue>
              </InfoText>
            </InfoRow>

            <InfoRow>
              <InfoIcon><FiMapPin /></InfoIcon>
              <InfoText>
                <InfoLabel>Location</InfoLabel>
                <InfoValue as="span">{PERSONAL.location}</InfoValue>
              </InfoText>
            </InfoRow>
          </div>

          <SocialRow>
            <SocialBtn href={PERSONAL.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </SocialBtn>
            <SocialBtn href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </SocialBtn>
          </SocialRow>
        </InfoCard>

        {/* Availability */}
        <AvailabilityCard colSpan={5}>
          <AvailTitle>
            <AvailDot />
            Available for new projects
          </AvailTitle>
          <AvailText>
            Open to full-time positions, freelance projects, and consulting.
            Based in Bogotá — remote-friendly worldwide.
          </AvailText>
        </AvailabilityCard>
      </BentoGrid>
    </Section>
  );
};
