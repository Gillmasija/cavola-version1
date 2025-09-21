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
    <section
      id="blog"
      style={{
        padding: '80px 0',
        background: '#fff',
      }}
    >
      <Container style={{ maxWidth: '1300px' }}>
        {/* Heading + View All */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              color: '#333',
              fontFamily: 'Raleway',
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '140%',
              margin: 0,
            }}
          >
            Blog
          </h2>
          <span
            onClick={() => navigate('/blog')}
            style={{
              color: '#094D12',
              fontFamily: 'Raleway',
              fontSize: '21px',
              fontWeight: 400,
              lineHeight: '35px',
              cursor: 'pointer',
            }}
          >
            View All
          </span>
        </div>

        {/* Blog cards row */}
        <Row className="g-5"> {/* g-5 gives nice spacing between columns */}
          {previews.map(b => (
            <Col md={4} key={b.id}>
              <BlogCard blog={b} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
