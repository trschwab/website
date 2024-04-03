import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'RYM Blog',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    photoUrl: '/media/IMG_9431.PNG'
  },
  {
    id: 2,
    title: 'Cocktail Blog',
    snippet: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    photoUrl: '/media/6A4BFD19-2296-4B1F-90CC-616D37E71093.JPG'
  },
  {
    id: 3,
    title: 'Letterboxd Blog',
    snippet: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    photoUrl: '/media/studio.png'
  },
  {
    id: 4,
    title: 'Shell Blog',
    snippet: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.',
    photoUrl: '/media/guitar_photo_recolored.jpeg'
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-page-center">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.photoUrl} alt={post.title} className="blog-photo" />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
                {/* Link to the individual blog post */}
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s/g, '_')}`}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
