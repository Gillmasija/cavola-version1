import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import BlogCard from "./BlogCard";
import Services from "./Services"; // ✅ certificate/services section
import bannerImg from "../assets/hero2.png";

export default function BlogList() {
  const blogs = useStore((state) => state.blogs);
  const navigate = useNavigate();

  // ✅ Pagination setup (fixed to 3 pages)
  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  let currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  // ✅ Ensure always 9 blogs (duplicate first row if not enough)
  if (currentBlogs.length < blogsPerPage && blogs.length > 0) {
    const firstRow = blogs.slice(0, 3);
    while (currentBlogs.length < blogsPerPage) {
      currentBlogs = [...currentBlogs, ...firstRow].slice(0, blogsPerPage);
    }
  }

  return (
    <section style={{ width: "100%", margin: "0 auto", padding: "40px 0" }}>
      <Container fluid>
        {/* ✅ Header Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            borderRadius: "10px",
            background: "#094D12",
            padding: "40px",
            height: "712px",
            color: "#fff",
            width: "100%",
          }}
        >
          <h2
            style={{
              color: "#F7C35F",
              fontFamily: "Raleway",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "61.68px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Blog & Insights
          </h2>

          <div
            style={{
              width: "100%",
              maxWidth: "885px",
              height: "400px",
              background: `url(${bannerImg}) center / cover no-repeat`,
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </div>

        {/* ✅ Blog Grid - Always 9 blogs */}
        <Row xs={1} sm={2} md={3} className="g-4 mt-5">
          {currentBlogs.map((blog, index) => (
            <Col key={index} style={{ display: "flex" }}>
              <div
                style={{ flex: 1, cursor: "pointer" }}
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <BlogCard blog={blog} />
              </div>
            </Col>
          ))}
        </Row>

        {/* ✅ Pagination (moved lower + spaced) */}
        <div
          style={{
            margin: "80px auto 100px", // ⬇️ moves it lower & centers horizontally
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "1px solid #C4C4C4",
              background: "transparent",
              color: "#333",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            ← Prev.
          </button>

          {/* Page Numbers (always 1, 2, 3) */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "6px",
                border: "1px solid #C4C4C4",
                background: currentPage === num ? "#246A21" : "transparent",
                color: currentPage === num ? "#fff" : "#333",
                cursor: "pointer",
                fontWeight: currentPage === num ? "600" : "400",
              }}
            >
              {num}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === 3}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              background: "#246A21",
              color: "#fff",
              border: "none",
              cursor: currentPage === 3 ? "not-allowed" : "pointer",
            }}
          >
            Next →
          </button>
        </div>
      </Container>

      {/* ✅ Certificate/Services edge-to-edge */}
      <div style={{ marginTop: "0px", width: "100%" ,marginBottom:"0px"}}>
        <Services />
      </div>
    </section>
  );
}
