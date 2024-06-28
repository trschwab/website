// src/pages/BlogOnePage.js
import React from 'react';

const blogPosts = [
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
        id: 3,
        title: 'Moodymann',
        snippet: 'There\'s this clip of Moodymann in an interview where he says that as a DJ, he\'s like your parent, he\'s \
        not going to give you what you want, he\'s "gonna give you what you need". No fear of turning off the crowd, he plays \
        what he thinks is important to be played and heard, doesn\'t matter the genre, tempo, or any of that nonsense. He\'s \
        probably much better known as an eclectic producer rather than anything else. His self titled record from 2014, \
        Forevernevermore from 2000, Black Mahogani from 2004, Silentintroduction from 1997, even his DJ Kicks set from 2016 \
        showcase the serious talent that is Moodymann. You can\'t spell Detroit without Moodymann.',
        photoUrl: '/blog_media/dj_blog_media/moodymann.jpg',
        set: "https://youtu.be/HK683qBU8SU?si=xkTCCvU8wqD84kte",
        set_desc: "Rex Club, Paris, 1995",
      },
    {
        id: 4,
        title: 'DJ Sneak',
        snippet: 'DJ Sneak lays down some really amazing tunes, always. Puerto-Rican American DJ, raised in the Chicago \
        scene alongside Derrick Carter and Cajmere and Paul Johnson, he has a huge producation discography that any \
        house enthusiast should be readily familiar with. His Polyester series always stands out to me but some of his other \
        tunes that stick in my head are his remix of Burnin for Daft Punk and the recent Love Can Make It Happen. Lots of \
        deep cuts around too, his I Like The Sounds remix for Studio 45, or any of his releases with the Strictly Rhythm \
        label. Here he is spinning at the speed of light on wax.',
        photoUrl: '/blog_media/dj_blog_media/dj_sneak.jpg',
        set: "https://www.youtube.com/watch?v=UdWu09bUjPw",
        set_desc: "DJsounds Show, 2014",
      },
      {
        id: 5,
        title: 'Natasha Diggs',
        snippet: 'I\'ve seen Diggs twice now in NY, and she\'s nonstop in the pocket. Playing amazing tunes that \
        keep everyone on the dance floor moving. A soulful and spiritual journey is what I would call her sets. \
        Once I saw her play and her headphones were just some old wired apple earbuds; a testament to not only \
        her impressive skills behind the decks, but also her simple and smooth style of mixing. She\'s opened or played \
        alongside staples like Erykah Badu, Grandmaster Flash, Slum Village, Kenny Dope, DJ Spinna, really the list \
        never ends. The vibe is always right when she\'s playing.',
        photoUrl: '/blog_media/dj_blog_media/natasha_diggs.jpg',
        set: "https://youtu.be/SLNgL1rf4tc?si=s0m3tMAIPz0_EL-2",
        set_desc: "The Lab, NYC, 2022",
      },
      {
        id: 6,
        title: 'Breakbot',
        snippet: 'One thing that becomes clear reading this blog top down is I have a love of the French Touch scene. \
        I actually don\'t even think that this is anything particular to me, I really truly believe that that scene is \
        integral to electronic and house music. The German, French, and Detroit scenes all have a lot that\'s distinct and \
        ineffably important. Breakbot is better known as a producer, and has some major hits over the years. His whole \
        discography feels like a love letter to disco. By Your Side from 2012 is a favorite record of mine and I\'d very much \
        recommend it. I have to include him on this essential DJ list though because his set, through Cercle, has turned me on \
        to so many new tunes, in all sorts of different genres. I can\'t really imagine a better set to showcase.',
        photoUrl: '/blog_media/dj_blog_media/breakbot.jpg',
        set: "https://www.youtube.com/watch?v=PY6WIpCD1L4",
        set_desc: "Cercle @ Salle Wagram in Paris, 2018",
      },
    {
        id: 7,
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
        id: 8,
        title: 'DJ Mihoko',
        snippet: 'There\'s not much out there about DJ Mihoko. She\'s a Japanese DJ that lays down mixes in the local NYC scene. \
        A lot of disco, reggae, and soul that you\'ve never heard is in the queue. I think another one of my favorite things \
        about Mihoko is that she doesn\'t actually do much mixing. It feels like the epitome of this Mr Scruff comic that I love \
        so much called How To DJ. You put on one song you really like, and let it play for a while, and then when the song is over \
        you put on another song you really like and fade into it. Hardly any beat matching or technical movements, just purely \
        amazing music taste and focus on the music.',
        photoUrl: '/blog_media/dj_blog_media/dj_mihoko.webp',
        set: "https://youtu.be/p7w0PtLGQBk?si=StcUd2tiFAKeK1dw",
        set_desc: "Vinyl Factory Live #1, 2022",
      },
      {
        id: 9,
        title: 'Jurek Jurkowski',
        snippet: 'Technology has really opened up the gates in terms \
        of what a person can listen to and who can get out there as a DJ. Jurek Jurkowski is an important figure, I feel, in \
        the Youtube DJ scene. And famous for his son, Little Filip, who flips wax at 9 years old better than most adult DJs. \
        It\'s good, fun, no bs, classic house, it can\'t get much better than that. They haven\'t posted since 2020 so we\'re \
        stuck wishing Jurek and his son well, with fingers crossed for more.',
        photoUrl: '/blog_media/dj_blog_media/jurek.jpg',
        set: "https://youtu.be/HC6vN-qd0TE?si=wJinPfvZTSPO-xaT",
        set_desc: "This is our House #3, 2020",
      },
    //   {
    //     id: 3,
    //     title: 'The Chemical Bros',
    //     snippet: '',
    //     photoUrl: '/blog_media/dj_blog_media/chemical_bros.jpg',
    //     set: "",
    //     set_desc: "",
    //   },
      {
        id: 10,
        title: 'Madlib',
        snippet: 'Few others can boast about as successful of a career as Madlib. From his own personal catalog, to \
        radio shows, DJ sets, and his backlog of collaborations. MF DOOM, J Dilla, Freddie Gibbs, Snoop, Tribe, it\'s  \
        more than enough to cement him as a legend in the hip hop scene. Not to mention his side project Quasimoto, with \
        the classic records Unseen and Yessir Whatever. This still overlooks maybe his most iconic release, Shades of Blue \
        from 2003, where he remixes the Blue Note label releases. Like so many other crate diggers, he has a love of South \
        American music, specifically Brazil. His radio show featuring his own mixes was called the Madlib Medicine Show, \
        each with a different theme. I\'m such a fan of Brazilian music so it\'s no surprise that Episode 2, Flight to Brazil \
        is my favorite.',
        photoUrl: '/blog_media/dj_blog_media/madlib.jpeg',
        set: "https://youtu.be/DtxL04VwLU8?si=yagC-l1i8q_hMaKz",
        set_desc: "Madlib Medicine Show 2: Flight to Brazil, 2010",
      },
      {
        id: 11,
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
        id: 12,
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
      id: 13,
      title: 'Avalanches',
      snippet: 'The Avalanches are maybe the most recognizable example of something called "plunderphonics". The idea of \
      sampling other sound sources turned up to 11. Their eclectic songs end up sounding like song collages that somehow \
      still hold their own identity shockingly well. Since I Left You in 2000 quickly became an essential record - cited as \
      having no live music and being made up of 3500 samples. It stood alone until the sophomore record 16 years later, \
      Wildflower. It\'s no surprise that their DJ sets or b-side catalogue is expansive and insightful into their listening \
      habits. Listening with an open mind can turn you on to dozens of new artists and musics.',
      photoUrl: '/blog_media/dj_blog_media/avalanches.jpg',
      set: "https://youtu.be/ycFxOhLZYFw?si=DnE08TGJ5mFFJi9c",
      set_desc: "The BBC Radio Essential Mix, 2016"
    },
    // {
    //     id: 14,
    //     title: 'TheDaddyO44',
    //     snippet: '',
    //     photoUrl: '/blog_media/dj_blog_media/daddyo.jpg',
    //     set: "https://youtu.be/KWCi_GhNCnY?si=a34TzYS7GgW7cGXI",
    //     set_desc: "Mix 48, Prince Of Denmark, 2022"
    //   },
  ];


//   const BlogPost = ({ post }) => (
//     <div key={post.id} style={{ marginBottom: '20px' }}>
//     <img 
//     src={post.photoUrl} 
//     alt={post.title} 
//     style={{ width: '40%', display: 'block', margin: '0 auto' }} 
//     />
//       <h2>{post.title}</h2>
//       <p>{post.snippet}</p>
//       {'\n'}
//       <p><a href={post.set} target="_blank" rel="noopener noreferrer">{post.set_desc}</a></p>
//     </div>
//   );

// const BlogPost = ({ post }) => (
//     <div key={post.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
//       <div style={{ flex: '1', textAlign: 'center' }}>
//         <img src={post.photoUrl} alt={post.title} style={{ width: '60%', display: 'block', margin: '0 auto' }} />
//       </div>
//       <div style={{ flex: '1', padding: '0 20px' }}>
//         <h2>{post.title}</h2>
//         <p>{post.snippet}</p>
//         <p><a href={post.set} target="_blank" rel="noopener noreferrer">{post.set_desc}</a></p>
//       </div>
//     </div>
//   );


const BlogOnePage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <h1>The DJ Blog</h1>
      <p>

      {/* <div>
    {blogPosts.map(post => (
      <BlogPost key={post.id} post={post} />
    ))}
  </div> */}

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
                <a href={post.set} target="_blank">{post.set_desc}</a>
                {'\n'}{'\n'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {'\n'}{'\n'}
      <img src="/blog_media/dj_blog_media/how_to_dj.jpg" alt="Mr Scruff's comic, how to DJ" style={{ display: 'block', width: '100%' }} />
      {'\n'}{'\n'}
      {'\n'}{'\n'}
      <video 
        src="/blog_media/dj_blog_media/moodymann.mp4" 
        alt="Moodymann Clip" 
        style={{ display: 'block', width: '100%' }} 
        controls 
        />
      {'\n'}{'\n'}
      {'\n'}{'\n'}
      </p>
    </div>
    </div>
    </div>
  );
};

export default BlogOnePage;
