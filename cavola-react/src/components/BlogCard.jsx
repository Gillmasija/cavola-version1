import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        cursor: "pointer",
        border: "none",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="h-100"
    >
      {/* Blog Image */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={blog.image}
          alt={blog.title}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <Card.Body style={{ padding: "20px" }}>
        <Card.Title style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px" }}>
          {blog.title}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.95rem", color: "#555" }}>
          {blog.excerpt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
