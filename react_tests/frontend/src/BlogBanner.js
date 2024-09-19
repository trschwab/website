import React from 'react';
import { Link } from 'react-router-dom';

const BlogBanner = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><Link to="/blog">Back to Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogBanner;
