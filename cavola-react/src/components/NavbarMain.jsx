import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavbarMain() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction with immediate hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down → hide
      } else {
        setShowNavbar(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      fixed="top"
      className="py-2 transition-navbar"
      style={{
        borderBottom: 'none',
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.2s ease', // smoother & faster
        zIndex: 1100,
      }}
    >
      <Container fluid style={{ paddingLeft: '20px', paddingRight: '40px' }}>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate('/')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            width: '280px', // bigger logo
            height: '200px',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Cavola Logo"
            style={{ height: '100%', objectFit: 'contain' }}
          />
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav
            className="mx-auto text-center"
            style={{
              display: 'flex',
              padding: '12.017px 30.041px',
              alignItems: 'flex-start',
              gap: '63.662px',
              borderRadius: '24.033px',
              background: '#F3F3F3',
            }}
          >
            <Nav.Link
              onClick={(e) => handleScrollTo(e, 'about')}
              className="px-3"
              style={{
                color: '#292121',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontWeight: 400,
                lineHeight: '38.197px',
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleScrollTo(e, 'services')}
              className="px-3"
              style={{
                color: '#292121',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontWeight: 400,
                lineHeight: '38.197px',
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/blog')} // ✅ Go to blog page directly
              className="px-3"
              style={{
                color: '#292121',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontWeight: 400,
                lineHeight: '38.197px',
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/contact')}
              className="px-3"
              style={{
                color: '#292121',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontWeight: 400,
                lineHeight: '38.197px',
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          {/* CTA Button */}
          <div className="text-center mt-3 mt-lg-0">
            <Button
              style={{
                color: '#FFF',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontWeight: 400,
                lineHeight: '38.197px',
                display: 'flex',
                width: '230.719px',
                padding: '6.008px 0',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12.017px',
                flexShrink: 0,
                borderRadius: '25.235px',
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
