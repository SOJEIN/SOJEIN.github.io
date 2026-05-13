import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.82em;
  background: var(--accent);
  margin-left: 3px;
  vertical-align: middle;
  border-radius: 1px;
  animation: ${blink} 1s step-end infinite;
`;

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 75,
  deletingSpeed = 38,
  pauseDuration = 2200,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex % words.length];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayed}
      <Cursor aria-hidden="true" />
    </span>
  );
};
