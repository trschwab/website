// src/pages/BlogOnePage.js
import React from 'react';

const OnceAndForeverPage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <h1>Website Deployment</h1>
      {'\n'}{'\n'}
      {/* <img src="/blog_media/once_and_forever/closeup.jpg" style={{ display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} /> */}
      <p>
      I had had a website for some years now. The first version was a very poor html page conceived while I was in school; it was hosted
      using the excellent resource of github pages. I had poked around reading about attaching a domain to it for a proper site, but 
      really I didn't have much of anything to put on the site so it never got fleshed out too far. Some years later I decided to properly 
      spin up a site; I purchased my first domain, troyschwab.com, and purchased a server. I made some minimal css and html that got the 
      job done but that was really about it. Slowly, as I've had more and more content that I'd like to post on my site, did the complexity grow.
      With that complexity came need for a more modern and dynamic page. As I began to look at frameworks best suited for my purposes I found
      React, and began the process of migration.
      {'\n'}{'\n'}
      <img src="/blog_media/website_deployment_blog/React-vs-other-frameworks.jpg" style={{ display: 'block', width: '80%', marginLeft: 'auto', marginRight: 'auto' }} />
      {'\n'}{'\n'}
      The migration process was for the most part completely straightfoward. A lot of my pages had been simple html, and as such their 
      React counterparts did not require any complexity. The ones that did were mainly the photography page, which can be seen on this 
      very site. The images hadn't been loading fast enough and the actual gallery layout was a bit too rigid and ugly. The best I could 
      do at the time was a manual grid with many pages that were not dynamic. Using a component called the React Photo Album, I was 
      able to more dynamically create a gallery, with images that were pulled from a list of tuples containing file paths and width and 
      height details. I cleaned up some of my other pages, and with that began the process of deployment.
      {'\n'}{'\n'}
      The first step was a server. I use Vultr as my provider, and wiped out my old server (after ensuring all the files had been saved). 
      With this, I had a new IP and a fresh slate server. I used a Debian distribution with minimal settings to account for the low traffic.
      I found a useful follow along video here https://www.youtube.com/watch?v=KFwFDZpEzXY and began work ssh'd in.
      {'\n'}{'\n'}
      We can break down the process into three main parts (considering I already had my React website spun up locally). The first was 
      server maintanence. I updated with <code>apt update</code> and <code>apt upgrade</code> commands, as well as setting the time zone 
      information with <code>dpkg-reconfigure tzdata - set timezone</code>. I created my user with <code>adduser {"{"}username{"}"}</code>.
      and gave them sudo permissions, before disabling the root user.
      {'\n'}{'\n'}
      I was still hitting 403 and 404 errors until I realized that my firewalls were not set up appropriately. The simple fix was:
      {'\n'}<code>sudo ufw status{'\n'}
      sudo ufw enable{'\n'}
      sudo ufw allow 80/tcp{'\n'}
      sudo ufw allow 443/tcp{'\n'}
      sudo ufw status{'\n'}
      sudo systemctl reload nginx{'\n'}
      </code>

      {'\n'}{'\n'}
      <div className="image123" style={{ display: 'flex' }}>
      <div style={{ flex: '1', margin: '0 2%' }} className="imgContainer">
        <img src="/blog_media/once_and_forever/Gauche_AMJuJu.jpg" style={{ width: '100%', height: 'auto' }} alt="Image 1" />
      </div>
      <div style={{ flex: '1', margin: '0 2%' }} className="imgContainer">
        <img className="middle-img" src="/blog_media/once_and_forever/wind.jpg" style={{ width: '100%', height: 'auto' }} alt="Image 2" />
      </div>
      <div style={{ flex: '1', margin: '0 2%' }} className="imgContainer">
        <img src="/blog_media/once_and_forever/Night_on_the_Galactic_Railroad.jpg" style={{ width: '100%', height: 'auto' }} alt="Image 3" />
      </div>
    </div>
      {'\n'}{'\n'}
      OAF all over is a well rounding and good read. I think that my favorite stories were
      General Son Ba-yu, The First Deer Dance, The Bears of Nametoko, The Wildcat and The Acorns, Gorsch the Cellist, 
      and Kenju's Wood. This was a read I have been picking up and down for a long time because of the separation 
      of the stories. I'm really pleased to have finished it and am looking forward to reading some more Miyazawa. 
      {'\n'}{'\n'}
      There is a memorial museum erected in his honor in Iwate.
      {'\n'}{'\n'}
      https://www.japan.travel/en/spot/483/
      {'\n'}{'\n'}
      https://www.tripadvisor.com/Attraction_Review-g1022876-d1424303-Reviews-Miyazawa_Kenji_Memorial-Hanamaki_Iwate_Prefecture_Tohoku.html
      {'\n'}{'\n'}
      <img src="/blog_media/once_and_forever/cello.jpg" style={{ display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
      {'\n'}{'\n'}
      Looking at photos of Hanamaki, I can better understand the beautiful images Miyazawa draws from.
      {'\n'}{'\n'}
      {'\n'}{'\n'}
      <img src="/blog_media/once_and_forever/hanamaki.jpg" style={{ display: 'block', width: '90%', marginLeft: 'auto', marginRight: 'auto' }} />
      {'\n'}{'\n'}
      {'\n'}{'\n'}
      {'\n'}{'\n'}
      </p>
    </div>
    </div>
    </div>
  );
};

export default OnceAndForeverPage;
