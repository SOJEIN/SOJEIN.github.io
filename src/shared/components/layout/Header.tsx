import { Toolbar } from '@mui/material';
import React from 'react';

import logo from '@/assets/Logo_menu.svg';
import PillNav from '@/components/pillaNav/PillaNav';

import { headerLinks } from './HeaderLinks';

const Header: React.FC = () => {
  const items = headerLinks.map((l) => ({ label: l.name, href: l.path }));

  return (
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
  );
};

export default Header;
