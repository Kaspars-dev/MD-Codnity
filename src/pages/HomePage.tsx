// src/pages/HomePage.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './HomePage.css'; // Import the CSS file

// Import the image for the About Us section
import aboutUsImage from '../assets/images/HomePage.webp';

const HomePage: React.FC = () => {
  return (
    <Box className="home-page">
      {/* About Us Section */}
      <Container className="about-us-section">
        <Typography variant="h3" gutterBottom className="about-us-title">
          About Us
        </Typography>
        <Typography variant="body1" paragraph className="about-us-text">
          Welcome to Volleyball News, your trusted source for reliable and up-to-date news about volleyball events worldwide.
          We provide in-depth coverage, expert analysis, and the latest updates from all major leagues and tournaments.
          Stay informed with the most accurate and timely news in the volleyball community.
        </Typography>
      </Container>

      {/*Image*/}
      <Box className="about-us-image-container">
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
      </Box>
    </Box>
  );
};

export default HomePage;
