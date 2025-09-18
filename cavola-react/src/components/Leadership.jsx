import React from 'react';
import { Container, Button } from 'react-bootstrap';
import leadershipImg from '../assets/leadership.jpg';

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        background: '#094D12',
        width: '1729px',
        height: '809px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        style={{
          maxWidth: '1600px',
          padding: '0 40px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          {/* Leadership & Governance */}
          <div
            style={{
              height: '23px',
              flexShrink: 0,
              alignSelf: 'stretch',
              color: '#FFF',
              fontFamily: 'Raleway',
              fontSize: '18.707px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24.943px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            LEADERSHIP & GOVERNANCE
          </div>

          {/* Built on Experience */}
          <h2
            style={{
              width: '479px',
              height: '123px',
              flexShrink: 0,
              color: '#F7C35F',
              fontFamily: 'Raleway',
              fontSize: '50px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '61.68px',
              marginBottom: '20px',
            }}
          >
            Built on experience
            <br />
            you can trust
          </h2>

          {/* Description */}
          <p
            style={{
              width: '551px',
              height: '64px',
              flexShrink: 0,
              color: '#FFF',
              fontFamily: 'Raleway',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              marginBottom: '40px',
            }}
          >
            Our leadership team brings global experience in finance, agribusiness, and international trade.
          </p>

          {/* Spotlight Card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              marginTop: '80px',
              position: 'relative',
              zIndex: 2,
              width:'850px',
              height:'370px',
            }}
          >
            {/* Spotlight */}
            <div
              style={{
                width: '227px',
                height: '28.891px',
                flexShrink: 0,
                color: '#86AD43',
                fontFamily: 'Raleway',
                fontSize: '23.695px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '29.23px',
                marginBottom: '12px',
              }}
            >
              Spotlight
            </div>

            {/* Abolaji + Role */}
            <div
              style={{
                width: '1200px',
                height: '60px',
                flexShrink: 0,
                fontFamily: 'Raleway',
                fontSize: '50px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '61.68px',
                marginBottom: '16px',
                color: '#1E1E1E',
              }}
            >
              Abolaji Olorunkoya –{' '}
              <span
                style={{
                  color: '#86AD43',
                  fontFamily: 'Raleway',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '61.68px',
                }}
              >
                Co-Founder & CEO
              </span>
            </div>

            {/* Description */}
            <div
              style={{
                width: '755px',
                height: '96px',
                flexShrink: 0,
                color: '#1E1E1E',
                fontFamily: 'Raleway',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px',
                marginBottom: '32px',
              }}
            >
              A seasoned finance executive with 20+ years of cross-continental experience, Abolaji bridges
              African farmers with global markets through ethical sourcing, innovation, and sustainable trade.
            </div>

            {/* Button */}
            <Button
              style={{
                display: 'inline-flex',
                padding: '5px 29px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '25.235px',
                border: '1px solid #094D12',
                background: '#fff',
                color: '#094D12',
                fontFamily: 'Raleway',
                fontSize: '22.918px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '38.197px',
              }}
            >
              Connect With Us
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          style={{
            width: '730px',
            height: '604px',
            flexShrink: 0,
            borderRadius: '10px',
            background: `url(${leadershipImg}) lightgray 50% / cover no-repeat`,
          }}
        />
      </Container>
    </section>
  );
}
