// BlogDetail.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useStore from "../store/useStore";
import Services from "./Services";
import bannerImg from "../assets/blog-banner.jpg";

export default function BlogDetail() {
  const { id } = useParams(); // ✅ Get ID from URL
  const navigate = useNavigate();
  const blogs = useStore((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id); // ✅ Pick correct blog

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

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <>
      {/* ✅ Banner */}
      <section style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            height: "705px",
            borderRadius: "10px",
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            margin:"40px",
            backgroundPosition: "center",
          }}
        />
        <div style={{ textAlign: "center", marginTop: "20px", padding: "0 20px" }}>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700 }}>
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ✅ Blog Content */}
      <section style={{ padding: "40px 0" }}>
        <Container>
          <p style={{ fontSize: "clamp(16px, 2vw, 22px)", lineHeight: "150%" }}>
            {blog.excerpt}
          </p>

          {blog.subtitle && (
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "20px" }}>
              {blog.subtitle}
            </h2>
          )}

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "160%",
              whiteSpace: "pre-line",
            }}
          >
            {blog.content}
          </p>

          {/* ✅ Related Blogs */}
          {related.length > 0 && (
            <div style={{ marginTop: "60px" }}>
              <h3 style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>Related Blogs</h3>
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
                          <h5 style={{ fontSize: "18px", fontWeight: 600 }}>{b.title}</h5>
                          <p style={{ fontSize: "14px", color: "#666" }}>
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
