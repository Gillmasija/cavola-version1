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
    height: '23.003px',
    alignSelf: 'stretch',
    color: '#1E1E1E',
    fontFamily: 'Raleway',
    fontSize: '18.71px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24.946px', // 133.333%
    textTransform: 'uppercase',
    marginBottom: '12px',
  }}
>
  ABOUT CAVOLA
</p>

<h2
  style={{
    height: '123.181px',
    alignSelf: 'stretch',
    color: '#094D12',
    fontFamily: 'Raleway',
    fontSize: '50.007px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '61.688px', // 123.359%
    marginBottom: '0',
  }}
>
  Your reliable partner in African <br />
  Agro-commodity trade
</h2>

          </Col>
        </Row>

        {/* Green full-width box with text + pop-out image */}
        <Row
          className="align-items-center mb-5"
          style={{
            background: '#094D12',
            borderRadius: '13.002px',
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
            <p
              style={{
                width: '641px',
                height: '276px',
                flexShrink: 0,
                color: '#FFF',
                fontFamily: 'Raleway',
                fontSize: '29.004px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '46.006px', // 158.621%
                marginBottom: '28px',
                marginTop: '8px',
              }}
            >
              At Cavola West Africa Limited, we help importers, manufacturers,
              and partners secure high-quality agricultural products without the
              usual risks. From Nigeria’s farms to international buyers, we
              ensure compliance, consistency, and efficiency.
            </p>
            <Button
              style={{
                display: 'inline-flex',
                padding: '5.001px 29.004px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10.001px',
                borderRadius: '25.238px',
                border: '9.001px solid rgba(255, 255, 255, 0.57)',
                background: '#86AD43',
                color: '#FFF',
                fontFamily: 'Raleway',
                fontSize: '22.922px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '38.203px', // 166.667%
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
                height: '900px',
                flexShrink: 0,
                aspectRatio: '141/136',
                marginTop: '-390px',
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
  <div
    className="h-100 text-center p-4"
    style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '65.009px 74.01px 64.009px 60.008px',
      borderRadius: '11.001px',
      border: '1px solid rgba(9, 77, 18, 0.46)',
      background: '#fff',
      width: '100%',
      height: '100%',
    }}
  >
    {/* Icon */}
    <img
      src={octgoalImg}
      alt="Mission Icon"
      style={{
        width: '86.012px',
        height: '86.012px',
        marginBottom: '16px',
        objectFit: 'contain',
      }}
    />

    {/* Title */}
    <h5
      style={{
        color: '#1E1E1E',
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '30.004px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '61.688px', // 205.598%
        marginBottom: '12px',
      }}
    >
      Our Mission
    </h5>

    {/* Text */}
    <p
      style={{
        width: '328.044px',
        height: '95.013px',
        margin: '0 auto',
        color: '#1E1E1E',
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '20.003px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '32.004px', // 160%
      }}
    >
      To make African agro-commodity trade transparent, ethical, and reliable
      for every buyer and partner.
    </p>
  </div>
</Col>


          {/* Vision */}
<Col md={4}>
  <div
    className="h-100 text-center p-4"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 30px',
      borderRadius: '11.001px',
      border: '1px solid rgba(9, 77, 18, 0.46)',
      background: '#fff',
      height: '100%',
    }}
  >
    {/* Icon */}
    <img
      src={visionImg}
      alt="Vision Icon"
      style={{
        width: '86.012px',
        height: '86.012px',
        marginBottom: '16px',
        objectFit: 'contain',
      }}
    />

    {/* Title */}
    <h5
      style={{
        color: '#1E1E1E',
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '30.004px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '38px',
        marginBottom: '12px',
      }}
    >
      Our Vision
    </h5>

    {/* Text */}
    <p
      style={{
        color: '#1E1E1E',
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '20.003px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '32.004px', // 160%
        margin: 0,
      }}
    >
      To be West Africa’s most trusted integrated agricultural company,
      bridging African supply bases with global markets.
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
              <h5 style={{ fontWeight: '600', textAlign: 'center',fontFamily: 'Raleway', fontSize: '30.004px', marginBottom: '16px' }}>
                Our Values
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' , fontFamily: 'Raleway', fontSize: '20.003px', lineHeight: '41.005px'}}>
                <li
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                >
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Reliability you can count on
                </li>
                <li
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                >
                  <img src={polyImg} alt="" style={{ width: 24, height: 24, marginRight: 10 }} />
                  Consistency in every shipment
                </li>
                <li
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                >
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
