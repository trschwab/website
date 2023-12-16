// src/pages/BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Your array of file names
  const fileNames = ['rym_blog', 'cocktail_blog', 'letterboxd_blog', 'shell_blog'];

  return (
    <div>
      <h2>Blog</h2>
      <p>Explore our blog pages:</p>
      <ul>
        {fileNames.map((fileName, index) => (
          <li key={index}>
            {/* Assuming your route is set up as "/blog/:pageName" */}
            <Link to={`/blog/${fileName}`}>{fileName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
