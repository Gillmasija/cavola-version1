import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useStore((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <Container className="container-narrow section" style={{ padding: "80px 0", textAlign: "center" }}>
        <h2>Blog Not Found</h2>
        <p>We couldn't find the blog you were looking for.</p>
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/blog");
            }}
            style={{ color: "#154734", fontWeight: "500" }}
          >
            Back to blog list
          </a>
        </p>
      </Container>
    );
  }

  // Related blogs (exclude current one, take first 3 others)
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <section className="section" style={{ background: "#fff", padding: "60px 0" }}>
      <Container style={{ maxWidth: "900px" }}>
        {/* Blog Image */}
        <div style={{ marginBottom: "30px" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              maxHeight: "450px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* Blog Title + Meta */}
        <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "10px" }}>
          {blog.title}
        </h1>
        <p style={{ color: "#6c757d", fontSize: "0.95rem", marginBottom: "30px" }}>
          {blog.date} • {blog.author}
        </p>

        {/* Blog Content */}
        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "50px",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}
        </div>

        {/* Related Blogs */}
        <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "20px" }}>
          Related Blog
        </h3>
        <Row xs={1} md={3} className="g-4">
          {relatedBlogs.map((b) => (
            <Col key={b.id} onClick={() => navigate(`/blog/${b.id}`)}>
              <BlogCard blog={b} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
