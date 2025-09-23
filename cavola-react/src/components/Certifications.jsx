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
        display: 'flex',
        padding: '20.101px 137.5px 28.398px 137px',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F7C35F',
        marginTop: '-150px',
      }}
    >
      <Container>
        <Row className="text-center">
          {items.map((item, idx) => (
            <Col
              md={4}
              key={idx}
              className="mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              <img
                src={item.image}
                alt={item.text}
                style={{
                  width: '180px',  // same width for all
                  height: '180px', // same height for all
                  objectFit: 'contain',
                  marginBottom: '12px',
                }}
              />
              <p
                style={{
                  color: '#094D12',
                  textAlign: 'center',
                  fontFamily: 'Raleway',
                  fontSize: '18.988px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '36.265px',
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
