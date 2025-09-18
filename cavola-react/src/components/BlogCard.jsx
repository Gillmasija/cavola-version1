import React from 'react';

export default function BlogCard({ blog }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '449.98px',
        height: '500px', // ✅ fixed height for equal alignment
        padding: '10px',
        boxSizing: 'border-box',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: '285.46px',
          borderRadius: '5.448px',
          overflow: 'hidden',
          marginBottom: '20px',
          background: '#D9D9D9',
          flexShrink: 0,
        }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Text container */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* Title */}
        <h3
          style={{
            color: '#222',
            fontFamily: 'Raleway',
            fontSize: '29.418px',
            fontWeight: 600,
            lineHeight: '140%',
            margin: 0,
            marginBottom: '12px',
          }}
        >
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            color: '#555',
            fontFamily: 'Raleway',
            fontSize: '16.343px',
            fontWeight: 400,
            lineHeight: '150%',
            margin: 0,
          }}
        >
          {blog.excerpt}
        </p>
      </div>
    </div>
  );
}
