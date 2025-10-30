import { Toolbar } from '@mui/material';
import React from 'react';

import logo from '@/assets/Logo_menu.svg';
import LiquidEther from '@/components/LiquidEther/LiquidEther';
import PillNav from '@/components/pillaNav/PillaNav';

import { headerLinks } from './HeaderLinks';

const Header: React.FC = () => {
  const items = headerLinks.map((l) => ({ label: l.name, href: l.path }));

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
      <Toolbar sx={{ justifyContent: 'center' }}>
        <PillNav
          items={items}
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          logo={logo}
        />
      </Toolbar>
    </div>
  );
};

export default Header;
