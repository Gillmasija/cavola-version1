import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Certification() {
  return (
    <section
      style={{
        background: '#F6F4EF',
        padding: '70px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0px',
      }}
    >
      <Container style={{ textAlign: 'center', maxWidth: '1000px' }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: 'clamp(32px, 5vw, 64px)',
            marginBottom: '20px',
          }}
        >
          <span style={{ color: '#094D12' }}>Certified.</span>{' '}
          <span style={{ color: '#86AD43' }}>Compliant.</span>{' '}
          <span style={{ color: '#F7C35F' }}>Trusted.</span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            color: '#1E1E1E',
            fontFamily: 'Raleway',
            fontSize: 'clamp(16px, 2vw, 24px)',
            fontWeight: 400,
            lineHeight: 1.5,
            marginBottom: '40px',
          }}
        >
          Cavola West Africa Limited is an accredited exporter with the Nigerian
          Export Promotion Council (NEPC), giving global buyers confidence in every
          trade.
        </p>

        {/* Centered Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '25px',
              border: 'none',
              background: '#86AD43',
              color: '#FFF',
              fontFamily: 'Raleway',
              fontSize: '18px',
              fontWeight: 500,
              padding: '10px 30px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#6e8f35')}
            onMouseOut={(e) => (e.target.style.background = '#86AD43')}
          >
            Download Certificate →
          </Button>
        </div>
      </Container>
    </section>
  );
}
