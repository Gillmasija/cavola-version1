// src/components/NavbarMain.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavbarMain() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll handler (for homepage sections only)
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      style={{
        borderBottom: "none",
        boxShadow: "none",
        padding: "0", // ✅ remove bootstrap padding
        margin: "0",
        lineHeight: "1", // ✅ tighten spacing
        height: "auto",
      }}
    >
      <Container
        fluid
        style={{
          display: "flex",
          alignItems: "center", // ✅ vertical centering
          justifyContent: "space-between",
          padding: "0 64px", // ✅ only left/right padding
          margin: "0",
          height: "auto",
          minHeight: "180px", // ✅ matches logo height
        }}
      >
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            height: "100%",
          }}
        >
          <img
            src={logo}
            alt="Cavola Logo"
            style={{
              height: "180px", // ✅ keep big logo
              width: "auto",
              objectFit: "contain",
              display: "block",
              margin: "0",
              padding: "0",
            }}
          />
        </Navbar.Brand>

        {/* Hamburger Toggle (mobile) */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menu + Button */}
        <Navbar.Collapse
          id="navbar-nav"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // ✅ vertical center with logo
            height: "100%",
          }}
        >
          <Nav
            className="mx-auto"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              padding: "12px 40px",
              borderRadius: "30px",
              background: "#F3F3F3",
            }}
          >
            <Nav.Link
              onClick={(e) => handleScrollTo(e, "about")}
              style={{
                color: "#292121",
                fontSize: "22.918px",
                fontFamily: "Raleway",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleScrollTo(e, "services")}
              style={{
                color: "#292121",
                fontSize: "22.918px",
                fontFamily: "Raleway",
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/blog")}
              style={{
                color: "#292121",
                fontSize: "22.918px",
                fontFamily: "Raleway",
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/contact")}
              style={{
                color: "#292121",
                fontSize: "22.918px",
                fontFamily: "Raleway",
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          {/* CTA Button */}
          <div className="text-center ms-4" style={{ height: "100%" }}>
            <Button
              style={{
                color: "#FFF",
                fontSize: "22.918px",
                fontFamily: "Raleway",
                display: "flex",
                width: "230.719px",
                padding: "10px 0",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "25.235px",
                background: "#86AD43",
                border: "none",
                height: "fit-content",
                margin: "auto 0", // ✅ vertical centering
              }}
              onClick={() => navigate("/contact")}
            >
              Request a Quote
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
