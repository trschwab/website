// const transformPhotoObjects = (photos) => {
//   return photos.flatMap(photo => [
//     {
//       midres: `photography/mires/${photo.src}`,
//       lowres: `photography/lowres/${photo.src}`,
//       width: photo.width,
//       height: photo.height
//     }
//   ]);
// };

//   const files = [
//     { src: "94890036.JPG", width: 2376, height: 3583 }, // close up motorcycle
//     { src: "94930032.JPG", width: 2376, height: 3583 }, // moon and plane
//     { src: "94930003.JPG", width: 3583, height: 2376 }, // bike close up be kind
//     { src: "94930012.JPG", width: 2376, height: 3583 }, // shadows on pipe
//     { src: "94920018.JPG", width: 3583, height: 2376 }, // cherries at farmers market
//     { src: "94900027.JPG", width: 2376, height: 3583 }, // sign and faded bird grafitti
//     { src: "94890032.JPG", width: 2376, height: 3583 }, // building
//     { src: "94910027.JPG", width: 2376, height: 3583 }, // man walking
//     { src: "94910025.JPG", width: 2376, height: 3583 }, // bike missing wheel
//     { src: "94930017.JPG", width: 3583, height: 2376 }, // flower and skyline
//     { src: "06720006.JPG", width: 3583, height: 2376 }, // rome church
//     { src: "06570002.JPG", width: 3583, height: 2376 }, // rome dead leaves
//     { src: "06670037.JPG", width: 2376, height: 3583 }, // rome blue sign
//     { src: "06520032.JPG", width: 2376, height: 3583 }, // positano morning seltzer
//     { src: "06720010.JPG", width: 3583, height: 2376 }, // rome hand closing window
//     { src: "06520033.JPG", width: 3583, height: 2376 }, // positano morning blue boat
//     { src: "06680001.JPG", width: 2376, height: 3583 }, // positano beach bum
//     { src: "06570005.JPG", width: 3583, height: 2376 }, // rome forum 3 column
//     { src: "06610029.JPG", width: 2376, height: 3583 }, // statue vatican
//     { src: "06530009.JPG", width: 3583, height: 2376 }, // positano woman smoking
//     { src: "06680007.JPG", width: 2376, height: 3583 }, // positano morning red boat
//     { src: "06740022.JPG", width: 2376, height: 3583 }, // rome trevi fountain
//     { src: "06710033.JPG", width: 2376, height: 3583 }, // positano beach tanner
//     { src: "06570023.JPG", width: 2376, height: 3583 }, // rome termini trash
//     { src: "06690022.JPG", width: 2376, height: 3583 }, // rome borghese
//     { src: "06570036.JPG", width: 3583, height: 2376 }, // rome grafitti face
//     { src: "06740003.JPG", width: 2376, height: 3583 }, // rome pink lady
//     { src: "06550018.JPG", width: 2376, height: 3583 }, // ravello church and moped
//     { src: "06590016.JPG", width: 3583, height: 2376 }, // amalfi mural
//     { src: "06660010.JPG", width: 2376, height: 3583 }, // positano madonna 1
//     { src: "06660017.JPG", width: 2376, height: 3583 }, // positano tribute
//     { src: "06630009.JPG", width: 2376, height: 3583 }, // positano boat
//     { src: "06580001.JPG", width: 3583, height: 2376 }, // vatican ceiling
//     { src: "06660013.JPG", width: 2376, height: 3583 }, // positano fruit
//     { src: "06660011.JPG", width: 3583, height: 2376 }, // positano madonna 2
//     { src: "06670017.JPG", width: 3583, height: 2376 }, // rome graffiti lighting
//     { src: "06550021.JPG", width: 3583, height: 2376 }, // amalfi kids game
//     { src: "07410019.JPG", width: 2376, height: 3583 }, // NY tomatoes and Soda
//     { src: "16530003.JPG", width: 3583, height: 2376 }, // upsidown cloud
//     { src: "16560024.JPG", width: 2376, height: 3583 }, // pride kiss
//     { src: "16520003.JPG", width: 3583, height: 2376 }, // rosary
//     { src: "16480014.JPG", width: 3583, height: 2376 }, // pride flag
//     { src: "16560027.JPG", width: 2376, height: 3583 }, // pride hat
//     { src: "16480029.JPG", width: 2376, height: 3583 }, // drops on leaf
//     { src: "16500033.JPG", width: 3583, height: 2376 }, // NY farmers market
//     { src: "16510013.JPG", width: 3583, height: 2376 }, // Coast Guard
//     { src: "16480022.JPG", width: 3583, height: 2376 }, // man in coffee shop
//     { src: "16500030.JPG", width: 3583, height: 2376 }, // hand farmers market
//     { src: "16490032.JPG", width: 3583, height: 2376 }, // smiling bike couple
//     { src: "16500020.JPG", width: 2376, height: 3583 }, // Princeton train
//     { src: "16570002.JPG", width: 2376, height: 3583 }, // Subway Fish Woman
//     { src: "000003210012.jpg", width: 3584, height: 2376 }, // cement man
//     { src: "000003210003.jpg", width: 3584, height: 2376 }, // tan car
//     { src: "14040018.JPG", width: 1000, height: 650 }, // skater crosswalk
//     { src: "14100017.JPG", width: 650, height: 1000 }, // basketball shot
//     { src: "14090001.JPG", width: 650, height: 1000 }, // dog woman
//     { src: "14100015.JPG", width: 650, height: 1000 }, // subway stairs
//     { src: "14130014.JPG", width: 650, height: 1000 }, // Johnny Chess
//     { src: "14130037.JPG", width: 650, height: 1000 }, // Sunshine man
//     { src: "14120035.JPG", width: 650, height: 1000 }, // Crosswalk Flower Woman
//     { src: "14070017.JPG", width: 1000, height: 650 }, // Dimes Square Bike
//     { src: "14120032.JPG", width: 650, height: 1000 }, // Man shaving
//     { src: "89920010 copy.JPG", width: 650, height: 1000 }, // Ethan Shoes
//     { src: "14040029.JPG", width: 1000, height: 650 }, // Soccer Guy
//     { src: "89950011.JPG", width: 1000, height: 650 },  // PA
//     { src: "89930016.JPG", width: 1000, height: 650 }, // Greg Vinyl DJ
//     { src: "89920028.JPG", width: 1000, height: 650 }, // PA Ducks Eagle Cove
//     { src: "89900034.JPG", width: 650, height: 1000 }, // Noah Flowers
//     { src: "89930009.JPG", width: 650, height: 1000 }, // Greg DJ Sunset
//     { src: "89890007 copy.JPG", width: 650, height: 1000 }, // Tilted Hat Couple
//     { src: "89950033.JPG", width: 1000, height: 650 }, // Rooke Chapel
//     { src: "89940008 copy.JPG", width: 650, height: 1000 }, // 7th and St Catherine
//     { src: "16660022 copy.JPG", width: 650, height: 1000 }, // Cincinnati Tree
//     { src: "16680016 copy.JPG", width: 650, height: 1000 }, // Airplane Sunset
//     { src: "16680010.JPG", width: 1000, height: 650 }, // Airplane Mississippi
//     { src: "16700024.JPG", width: 1000, height: 650 }, // Ohio Moon
//     { src: "16670007.JPG", width: 1000, height: 650 }, // Ohio Foliage
//     { src: "16680018.JPG", width: 1000, height: 650 }, // Airport Thumbs Up
//     { src: "16670028.JPG", width: 1000, height: 650 }, // Pinecones Cinci
//     { src: "03540019 copy.JPG", width: 650, height: 1000 }, // Sunbathing in Field
//     { src: "16680032 copy.JPG", width: 650, height: 1000 }, // Airplane NYC
//     { src: "09630026 copy.JPG", width: 650, height: 1000 }, // Tulips and Red Bike
//     { src: "16710018 copy.JPG", width: 650, height: 1000 }, // Beautiful Plane Shot
//     { src: "09640030 copy.JPG", width: 650, height: 1000 }, // Dusty Painting Building
//     { src: "16690009.JPG", width: 1000, height: 650 }, // Bench In Cinci
//     { src: "09620004 copy.JPG", width: 650, height: 1000 }, // Yellow Sweater Farmers Market
//     { src: "16700032.JPG", width: 1000, height: 650 }, // Chalk
//     { src: "16660016.JPG", width: 1000, height: 650 }, // Cinci Flowers
//     { src: "10950018.JPG", width: 1000, height: 650 }, // East River Rods
//     { src: "10950006 copy.JPG", width: 650, height: 1000 }, // East River Fishing and Bridge
//     { src: "10960024.JPG", width: 1000, height: 650 }, // East River Sun Bathing
//     { src: "09630022.JPG", width: 1000, height: 650 }, // Red and Flowers
//     { src: "10950009.JPG", width: 1000, height: 650 }, // Women on Benches East River
//     { src: "10970013.JPG", width: 1000, height: 650 }, // Dimes sq Man with Dog
//     { src: "09640013 copy.JPG", width: 650, height: 1000 }, // Man reading and Beer Sign
//     { src: "09630004.JPG", width: 1000, height: 650 }, // Eclipse
//     { src: "09640032 copy.JPG", width: 650, height: 1000 }, // polska fish sign
//     { src: "09640011 copy.JPG", width: 650, height: 1000 }, // plant and broken window
//     { src: "09640017.JPG", width: 1000, height: 650 }, // chicken sign woman
//     { src: "09620008 copy.JPG", width: 650, height: 1000 }, // grany smith apple
//     { src: "09640027.JPG", width: 1000, height: 650 }, // tulip women
//     { src: "10950028.JPG", width: 1000, height: 650 }, // old couple east river
//     { src: "10950016.JPG", width: 1000, height: 650 }, // single fisherman east river
//     { src: "09630013.JPG", width: 1000, height: 650 }, // three building top herald sq
//     { src: "74220034.JPG", width: 1000, height: 650 }, // beer sign pasting
//     { src: "10970001.JPG", width: 1000, height: 650 }, // pidgeons playing chess 
//     { src: "74220003 copy.JPG", width: 650, height: 1000 }, // farmers market man smelling rosemary
//     { src: "10950014.JPG", width: 1000, height: 650 }, // close up east river fishermen
//     { src: "74210003.JPG", width: 1000, height: 650 }, // shoes downtown 
//     { src: "70310011.JPG", width: 1000, height: 650 }, // couple hugging and skating 
//     { src: "10970034 copy.JPG", width: 650, height: 1000 }, // codex
//     { src: "65330016.JPG", width: 1000, height: 650 }, // rooftop and tree
//     { src: "65340013.JPG", width: 1000, height: 650 }, // blurry bikes
//     { src: "74200009 copy.JPG", width: 650, height: 1000 }, // window and tree 
//     { src: "20330011.JPG", width: 1000, height: 650 }, // snowy bike
//     { src: "74220008 copy.JPG", width: 650, height: 1000 }, // child and flowers farmers market
//     { src: "20330014 copy.JPG", width: 650, height: 1000 }, // snowy church
//     { src: "74210013 copy.JPG", width: 650, height: 1000 }, // pink rooftop 
//     { src: "65340015.JPG", width: 1000, height: 650 }, // bikes middle finger
//     { src: "20330033 copy.JPG", width: 650, height: 1000 }, // cup and sunlight
//     { src: "39220013 copy.JPG", width: 650, height: 1000 }, // building scaling
//     { src: "39220011.JPG", width: 1000, height: 650 }, // plane
//     { src: "33320036 copy.JPG", width: 650, height: 1000 }, // miami in twos
//     { src: "20330002.JPG", width: 1000, height: 650 }, // snowy building
//     { src: "07280013.JPG", width: 1000, height: 650 }, // snowy bench
//     { src: "000017370025.jpg", width: 1000, height: 650 }, // puddle reflection
//     { src: "000017370015.jpg", width: 1000, height: 650 }, // blurry colored dots
//     { src: "39210026.JPG", width: 1000, height: 650 }, // subway door
//     { src: "94560011.JPG", width: 1000, height: 650 }, // IH blue building
//     { src: "62880026.JPG", width: 1000, height: 650 }, // MET Windows
//     { src: "62880024.JPG", width: 1000, height: 650 }, // MET Temple room
//     { src: "33330033 copy.JPG", width: 650, height: 1000 }, // Miami moon
//     { src: "62870034.JPG", width: 1000, height: 650 }, // Women and Peppers
//     { src: "94550013 copy.JPG", width: 650, height: 1000 }, // Cinci River
//     { src: "33330008 copy.JPG", width: 650, height: 1000 }, // Miami Buoy and Ocean
//     { src: "94540005.JPG", width: 1000, height: 650 }, // Tree IH
//     { src: "000019180024.jpg", width: 1000, height: 650 }, // MET Statue side
//     { src: "06620016.JPG", width: 3583, height: 2376 }, // Infinity Path Man Ravello
//     { src: "000079440027.jpg", width: 1000, height: 650 }, // Yellow NY Grafitti
//     { src: "000019160001.jpg", width: 1000, height: 650 }, // Mexico Moon
//     { src: "10270012.JPG", width: 1000, height: 650 }, // Mexico Sun
//     { src: "01680024.JPG", width: 1000, height: 650 }, // Diner Beacon
//     { src: "06630012.JPG", width: 3583, height: 2376 }, // Positano Beach girl
//     { src: "06620005.JPG", width: 2376, height: 3583 }, // Uscita Boy Ravello
//     { src: "06770019.JPG", width: 3583, height: 2376 }, // Airport Woman Friedlander
//     { src: "06660009.JPG", width: 3583, height: 2376 }, // Madonna and Child 3
//     { src: "000019180025.jpg", width: 1000, height: 650 }, // MET Statue Front
//   ];

// const filePaths = transformPhotoObjects(files);
// module.exports = filePaths;

const transformPhotoObjects = (photos) => {
  return photos.flatMap(photo => [
    {
      midres: `photography/mires/${photo.src}`,
      lowres: `photography/lowres/${photo.src}`,
      width: photo.width,
      height: photo.height
    }
  ]);
};

const files = [
    { src: "61650004.JPG", width: 3583, height: 2376 },
    { src: "61600035.JPG", width: 3583, height: 2376 },
    { src: "61600036.JPG", width: 3583, height: 2376 },
    { src: "61690024.JPG", width: 3583, height: 2376 },
    { src: "61680008.JPG", width: 3583, height: 2376 },
    { src: "61650001.JPG", width: 3583, height: 2376 },
    { src: "61590006.JPG", width: 2376, height: 3583 },
    { src: "61670002.JPG", width: 2376, height: 3583 },
    { src: "61590007.JPG", width: 3583, height: 2376 },
    { src: "61590005.JPG", width: 2376, height: 3583 },
    { src: "61590011.JPG", width: 2376, height: 3583 },
    { src: "61580014.JPG", width: 3583, height: 2376 },
    { src: "61620025.JPG", width: 3583, height: 2376 },
    { src: "61580005.JPG", width: 2376, height: 3583 },
    { src: "61670005.JPG", width: 3583, height: 2376 },
    { src: "61620036.JPG", width: 3583, height: 2376 },
    { src: "61630032.JPG", width: 3583, height: 2376 },
    { src: "61630017.JPG", width: 3583, height: 2376 },
    { src: "61630002.JPG", width: 2376, height: 3583 },
    { src: "61590018.JPG", width: 3583, height: 2376 },
    { src: "61620011.JPG", width: 2376, height: 3583 },
    { src: "61660025.JPG", width: 2376, height: 3583 },
    { src: "61660019.JPG", width: 2376, height: 3583 },
    { src: "61590019.JPG", width: 3583, height: 2376 },
    { src: "61670024.JPG", width: 3583, height: 2376 },
    { src: "61670018.JPG", width: 2376, height: 3583 },
    { src: "61590022.JPG", width: 3583, height: 2376 },
    { src: "61610005.JPG", width: 2376, height: 3583 },
    { src: "61610010.JPG", width: 3583, height: 2376 },
    { src: "61600029.JPG", width: 3583, height: 2376 },
    { src: "61680007.JPG", width: 3583, height: 2376 },
    { src: "61610013.JPG", width: 3583, height: 2376 },
    { src: "61600002.JPG", width: 3583, height: 2376 },
    { src: "61680010.JPG", width: 2376, height: 3583 },
    { src: "61680014.JPG", width: 3583, height: 2376 },
    { src: "61680001.JPG", width: 2376, height: 3583 },
    { src: "61680003.JPG", width: 3583, height: 2376 },
    { src: "61700005.JPG", width: 3583, height: 2376 },  
    { src: "94890036.JPG", width: 2376, height: 3583 }, // close up motorcycle
    { src: "94930032.JPG", width: 2376, height: 3583 }, // moon and plane
    { src: "94930003.JPG", width: 3583, height: 2376 }, // bike close up be kind
    { src: "94930012.JPG", width: 2376, height: 3583 }, // shadows on pipe
    { src: "94920018.JPG", width: 3583, height: 2376 }, // cherries at farmers market
    { src: "94900027.JPG", width: 2376, height: 3583 }, // sign and faded bird grafitti
    { src: "94890032.JPG", width: 2376, height: 3583 }, // building
    { src: "94910027.JPG", width: 2376, height: 3583 }, // man walking
    { src: "94910025.JPG", width: 2376, height: 3583 }, // bike missing wheel
    { src: "94930017.JPG", width: 3583, height: 2376 }, // flower and skyline
    { src: "06720006.JPG", width: 3583, height: 2376 }, // rome church
    { src: "06570002.JPG", width: 3583, height: 2376 }, // rome dead leaves
    { src: "06670037.JPG", width: 2376, height: 3583 }, // rome blue sign
    { src: "06520032.JPG", width: 2376, height: 3583 }, // positano morning seltzer
    { src: "06720010.JPG", width: 3583, height: 2376 }, // rome hand closing window
    { src: "06520033.JPG", width: 3583, height: 2376 }, // positano morning blue boat
    { src: "06680001.JPG", width: 2376, height: 3583 }, // positano beach bum
    { src: "06570005.JPG", width: 3583, height: 2376 }, // rome forum 3 column
    { src: "06610029.JPG", width: 2376, height: 3583 }, // statue vatican
    { src: "06530009.JPG", width: 3583, height: 2376 }, // positano woman smoking
    { src: "06680007.JPG", width: 2376, height: 3583 }, // positano morning red boat
    { src: "06740022.JPG", width: 2376, height: 3583 }, // rome trevi fountain
    { src: "06710033.JPG", width: 2376, height: 3583 }, // positano beach tanner
    { src: "06570023.JPG", width: 2376, height: 3583 }, // rome termini trash
    { src: "06690022.JPG", width: 2376, height: 3583 }, // rome borghese
    { src: "06570036.JPG", width: 3583, height: 2376 }, // rome grafitti face
    { src: "06740003.JPG", width: 2376, height: 3583 }, // rome pink lady
    { src: "06550018.JPG", width: 2376, height: 3583 }, // ravello church and moped
    { src: "06590016.JPG", width: 3583, height: 2376 }, // amalfi mural
    { src: "06660010.JPG", width: 2376, height: 3583 }, // positano madonna 1
    { src: "06660017.JPG", width: 2376, height: 3583 }, // positano tribute
    { src: "06630009.JPG", width: 2376, height: 3583 }, // positano boat
    { src: "06580001.JPG", width: 3583, height: 2376 }, // vatican ceiling
    { src: "06660013.JPG", width: 2376, height: 3583 }, // positano fruit
    { src: "06660011.JPG", width: 3583, height: 2376 }, // positano madonna 2
    { src: "06670017.JPG", width: 3583, height: 2376 }, // rome graffiti lighting
    { src: "06550021.JPG", width: 3583, height: 2376 }, // amalfi kids game
    { src: "07410019.JPG", width: 2376, height: 3583 }, // NY tomatoes and Soda
    { src: "16530003.JPG", width: 3583, height: 2376 }, // upsidown cloud
    { src: "16560024.JPG", width: 2376, height: 3583 }, // pride kiss
    { src: "16520003.JPG", width: 3583, height: 2376 }, // rosary
    { src: "16480014.JPG", width: 3583, height: 2376 }, // pride flag
    { src: "16560027.JPG", width: 2376, height: 3583 }, // pride hat
    { src: "16480029.JPG", width: 2376, height: 3583 }, // drops on leaf
    { src: "16500033.JPG", width: 3583, height: 2376 }, // NY farmers market
    { src: "16510013.JPG", width: 3583, height: 2376 }, // Coast Guard
    { src: "16480022.JPG", width: 3583, height: 2376 }, // man in coffee shop
    { src: "16500030.JPG", width: 3583, height: 2376 }, // hand farmers market
    { src: "16490032.JPG", width: 3583, height: 2376 }, // smiling bike couple
    { src: "16500020.JPG", width: 2376, height: 3583 }, // Princeton train
    { src: "16570002.JPG", width: 2376, height: 3583 }, // Subway Fish Woman
    { src: "000003210012.jpg", width: 3584, height: 2376 }, // cement man
    { src: "000003210003.jpg", width: 3584, height: 2376 }, // tan car
    { src: "14040018.JPG", width: 1000, height: 650 }, // skater crosswalk
    { src: "14100017.JPG", width: 650, height: 1000 }, // basketball shot
    { src: "14090001.JPG", width: 650, height: 1000 }, // dog woman
    { src: "14100015.JPG", width: 650, height: 1000 }, // subway stairs
    { src: "14130014.JPG", width: 650, height: 1000 }, // Johnny Chess
    { src: "14130037.JPG", width: 650, height: 1000 }, // Sunshine man
    { src: "14120035.JPG", width: 650, height: 1000 }, // Crosswalk Flower Woman
    { src: "14070017.JPG", width: 1000, height: 650 }, // Dimes Square Bike
    { src: "14120032.JPG", width: 650, height: 1000 }, // Man shaving
    { src: "89920010 copy.JPG", width: 650, height: 1000 }, // Ethan Shoes
    { src: "14040029.JPG", width: 1000, height: 650 }, // Soccer Guy
    { src: "89950011.JPG", width: 1000, height: 650 },  // PA
    { src: "89930016.JPG", width: 1000, height: 650 }, // Greg Vinyl DJ
    { src: "89920028.JPG", width: 1000, height: 650 }, // PA Ducks Eagle Cove
    { src: "89900034.JPG", width: 650, height: 1000 }, // Noah Flowers
    { src: "89930009.JPG", width: 650, height: 1000 }, // Greg DJ Sunset
    { src: "89890007 copy.JPG", width: 650, height: 1000 }, // Tilted Hat Couple
    { src: "89950033.JPG", width: 1000, height: 650 }, // Rooke Chapel
    { src: "89940008 copy.JPG", width: 650, height: 1000 }, // 7th and St Catherine
    { src: "16660022 copy.JPG", width: 650, height: 1000 }, // Cincinnati Tree
    { src: "16680016 copy.JPG", width: 650, height: 1000 }, // Airplane Sunset
    { src: "16680010.JPG", width: 1000, height: 650 }, // Airplane Mississippi
    { src: "16700024.JPG", width: 1000, height: 650 }, // Ohio Moon
    { src: "16670007.JPG", width: 1000, height: 650 }, // Ohio Foliage
    { src: "16680018.JPG", width: 1000, height: 650 }, // Airport Thumbs Up
    { src: "16670028.JPG", width: 1000, height: 650 }, // Pinecones Cinci
    { src: "03540019 copy.JPG", width: 650, height: 1000 }, // Sunbathing in Field
    { src: "16680032 copy.JPG", width: 650, height: 1000 }, // Airplane NYC
    { src: "09630026 copy.JPG", width: 650, height: 1000 }, // Tulips and Red Bike
    { src: "16710018 copy.JPG", width: 650, height: 1000 }, // Beautiful Plane Shot
    { src: "09640030 copy.JPG", width: 650, height: 1000 }, // Dusty Painting Building
    { src: "16690009.JPG", width: 1000, height: 650 }, // Bench In Cinci
    { src: "09620004 copy.JPG", width: 650, height: 1000 }, // Yellow Sweater Farmers Market
    { src: "16700032.JPG", width: 1000, height: 650 }, // Chalk
    { src: "16660016.JPG", width: 1000, height: 650 }, // Cinci Flowers
    { src: "10950018.JPG", width: 1000, height: 650 }, // East River Rods
    { src: "10950006 copy.JPG", width: 650, height: 1000 }, // East River Fishing and Bridge
    { src: "10960024.JPG", width: 1000, height: 650 }, // East River Sun Bathing
    { src: "09630022.JPG", width: 1000, height: 650 }, // Red and Flowers
    { src: "10950009.JPG", width: 1000, height: 650 }, // Women on Benches East River
    { src: "10970013.JPG", width: 1000, height: 650 }, // Dimes sq Man with Dog
    { src: "09640013 copy.JPG", width: 650, height: 1000 }, // Man reading and Beer Sign
    { src: "09630004.JPG", width: 1000, height: 650 }, // Eclipse
    { src: "09640032 copy.JPG", width: 650, height: 1000 }, // polska fish sign
    { src: "09640011 copy.JPG", width: 650, height: 1000 }, // plant and broken window
    { src: "09640017.JPG", width: 1000, height: 650 }, // chicken sign woman
    { src: "09620008 copy.JPG", width: 650, height: 1000 }, // grany smith apple
    { src: "09640027.JPG", width: 1000, height: 650 }, // tulip women
    { src: "10950028.JPG", width: 1000, height: 650 }, // old couple east river
    { src: "10950016.JPG", width: 1000, height: 650 }, // single fisherman east river
    { src: "09630013.JPG", width: 1000, height: 650 }, // three building top herald sq
    { src: "74220034.JPG", width: 1000, height: 650 }, // beer sign pasting
    { src: "10970001.JPG", width: 1000, height: 650 }, // pidgeons playing chess 
    { src: "74220003 copy.JPG", width: 650, height: 1000 }, // farmers market man smelling rosemary
    { src: "10950014.JPG", width: 1000, height: 650 }, // close up east river fishermen
    { src: "74210003.JPG", width: 1000, height: 650 }, // shoes downtown 
    { src: "70310011.JPG", width: 1000, height: 650 }, // couple hugging and skating 
    { src: "10970034 copy.JPG", width: 650, height: 1000 }, // codex
    { src: "65330016.JPG", width: 1000, height: 650 }, // rooftop and tree
    { src: "65340013.JPG", width: 1000, height: 650 }, // blurry bikes
    { src: "74200009 copy.JPG", width: 650, height: 1000 }, // window and tree 
    { src: "20330011.JPG", width: 1000, height: 650 }, // snowy bike
    { src: "74220008 copy.JPG", width: 650, height: 1000 }, // child and flowers farmers market
    { src: "20330014 copy.JPG", width: 650, height: 1000 }, // snowy church
    { src: "74210013 copy.JPG", width: 650, height: 1000 }, // pink rooftop 
    { src: "65340015.JPG", width: 1000, height: 650 }, // bikes middle finger
    { src: "20330033 copy.JPG", width: 650, height: 1000 }, // cup and sunlight
    { src: "39220013 copy.JPG", width: 650, height: 1000 }, // building scaling
    { src: "39220011.JPG", width: 1000, height: 650 }, // plane
    { src: "33320036 copy.JPG", width: 650, height: 1000 }, // miami in twos
    { src: "20330002.JPG", width: 1000, height: 650 }, // snowy building
    { src: "07280013.JPG", width: 1000, height: 650 }, // snowy bench
    { src: "000017370025.jpg", width: 1000, height: 650 }, // puddle reflection
    { src: "000017370015.jpg", width: 1000, height: 650 }, // blurry colored dots
    { src: "39210026.JPG", width: 1000, height: 650 }, // subway door
    { src: "94560011.JPG", width: 1000, height: 650 }, // IH blue building
    { src: "62880026.JPG", width: 1000, height: 650 }, // MET Windows
    { src: "62880024.JPG", width: 1000, height: 650 }, // MET Temple room
    { src: "33330033 copy.JPG", width: 650, height: 1000 }, // Miami moon
    { src: "62870034.JPG", width: 1000, height: 650 }, // Women and Peppers
    { src: "94550013 copy.JPG", width: 650, height: 1000 }, // Cinci River
    { src: "33330008 copy.JPG", width: 650, height: 1000 }, // Miami Buoy and Ocean
    { src: "94540005.JPG", width: 1000, height: 650 }, // Tree IH
    { src: "000019180024.jpg", width: 1000, height: 650 }, // MET Statue side
    { src: "06620016.JPG", width: 3583, height: 2376 }, // Infinity Path Man Ravello
    { src: "000079440027.jpg", width: 1000, height: 650 }, // Yellow NY Grafitti
    { src: "000019160001.jpg", width: 1000, height: 650 }, // Mexico Moon
    { src: "10270012.JPG", width: 1000, height: 650 }, // Mexico Sun
    { src: "01680024.JPG", width: 1000, height: 650 }, // Diner Beacon
    { src: "06630012.JPG", width: 3583, height: 2376 }, // Positano Beach girl
    { src: "06620005.JPG", width: 2376, height: 3583 }, // Uscita Boy Ravello
    { src: "06770019.JPG", width: 3583, height: 2376 }, // Airport Woman Friedlander
    { src: "06660009.JPG", width: 3583, height: 2376 }, // Madonna and Child 3
    { src: "000019180025.jpg", width: 1000, height: 650 }, // MET Statue Front
];

const filePaths = transformPhotoObjects(files);

// Output the JSON to the console
console.log(JSON.stringify(filePaths));

// Export the result
module.exports = filePaths;
