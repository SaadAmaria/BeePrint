import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar'; // Adjust the path as necessary
import HomePage from './components/HomePage'; // Add imports for all page components
import ShieldCustomizationPage from './components/ShieldCustomizationPage';
// import ProductCatalogPage from './components/ProductCatalogPage';
// import UserAccountPage from './components/UserAccountPage';
// import AdminDashboardPage from './components/AdminDashboardPage';
import './App.css';
import './CSS/HomePage.css'; // Add any necessary CSS imports
import './CSS/MenuBar.css';
import './CSS/ShieldCustomizationPage.css';


function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customize-shield" element={<ShieldCustomizationPage />} />
        {/* <Route path="/catalog" element={<ProductCatalogPage />} /> */}
        {/* <Route path="/account" element={<UserAccountPage />} /> */}
        {/* <Route path="/admin" element={<AdminDashboardPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
