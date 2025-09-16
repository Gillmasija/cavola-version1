import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useStore from '../store/useStore';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const blogs = useStore(state => state.blogs);
  const previews = blogs.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className="section" id="blog" style={{ background: '#fff', padding: '80px 0' }}>
      <Container style={{ maxWidth: '1200px' }}>
        {/* Heading with "View All" link on the right */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: '2rem', margin: 0 }}>Blog</h2>
          <span
            onClick={() => navigate('/blog')}
            style={{
              color: '#154734',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            View All
          </span>
        </div>

        {/* Blog cards */}
        <Row xs={1} md={3} className="g-4">
          {previews.map(b => (
            <Col key={b.id}>
              <BlogCard blog={b} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
