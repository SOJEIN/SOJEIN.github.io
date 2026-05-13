import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTag = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
`;
