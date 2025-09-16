import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: '#154734', // dark green background
        padding: '80px 0',
      }}
    >
      <Container style={{ maxWidth: '700px' }}>
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}
        >
          {/* Heading */}
          <h2 style={{ color: '#154734', fontWeight: 700, marginBottom: '10px' }}>
            Let’s Talk Business
          </h2>
          <p style={{ color: '#333', marginBottom: '30px', fontSize: '1rem' }}>
            Looking for premium Nigerian agro-commodities or ready to
            partner with a trusted exporter?
          </p>

          {/* Contact Form */}
          <Form>
            <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{
                  borderRadius: '10px',
                  padding: '12px 16px',
                  border: '1px solid #ccc',
                }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  borderRadius: '10px',
                  padding: '12px 16px',
                  border: '1px solid #ccc',
                }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" style={{ marginBottom: '30px' }}>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                style={{
                  borderRadius: '10px',
                  padding: '12px 16px',
                  border: '1px solid #ccc',
                }}
              />
            </Form.Group>

            {/* Button */}
            <Button
              type="submit"
              style={{
                background: '#7CB342', // lighter green
                border: 'none',
                borderRadius: '999px',
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: '1rem',
                width: '100%',
              }}
            >
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
}
