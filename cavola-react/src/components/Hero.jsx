import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';

export default function Hero() {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      id="home"
      style={{
        background: '#fff', // match navbar background
        padding: '80px 0',
      }}
    >
      <Container className="d-flex align-items-center justify-content-between flex-wrap">
        {/* Left slideshow */}
        <div style={{ flex: 1, minWidth: 320, marginBottom: '20px' }}>
          <Carousel
            controls={false}
            indicators
            interval={4000}
            fade
            ride="carousel"   // 🔑 ensures autoplay works
            pause={false}     // 🔑 keeps it moving even if user hovers
          >
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    maxHeight: '680px',
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Right text block */}
        <div style={{ flex: 1, minWidth: 320, paddingLeft: '40px' }}>
          <h1 style={{ fontWeight: '700', lineHeight: '1.2', marginBottom: '20px' }}>
            Finding{' '}
            <span style={{ color: '#7CB342' }}>
              reliable agro-commodity suppliers
            </span>{' '}
            in West Africa shouldn’t be difficult.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '24px' }}>
            Inconsistent quality, weak logistics, and compliance risks cost buyers
            time and money. Cavola solves this by delivering trusted, certified
            agro-commodities and petrochemicals from Nigeria to global markets.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button
              style={{
                background: '#7CB342',
                border: 'none',
                borderRadius: '999px',
                padding: '10px 24px',
              }}
              onClick={() => navigate('/#contact')}
            >
              Request a Quote
            </Button>
            <Button
              variant="outline-dark"
              style={{
                borderRadius: '999px',
                padding: '10px 24px',
                borderWidth: '2px',
                fontWeight: 600,
              }}
              onClick={() => navigate('/#about')}
            >
              Book a Call with Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
