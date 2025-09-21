// src/components/NavbarMain.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavbarMain() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll handler (for homepage sections only)
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="py-2"
      style={{
        borderBottom: 'none', // ✅ no border
        boxShadow: 'none',    // ✅ no shadow
      }}
    >
      <Container fluid style={{ paddingLeft: '20px', paddingRight: '40px' }}>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate('/')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            width: '300px',   // ⬆️ increased width
            height: '150px',  // ⬆️ increased height
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Cavola Logo"
            style={{
              height: '100%',       // fills container height
              width: '100%',        // fills container width
              objectFit: 'contain', // keeps aspect ratio
            }}
          />
        </Navbar.Brand>

        {/* Hamburger Toggle (mobile) */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menu Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav
            className="mx-auto text-center"
            style={{
              display: 'flex',
              padding: '12px 30px',
              alignItems: 'flex-start',
              gap: '64px',
              borderRadius: '24px',
              background: '#F3F3F3',
            }}
          >
            <Nav.Link
              onClick={(e) => handleScrollTo(e, 'about')}
              className="px-3"
              style={{ color: '#292121', fontSize: '22px', fontFamily: 'Raleway' }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleScrollTo(e, 'services')}
              className="px-3"
              style={{ color: '#292121', fontSize: '22px', fontFamily: 'Raleway' }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/blog')}
              className="px-3"
              style={{ color: '#292121', fontSize: '22px', fontFamily: 'Raleway' }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/contact')}
              className="px-3"
              style={{ color: '#292121', fontSize: '22px', fontFamily: 'Raleway' }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          {/* CTA Button */}
          <div className="text-center mt-3 mt-lg-0">
            <Button
              style={{
                color: '#FFF',
                fontSize: '22px',
                fontFamily: 'Raleway',
                display: 'flex',
                width: '230px',
                padding: '6px 0',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '25px',
                background: '#86AD43',
                border: 'none',
              }}
              onClick={() => navigate('/contact')}
            >
              Request a Quote
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
