import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import productImg1 from '../assets/product1.png';
import productImg2 from '../assets/product2.jpg';
import yellowArrow from '../assets/poly.svg'; // Use the same arrow SVG as About cards

export default function Products() {
  return (
    <section className="section bg-white" id="products" style={{ padding: '64px 0' }}>
      <Container>
        <Row className="align-items-start g-4">
          {/* Left side images and stats */}
          <Col lg={6}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '700px' }}>
              <img
                src={productImg1}
                alt="Cocoa pod"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  flex: '2 1 0%',
                  marginBottom: '0',
                }}
              />
            </div>
          </Col>
          <Col lg={3} style={{ display: 'flex', flexDirection: 'column', height: '700px', justifyContent: 'space-between' }}>
            <img
              src={productImg2}
              alt="Bagged product"
              style={{
                width: '100%',
                height: '48%',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '24px',
              }}
            />
            <div
              style={{
                background: '#7CB342',
                color: '#fff',
                borderRadius: '12px',
                textAlign: 'center',
                padding: '32px 0',
                fontWeight: 700,
                fontSize: '2.8rem',
                marginBottom: '0',
                height: '48%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              68+
              <div style={{ fontSize: '1rem', fontWeight: 400, marginTop: '8px', letterSpacing: '1px' }}>
                SATISFIED CLIENTS
              </div>
            </div>
          </Col>

          {/* Right side text and commodities */}
          <Col lg={3}>
            <div style={{ marginBottom: '12px', fontSize: '0.95rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>
              PRODUCTS & SERVICES
            </div>
            <h2 style={{ color: '#154734', fontWeight: 700, fontSize: '2rem', marginBottom: '12px' }}>
              For Importers & Buyers
            </h2>
            <p style={{ color: '#333', fontSize: '1.05rem', marginBottom: '24px' }}>
              We supply premium agricultural commodities with guaranteed quality and compliance.
            </p>
            <div
              style={{
                background: '#FAFAF3',
                borderRadius: '16px',
                padding: '32px 32px 32px 32px',
                position: 'relative',
                minHeight: '480px',
                height: '480px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontWeight: 600, color: '#7CB342', fontSize: '1.25rem', marginBottom: '18px' }}>
                Agro-Commodities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.08rem', color: '#154734', fontWeight: 500 }}>
                {[
                  'Ginger',
                  'Turmeric',
                  'Sesame',
                  'Hibiscus',
                  'Chili Pepper',
                  'Coffee',
                  'Cocoa',
                  'Oil Palm',
                  'Cotton',
                  'Rubber',
                ].map((item, idx) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img src={yellowArrow} alt="" style={{ width: 18, height: 18, marginRight: 12 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <img
                src="/assets/wheat-bg.svg"
                alt=""
                style={{
                  position: 'absolute',
                  right: '24px',
                  bottom: '24px',
                  width: '120px',
                  opacity: 0.18,
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div style={{ marginTop: '24px', zIndex: 1 }}>
                <Button
                  style={{
                    background: '#154734',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '10px 28px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Partner with Us <span style={{ fontSize: '1.2em', marginLeft: '8px' }}>→</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}