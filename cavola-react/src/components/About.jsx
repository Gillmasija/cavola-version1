import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImg from "../assets/about.png";
import octgoalImg from "../assets/octgoal.svg";
import visionImg from "../assets/vision.svg";
import polyImg from "../assets/poly.svg";

export default function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "80px 0" }}>
      <Container fluid style={{ maxWidth: "1400px" }}>
        {/* Heading */}
        <Row className="mb-4">
          <Col>
            <p
              style={{
                color: "#1E1E1E",
                fontFamily: "Raleway",
                fontSize: "18.7px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              ABOUT CAVOLA
            </p>

            <h2
              style={{
                color: "#094D12",
                fontFamily: "Raleway",
                fontSize: "50px",
                fontWeight: 700,
                lineHeight: "1.2",
                marginBottom: 0,
              }}
            >
              Your reliable partner in African <br />
              Agro-commodity trade
            </h2>
          </Col>
        </Row>

        {/* Green box with text + image */}
        <Row
          className="align-items-center mb-5"
          style={{
            background: "#094D12",
            borderRadius: "13px",
            overflow: "visible",
            position: "relative",
          }}
        >
          {/* Text */}
          <Col
            lg={6}
            className="p-5"
            style={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: "Raleway",
                fontSize: "28px",
                lineHeight: "1.6",
                marginBottom: "28px",
              }}
            >
              At Cavola West Africa Limited, we help importers, manufacturers,
              and partners secure high-quality agricultural products without the
              usual risks. From Nigeria’s farms to international buyers, we
              ensure compliance, consistency, and efficiency.
            </p>

            <Button
              style={{
                borderRadius: "25px",
                border: "5px solid rgba(255, 255, 255, 0.57)",

                background: "#86AD43",
                color: "#FFF",
                fontFamily: "Raleway",
                fontSize: "20px",
                padding: "10px 28px",
                width: "fit-content",
              }}
            >
              Explore Our Products{" "}
              <span style={{ fontSize: "1.2em", marginLeft: "6px" }}>→</span>
            </Button>
          </Col>

          {/* Image */}
          <Col
            lg={6}
            className="d-flex justify-content-center"
            style={{ padding: 0 }}
          >
            <img
              src={aboutImg}
              alt="About Cavola"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "800px",
                marginTop: "-350px", // ✅ still overlaps but fluid
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>

        {/* Mission / Vision / Values */}
        <Row className="g-4 mt-4">
          {/* Mission */}
          <Col lg={4} sm={12}>
            <div
              className="h-100 text-center p-4"
              style={{
                borderRadius: "11px",
                border: "1px solid rgba(9, 77, 18, 0.46)",
                background: "#fff",
              }}
            >
              <img
                src={octgoalImg}
                alt="Mission Icon"
                style={{ width: "80px", marginBottom: "16px" }}
              />
              <h5
                style={{
                  fontFamily: "Raleway",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Our Mission
              </h5>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                To make African agro-commodity trade transparent, ethical, and
                reliable for every buyer and partner.
              </p>
            </div>
          </Col>

          {/* Vision */}
          <Col lg={4} sm={12}>
            <div
              className="h-100 text-center p-4"
              style={{
                borderRadius: "11px",
                border: "1px solid rgba(9, 77, 18, 0.46)",
                background: "#fff",
              }}
            >
              <img
                src={visionImg}
                alt="Vision Icon"
                style={{ width: "80px", marginBottom: "16px" }}
              />
              <h5
                style={{
                  fontFamily: "Raleway",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Our Vision
              </h5>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                To be West Africa’s most trusted integrated agricultural
                company, bridging African supply bases with global markets.
              </p>
            </div>
          </Col>

          {/* Values */}
          {/* Values */}
<Col lg={4} sm={12}>
  <div
    className="h-100 p-4"
    style={{
      background: "#7CB342",
      color: "#fff",
      borderRadius: "12px",
      textAlign: "center",
    }}
  >
    <h5
      style={{
        fontFamily: "Raleway",
        fontSize: "28px",
        fontWeight: 600,
        marginBottom: "16px",
      }}
    >
      Our Values
    </h5>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        fontSize: "18px",
        lineHeight: "1.8",
        textAlign: "left",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <img src={polyImg} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
        Reliability you can count on
      </li>
      <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <img src={polyImg} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
        Consistency in every shipment
      </li>
      <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <img src={polyImg} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
        Transparent, ethical trade
      </li>
      <li style={{ display: "flex", alignItems: "center" }}>
        <img src={polyImg} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
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
