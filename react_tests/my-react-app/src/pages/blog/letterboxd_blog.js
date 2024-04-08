// src/pages/BlogOnePage.js
import React from 'react';

const BlogOnePage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <p>
      <h1>Letterboxd Wrapped</h1>
		  {'\n'}
      When I first received my Letterboxd wrapped, a website which tracks user's movie information, I wasn't thrilled. 
      Sure, it's a smaller company and their premium offerings provide many statistics to a user, but provided to users was 
      some general counts throughout the year, top director and actor, and highest rated movies. This to me felt like a 
      lot of wasted potential in terms of intereting analyses. I initially looked through their source code trying to get a sense 
      of data, and I noticed studio, country, genre information that started to give me ideas for unique outputs. Profiling 
      the data in this way was very casual, especially at first, and I set out to make a simple wrapped for users.
      {'\n'}{'\n'}
      <img src="/blog_media/letterboxd_blog_media/mws-letterboxd1.png" alt="photo of a sazerac cocktail" style={{ display: 'block', width: '100%' }} />
		  {'\n'}{'\n'}
      When I started this project I wasn't very comfortable using Python as a Data Engineer; a majority of my previous work was 
      focused in Java, with responsibilities arguably closer to an Analytics Engineer. The first iteration of this project used 
      BeautifulSoup for scraping and tried to engage with SQLite. It wasn't anything special and fell short in many ways. 
      Letterboxd did not have an API so I wrote inefficient scripts to scrape a user's profile and the assertion of that 
      data into SQLite was not pretty. There was a lot of string manipulation as well and I hadn't used Pandas to the fullest 
      possibility. At the end of this "Part 1" of my project, I could (slowly) generate stats for a user and what was interesting 
      was fully in the output I had provided. 
      {'\n'}{'\n'}
      My general summary statistics for this first iteration were
      <ul>
      <li>Most Watched Actors</li>
      <li>Most Watched Directors</li>
      <li>Most Watched Genres</li>
      <li>Most Watched Country of Origin</li>
      <li>Most Watched Studios</li>
      <li>Highest Rated Studios</li>
      <li>Highest Rated Directors</li>
      <li>Average Rating of the Year</li>
      <li>Rating Standard Deviation</li>
      <li>Review Count</li>
      <li>Percent of Movies Reviewed</li>
      <li>Most Watched Years</li>
      <li>Most Watched Decades</li>
      <li>"Hot Takes"</li>
      </ul>
      {'\n'}{'\n'}
      This was a solid start and enough to have me content on the first version. The "Hot Takes" statistic was a favorite 
      of mine, and simply was movies when a user's rating differed from the movie's average rating by more than 3 points. 
      {'\n'}{'\n'}
      TODO Keep writing about the first iteration
      {'\n'}{'\n'}
      I started revamping my letterboxd project sporadically through the year. It was something that sort of just fell off 
      at the end of 2021. I had gotten a new job and was trying to focus on that among other things and the project tapered 
      off naturally. I had made something that was pretty cool that could run locally and I shared stats with my friends 
      who were active users on letterboxd. There really was no need for me to pursue much further. As I started setting 
      stronger goals at work, I began to think about my skillset and natural motion of how to improve it in terms of 
      professional development. I was becoming a strong Data Engineer, and I had had experience working more with 
      upstream data with focus on ingest, as well as downstream analytics engineer type of work for business analytics. 
      As those skills began to solidify I began to think about my ability overall as a programmer.
      {'\n'}{'\n'}
      One thing that really began to irritate me was my inability to productionize local code for external users. Standing 
      up a website that could be run on its on by a lay user would be a major challenge, but also something absolutely 
      essential for, not only a project like this, but for any proper enginerr to have experience doing. I hadn't the first 
      thought about creating html capable of executing python scripts. My first website for several years was static html 
      and css pages. Dreams of Scaruffi and Stroustrup. Keep it lightweight and keep it simple, this was a major ideal 
      for me in my coding life. Coding towards a lightweight simple solution gets you very far. Features of code such as 
      scalability, flexibility, robustness, naturally extended from lightweight simplicity. TODO
      {'\n'}{'\n'}
      Trying to get a proper MVP Django website was challenging. I think that I reached a point where it can be stood 
      up as a website for people to actually see, but as I began to pursue that solution the idea of an API has really 
      distracted me. The API can be maintained properly on that same Django site and can serve to properly serialize the 
      data. While I was thinking, in previous years at the start of this project, that I might want to manually have some 
      database organized in the sqlite backend, it has become clear to me that that neglects a major utility of Django. An 
      API would serve to do all the functionality of the manual sqlite backend but also offer strong scalability, 
      serialization, as well as completely delimiting data backend code from data engineer code. Such a distinction allows 
      for more complex programs in those respective roles but also aids the security, scalability, and all other necessary 
      features for a strong healthy production project.
      
      </p>
    </div>
    </div>
    </div>
  );
};

export default BlogOnePage;
