import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import handshakeImg from '../assets/handshake.jpg'; // replace with actual path
import polyIcon from '../assets/poly.svg'; // the arrow bullet svg

export default function GrowthJourney() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <Container style={{ maxWidth: '1200px' }}>
        <Row className="align-items-center g-5">
          {/* Left Side */}
          <Col md={6}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '100%',       // 🔑 makes container stretch
              }}
            >
              <img
                src={handshakeImg}
                alt="Handshake"
                style={{
                  width: '100%',
                  height: '500px',     // 🔑 increased height
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: '#fff',
                  padding: '12px 16px',
                  borderRadius: '8px',
                }}
              >
                <Button
                  style={{
                    background: '#154734',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '10px 22px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Discuss Partnership Opportunities →
                </Button>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <div
              style={{
                background: '#154734',
                borderRadius: '12px',
                padding: '40px',
                color: '#fff',
                height: '100%',        // 🔑 helps keep heights balanced
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: '2rem',
                  marginBottom: '30px',
                }}
              >
                Our growth journey
              </h2>

              {/* Bullet Items */}
              {[
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
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={polyIcon}
                    alt="bullet"
                    style={{
                      width: '18px',
                      height: '18px',
                      marginRight: '12px',
                      marginTop: '6px',
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '8px',
                      padding: '16px 20px',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: '1rem', color: '#ddd' }}>
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
