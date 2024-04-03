import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 5,
    title: 'Once and Forever',
    page: '',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    photoUrl: '/blog_media/once_and_forever/Miyazawa_Kenji.jpg'
  },
  {
    id: 4,
    title: 'Rate Your Music',
    page: 'rym_blog',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    photoUrl: '/blog_media/rym_blog_media/Rate_Your_Music_logo.svg.png'
  },
  {
    id: 3,
    title: 'On Cocktails',
    page: 'cocktail_blog',
    snippet: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    photoUrl: '/blog_media/cocktail_blog_media/012.jpeg'
  },
  {
    id: 2,
    title: 'Letterboxd Wrapped',
    page: 'letterboxd_blog',
    snippet: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photoUrl: '/blog_media/letterboxd_blog_media/Letterboxd.webp'
  },
  {
    id: 1,
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
              <div className="blog-photo-holder">
              <img src={post.photoUrl} alt={post.title} className="blog-photo" />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
                {/* Link to the individual blog post */}
                <Link to={`/blog/${post.page}`}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
