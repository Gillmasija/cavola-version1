import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import your icons/images
import nepcLogo from '../assets/nepc.png';
import farmersIcon from '../assets/farmers.png';
import flags from '../assets/flags.png'; // (UK + Nigeria combined flag image)

export default function Certifications() {
  const items = [
    {
      image: nepcLogo,
      text: 'NEPC Certified Exporter',
    },
    {
      image: farmersIcon,
      text: 'Direct sourcing from farmers',
    },
    {
      image: flags,
      text: 'Proven UK–Nigeria trade network',
    },
  ];

  return (
    <section
      style={{
        background: '#f8b84a', // yellow background
        padding: '40px 0',
      }}
    >
      <Container>
        <Row className="text-center">
          {items.map((item, idx) => (
            <Col md={4} key={idx} className="mb-4 mb-md-0">
              <img
                src={item.image}
                alt={item.text}
                style={{
                  height: '60px',
                  marginBottom: '12px',
                  objectFit: 'contain',
                }}
              />
              <p style={{ fontWeight: '600', margin: 0 }}>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
