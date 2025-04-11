import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import the main CSS file
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import the new HomePage
import WebsitesPage from './pages/WebsitesPage'; // Import the WebsitesPage
import ServicesPage from './pages/ServicesPage'; // Import ServicesPage
import ContactPage from './pages/ContactPage'; // Import ContactPage
import FreelanceWebsiteDesignPage from './pages/FreelanceWebsiteDesignPage'; // Import the new service page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/freelance-website-design" element={<FreelanceWebsiteDesignPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add other routes here later */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
