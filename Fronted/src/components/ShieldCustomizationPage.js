import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import '../CSS/ShieldCustomizationPage.css';

function ShieldCustomizationPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (image) {
      alert('Image uploaded successfully!');
      // Logic to upload the image or process it further can be added here
    } else {
      alert('Please select an image first.');
    }
  };

  return (
    <Container className="customization-container">
      <Typography variant="h3" gutterBottom>Shield Customization</Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
        Upload your photo and preview it on your custom shield.
      </Typography>
      <Box sx={{ mb: 3 }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'block', marginBottom: '15px' }}
        />
        {preview && (
          <Box sx={{ border: '2px solid #1976d2', p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
            <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </Box>
        )}
      </Box>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Upload Image
      </Button>
    </Container>
  );
}

export default ShieldCustomizationPage;
