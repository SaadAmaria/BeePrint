import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../CSS/HomePage.css'; // Correct path based on your project structure

const animations = [
  'Latest promotions on top brands!',
  'Check out our exclusive deals!',
  'Personalize your phone with our shield customization!',
  'Free shipping on orders over $50!',
];

function HomePage() {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 5000); // Changes animation every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 5 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Bee Print
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          Your one-stop shop for the latest and greatest in phone technology and accessories.
        </Typography>
        <Box className="animation-box" sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h5" color="primary">
            {animations[currentAnimation]}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
