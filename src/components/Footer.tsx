import React from 'react';
import { Box, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material'; // Import Material-UI icons

const Footer: React.FC = () => {
  return (
    <Box component="footer" bgcolor="#FFD700" color="black" py={3} textAlign="center">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Follow Us
      </Typography>
      <Box>
        {/* Instagram Icon */}
        <IconButton
          component={MuiLink}
          href="https://www.instagram.com/thisisbillgates/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{ color: 'black' }} // Set icon color to black
        >
          <Instagram fontSize="large"/>
        </IconButton>
        {/* Facebook Icon */}
        <IconButton
          component={MuiLink}
          href="https://www.facebook.com/zuck/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          sx={{ color: 'black' }}
        >
          <Facebook fontSize="large"/>
        </IconButton>
        {/* YouTube Icon */}
        <IconButton
          component={MuiLink}
          href="https://www.youtube.com/@mkbhd"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          sx={{ color: 'black' }}
        >
          <YouTube fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
