// src/pages/BlogOnePage.js
import React from 'react';

const blogPosts = [
    {
        id: 3,
        title: 'DJ Sneak',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
    {
        id: 3,
        title: 'Theo Parrish',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
      {
        id: 3,
        title: 'DJ Mihoko',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
      {
        id: 3,
        title: 'The Chemical Bros',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
      {
        id: 3,
        title: 'Madlib',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
      {
        id: 3,
        title: 'Jeff Mills',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
      {
        id: 3,
        title: 'Cassius',
        snippet: '',
        photoUrl: '/blog_media/dj_blog_media/.jpg',
        set: "",
        set_desc: "",
      },
    {
      id: 3,
      title: 'Avalanches',
      snippet: 'This is my first book review blog post, mirroring the post on Goodreads. Kenji Miyazawa offers a collection of \
      children\'s stories that are highly regarded and enjoyed throughout Japan. These stories have been the subject of many \
      adaptions, even movies. Miyazawa himself stands as an interesting figure; a man who enjoyed a relatively quiet life \
      in Hanamaki, Iwate Japan, born in 1896 and passing in 1933. He was an agricultural science teacher, cellist, writer, and \
      activist. His works, while unrecognized throughout his life, have gained significant popularity.',
      photoUrl: '/blog_media/dj_blog_media/.jpg'
    },
    {
      id: 2,
      title: 'Daft Punk',
      snippet: 'Not all that creative, I guess. Daft Punk are legends in the house community',
      photoUrl: '/blog_media/dj_blog_media/daft_punk.webp',
      set: 'https://www.youtube.com/watch?v=M_nNIxfYLU4',
      set_desc: 'Crydamoure Waves, 2001'
    },
    {
      id: 1,
      title: 'Ian Pooley',
      snippet: 'What can you say about Ian Pooley that hasn\'t been said?',
      photoUrl: '/blog_media/dj_blog_media/ian_pooley.jpg',
      set: 'https://youtu.be/zLwTReOlbuo?si=TPawVdpTzttM3t3j',
      set_desc: 'Live @ Traxx, 1997'
    }
  ];


const BlogOnePage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <h1>The DJ Blog</h1>
      {'\n'}{'\n'}
      <p>
      I think DJs have never been more snickered at than now. Modern technology advances have made it more 
      accessible than ever, which is explicitly a good thing. It's never been more easy for someone to make a DJ set and get into 
      DJing, and the more expression and diversity is what the art is all about. In this process, though, you get more intermediate 
      or subpar DJs -- hours of "unce unce" with no thought. Shuffling the top 50 Spotify hits, pressing a sync button 
      to align tempos. Technicality and taste are no longer requirements, we too often see the "showman" DJ that is more 
      concerned with looking a certain way for the iPhone and social media epidemic -- no longer a Disc Jockey.
      This blog post serves to highlight some of my favorite DJs and their sets.

    <div className="blog-page">
      <div className="blog-page-center">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="blog-photo-holder">
              <img src={post.photoUrl} alt={post.title} className="blog-photo"/>
              </div>
              <div className="blog-content">
                <h4>{post.title}</h4>
                <p className="blog-snippet">{post.snippet} - </p>
                <a href={post.set}>{post.set_desc}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {'\n'}{'\n'}
      

      </p>
    </div>
    </div>
    </div>
  );
};

export default BlogOnePage;
