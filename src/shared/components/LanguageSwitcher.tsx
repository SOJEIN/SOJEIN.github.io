import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
] as const;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0.2rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
`;

const LangBtn = styled.button<{ $active: boolean; $mode: 'light' | 'dark' }>`
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  background: ${({ $active, $mode }) =>
    $active ? ($mode === 'light' ? '#0f0f0f' : 'rgba(255,255,255,0.9)') : 'transparent'};
  color: ${({ $active, $mode }) =>
    $active ? ($mode === 'light' ? '#fff' : '#0f0f0f') : 'var(--text-secondary)'};
  border: none;
  transition: all 0.18s ease;

  &:hover:not([data-active='true']) {
    color: var(--text-primary);
  }
`;

interface LanguageSwitcherProps {
  mode: 'light' | 'dark';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mode }) => {
  const { i18n } = useTranslation();
  const current = i18n.language.split('-')[0];

  return (
    <Wrapper>
      {LANGUAGES.map(({ code, label }) => (
        <LangBtn
          key={code}
          $active={current === code}
          $mode={mode}
          data-active={current === code}
          onClick={() => i18n.changeLanguage(code)}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </LangBtn>
      ))}
    </Wrapper>
  );
};
