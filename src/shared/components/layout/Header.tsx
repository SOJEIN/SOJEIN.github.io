import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import styled from 'styled-components';

import logo from '@/assets/Logo_menu.svg';
import PillNav from '@/components/pillaNav/PillaNav';

import { headerLinks } from './HeaderLinks';

interface HeaderProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const HeaderWrapper = styled.header<{ $mode: 'light' | 'dark' }>`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: ${({ $mode }) =>
    $mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 10, 20, 0.85)'};
  border-bottom: 1px solid
    ${({ $mode }) =>
      $mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'};
  transition: background 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

const ThemeButton = styled.button<{ $mode: 'light' | 'dark' }>`
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid
    ${({ $mode }) =>
      $mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
  background: ${({ $mode }) => ($mode === 'light' ? '#ffffff' : '#000000')};
  color: ${({ $mode }) => ($mode === 'light' ? '#000000' : '#ffffff')};
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 18px;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: #6366f1;
  }
`;

const Header: React.FC<HeaderProps> = ({ mode, toggleTheme }) => {
  const items = headerLinks.map((l) => ({ label: l.name, href: l.path }));

  return (
    <HeaderWrapper $mode={mode}>
      <HeaderContent>
        <PillNav
          items={items}
          baseColor={mode === 'light' ? '#000000' : '#ffffff'}
          pillColor={mode === 'light' ? '#ffffff' : '#000000'}
          pillTextColor={mode === 'light' ? '#000000' : '#ffffff'}
          pillHoverColor={mode === 'light' ? '#000000' : '#ffffff'}
          hoveredPillTextColor={mode === 'light' ? '#ffffff' : '#000000'}
          logo={logo}
        />
        <ThemeButton $mode={mode} onClick={toggleTheme} aria-label="Toggle theme">
          {mode === 'light' ? <IoMoon /> : <IoSunny />}
        </ThemeButton>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
