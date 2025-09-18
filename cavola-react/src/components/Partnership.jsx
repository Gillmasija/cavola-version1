import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import handshakeImg from '../assets/handshake.jpg'; // handshake image
import wheatImg from '../assets/wheat-bg.png';         // watermark wheat image
import polyIcon from '../assets/poly.svg';          // bullet icon

export default function GrowthJourney() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <Container style={{ maxWidth: '1200px' }}>
        <Row className="align-items-center g-5">
          {/* Left Side - Handshake Image with Button */}
          <Col md={6}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
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
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  background: 'rgba(255, 255, 255, 0.70)',
                  height: '117px',
                  padding: '34px 49px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                }}
              >
                <Button
                  style={{
                    color: '#FFF',
                    fontFamily: 'Raleway',
                    fontSize: '22.918px',
                    fontWeight: 400,
                    lineHeight: '38.197px',
                    display: 'flex',
                    padding: '5px 29px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '25.235px',
                    border: '9px solid rgba(255, 255, 255, 0.57)',
                    background: '#094D12',
                  }}
                >
                  Discuss Partnership Opportunities →
                </Button>
              </div>
            </div>
          </Col>

          {/* Right Side - Growth Journey with Wheat Watermark */}
          <Col md={6}>
            <div
              style={{
                background: '#094D12',
                borderRadius: '12px',
                padding: '40px',
                color: '#FFF',
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
                  opacity: 0.15,
                  height: '80%',
                  pointerEvents: 'none',
                }}
              />

              <h2
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '50px',
                  fontWeight: 700,
                  lineHeight: '61.68px',
                  marginBottom: '40px',
                  position: 'relative',
                  zIndex: 1,
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
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid #FFF',
                    marginBottom: '20px',
                    background: 'rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={polyIcon}
                    alt="bullet"
                    style={{
                      width: '18px',
                      height: '18px',
                      marginRight: '12px',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: 'Raleway',
                        fontWeight: 600,
                        fontSize: '24px',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: '18px', color: '#FFF' }}>
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
