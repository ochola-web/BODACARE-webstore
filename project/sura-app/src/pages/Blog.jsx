import React from "react";
import "../styles/blog.css"; // ✅ make sure the path is correct

export default function Blog() {
  // Example blog posts
  const posts = [
    {
      id: 1,
      title: "Top 10 Fashion Trends in 2025",
      date: "November 20, 2025",
      excerpt: "Discover the hottest trends in fashion this year and how to style them.",
    },
    {
      id: 2,
      title: "How to Care for Your Clothing",
      date: "November 15, 2025",
      excerpt: "Simple tips to keep your clothes looking fresh and new for longer.",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Online Shopping",
      date: "November 10, 2025",
      excerpt: "Learn how to shop smart online and avoid common pitfalls.",
    },
  ];

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>

      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
