import React from 'react';
import { Container } from 'react-bootstrap';
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1729px',
        margin: '0 auto',
        padding: '80px 0',
        background: '#fff',
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '36.963px',
          height: '700.454px',
          padding: '27.722px 0',
          maxWidth: '1485px',
        }}
      >
        {/* Heading + View All */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              width: '346.531px',
              color: '#333',
              fontFamily: 'Raleway',
              fontSize: '46.204px',
              fontWeight: 700,
              lineHeight: '140%',
              textTransform: 'capitalize',
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
              fontSize: '21.179px',
              fontWeight: 400,
              lineHeight: '35.298px',
              cursor: 'pointer',
            }}
          >
            View All
          </span>
        </div>

        {/* Blog cards */}
        <div
          style={{
            display: 'flex',
            width: '1485px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '65.457px',
          }}
        >
          {previews.map(b => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
