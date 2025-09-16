import React from 'react';
import { Container, Button } from 'react-bootstrap';
import leadershipImg from '../assets/leadership.jpg';

export default function Leadership() {
  return (
    <section id="leadership" style={{ background: '#154734', padding: '0' }}>
      <Container
        style={{
          maxWidth: '1200px',
          padding: '0 20px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '64px 0',
            width: '100%',
            flexWrap: 'wrap', // ✅ allow wrapping on mobile
          }}
        >
          {/* Left Side */}
          <div
            style={{
              flex: 1,
              padding: '0 20px',
              minWidth: '300px', // ✅ ensures it shrinks nicely
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                marginBottom: '18px',
                color: '#fff',
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              LEADERSHIP & GOVERNANCE
            </div>
            <h2
              style={{
                color: '#FFC94B',
                fontWeight: 700,
                fontSize: '2.2rem',
                marginBottom: '18px',
                lineHeight: '1.2',
              }}
            >
              Built on experience
              <br />
              you can trust
            </h2>
            <p
              style={{
                color: '#fff',
                fontSize: '1rem',
                marginBottom: '30px',
                maxWidth: '500px',
              }}
            >
              Our leadership team brings global experience in finance, agribusiness, and international trade.
            </p>

            {/* Spotlight Card */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                maxWidth: '100%', // ✅ take full width on mobile
                marginTop: '24px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div style={{ color: '#7CB342', fontWeight: 600, fontSize: '1rem', marginBottom: '8px' }}>
                Spotlight
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#154734', marginBottom: '8px' }}>
                Abolaji Olorunkoya <span style={{ fontWeight: 400, color: '#154734' }}>–</span>
                <span
                  style={{
                    color: '#7CB342',
                    fontWeight: 600,
                    fontSize: '1rem',
                    marginLeft: '6px',
                  }}
                >
                  Co-Founder & CEO
                </span>
              </div>
              <div style={{ color: '#666', fontSize: '1rem', marginBottom: '20px' }}>
                A seasoned finance executive with 20+ years of cross-continental experience, Abolaji bridges African farmers with global markets through ethical sourcing, innovation, and sustainable trade.
              </div>
              <Button
                style={{
                  background: '#fff',
                  color: '#154734',
                  border: '2px solid #154734',
                  borderRadius: '999px',
                  padding: '8px 22px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: 'none',
                }}
              >
                Connect With Us
              </Button>
            </div>
          </div>

          {/* Right Side - Responsive Image */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
              minWidth: '300px',
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
              }}
            >
              <img
                src={leadershipImg}
                alt="Abolaji Olorunkoya"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
