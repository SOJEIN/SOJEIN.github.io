import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiAward, FiCalendar, FiExternalLink, FiFileText } from 'react-icons/fi';
import styled from 'styled-components';

import { fadeUp } from '@/shared/animations/variants';
import { BentoCard } from '@/shared/components/BentoCard';
import { BentoGrid, SectionTag, SectionTitle } from '@/shared/components/Section';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { CERTIFICATIONS } from './certification.constants';

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

const CertCard = styled(BentoCard)`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const IssuerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const IconBox = styled.div`
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

const Issuer = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
`;

const Title = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  flex: 1;
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--card-border);
  margin-top: auto;
`;

const CredLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: var(--accent); }
`;

// ============================================
// COMPONENT
// ============================================

export const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="certifications">
      <SectionHeader>
        <SectionTag>{t('certifications.tag')}</SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {t('certifications.title')}
        </SectionTitle>
      </SectionHeader>

      <BentoGrid>
        {CERTIFICATIONS.map((cert, i) => {
          const tags = t(`certifications.items.${cert.id}.tags`, { returnObjects: true }) as string[];

          return (
            <CertCard
              key={cert.id}
              colSpan={4}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <CardTop>
                <IssuerRow>
                  <IconBox><FiAward /></IconBox>
                  <Issuer>{cert.issuer}</Issuer>
                </IssuerRow>
              </CardTop>

              <Title>{t(`certifications.items.${cert.id}.title`)}</Title>

              <DateRow>
                <FiCalendar size={13} />
                {t(`certifications.items.${cert.id}.date`)}
              </DateRow>

              <TagRow>
                {Array.isArray(tags) && tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagRow>

              {(cert.credentialUrl || cert.pdfUrl) && (
                <LinkRow>
                  {cert.credentialUrl && (
                    <CredLink href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink size={13} /> {t('certifications.viewCredential')}
                    </CredLink>
                  )}
                  {cert.pdfUrl && (
                    <CredLink href={cert.pdfUrl} download>
                      <FiFileText size={13} /> {t('certifications.viewPdf')}
                    </CredLink>
                  )}
                </LinkRow>
              )}
            </CertCard>
          );
        })}
      </BentoGrid>
    </Section>
  );
};
