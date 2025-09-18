import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1E1E1E',
        color: '#fff',
        padding: '60px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {/* Left - Company Info */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3
          style={{
            fontFamily: 'Montserrat',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Cavola West Africa Limited
        </h3>
        <p
          style={{
            fontFamily: 'Raleway',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: '1.5',
            maxWidth: '380px',
            marginBottom: '20px',
          }}
        >
          From Nigeria’s farms to international buyers, we ensure compliance,
          consistency, and efficiency.
        </p>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
            <FaInstagram />
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
            <FaLinkedin />
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
            <FaFacebook />
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright under Left Column */}
        <p
          style={{
            fontFamily: 'Raleway',
            fontSize: '14px',
            fontWeight: 400,
            color: '#ccc',
            marginTop: '20px',
          }}
        >
          ©2025 Cavola Limited. All rights Reserved.
        </p>
      </div>

      {/* Middle - Contact */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h4
          style={{
            fontFamily: 'Raleway',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Contact
        </h4>
        <p>
          <strong>Nigeria:</strong> +234 802 465 5655 | +234 907 473 4419
        </p>
        <p>
          <strong>UK:</strong> +44 7943 612728
        </p>
        <p>
          <strong>Email:</strong> cavola@cavolawestafrica.com
        </p>
        <p>
          <strong>Nigeria Office:</strong> 2nd Floor, Oakland Centre, Plot 2940
          Aguiyi Ironsi Street, Maitama, Abuja
        </p>
        <p>
          <strong>UK Office:</strong> Cavola Limited, Registered Company
        </p>
      </div>

      {/* Right - Quick Links */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <h4
          style={{
            fontFamily: 'Raleway',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Quick Link
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
          <li>
            <a
              href="#about"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              Product & Services
            </a>
          </li>
          <li>
            <a
              href="#blog"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

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
