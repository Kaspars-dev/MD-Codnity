// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Articles from './pages/Articles'; // News page
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> 

      {/* Main Content */}
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage */}
          <Route path="/news" element={<Articles />} /> {/* Route to Articles for News */}
        </Routes>
      </Container>

      <Footer /> {/* Render the Footer */}
    </Router>
  );
};

export default App;
