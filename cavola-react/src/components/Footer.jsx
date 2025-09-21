import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1E1E1E',
        color: '#fff',
        padding: '60px 40px',
        marginTop: 'auto', // pushes footer down
      }}
    >
      {/* Wrapper */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Left - Company Info */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h3
            style={{
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Cavola West Africa Limited
          </h3>
          <p
            style={{
              fontFamily: 'Raleway',
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: '1.5',
              marginBottom: '24px',
              maxWidth: '420px',
            }}
          >
            From Nigeria’s farms to international buyers, we ensure compliance,
            consistency, and efficiency.
          </p>

          {/* Social Media Icons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
              <FaInstagram />
            </a>
            <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
              <FaLinkedin />
            </a>
            <a href="#" style={{ color: '#fff', fontSize: '24px' }}>
              <FaFacebook />
            </a>
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: 'Raleway',
              fontSize: '16px',
              fontWeight: 300,
              color: '#ccc',
              marginTop: '20px',
            }}
          >
            ©2025 Cavola Limited. All rights Reserved.
          </p>
        </div>

        {/* Middle - Contact */}
        <div style={{ flex: '1', minWidth: '260px' }}>
          <h4
            style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Contact
          </h4>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#f0f0f0' }}>Nigeria:</strong> +234 802 465
            5655 | +234 907 473 4419
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#f0f0f0' }}>UK:</strong> +44 7943 612728
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#f0f0f0' }}>Email:</strong>{' '}
            cavola@cavolawestafrica.com
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#f0f0f0' }}>Nigeria Office:</strong> 2nd
            Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street, Maitama,
            Abuja
          </p>
          <p>
            <strong style={{ color: '#f0f0f0' }}>UK Office:</strong> Cavola
            Limited, Registered Company
          </p>
        </div>

        {/* Right - Quick Links */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h4
            style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Quick Link
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            {['About', 'Product & Services', 'Blog', 'Contact'].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/ & /g, '-')}`}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
