import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styled from 'styled-components';

import { PERSONAL } from '../../modules/home/home.constants';

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--card-border);
  padding: 2rem 1.5rem;
  background: var(--bg-primary);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copy = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--accent);
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Inner>
        <Copy>© {new Date().getFullYear()} {PERSONAL.name} · Full Stack Developer</Copy>
        <SocialRow>
          <SocialLink href={PERSONAL.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </SocialLink>
          <SocialLink href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </SocialLink>
          <SocialLink href={`mailto:${PERSONAL.email}`} aria-label="Email">
            <FiMail />
          </SocialLink>
        </SocialRow>
      </Inner>
    </FooterWrapper>
  );
}
