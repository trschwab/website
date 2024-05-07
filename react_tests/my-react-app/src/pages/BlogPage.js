import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  // {
  //   id: 10,
  //   title: 'Web Dev Deployment',
  //   page: 'website_deployment_blog',
  //   snippet: 'A small post documenting my experience deploying this website! In the past I\'d had trouble with \
  //   deployments; a combination of factors, between lack of practice and less-than-ideal technologies used. This deployment \
  //   has been the most straightforward and successful.',
  //   photoUrl: '/blog_media/website_deployment_blog/react.png'
  // },
  // {
  //   id: 9,
  //   title: 'On Physical Media',
  //   page: 'physical_media_blog',
  //   snippet: 'Vinyl, Film, Books... Physical media has taken hold of the younger generation as we can see with new \
  //   demand for vinyl for music or film for photography. Even used book stores find themselves being revitalized. \
  //   Previously, this discussion would find itself involved heavily in the discussion of analog versus digital media \
  //   but with DVD and Blu-ray, CDs, MP3s with Ipod Usage, or digital cameras, something outside of the analog debate \
  //   is going on. I, myself, am a proponent for physical media but the question remains - why?',
  //   photoUrl: '/blog_media/testing_blog_media/test.jpg'
  // },
  // {
  //   id: 9,
  //   title: 'Integration Testing via Airflow',
  //   page: 'testing_blog',
  //   snippet: 'Testing code is an essential part of any engineering job. It\'s a fairly easy thing to do too -- \
  //   but trying to find the best way to test code in an efficient and integrated manner can be very difficult, especially \
  //   when dealing with dynamic tech stacks or technologies not explicitly built out with testing in mind. Dealing with \
  //   Apache Airflow, Docker Images, and Poetry Environments, this blog post explains a testing framework I helped to \
  //   create as a Data Engineer at Pulse Analytics.',
  //   photoUrl: '/blog_media/testing_blog_media/airflow_cover_long.webp'
  // },
  // {
  //   id: 9,
  //   title: 'The Chess Blog',
  //   page: 'chess_blog',
  //   snippet: 'In September of 2023 I achieved my peak chess rating on chess.com. At 1794, I was just short of the top 0.5% \
  //   of players internationally. Nearly in the top 100,000 players. I don\'t think such a rise over 4 years of active \
  //   play is that out of reach for most people, and while it is a great rating, I do fall short of any serious over-the-board \
  //   player or any hobbyist trying to bolster their fide rating. This blog post is a general discussion of my journey playing \
  //   chess and what I would recommend for people looking to usher their rating from 1200s to the 1600s.',
  //   photoUrl: '/blog_media/chess_blog_media/chess-4.jpg'
  // },
  // {
  //   id: 2,
  //   title: 'Letterboxd Wrapped',
  //   page: 'letterboxd_blog',
  //   snippet: "For a few years now I've enjoyed using the app Letterboxd to track my movie watching and keep up to date \
  //   with what my friends have been watching. It's a great platform and I can't recommend it highly enough, but the end of \
  //   year wrapped provided is not an ideal set of statistics for a user. There are great insights provided for premium users but \
  //   I decided to turn this into a bit of a larger project by trying to create a more dynamic generation of statistics for users \
  //   as well as a collage image generator for their highest rated movies. This project serves as my first major foray into Django \
  //   development.",
  //   photoUrl: '/blog_media/letterboxd_blog_media/Letterboxd.webp'
  // },
  // {
  //   id: 7,
  //   title: 'On Lit',
  //   page: 'lit_blog',
  //   snippet: 'I\'ve always wanted to be a reader. What a great thing to be, no? Though, without the catalyst of school, it \
  //   becomes easy to stop reading. You might not read another book for the rest of my life unless you actively make \
  //   an effort to. I, myself, had to begin to read - figure out a good way to find books I\'d enjoy, and keep a \
  //   well rounded list. Currently, while I might not be the most consistent reader, my wide breadth and depth in \
  //   terms of locale and time has made me more comfortable when it comes to lit and talking about it.',
  //   photoUrl: '/blog_media/lit_blog_media/books.jpg'
  // },
  // {
  //   id: 6,
  //   title: 'On Cocktails, Part 2',
  //   page: 'cocktail_2_blog',
  //   snippet: 'While my cocktail mixing has tapered off since I began a few years ago, I still find myself on occasion making \
  //   cocktails and poking around new and interesting recipes. This blogpost is a continuation from the last one focusing on \
  //   more recipes that can help solidify a cocktail enthusiast\'s repetoire.',
  //   photoUrl: '/blog_media/cocktail_2_blog_media/temp_cover.jpeg'
  // },
  {
    id: 5,
    title: 'Once and Forever',
    page: 'once_and_forever_blog',
    snippet: 'This is my first book review blog post, mirroring the post on Goodreads. Kenji Miyazawa offers a collection of \
    children\'s stories that are highly regarded and enjoyed throughout Japan. These stories have been the subject of many \
    adaptions, even movies. Miyazawa himself stands as an interesting figure; a man who enjoyed a relatively quiet life \
    in Hanamaki, Iwate Japan, born in 1896 and passing in 1933. He was an agricultural science teacher, cellist, writer, and \
    activist. His works, while unrecognized throughout his life, have gained significant popularity.',
    photoUrl: '/blog_media/once_and_forever/Miyazawa_Kenji.jpg'
  },
  {
    id: 4,
    title: 'Rate Your Music',
    page: 'rym_blog',
    snippet: 'I track most of my music listening using the website Rate Your Music. While I\'m not always fully \
    engaged with logging everything I listen to, I try to continuously update it. In older versions of my website this \
    page displayed all album covers of things I had listened to front to back and reviewed on the RYM platform. Now, \
    it displays all records I\'ve listened to that I would recommend.',
    photoUrl: '/blog_media/rym_blog_media/EmzSIr3VgAIjF9h.png'
  },
  {
    id: 3,
    title: 'On Cocktails',
    page: 'cocktail_blog',
    snippet: 'Throughout 2021 and 2022 I found myself engaging more and more with cocktails. It became a fun hobby \
    and was a great hosting tool which gave me a lot of insight into what goes into mixing a good drink. I began collecting \
    more bottles and testing out new recipes, either from miscellaneous sources online or cocktail bars that I made an effort \
    to go to. I even bought or was gifted a handful of cocktail books that helped to round out my mixing. This blogpost discusses \
    entrypoints into cocktail mixing and presents a substantial set of cocktails that can help round out any beginner\'s home bar.',
    photoUrl: '/blog_media/cocktail_blog_media/012.jpeg'
  },

  // {
  //   id: 1,
  //   title: 'Shell Blog',
  //   snippet: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.',
  //   photoUrl: '/media/guitar_photo_recolored.jpeg'
  // }
];

const BlogPage = () => {
  return (
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
                <p className="blog-snippet">{post.snippet} - <Link to={`/blog/${post.page}`}>Read more...</Link></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
