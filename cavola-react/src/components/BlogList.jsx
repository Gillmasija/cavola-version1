import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import useStore from "../store/useStore";
import BlogCard from "./BlogCard";

// ✅ Import banner and certificate image if needed
import heroImage from "../assets/hero2.png";

export default function BlogPage() {
  const blogs = useStore((state) => state.blogs);

  // Duplicate blogs so we always have at least 9
  const repeatedBlogs = [...blogs, ...blogs, ...blogs].slice(0, 27);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Slice blogs for current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = repeatedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(repeatedBlogs.length / blogsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <section style={{ background: "#fff", padding: "60px 0" }}>
        <Container style={{ maxWidth: "1200px" }}>
          {/* Blog Banner */}
          <div
            style={{
              background: "#154734",
              color: "#fff",
              borderRadius: "12px",
              marginBottom: "50px",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Blog & Insights
              </h2>
              <p style={{ fontSize: "1.1rem", margin: 0 }}>
                Discover the latest trends and insights in sustainable farming and
                agro-commodities.
              </p>
            </div>

            <div style={{ flex: 1, textAlign: "right" }}>
              <img
                src={heroImage}
                alt="Blog Banner"
                style={{
                  maxHeight: "220px",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          {/* Blog Cards Grid */}
          <Row xs={1} md={3} className="g-4">
            {currentBlogs.map((b, i) => (
              <Col key={`${b.id}-${i}`}>
                <BlogCard blog={b} />
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            <Pagination>
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Prev
              </Pagination.Prev>
              {Array.from({ length: totalPages }, (_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next →
              </Pagination.Next>
            </Pagination>
          </div>
        </Container>
      </section>

      {/* Certified Section */}
      <section
        style={{
          background: "#f9f7f2",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "900px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
            <span style={{ color: "#154734" }}>Certified.</span>{" "}
            <span style={{ color: "#6BBE45" }}>Compliant.</span>{" "}
            <span style={{ color: "#E6A540" }}>Trusted.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
            Cavola West Africa Limited is an accredited exporter with the Nigerian
            Export Promotion Council (NEPC), giving global buyers confidence in
            every trade.
          </p>
          <button
            style={{
              background: "#6BBE45",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              fontSize: "1rem",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Download Certificate →
          </button>
        </Container>
      </section>
    </>
  );
}
