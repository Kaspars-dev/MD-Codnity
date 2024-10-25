// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
     return (
     <AppBar position="static" sx={{ backgroundColor: '#FFD700' }}>
          <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}>
          Volleyball News
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ color: 'black', fontWeight: 'bold' }}>
          Home
          </Button>
          <Button color="inherit" component={Link} to="/news" sx={{ color: 'black', fontWeight: 'bold' }}>
          News
          </Button>
          </Toolbar>
     </AppBar>
     );
};

export default Header;
