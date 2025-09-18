import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "../assets/contact.png";

export default function ContactPage() {
  return (
    <section className="section">
      {/* ✅ Banner Section */}
      <div
        style={{
          background: "#094D12",
          padding: "60px 0",
          textAlign: "center",
          width: "100%",          // ✅ full width
          height: "400px",        // ✅ banner height
          borderRadius: "0",      // ✅ edge-to-edge, remove rounding
          position: "relative",   // ✅ allows overlay
          overflow: "hidden",
        }}
      >
        {/* Banner Image */}
        <img
          src={contactImg}
          alt="Contact"
          style={{
            position: "absolute",
            bottom: 0,
            right: "50px",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* Contact Us text */}
        <h2
          style={{
            color: "#F7C35F",
            fontFamily: "Raleway",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "61.68px",
            margin: 0,
            textAlign: "left",
            position: "relative", // ✅ keeps text above image
            zIndex: 2,
            paddingLeft: "80px",
            paddingTop: "80px",
          }}
        >
          Contact Us
        </h2>
      </div>

      {/* ✅ Contact Info + Form stays same */}
      <Container className="my-5">
        <Row>
          {/* LEFT SIDE (Contact Info) */}
          <Col md={6}>
            <Row>
              {/* Phone */}
              <Col md={6} className="mb-4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      borderRadius: "10px",
                      background: "#86AD43",
                      marginBottom: "15px",
                    }}
                  >
                    <FaPhoneAlt size={30} color="#fff" />
                  </div>
                  <h6 style={{ fontWeight: 700, marginBottom: "10px" }}>
                    Nigeria:
                  </h6>
                  <p style={{ margin: 0 }}>
                    +234 802 465 5655 | +234 907 473 4419
                  </p>
                  <h6 style={{ fontWeight: 700, marginTop: "10px" }}>UK:</h6>
                  <p style={{ margin: 0 }}>+44 7943 612728</p>
                </div>
              </Col>

              {/* Email */}
              <Col md={6} className="mb-4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      borderRadius: "10px",
                      background: "#F7C35F",
                      marginBottom: "15px",
                    }}
                  >
                    <FaEnvelope size={30} color="#fff" />
                  </div>
                  <h6 style={{ fontWeight: 700, marginBottom: "10px" }}>
                    Email:
                  </h6>
                  <p style={{ margin: 0 }}>cavola@cavolawestafrica.com</p>
                </div>
              </Col>

              {/* Location */}
              <Col md={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      borderRadius: "10px",
                      background: "#094D12",
                      marginBottom: "15px",
                    }}
                  >
                    <FaMapMarkerAlt size={30} color="#fff" />
                  </div>
                  <h6 style={{ fontWeight: 700, marginBottom: "10px" }}>
                    Nigeria Office:
                  </h6>
                  <p style={{ margin: 0 }}>
                    2nd Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street,
                    Maitama, Abuja
                  </p>
                  <h6 style={{ fontWeight: 700, marginTop: "10px" }}>
                    UK Office:
                  </h6>
                  <p style={{ margin: 0 }}>
                    Cavola Limited, Registered Company
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          {/* RIGHT SIDE (Form) */}
          <Col md={6}>
            <div
              style={{
                borderRadius: "23px",
                border: "1px solid #FFF",
                background: "#F6F4EF",
                padding: "40px",
              }}
            >
              <h5
                style={{
                  color: "#094D12",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Let’s Talk Business
              </h5>
              <p
                style={{
                  color: "#1E1E1E",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontSize: "16px",
                  marginBottom: "30px",
                }}
              >
                Looking for premium Nigerian agro-commodities or ready to partner
                with a trusted exporter?
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #094D12",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #094D12",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #094D12",
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    background: "#86AD43",
                    border: "none",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "12px",
                    fontWeight: 700,
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
