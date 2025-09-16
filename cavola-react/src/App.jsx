import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import ContactPage from './components/ContactPage'; // ✅ use dedicated page
import Footer from './components/Footer';
import Partnership from './components/Partnership';

const Home = () => (
  <>
    <Hero />
    <Certifications />
    <About />
    <Products />
    <Leadership />
    <Services />
    <Partnership />
    <Blog />
  </>
);

export default function App() {
  return (
    <div>
      <NavbarMain />
      <div style={{ marginTop: 70 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} /> {/* ✅ new route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
