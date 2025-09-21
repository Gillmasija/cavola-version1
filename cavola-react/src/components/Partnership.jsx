import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import handshakeImg from '../assets/handshake.jpg'; // handshake image
import wheatImg from '../assets/wheat-bg.png';     // watermark wheat image
import polyIcon from '../assets/poly.svg';         // yellow bullet icon

export default function GrowthJourney() {
  const items = [
    {
      title: 'Today',
      text: 'Trading high-value crops and petrochemicals, sourced responsibly and delivered efficiently.',
    },
    {
      title: 'Tomorrow',
      text: 'Expanding into value-added processing — transforming raw crops into premium powders, oils, and extracts.',
    },
    {
      title: 'Future',
      text: 'Owning plantations to guarantee traceability, quality, and sustainability across the entire farm-to-market chain.',
    },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <Container style={{ maxWidth: '1200px' }}>
        <Row className="align-items-center g-5">
          {/* Left Side - Handshake */}
          <Col md={6}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src={handshakeImg}
                alt="Handshake"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                }}
              />
              {/* Button Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    padding: '15px 25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <Button
                    style={{
                      background: '#094D12',
                      border: '3px solid #fff',
                      borderRadius: '30px',
                      color: '#fff',
                      fontFamily: 'Raleway',
                      fontSize: '18px',
                      fontWeight: 500,
                      padding: '10px 25px',
                    }}
                  >
                    Discuss Partnership Opportunities →
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Growth Journey */}
          <Col md={6}>
            <div
              style={{
                background: '#094D12',
                borderRadius: '12px',
                padding: '40px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Wheat watermark */}
              <img
                src={wheatImg}
                alt="wheat watermark"
                style={{
                  position: 'absolute',
                  right: '30px',
                  bottom: '20px',
                  opacity: 0.1,
                  height: '85%',
                  pointerEvents: 'none',
                }}
              />

              {/* Heading */}
              <h2
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '40px',
                  fontWeight: 700,
                  marginBottom: '30px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Our growth journey
              </h2>

              {/* Cards */}
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid #fff',
                    marginBottom: '20px',
                    background: 'rgba(255,255,255,0.05)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={polyIcon}
                    alt="bullet"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '12px',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: 'Raleway',
                        fontWeight: 600,
                        fontSize: '22px',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: '16px', color: '#fff' }}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
