const photos = [
    { src: "dj_roof_3.png", width: 1500, height: 2700 },
    { src: "Burnt-cover-back.jpeg", width: 3200, height: 3200 },
    { src: "dj_roof_5.png", width: 2700, height: 1500 },
    { src: "000307350028.jpg", width: 1800, height: 1200 },
    { src: "studio.png", width: 1000, height: 1000 },
    { src: "IMG_9431.PNG", width: 1500, height: 2000 },
    { src: "000307350033.jpg", width: 1200, height: 1800 },
    { src: "000307360023.jpg", width: 1800, height: 1200 },
    { src: "Earthquake.jpg", width: 1000, height: 1000 },
    { src: "guitar_photo_recolored.jpeg", width: 1500, height: 1000 },
    { src: "discodidntdie.jpeg", width: 1000, height: 1000 },
    { src: "gray4.png", width: 2048, height: 1360 },
    { src: "dj_pic_2.png", width: 1500, height: 2000 },
    { src: "NicolePlay_v2_Selects_Instagram.jpg", width: 1500, height: 2000 },
    { src: "sundry.png", width: 2250, height: 1000 },
    { src: "visual_disturbances_2.png", width: 1500, height: 1000 },
    { src: "360_record_shop.png", width: 1000, height: 1700 },
    { src: "Recital.png", width: 1800, height: 1000 },
    { src: "dj_pic.png", width: 1900, height: 1000 },
    { src: "meajbiokjnbnpjik.png", width: 1500, height: 2300 },
    { src: "finest_hour.png", width: 1000, height: 1000 }
  ];

const transformPhotoObjects = (photos) => {
  return photos.flatMap(photo => [
    {
      src: `music-images/${photo.src}`,
      width: photo.width,
      height: photo.height
    }
  ]);
};

const filePaths = transformPhotoObjects(photos);

// Output the JSON to the console
console.log(JSON.stringify(filePaths));

// Export the result
module.exports = filePaths;
