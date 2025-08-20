import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';
import MainContent from './pages/frontend/MainContent';
import About from './pages/frontend/About';
import Contact from './pages/frontend/Contact';
import Gallery from './pages/frontend/Gallery';
import Reseller from './pages/frontend/Reseller'; 
import Service from './pages/frontend/Service';
import LiveChat from './LiveChat';
import Produk from './pages/frontend/Produk';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/service" element={<Service />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>

      <LiveChat />
      <Footer />
    </Router>
  );
}

export default App;
