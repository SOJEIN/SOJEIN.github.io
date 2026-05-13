import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Bar = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent) 0%, #8b5cf6 50%, #06b6d4 100%);
  transform-origin: 0%;
  z-index: 102;
`;

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <Bar style={{ scaleX }} />;
};
