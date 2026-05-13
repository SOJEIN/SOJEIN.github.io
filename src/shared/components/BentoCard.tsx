import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

export type CardVariant = 'default' | 'accent' | 'glass';

const variantStyles: Record<CardVariant, ReturnType<typeof css>> = {
  default: css`
    background: var(--card-bg);
    border-color: var(--card-border);
  `,
  accent: css`
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%);
    border-color: rgba(99, 102, 241, 0.2);
  `,
  glass: css`
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-color: rgba(255, 255, 255, 0.1);
  `,
};

const CardWrapper = styled(motion.div)<{
  $colSpan?: number;
  $rowSpan?: number;
  $variant: CardVariant;
}>`
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
  ${({ $variant }) => variantStyles[$variant]}

  @media (max-width: 768px) {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
`;

export type BentoCardProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  variant?: CardVariant;
  /** @deprecated use variant="accent" */
  accent?: boolean;
};

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  colSpan,
  rowSpan,
  variant,
  accent,
  className,
  onClick,
  ...motionProps
}) => {
  const resolvedVariant: CardVariant = variant ?? (accent ? 'accent' : 'default');

  return (
    <CardWrapper
      $colSpan={colSpan}
      $rowSpan={rowSpan}
      $variant={resolvedVariant}
      className={className}
      onClick={onClick}
      whileHover={{
        scale: 1.01,
        borderColor: 'var(--card-hover-border)',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12)',
      }}
      transition={{ duration: 0.2 }}
      {...motionProps}
    >
      {children}
    </CardWrapper>
  );
};
