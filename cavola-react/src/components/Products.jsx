import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import productImg1 from '../assets/product1.png'; // Cocoa pod
import productImg2 from '../assets/product2.jpg'; // Bag image
import yellowArrow from '../assets/poly.svg';
import wheatBg from '../assets/wheat-bg.png';


export default function Products() {
  return (
    <section id="products" style={{ padding: '80px 0' }}>
      <Container>
        <Row className="g-5">
          {/* Cocoa Pod */}
          <Col lg={3} md={12}>
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                borderRadius: '10px',
                background: `url(${productImg1}) center/cover no-repeat`,
              }}
            ></div>
          </Col>

          {/* Bag + Clients */}
          <Col lg={3} md={12} className="d-flex flex-column justify-content-between">
            {/* Bag Image */}
            <div
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '10px',
                background: '#FFF',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              <img
                src={productImg2}
                alt="Bagged Product"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Clients Box */}
            <div
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '10px',
                background: '#86AD43',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  color: '#FFF',
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                68+
              </div>
              <div
                style={{
                  color: '#FFF',
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '1px',
                }}
              >
                SATISFIED CLIENTS
              </div>
            </div>
          </Col>

          {/* Text + Agro Commodities */}
          <Col lg={6} md={12}>
            <p
              style={{
                color: '#1E1E1E',
                fontFamily: 'Raleway',
                fontSize: '16px',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Products & Services
            </p>

            <h2
              style={{
                color: '#094D12',
                fontFamily: 'Raleway',
                fontSize: '42px',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              For Importers & Buyers
            </h2>

            <p
              style={{
                color: '#1E1E1E',
                fontFamily: 'Raleway',
                fontSize: '18px',
                marginBottom: '24px',
              }}
            >
              We supply premium agricultural commodities with guaranteed quality and compliance.
            </p>

            <div
              style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '32px',
                background: '#F9F9F7',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                minHeight: '420px',
                overflow: 'hidden',
              }}
            >
              <h5
                style={{
                  color: '#86AD43',
                  fontFamily: 'Raleway',
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Agro-Commodities
              </h5>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontFamily: 'Raleway',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#094D12',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
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
                ].map((item, index, arr) =>
                  item === 'Rubber' ? (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={yellowArrow}
                          alt=""
                          style={{ width: 16, height: 16, marginRight: 10 }}
                        />
                        {item}
                      </div>

                      {/* Button next to last item */}
                      <Button
                        style={{
                          borderRadius: '25px',
                          background: '#094D12',
                          border: 'none',
                          padding: '8px 24px',
                          fontFamily: 'Raleway',
                          fontSize: '16px',
                        }}
                      >
                        Partner with Us →
                      </Button>
                    </li>
                  ) : (
                    <li
                      key={item}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
                    >
                      <img
                        src={yellowArrow}
                        alt=""
                        style={{ width: 16, height: 16, marginRight: 10 }}
                      />
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Wheat background */}
              <img
                src={wheatBg}
                alt="Wheat background"
                style={{
                  position: 'absolute',
                  right: '20px',
                  bottom: '20px',
                  width: '160px',
                  opacity: 0.25,
                  zIndex: 1,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
