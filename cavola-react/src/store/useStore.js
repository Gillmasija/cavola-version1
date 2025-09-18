// src/store/useStore.js
import create from 'zustand';

// ✅ Import images from src/assets
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const sampleBlogs = [
  {
    id: '1',
    title: 'I Produced A Unique Developer Rap Video - Insights From My Journey',
    excerpt: `In this post, I share how blending technology, music, and storytelling led to the creation of a unique developer rap video. 
You'll see behind-the-scenes lessons on creativity, community, and technical execution.`,
    content: `Creating this rap video was more than just mixing beats and code references—it was about connecting with the developer community. 
I wanted to demonstrate that software engineering isn't only about solving problems in silence but also about expression, creativity, and culture. 

From writing verses about debugging to shooting scenes that captured real coding struggles, the process reinforced the idea that storytelling matters, even in tech. 
This journey taught me that when you combine passion with your profession, you not only stand out—you inspire others to look at their craft differently.`,
    image: blog1,
    date: '2025-02-12',
    author: 'Cavola Team'
  },
  {
    id: '2',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Vertical farming is revolutionizing urban agriculture — here’s how it drives efficiency, sustainability, and access.',
    content: `Vertical farming enables food production in limited spaces with reduced water usage and minimal logistics costs. 
By stacking crops in controlled environments, farmers achieve consistent yields regardless of weather. 

Cavola partners with innovators to scale these systems, creating opportunities for sustainable urban food supply chains.`,
    image: blog2,
    date: '2025-03-01',
    author: 'Cavola Insights'
  },
  {
    id: '3',
    title: 'Utilize Hydroponic Systems Effectively',
    excerpt: 'Hydroponics enhances water efficiency and crop throughput — learn how smallholders can adopt it.',
    content: `Hydroponic systems replace soil with nutrient solutions, allowing precise control of plant growth. 
This reduces water waste by up to 90% compared to traditional farming and ensures faster harvest cycles. 

This guide outlines simple hydroponic methods that small-scale farmers can adopt for reliable and scalable results.`,
    image: blog3,
    date: '2025-04-20',
    author: 'Agri Research'
  },
  {
    id: '4',
    title: 'Optimize Crop Rotation for Better Yields',
    excerpt: 'Crop rotation restores soil nutrients and disrupts pest cycles, boosting long-term farm sustainability.',
    content: `Implementing crop rotation tailored to your soil type and climate is key to maintaining productivity. 
By alternating between cereals, legumes, and root crops, farmers prevent nutrient depletion while improving soil structure. 

At Cavola, we support farmers in creating rotation strategies that match both ecological needs and market demand.`,
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
