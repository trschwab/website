// src/pages/MusicPage.js
import React from 'react';
import PhotoAlbum from "react-photo-album";
import { Link } from 'react-router-dom';

const photos = [

  // { src: "/media/Burnt-cover-front.jpeg", width: 3200, height: 3200 },
  { src: "/media/music_page_media/dj_roof_3.png", width: 1500, height: 2700 },
  { src: "/media/Burnt-cover-back.jpeg", width: 3200, height: 3200 },
  { src: "/media/music_page_media/dj_roof_5.png", width: 2700, height: 1500 },
  { src: "/media/000307350028.jpg", width: 1800, height: 1200 },


  { src: "/media/studio.png", width: 1000, height: 1000 },
  { src: "/media/IMG_9431.PNG", width: 1500, height: 2000 },
  

  // { src: "/media/gray1.png", width: 2048, height: 1360 },

  { src: "/media/000307350033.jpg", width: 1200, height: 1800 },
  { src: "/media/000307360023.jpg", width: 1800, height: 1200 },
  { src: "/media/Earthquake.jpg", width: 1000, height: 1000 },
  { src: "/media/guitar_photo_recolored.jpeg", width: 1500, height: 1000 },
  // { src: "/media/gray3.png", width: 2048, height: 1360 },

  // { src: "/media/371DEE08-7EE6-40AA-B12A-72FA8D88D54F.JPG", width: 2048, height: 1360 },
  { src: "/media/EP - Disco Didn't Die.jpeg", width: 1000, height: 1000 },

  { src: "/media/gray4.png", width: 2048, height: 1360 },
  // { src: "/media/65330005.JPG", width: 3500, height: 2400 },
  // { src: "/media/dj_pic_3.png", width: 1500, height: 2000 },
  { src: "/media/dj_pic_2.png", width: 1500, height: 2000 },


  { src: "/media/NicolePlay_v2_Selects_Instagram.jpg", width: 1500, height: 2000 },
  { src: "/media/sundry.png", width: 2250, height: 1000 },
  { src: "/media/visual_disturbances_2.png", width: 1500, height: 1000 },
  { src: "/media/360_record_shop.png", width: 1000, height: 1700 },
  { src: "/media/Recital.png", width: 1800, height: 1000 },

  
  { src: "/media/dj_pic.png", width: 1900, height: 1000 },
  { src: "/media/meajbiokjnbnpjik.png", width: 1500, height: 2300 },
  { src: "/media/finest_hour.png", width: 1000, height: 1000 },
  // { src: "/media/visual_disturbances_1.png", width: 1500, height: 1000 },
  

];

const MusicPage = () => {
  const galleryStyle = {
    maxWidth: '80%',
    margin: '50px auto',
  };

// const MusicPage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <p>
        {/* <h4>Café Kitsuné Digital DJ Set</h4>
        March 2024 Digital DJ Set, <a href="https://www.youtube.com/watch?v=ersBSiIy5ZE" target="_blank" rel="noopener noreferrer">accessible here</a>
        {'\n'}{'\n'}
        <h4>Vinyl DJ Demos</h4>
        2023 & 2024 Vinyl DJ Set Demos, <Link to={`/vinyl`}>accessible here</Link>
        {'\n'}{'\n'} */}
        <h4>Burnt EP</h4>
        2024 EP titled Burnt
        {'\n'}
        With Vinyl & Digital release
        {'\n'}{'\n'}
        <h4>Live Guitar</h4>
        2023 performance at The Tank for one-act plays written by Nicole Frances Goth and Pat D Robinson
        {'\n'}{'\n'}
        <h4>Earthquake Single</h4>
        2021 single titled <a href="https://open.spotify.com/album/4K066FJKZ8mbmAyVF4ZBq4?si=YHy0KE72Txu8ydCd6Zue8Q" target="_blank" rel="noopener noreferrer">Earthquake</a>
        {'\n'}{'\n'}
        <h4>Sundry</h4>
        2021 Music for Gray Deuber's short film titled <a href="https://www.imdb.com/title/tt14056848/" target="_blank" rel="noopener noreferrer">Sundry</a>
        {'\n'}{'\n'}
        <h4>Disco Didn't Die EP</h4>
        2020 EP titled <a href="https://open.spotify.com/album/6H8F4obcl91gxBawGj7U6n?si=3aUUxat_R_uLiLLiAyaiOA" target="_blank" rel="noopener noreferrer">Disco Didn't Die</a>
        {'\n'}{'\n'}
        <h4>The finest hour in an infinite journey</h4>
        2019 single for Yuan Gao's short film titled <a href="https://youtu.be/p09OnCrNTow?t=746" target="_blank" rel="noopener noreferrer">The finest hour in an infinite journey</a>
        {'\n'}{'\n'}
        <h4>Visual Disturbances OST</h4>
        2017 score for Eric Faden's feature film titled <a href="https://vimeo.com/302106011" target="_blank" rel="noopener noreferrer">Visual Disturbances</a>
        {'\n'}{'\n'}
        <h4>NYU Steinhardt</h4>
        2016 performance at NYU Steinhardt's Interactive Performance Art Concert Series.
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        </p>
        </div>
        </div>
        <div style={galleryStyle}>  
      <PhotoAlbum layout="masonry" photos={photos}
      columns={(containerWidth) => {
        if (containerWidth < 500) return 1;
        if (containerWidth < 800) return 2;
        return 3;
  }}/>
    </div>
    </div>
  );
};

export default MusicPage;
