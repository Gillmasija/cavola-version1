import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useStore from "../store/useStore";
import Services from "./Services";
import bannerImg from "../assets/blog-banner.jpg"; // ✅ make sure this exists

export default function BlogDetail() {
  const navigate = useNavigate();
  const blogs = useStore((state) => state.blogs);

  // ✅ Always pick the first blog (id=1)
  const blog = blogs[0];

  if (!blog) {
    return (
      <Container style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Blog not found</h2>
        <button
          onClick={() => navigate("/blog")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#246A21",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Back to Blogs
        </button>
      </Container>
    );
  }

  // Pick 3 related blogs (excluding the first one)
  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <>
      {/* ✅ Banner Section with title BELOW the image */}
      <section style={{ position: "relative", width: "100%" }}>
        {/* Banner Image */}
        <div
          style={{
            height: "500px",
            borderRadius: "10px",
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Title below image */}
        <div style={{ textAlign: "center", marginTop: "20px", padding: "0 20px" }}>
          <h1
            style={{
              color: "#333",
              fontFamily: "Raleway",
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: "140%",
              textTransform: "capitalize",
            }}
          >
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ✅ Blog Content Section */}
      <section style={{ padding: "40px 0" }}>
        <Container>
          {/* Subtitle / Intro */}
          <p
            style={{
              color: "#666",
              fontFamily: "Raleway",
              fontSize: "22px",
              lineHeight: "150%",
              marginBottom: "40px",
            }}
          >
            {blog.excerpt}
          </p>

          {/* Secondary Heading */}
          {blog.subtitle && (
            <h2
              style={{
                color: "#333",
                fontFamily: "Raleway",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "140%",
                textTransform: "capitalize",
                marginBottom: "20px",
              }}
            >
              {blog.subtitle}
            </h2>
          )}

          {/* Full Blog Content */}
          <p
            style={{
              color: "#444",
              fontFamily: "Raleway",
              fontSize: "20px",
              lineHeight: "160%",
              marginBottom: "40px",
              whiteSpace: "pre-line", // ✅ preserves line breaks
            }}
          >
            {blog.content}
          </p>

          {/* ✅ Related Blogs */}
          {related.length > 0 && (
            <div style={{ marginTop: "60px" }}>
              <h3
                style={{
                  color: "#333",
                  fontFamily: "Raleway",
                  fontSize: "36px",
                  fontWeight: 700,
                  marginBottom: "30px",
                }}
              >
                Related Blog
              </h3>
              <Row xs={1} sm={2} md={3} className="g-4">
                {related.map((b) => (
                  <Col key={b.id}>
                    <div
                      style={{ cursor: "pointer", height: "100%" }}
                      onClick={() => navigate(`/blog/${b.id}`)}
                    >
                      <div
                        style={{
                          border: "1px solid #eee",
                          borderRadius: "10px",
                          overflow: "hidden",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* ✅ Force aligned image */}
                        <div style={{ height: "200px", overflow: "hidden" }}>
                          <img
                            src={b.image}
                            alt={b.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div style={{ padding: "15px", flexGrow: 1 }}>
                          <h5
                            style={{
                              fontSize: "18px",
                              fontWeight: 600,
                              marginBottom: "10px",
                            }}
                          >
                            {b.title}
                          </h5>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#666",
                              lineHeight: "1.4",
                            }}
                          >
                            {b.excerpt?.slice(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>

      {/* ✅ Services Section */}
      <div style={{ marginTop: "80px", width: "100%" }}>
        <Services />
      </div>
    </>
  );
}
