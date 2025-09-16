import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavbarMain() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        boxShadow: 'none',
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s ease-in-out',
      }}
    >
      <Container fluid style={{ paddingLeft: '20px', paddingRight: '40px' }}>
        {/* Logo */}
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Cavola Logo" style={{ height: '120px' }} />
        </Navbar.Brand>

        {/* Hamburger Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            <Nav.Link onClick={(e) => handleScrollTo(e, 'about')} className="px-3">
              About Us
            </Nav.Link>
            <Nav.Link onClick={(e) => handleScrollTo(e, 'services')} className="px-3">
              Services
            </Nav.Link>
            <Nav.Link onClick={(e) => handleScrollTo(e, 'blog')} className="px-3">
              Blog
            </Nav.Link>
            <Nav.Link onClick={(e) => handleScrollTo(e, 'contact')} className="px-3">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Right CTA - moves below nav in mobile */}
          <div className="text-center mt-3 mt-lg-0">
            <Button
              style={{
                background: '#7CB342',
                border: 'none',
                borderRadius: '999px',
                padding: '8px 20px',
              }}
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Request a Quote
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
