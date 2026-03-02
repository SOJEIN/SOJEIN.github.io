import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface BentoCardProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  onClick?: () => void;
  accent?: boolean;
}

const CardWrapper = styled(motion.div)<{
  $colSpan?: number;
  $rowSpan?: number;
  $accent?: boolean;
}>`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: default;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  ${({ $colSpan }) => $colSpan && `grid-column: span ${$colSpan};`}
  ${({ $rowSpan }) => $rowSpan && `grid-row: span ${$rowSpan};`}

  ${({ $accent }) =>
    $accent &&
    `
    background: linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 100%);
    border-color: rgba(99, 102, 241, 0.2);
  `}

  @media (max-width: 768px) {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
`;

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  colSpan,
  rowSpan,
  className,
  onClick,
  accent,
}) => {
  return (
    <CardWrapper
      $colSpan={colSpan}
      $rowSpan={rowSpan}
      $accent={accent}
      className={className}
      onClick={onClick}
      whileHover={{
        scale: 1.01,
        borderColor: 'var(--card-hover-border)',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12)',
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </CardWrapper>
  );
};
