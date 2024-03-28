// src/pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <p>
      Hi, I’m Troy and this is my website.
      {'\n'}{'\n'}
    I am a data engineer who enjoys composing as well. I am currently based in New York City, working at Pulse Analytics. This website serves to collect my public computer science work, compositions, and other miscellaneous items I may be working on. If you’d like to contact me, you can email me at trschwab7 @ gmail.com.
    {'\n'}{'\n'}
    Hope you have a lovely day
      </p>
      <div className="icon-list-container">
      <ul>
            <li className="li_spacing"><a href="https://www.chess.com/member/tschwab" target="_blank" rel="noopener noreferrer"><img src="./media/icons/icon_chess.png" alt="Chess" className="icon" /></a></li>	
            <li className="li_spacing"><a href="https://rateyourmusic.com/~tschwab" target="_blank" rel="noopener noreferrer"><img src="./media/icons/icon_music.png" alt="Music" className="icon" /></a></li>
            <li className="li_spacing"><a href="https://letterboxd.com/trschwab/" target="_blank" rel="noopener noreferrer"><img src="./media/icons/icon_movie.png" alt="Movies" className="icon" /></a></li>
            <li className="li_spacing"><a href="https://www.linkedin.com/in/troy-schwab-4b22a6105/" target="_blank" rel="noopener noreferrer"><img src="./media/icons/icon_linkedin.png" alt="LinkedIn" className="icon" /></a></li>
            <li className="li_spacing"><a href="https://open.spotify.com/user/troyschwab?si=f2d078dc9a034360" target="_blank" rel="noopener noreferrer"><img src="./media/icons/icon_spotify.png" alt="Spotify" className="icon" /></a></li>
          </ul>
          </div>
    </div>
    </div>
    </div>
  );
};

export default AboutPage;
