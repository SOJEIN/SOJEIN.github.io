import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import styled from 'styled-components';

import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid, SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { PERSONAL } from '../home/home.constants';
import { emailService } from './contact.service';

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

const Input = styled.input`${inputStyles}`;
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
  background: ${({ $success }) => ($success ? 'rgba(34, 197, 94, 0.08)' : 'rgba(239, 68, 68, 0.08)')};
  border: 1px solid ${({ $success }) => ($success ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)')};
`;

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

  &:hover { color: var(--accent); }
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

const AvailDot = styled(motion.span)`
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
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setFeedback(null);

    try {
      await emailService.send(formRef.current);
      setFeedback({ msg: t('contact.form.success'), success: true });
      setForm(INITIAL);
    } catch {
      setFeedback({ msg: t('contact.form.error'), success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTag>{t('contact.tag')}</SectionTag>
      <SectionTitle
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ marginBottom: '2rem' }}
      >
        {t('contact.title')}
      </SectionTitle>

      <BentoGrid>
        <FormCard colSpan={7} variant="accent">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">{t('contact.form.name')}</Label>
              <Input
                id="name" name="name" type="text"
                placeholder={t('contact.form.namePlaceholder')}
                value={form.name} onChange={handleChange} required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">{t('contact.form.email')}</Label>
              <Input
                id="email" name="email" type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={form.email} onChange={handleChange} required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">{t('contact.form.subject')}</Label>
              <Input
                id="subject" name="subject" type="text"
                placeholder={t('contact.form.subjectPlaceholder')}
                value={form.subject} onChange={handleChange} required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <TextArea
                id="message" name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                value={form.message} onChange={handleChange} required
              />
            </FormGroup>

            <SubmitBtn type="submit" disabled={loading} $loading={loading}>
              <FiSend size={15} />
              {loading ? t('contact.form.sending') : t('contact.form.send')}
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

        <InfoCard colSpan={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <InfoRow>
              <InfoIcon><FiMail /></InfoIcon>
              <InfoText>
                <InfoLabel>{t('contact.info.emailLabel')}</InfoLabel>
                <InfoValue href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</InfoValue>
              </InfoText>
            </InfoRow>

            <InfoRow>
              <InfoIcon><FiMapPin /></InfoIcon>
              <InfoText>
                <InfoLabel>{t('contact.info.locationLabel')}</InfoLabel>
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

        <AvailabilityCard colSpan={5}>
          <AvailTitle>
            <AvailDot
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(34,197,94,0.4)',
                  '0 0 0 8px rgba(34,197,94,0)',
                  '0 0 0 0px rgba(34,197,94,0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {t('contact.availability.title')}
          </AvailTitle>
          <AvailText>{t('contact.availability.text')}</AvailText>
        </AvailabilityCard>
      </BentoGrid>
    </Section>
  );
};
