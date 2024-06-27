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
        snippet: 'What a Cat. Theo is one of The Detroit Guys. Core to the scene, and so firmly ingrained in the diversity \
        that is that Detroit Scene. The classic Detroit label Sound Signature was started by him. His productions are sparse \
        at times and lovingly soulful at other. His sets are severely eclectic, with grooves that stick in your bones and \
        make you dance. How someone can mix such varied songs so seamlessly is beyond me. The intersection of minimal, house, \
        jazz, funk, disco, soul, has never felt so damn good.',
        photoUrl: '/blog_media/dj_blog_media/theo_parrish.jpeg',
        set: "https://youtu.be/GeZ_8HxiwcI?si=4cr3_WCLIGSgZaKK&t=8181",
        set_desc: "Live @ Club 77, 2024",
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
        snippet: 'Jeff Mills is a beast on the 909. He\'ll play it live, while mixing vinyl. I mean \
        who does that? He DJs with a fiery intensity and focus, deep intense Detroit Love. As if any of that isn\'t \
        enough, he\'s a founding member of the legendary group Underground Resistance, who\'s tunes you can\'t escape. \
        If you think you haven\'t heard them, you\'re probably mistaken; UR\'s Transition, Jaguar, or Mill\'s own The Bells. \
        I personally also love Waveform Transmission Vol. 1, Purpose Maker, Skin Deep. His Exhibitionist series is in a \
        tier of its own. Sold as DVDs, they document a proper mix, sometimes with his own records, sometimes with his trusty \
        909, sometimes varied gear showing off his expertise. There are lots of versions, so I\'ve attached my favorite with \
        my favorite moment in the timestamp, around 27:00 when he mixes into Andreas Saag\'s Camborele and then to John \
        Beltran\'s Respectall. He plays 45 tracks in 75 minutes.',
        photoUrl: '/blog_media/dj_blog_media/jeff_mills.jpg',
        set: "https://youtu.be/cCpHiWwA2Rg?si=DZy9m6A-39MuV0Ve&t=1626",
        set_desc: "Exhibitionist Mix, 2004",
      },
      {
        id: 3,
        title: 'Cassius',
        snippet: 'It\'s hard to say anything about Cassius without first mentioning the tragic death of one of the duo, \
        Philippe Zdar in 2019. They have an esteemed production history with hit after hit in the French scene. I first \
        got into them through their new record at the time, Dreems in 2019. It had something I didn\'t even know I was \
        looking for, and going through their discography I kept finding more and more of their unapologetic and unique \
        sound. Obviously it\'s hard to mention their discography without 1999, a cutting edge record from that very same year. \
        At first, some of the house and disco oriented tracks were on my mind, but the more I listened, the more I loved the \
        b-sides and hip hop, and 808, oriented grooves. I found the record Pansoul from Zdar and another French producer \
        Etienne de Crecy which stuck in my mind. If you dig into their history more, you can see them as quiet essentials \
        to the French scene, pushing forward productions of all different genres, -M-, Phoenix, Chromeo, Beastie Boys, \
        Franz Ferdinand, all the credits are shocking.',
        photoUrl: '/blog_media/dj_blog_media/cassius.jpg',
        set: "https://youtu.be/g8Nt54s2ZLY?si=2-tGgpsZMd468Jpt",
        set_desc: "The BBC Radio Essential Mix, 1999",
      },
    {
      id: 3,
      title: 'Avalanches',
      snippet: '',
      photoUrl: '/blog_media/dj_blog_media/.jpg'
    },
    {
      id: 2,
      title: 'Daft Punk',
      snippet: 'Not all that creative, I guess. Daft Punk are legends in the house community and it\'s no \
      innovative idea to list them as essentials. As DJs though they aren\'t thought of as quickly. I won\'t \
      go through their production catalog, but I will say they have some excellent sets out there, especially \
      from the late 90s. They inspired a whole movement of French Touch, but cannot be mentioned without the \
      community they fostered and built it with. All together that scene was mostly in tune with the Ed Banger \
      record label. There are 2 other record labels though, each founded by one of the Daft Punk guys themselves. \
      Only active for a few years, there are dozens of releases on each by themselves, friends, and fellow producers. \
      Crydamoure is one of the two, made by Guyman in 1997. In 2001, a mixed compilation of the label was released, \
      dubbed Waves. An excellent sampler and essential to the scene.',
      photoUrl: '/blog_media/dj_blog_media/daft_punk.webp',
      set: 'https://www.youtube.com/watch?v=M_nNIxfYLU4',
      set_desc: 'Crydamoure Waves, 2001'
    },
    {
      id: 1,
      title: 'Ian Pooley',
      snippet: 'What can you say about Ian Pooley that hasn\'t been said? A legendary house DJ and producer \
      from Germany. I\'ve always felt he\'s sort of connected Germany with the French scene. A lot of his picks \
      are from the classic French Touch movement. Coming up in that early 2000s scene had a major influence \
      on him. As a producer he\'s made a catalog of essential tunes, from All Nite in 1997, Traffic in 2002, \
      or any number of mixes and features. He has a rich catalog recently too with EPs like Compurhythm or his \
      2013 album What I Do. Maybe one of the best features of Pooley is his love for and influence by South \
      American music. His records Souvenirs from 2004 and Since Then in 2017 wear the inspiration with pride. \
      Any number of sets from him on Youtube are excellent, but I figured to link to a classic 1997 mix.',
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
                {'\n'}
                <a href={post.set}>{post.set_desc}</a>
                {'\n'}{'\n'}
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
