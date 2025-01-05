const homeImages = [
    { src: "39220011.JPG", width: 1200, height: 800 },
    { src: "20330011.JPG", width: 1200, height: 800 },
    { src: "16680010.JPG", width: 1200, height: 800 },
    { src: "16500033.JPG", width: 1200, height: 800 },
    { src: "16500030.JPG", width: 1200, height: 800 },
    { src: "10950016.JPG", width: 1200, height: 800 },
    { src: "09630022.JPG", width: 1200, height: 800 },
    { src: "07280013.JPG", width: 1200, height: 800 },
    { src: "06720010.JPG", width: 1200, height: 800 },
    { src: "06580001.JPG", width: 1200, height: 800 },
    { src: "06570036.JPG", width: 1200, height: 800 },
    { src: "06570002.JPG", width: 1200, height: 800 },
    { src: "09630021.JPG", width: 1200, height: 800 },
    { src: "16670007.JPG", width: 1200, height: 800 },
    { src: "16700024.JPG", width: 1200, height: 800 },
    { src: "06590016.JPG", width: 1200, height: 800 },
    { src: "06720006.JPG", width: 1200, height: 800 },
    { src: "06660009.JPG", width: 1200, height: 800 },
    { src: "000017370015.jpg", width: 1200, height: 800 },
    { src: "16570002.JPG", width: 1200, height: 800 },
    { src: "000019180025.jpg", width: 1200, height: 800 },
    { src: "89950011.JPG", width: 1200, height: 800 },
    { src: "10950014.JPG", width: 1200, height: 800 },
    { src: "14070017.JPG", width: 1200, height: 800 },
    { src: "61690024.JPG", width: 1200, height: 800 }, // Plane red sky and moon
    // { src: "61700005.JPG", width: 1200, height: 800 }, // NOLA ferrari
    // { src: "61670024.JPG", width: 1200, height: 800 }, // wood stack
    { src: "61600002.JPG", width: 1200, height: 800 }, // NOLA Chess
    // { src: "61610005.JPG", width: 1200, height: 800 }, // NOLA Record Shop
    { src: "61580014.JPG", width: 1200, height: 800 }, // NYC double bridge
    

];

const transformPhotoObjects = (photos) => {
  return photos.flatMap(photo => [
    {
      midres: `photography/midres/${photo.src}`,
      lowres: `photography/lowres/${photo.src}`,
      width: photo.width,
      height: photo.height
    }
  ]);
};

const filePaths = transformPhotoObjects(homeImages);

// Output the JSON to the console
console.log(JSON.stringify(filePaths));

// Export the result
module.exports = filePaths;
