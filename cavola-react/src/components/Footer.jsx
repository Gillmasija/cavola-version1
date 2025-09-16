import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '60px 0 20px',
        position: 'relative',
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Left - Company Info */}
          <Col md={4}>
            <h5 style={{ fontWeight: 700, marginBottom: '16px' }}>Cavola West Africa Limited</h5>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
              From Nigeria’s farms to international buyers, we ensure compliance, consistency, and efficiency.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', fontSize: '1.3rem' }}>
              <a href="#" style={{ color: '#fff' }}><FaInstagram /></a>
              <a href="#" style={{ color: '#fff' }}><FaLinkedin /></a>
              <a href="#" style={{ color: '#fff' }}><FaFacebook /></a>
              <a href="#" style={{ color: '#fff' }}><FaTwitter /></a>
            </div>
          </Col>

          {/* Middle - Contact */}
          <Col md={4}>
            <h5 style={{ fontWeight: 700, marginBottom: '16px' }}>Contact</h5>
            <p style={{ marginBottom: '8px' }}>
              <strong>Nigeria:</strong> +234 802 465 5655 | +234 907 473 4419
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>UK:</strong> +44 7943 612728
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Email:</strong> cavola@cavolawestafrica.com
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Nigeria Office:</strong> 2nd Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street, Maitama, Abuja
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>UK Office:</strong> Cavola Limited, Registered Company
            </p>
          </Col>

          {/* Right - Quick Links */}
          <Col md={4}>
            <h5 style={{ fontWeight: 700, marginBottom: '16px' }}>Quick Link</h5>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Product & Services</a></li>
              <li><a href="#blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            marginTop: '40px',
            paddingTop: '20px',
            fontSize: '0.9rem',
            color: '#aaa',
          }}
        >
          ©2025 Cavola Limited. All rights reserved.
        </div>
      </Container>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348024655655"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          width: '55px',
          height: '55px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000,
        }}
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
