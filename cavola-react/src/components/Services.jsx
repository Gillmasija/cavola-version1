import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Certification() {
  return (
    <section
      className="section"
      style={{
        background: '#FAF9F6', // light background
        textAlign: 'center',
        padding: '80px 0',
      }}
    >
      <Container style={{ maxWidth: '900px' }}>
        {/* Heading */}
        <h2
          style={{
            fontWeight: 700,
            fontSize: '2.4rem',
            marginBottom: '20px',
          }}
        >
          <span style={{ color: '#1B5E20' }}>Certified.</span>{' '}
          <span style={{ color: '#4CAF50' }}>Compliant.</span>{' '}
          <span style={{ color: '#FFC94B' }}>Trusted.</span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: '1.1rem',
            color: '#444',
            marginBottom: '40px',
            lineHeight: '1.6',
          }}
        >
          Cavola West Africa Limited is an accredited exporter with the Nigerian
          Export Promotion Council (NEPC), giving global buyers confidence in every
          trade.
        </p>

        {/* Button */}
        <Button
          style={{
            backgroundColor: '#8BC34A',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '999px',
            padding: '12px 28px',
            fontSize: '1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          Download Certificate →
        </Button>
      </Container>
    </section>
  );
}
