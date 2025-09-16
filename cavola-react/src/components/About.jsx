import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImg from '../assets/about.png';
import octgoalImg from '../assets/octgoal.svg';
import visionImg from '../assets/vision.svg';
import polyImg from '../assets/poly.svg';

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 0' }}>
      <Container>
        {/* Heading */}
        <Row className="mb-4">
          <Col>
            <p
              style={{
                textTransform: 'uppercase',
                color: '#666',
                fontSize: '0.85rem',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              ABOUT CAVOLA
            </p>
            <h2
              style={{
                fontWeight: '700',
                color: '#154734',
                fontSize: '2.2rem',
                lineHeight: '1.2',
                marginBottom: '0',
              }}
            >
              Your reliable partner in African<br />
              Agro-commodity trade
            </h2>
          </Col>
        </Row>

        {/* Green full-width box with text + pop-out image */}
        <Row
          className="align-items-center mb-5"
          style={{
            background: '#154734',
            borderRadius: '12px',
            overflow: 'visible',
            position: 'relative',
            minHeight: '180px',
          }}
        >
          {/* Text */}
          <Col
            md={6}
            className="p-5"
            style={{
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '320px',
            }}
          >
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '28px', marginTop: '8px' }}>
              At Cavola West Africa Limited, we help importers, manufacturers, and partners secure high-quality agricultural products without the usual risks. From Nigeria’s farms to international buyers, we ensure compliance, consistency, and efficiency.
            </p>
            <Button
              style={{
                background: '#7CB342',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '12px 28px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                width: 'fit-content',
              }}
            >
              Explore Our Products <span style={{ fontSize: '1.2em', marginLeft: '6px' }}>→</span>
            </Button>
          </Col>

          {/* Image */}
          <Col
            md={6}
            className="position-relative d-flex justify-content-center align-items-start"
            style={{
              minHeight: '320px',
              padding: 0,
            }}
          >
            <img
              src={aboutImg}
              alt="About Cavola"
              style={{
                width: '600px',
                height: '578px',
                flexShrink: 0,
                aspectRatio: '141/136',
                marginTop: '-240px',
                marginRight: '-40px',
                zIndex: 2,
                borderRadius: '0',
                objectFit: 'cover',
              }}
            />
          </Col>
        </Row>

        {/* Mission / Vision / Values */}
        <Row className="g-4 mt-4">
          {/* Mission */}
          <Col md={4}>
            <div className="h-100 text-center p-4 border-0 shadow-sm" style={{ background: '#fff', borderRadius: '12px' }}>
              <img src={octgoalImg} alt="Mission" style={{ width: 40, height: 40, marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
              <h5 style={{ fontWeight: '600' }}>Our Mission</h5>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>
                To make African agro-commodity trade transparent, ethical, and reliable for every buyer and partner.
              </p>
            </div>
          </Col>

          {/* Vision */}
          <Col md={4}>
            <div className="h-100 text-center p-4 border-0 shadow-sm" style={{ background: '#fff', borderRadius: '12px' }}>
              <img src={visionImg} alt="Vision" style={{ width: 40, height: 40, marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
              <h5 style={{ fontWeight: '600' }}>Our Vision</h5>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>
                To be West Africa’s most trusted integrated agricultural company, bridging African supply bases with global markets.
              </p>
            </div>
          </Col>

          {/* Values */}
          <Col md={4}>
            <div
              className="h-100 p-4"
              style={{
                background: '#7CB342',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
              }}
            >
              <h5 style={{ fontWeight: '600', textAlign: 'center' }}>Our Values</h5>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Reliability you can count on
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Consistency in every shipment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Transparent, ethical trade
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Long-term partnerships
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}