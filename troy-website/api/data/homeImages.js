const homeImages = [
    { src: "54210006.JPG", width: 3583, height: 2376 }, // woman red back
    { src: "54220014.JPG", width: 3583, height: 2376 }, // car bridge
    { src: "54180030.JPG", width: 3583, height: 2376 }, // ice
    { src: "54160031.JPG", width: 3583, height: 2376 }, // snow bench
    { src: "54220023.JPG", width: 2376, height: 3583 }, // record shop vinyl
    { src: "54140018.JPG", width: 3583, height: 2376 }, // man walking with cab -- maybe
    { src: "54220012.JPG", width: 3583, height: 2376 }, // A1 Records
    { src: "39220011.JPG", width: 1200, height: 800 }, // Airplane easy Blue
    { src: "20330011.JPG", width: 1200, height: 800 }, // Snowy Bike Basket
    // { src: "16680010.JPG", width: 1200, height: 800 }, // Plane Mississippi
    { src: "16500033.JPG", width: 1200, height: 800 }, // Farmers Market w Purple
    { src: "16500030.JPG", width: 1200, height: 800 }, // Tomato Farmers Market
    // { src: "10950016.JPG", width: 1200, height: 800 }, // East River Fishermen
    { src: "09630022.JPG", width: 1200, height: 800 }, // Red coat and Flowers
    // { src: "07280013.JPG", width: 1200, height: 800 }, // Icy Bench
    // { src: "06720010.JPG", width: 1200, height: 800 }, // Italy Hand
    { src: "06580001.JPG", width: 1200, height: 800 }, // Vatican Ceiling
    { src: "06570036.JPG", width: 1200, height: 800 }, // Italy Graffiti
    { src: "06570002.JPG", width: 1200, height: 800 }, // Italy Leaves Degrading
    { src: "09630021.JPG", width: 1200, height: 800 }, // Tulips
    { src: "16670007.JPG", width: 1200, height: 800 }, // Cinci Vines Wet
    { src: "16700024.JPG", width: 1200, height: 800 }, // Cinci Moon Sliver
    // { src: "06590016.JPG", width: 1200, height: 800 }, // Italy Wall Tile Fisherman Image
    { src: "06720006.JPG", width: 1200, height: 800 }, // Italy Church
    { src: "06660009.JPG", width: 1200, height: 800 }, // Positano Madonna nad Child at Night
    { src: "000017370015.jpg", width: 1200, height: 800 }, // Night Spheres of Color
    { src: "16570002.JPG", width: 1200, height: 800 }, // Woman reading Subway -- Fish
    // { src: "000019180025.jpg", width: 1200, height: 800 }, // MET Statue
    { src: "89950011.JPG", width: 1200, height: 800 }, // PA at Golden Hour
    { src: "10950014.JPG", width: 1200, height: 800 }, // East River Fishermen Close Up
    { src: "14070017.JPG", width: 1200, height: 800 }, // Bike on Side
    { src: "61690024.JPG", width: 1200, height: 800 }, // Plane red sky and moon
    // { src: "61700005.JPG", width: 1200, height: 800 }, // NOLA ferrari
    // { src: "61670024.JPG", width: 1200, height: 800 }, // wood stack
    { src: "61600002.JPG", width: 1200, height: 800 }, // NOLA Chess
    // { src: "61610005.JPG", width: 1200, height: 800 }, // NOLA Record Shop
    { src: "61580014.JPG", width: 1200, height: 800 }, // NYC double bridge
    // 
    // { src: "45300024.JPG", width: 800, height: 1200 }, // Man welding -- mobile only
    { src: "000048420037.jpg", width: 1200, height: 800 }, // NYC Tulips
    { src: "000048380012.jpg", width: 1200, height: 800 }, // NYC Chess
    { src: "82500035.JPG", width: 1200, height: 800 }, // Ginkgo leaves, Cincinnati
    { src: "000048430001.jpg", width: 1200, height: 800 }, // Wet vines and flowers, Cincinnati
    { src: "82540017.JPG", width: 1200, height: 800 }, // Car reflection cliche
    { src: "000048430007.jpg", width: 1200, height: 800 }, // Cincinnati Puddle Reflection
    // { src: "54180034.JPG", width: 1200, height: 800 }, // Duck window Chinatown -- Desktop only
    // { src: "54150003.JPG", width: 1200, height: 800 }, // Birds over a building
    
    
    
    

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
