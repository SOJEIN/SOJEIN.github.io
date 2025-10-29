import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import React, { useState, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from './HeaderLinks';
import { headerStyle } from '../../styles/HeaderStyle';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={headerStyle.appBar}>
      <Toolbar>
        <Typography variant="h6" sx={headerStyle.title}></Typography>

        {/* Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {headerLinks.map((link) => (
            <Button key={link.name} component={NavLink} to={link.path} sx={headerStyle.linkButton}>
              {link.name}
            </Button>
          ))}
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {headerLinks.map((link) => (
              <MenuItem key={link.name} component={NavLink} to={link.path} onClick={handleClose}>
                {link.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
