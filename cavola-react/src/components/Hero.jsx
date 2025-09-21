import React, { useEffect, useState } from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";

export default function Hero() {
  const images = [
    { src: hero1, caption: "Cocoa" },
    { src: hero2, caption: "Coffee" },
    { src: hero3, caption: "Sesame" },
    { src: hero4, caption: "Hibiscus" },
    { src: hero5, caption: "Chilli Pepper" },
  ];

  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{
        background: "#fff",
        padding: "20px 60px 60px 60px", // smaller top padding
        marginTop:"-80px",
      }}
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{
          maxWidth: "2000px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        {/* Left slideshow */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <Carousel
            controls={false}
            indicators
            interval={4000}
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
                    width: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                    maxHeight: "680px",
                    transition: "opacity 1.2s ease-in-out",
                  }}
                />
                <p
                  style={{
                    color: "#86AD43",
                    textAlign: "center",
                    fontFamily: "Raleway",
                    fontSize: "40px",
                    marginTop: "20px",
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
            flex: 1.8,
            minWidth: 320,
            marginTop: "-60px", // ✅ lift the text block higher
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <h1
            style={{
              fontFamily: "Raleway",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "70px",
              marginBottom: "20px",
              maxWidth: "1500px",
            }}
          >
            <span style={{ color: "#094D12" }}>Finding </span>
            <span style={{ color: "#86AD43" }}>
              reliable agro-commodity suppliers
            </span>
            <span style={{ color: "#094D12" }}>
              {" "}in West Africa shouldn’t be difficult.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "900px",
              color: "#1E1E1E",
              fontFamily: "Raleway",
              fontSize: "22px",
              lineHeight: "34px",
              marginBottom: "32px",
            }}
          >
            Inconsistent quality, weak logistics, and compliance risks cost
            buyers time and money. Cavola solves this by delivering trusted,
            certified agro-commodities and petrochemicals from Nigeria to global
            markets.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button
              style={{
                padding: "10px 34px",
                borderRadius: "30px",
                background: "#86AD43",
                color: "#FFF",
                fontSize: "20px",
                border: "none",
              }}
              onClick={() => navigate("/#contact")}
            >
              Request a Quote
            </Button>

            <Button
              style={{
                padding: "10px 34px",
                borderRadius: "30px",
                border: "2px solid #094D12",
                background: "transparent",
                color: "#094D12",
                fontSize: "20px",
                fontWeight: 600,
              }}
              onClick={() => navigate("/#about")}
            >
              Book a Call with Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
