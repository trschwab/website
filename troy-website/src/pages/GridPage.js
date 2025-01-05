import React, { useState, useEffect } from 'react';
import { RowsPhotoAlbum } from "react-photo-album";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

const photos = [
  { src: "/media/dj_roof_3.png", width: 1500, height: 2700 },
  { src: "/media/Burnt-cover-back.jpeg", width: 3200, height: 3200 },
  { src: "/media/dj_roof_5.png", width: 2700, height: 1500 },
  { src: "/media/000307350028.jpg", width: 1800, height: 1200 },
  { src: "/media/studio.png", width: 1000, height: 1000 },
  { src: "/media/IMG_9431.PNG", width: 1500, height: 2000 },
  { src: "/media/000307350033.jpg", width: 1200, height: 1800 },
  { src: "/media/000307360023.jpg", width: 1800, height: 1200 },
  { src: "/media/Earthquake.jpg", width: 1000, height: 1000 },
  { src: "/media/guitar_photo_recolored.jpeg", width: 1500, height: 1000 },
  { src: "/media/EP - Disco Didn't Die.jpeg", width: 1000, height: 1000 },
  { src: "/media/gray4.png", width: 2048, height: 1360 },
  { src: "/media/dj_pic_2.png", width: 1500, height: 2000 },
  { src: "/media/NicolePlay_v2_Selects_Instagram.jpg", width: 1500, height: 2000 },
  { src: "/media/sundry.png", width: 2250, height: 1000 },
  { src: "/media/visual_disturbances_2.png", width: 1500, height: 1000 },
  { src: "/media/360_record_shop.png", width: 1000, height: 1700 },
  { src: "/media/Recital.png", width: 1800, height: 1000 },
  { src: "/media/dj_pic.png", width: 1900, height: 1000 },
  { src: "/media/meajbiokjnbnpjik.png", width: 1500, height: 2300 },
  { src: "/media/finest_hour.png", width: 1000, height: 1000 },
];

const SimpleGrid = () => {
  const [columns, setColumns] = useState(3);

  const updateColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setColumns(1);
    } else if (screenWidth <= 1024) {
      setColumns(2);
    } else {
      setColumns(3);
    }
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "10px",
    padding: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <PhotoAlbum
      layout="rows"
      photos={photos}
      spacing={20}
      targetRowHeight={200}
      rowConstraints={(containerWidth) => ({ maxPhotos: containerWidth < 600 ? 1 : 4 })}
    />
    // <div style={gridStyle}>
    //   {photos.map((photo, index) => (
    //     <img key={index} src={photo.src} alt={`Photo ${index + 1}`} style={imageStyle} />
    //   ))}
    // </div>
  );
};

export default SimpleGrid;
