import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Certification() {
  return (
    <section
      style={{
        display: 'flex',
        width: '1729px',
        padding: '73px 389px 73px 390px',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F6F4EF',
      }}
    >
      <Container
        style={{
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <div
          style={{
            height: '60px',
            alignSelf: 'stretch',
            marginBottom: '30px',
          }}
        >
          <span
            style={{
              color: '#094D12',
              fontFamily: 'Raleway',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: '61.68px',
            }}
          >
            Certified.
          </span>{' '}
          <span
            style={{
              color: '#86AD43',
              fontFamily: 'Raleway',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: '61.68px',
            }}
          >
            Compliant.
          </span>{' '}
          <span
            style={{
              color: '#F7C35F',
              fontFamily: 'Raleway',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: '61.68px',
            }}
          >
            Trusted.
          </span>
        </div>

        {/* Subheading */}
        <p
          style={{
            height: '95px',
            alignSelf: 'stretch',
            color: '#1E1E1E',
            textAlign: 'center',
            fontFamily: 'Raleway',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '32px',
            marginBottom: '40px',
          }}
        >
          Cavola West Africa Limited is an accredited exporter with the Nigerian
          Export Promotion Council (NEPC), giving global buyers confidence in every
          trade.
        </p>

        {/* Centered Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            style={{
              display: 'flex',
              padding: '5px 29px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '25.235px',
              border: '9px solid rgba(255, 255, 255, 0.57)',
              background: '#86AD43',
              color: '#FFF',
              fontFamily: 'Raleway',
              fontSize: '22.918px',
              fontWeight: 400,
              lineHeight: '38.197px',
            }}
          >
            Download Certificate →
          </Button>
        </div>
      </Container>
    </section>
  );
}
