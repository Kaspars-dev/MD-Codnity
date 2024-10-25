import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolleyballNews } from '../redux/slices/dataSlice'; // Ensure the path is correct
import { RootState, AppDispatch } from '../redux/store/store'; // Ensure the path is correct
import { Container, Typography, CircularProgress, Box, Card, CardMedia, CardContent } from '@mui/material';
import './Articles.css'; // If you have CSS styles

// Manually assigned images
import image1 from '../assets/images/article1.jpg';
import image2 from '../assets/images/article2.png';
import image3 from '../assets/images/article3.webp';

const Articles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use the correct typed dispatch
  const articles = useSelector((state: RootState) => state.data.data);
  const status = useSelector((state: RootState) => state.data.status);

  const articleImages = [image1, image2, image3]; // Array of manually assigned images

  useEffect(() => {
    dispatch(fetchVolleyballNews()); // Fetches news articles when component mounts
  }, [dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <Typography color="error">Failed to load news.</Typography>;
  }

  return (
    <Box>
      {articles.slice(0, 3).map((article, index) => (
        <Container key={index} className="article-section">
          <Card className="article-card">
            {/* Manually assigned image */}
            <CardMedia
              component="img"
              image={articleImages[index]} // Use the manually assigned image for each article
              alt={article.title}
              className="article-image"
            />
            {/* Article Content */}
            <CardContent className="article-content">
              <Typography variant="h4" gutterBottom>
                {article.title}
              </Typography>
              {/* Display description */}
              <Typography variant="body1" gutterBottom>
                {article.description}
              </Typography>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read full article
              </a>
            </CardContent>
          </Card>
        </Container>
      ))}
    </Box>
  );
};

export default Articles;
