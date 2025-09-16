// src/store/useStore.js
import create from 'zustand';

// ✅ Import images from src/assets
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const sampleBlogs = [
  {
    id: '1',
    title: 'What innovative farming techniques are you most excited about this year?',
    excerpt: 'Optimize crop rotation for better yields and reduce input costs.',
    content: `At Cavola we follow sustainable farming techniques that increase yield and reduce environmental impact.

Key areas of focus include optimized crop rotation, soil health monitoring and targeted use of inputs.`,
    image: blog1, // ✅ using imported image
    date: '2025-02-12',
    author: 'Cavola Team'
  },
  {
    id: '2',
    title: 'Explore vertical farming benefits',
    excerpt: 'Vertical farming is changing urban agriculture — here’s how to leverage it.',
    content: `Vertical farming allows production in limited spaces and reduces logistics costs. Cavola partners with innovators...

Read on for implementation tips and opportunities.`,
    image: blog2,
    date: '2025-03-01',
    author: 'Cavola Insights'
  },
  {
    id: '3',
    title: 'Utilize hydroponic systems effectively',
    excerpt: 'Hydroponics can boost water efficiency and crop throughput.',
    content: `Hydroponic systems replace soil with nutrient solutions, allowing remarkable control over crop growth.

This guide outlines simple systems for smallholder adoption.`,
    image: blog3,
    date: '2025-04-20',
    author: 'Agri Research'
  },
  {
    id: '4',
    title: 'Optimize crop rotation for better yields',
    excerpt: 'Crop rotation improves soil health and reduces pest cycles.',
    content: `Implementing rotation plans tailored to your soils and markets is key. Cavola helps match buyers with compliant supply chains.`,
    image: blog1, // reusing blog1
    date: '2024-11-11',
    author: 'Cavola Team'
  }
];

export const useStore = create(() => ({
  blogs: sampleBlogs,
  getBlogById: (id) => {
    const found = sampleBlogs.find(b => b.id === id);
    return found || null;
  }
}));

export default useStore;
