import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../CSS/MenuBar.css';

function MenuBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
      <Typography variant="h4" sx={{ flexGrow: 1 }}>
        Bee Print
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/customize-shield">
            Shield Customization
          </Button>
          <Button color="inherit" component={Link} to="/catalog">
            Product Catalog
          </Button>
          <Button color="inherit" component={Link} to="/account">
            My Account
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Admin Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
