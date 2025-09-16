import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../assets/contact.png'; // <-- replace with your turmeric image

export default function ContactPage() {
  return (
    <section className="section">
      {/* Hero Banner */}
      <div style={{ background: '#2E7D32', padding: '60px 0', textAlign: 'center' }}>
        <img src={contactImg} alt="Contact" style={{ maxHeight: '200px' }} />
        <h2 style={{ color: 'white', marginTop: '20px' }}>Contact Us</h2>
      </div>

      <Container className="my-5">
        <Row>
          {/* Left Column - Contact Info */}
          <Col md={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-3">
                <Card className="p-3 text-center shadow-sm">
                  <FaPhoneAlt size={30} color="#7CB342" className="mb-2" />
                  <h6>Phone</h6>
                  <p className="mb-1">+234 805 456 0951</p>
                  <p className="mb-0">+234 707 474 4430</p>
                </Card>
              </Col>

              <Col md={6} className="mb-3">
                <Card className="p-3 text-center shadow-sm">
                  <FaEnvelope size={30} color="#7CB342" className="mb-2" />
                  <h6>Email</h6>
                  <p>cavolaltd@newmailservice.com</p>
                </Card>
              </Col>

              <Col md={12}>
                <Card className="p-3 text-center shadow-sm">
                  <FaMapMarkerAlt size={30} color="#7CB342" className="mb-2" />
                  <h6>Nigeria Office</h6>
                  <p>2nd Floor, Cavola Centre, Plot 1428 Ahmadu Bello Way, Abuja</p>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Right Column - Contact Form */}
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h5 className="mb-3">Let’s Talk Business</h5>
              <p>Looking for partnership or have a question? Reach out to us!</p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Message" />
                </Form.Group>
                <Button
                  style={{
                    background: '#7CB342',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '10px 20px',
                  }}
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
