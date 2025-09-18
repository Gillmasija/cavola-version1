import React, { useEffect, useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';

export default function Hero() {
  const images = [
    { src: hero1, caption: 'Cocoa' },
    { src: hero2, caption: 'Coffee' },
    { src: hero3, caption: 'Sesame' },
    { src: hero4, caption: 'Hibiscus' },
    { src: hero5, caption: 'Chilli Pepper' },
  ];

  const navigate = useNavigate();

  // For smooth fade-in on the right text
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // slight delay for smoothness
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{
        background: '#fff',
        padding: '20px 0 80px 0',
      }}
    >
      <Container className="d-flex align-items-center justify-content-between flex-wrap">
        {/* Left slideshow */}
        <div style={{ flex: 1, minWidth: 320, marginBottom: '20px' }}>
          <Carousel
            controls={false}
            indicators
            interval={4000} // 4s per slide
            fade
            ride="carousel"
            pause={false}
          >
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    maxHeight: '680px',
                    transition: 'opacity 1.2s ease-in-out', // smooth fade
                  }}
                />
                <p
                  style={{
                    alignSelf: 'stretch',
                    color: '#86AD43',
                    textAlign: 'center',
                    fontFamily: 'Raleway',
                    fontSize: '42.627px',
                    fontStyle: 'normal',
                    lineHeight: '102px',
                    marginTop: '24px',
                    marginBottom: 0,
                    border: 'none',
                    textDecoration: 'none',
                    transition: 'all 0.8s ease-in-out', // smooth text fade
                  }}
                >
                  {img.caption}
                </p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Right text block */}
        <div
          style={{
            flex: 1,
            minWidth: 320,
            paddingLeft: '40px',
            opacity: loaded ? 1 : 0, // fade-in effect
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Raleway',
              fontSize: '59.224px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '68.108px',
              marginBottom: '20px',
              borderBottom: 'none',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: '#094D12' }}>Finding </span>
            <span style={{ color: '#86AD43' }}>
              reliable agro-commodity suppliers
            </span>
            <span style={{ color: '#094D12' }}>
              {' '}
              in West Africa shouldn’t be difficult.
            </span>
          </h1>

          {/* Paragraph */}
          <p
            style={{
              width: '789px',
              maxWidth: '100%',
              color: '#1E1E1E',
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontStyle: 'normal',
              lineHeight: '32px',
              marginBottom: '32px',
            }}
          >
            Inconsistent quality, weak logistics, and compliance risks cost
            buyers time and money. Cavola solves this by delivering trusted,
            certified agro-commodities and petrochemicals from Nigeria to global
            markets.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {/* Request Quote Button */}
            <Button
              style={{
                display: 'flex',
                padding: '5px 29px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '25.235px',
                background: '#86AD43',
                color: '#FFF',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '38.197px',
                border: 'none',
              }}
              onClick={() => navigate('/#contact')}
            >
              Request a Quote
            </Button>

            {/* Book a Call Button */}
            <Button
              style={{
                display: 'flex',
                padding: '5px 29px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '25.235px',
                border: '1px solid #094D12',
                background: 'transparent',
                color: '#094D12',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '38.197px',
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
