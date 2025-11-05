import { LightMode, DarkMode } from '@mui/icons-material';
import { Toolbar, IconButton, Box, Fade } from '@mui/material';
import React, { useState } from 'react';

import logo from '@/assets/Logo_menu.svg';
import LiquidEther from '@/components/LiquidEther/LiquidEther';
import PillNav from '@/components/pillaNav/PillaNav';

import { headerLinks } from './HeaderLinks';

interface HeaderProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ mode, toggleTheme }) => {
  const items = headerLinks.map((l) => ({ label: l.name, href: l.path }));

  // Para animación del icono
  const [iconVisible, setIconVisible] = useState(true);

  const handleToggle = () => {
    setIconVisible(false);
    setTimeout(() => {
      toggleTheme();
      setIconVisible(true);
    }, 200); // Duración de la animación
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 600,
        overflow: 'hidden',
      }}
    >
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      <Toolbar sx={{ justifyContent: 'center', px: 4, position: 'relative' }}>
        {/* Menú centrado */}
        <PillNav
          items={items}
          baseColor={mode === 'light' ? '#000000' : '#ffffff'}
          pillColor={mode === 'light' ? '#ffffff' : '#000000'}
          pillTextColor={mode === 'light' ? '#000000' : '#ffffff'}
          pillHoverColor={mode === 'light' ? '#000000' : '#ffffff'} // fondo del hover
          hoveredPillTextColor={mode === 'light' ? '#ffffff' : '#000000'} // texto del hover
          logo={logo}
        />

        {/* Botón de cambio de tema en la esquina derecha */}
        <Box sx={{ position: 'absolute', right: 16 }}>
          <Fade in={iconVisible}>
            <IconButton
              onClick={handleToggle}
              sx={{
                color: mode === 'light' ? '#000' : '#fff',
                border: '1px solid',
                borderColor: mode === 'light' ? '#000' : '#fff',
                bgcolor: mode === 'light' ? '#fff' : '#000000ff',
                transition: 'all 0.3s ease',
              }}
            >
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Fade>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Header;
