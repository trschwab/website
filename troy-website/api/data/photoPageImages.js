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
  { src: "05580031.JPG", width: 3583, height: 2376 }, //
  // { src: "05650001.JPG", width: 2376, height: 3583 }, // NY Sunset through bike
  // { src: "05660003.JPG", width: 3583, height: 2376 }, // NY window chair
  // { src: "05540009.JPG", width: 3583, height: 2376 }, // MN Fair Boy at shop stand
  // { src: "05580012.JPG", width: 3583, height: 2376 }, // MN Fair Green ponytail horse
  // { src: "05620022.JPG", width: 3583, height: 2376 }, // MN Weeping Willow
  // { src: "05670013.JPG", width: 2376, height: 3583 }, // MN Fair Bread
  // { src: "05670007.JPG", width: 3583, height: 2376 }, // MN Fair Tree
  // { src: "05550027.JPG", width: 3583, height: 2376 }, // MN Fair Sausage 
  // { src: "05580011.JPG", width: 3583, height: 2376 }, // MN Fair Red Ponytail horse
  // { src: "05670010.JPG", width: 3583, height: 2376 }, // MN Fair Pie
  // { src: "05670028.JPG", width: 3583, height: 2376 }, // MN Fair hand seed art
  // { src: "05620025.JPG", width: 2376, height: 3583 }, // MN Trail sign
  // { src: "05550022.JPG", width: 2376, height: 3583 }, // MN Fair Ride
  // { src: "05550023.JPG", width: 3583, height: 2376 }, // MN Fair holding hands
  // { src: "05540026.JPG", width: 3583, height: 2376 }, // MN Fair Mountees
  // { src: "05620024.JPG", width: 3583, height: 2376 }, // MN Canoes
  // { src: "05550034.JPG", width: 3583, height: 2376 }, // Queen of Butter
  // { src: "05600031.JPG", width: 3583, height: 2376 }, // NY Blue bikes and crates
  // { src: "05560018.JPG", width: 3583, height: 2376 }, // MN Fair Bench
  // { src: "05570035.JPG", width: 2376, height: 3583 }, // MN Fair Light Leak people
  // { src: "05640006.JPG", width: 3583, height: 2376 }, // Ohio Legos
  { src: "05640012.JPG", width: 3583, height: 2376 }, //
  // { src: "05680009.JPG", width: 3583, height: 2376 }, // NY Head at park
  // { src: "05610036.JPG", width: 3583, height: 2376 }, // NY Hands
  { src: "05600033.JPG", width: 3583, height: 2376 }, //
  { src: "05610026.JPG", width: 3583, height: 2376 }, //
  // { src: "05640017.JPG", width: 3583, height: 2376 }, // Ohio Aglamesis
  // { src: "05690008.JPG", width: 3583, height: 2376 }, // NY West Side Boat
  // { src: "05680031.JPG", width: 3583, height: 2376 }, // NY Nature Wall
  { src: "05640016.JPG", width: 3583, height: 2376 }, //
  // { src: "05600034.JPG", width: 3583, height: 2376 }, // NY Bike Details
  // { src: "05560036.JPG", width: 2376, height: 3583 }, // MN Fair Cow
  // { src: "05610025.JPG", width: 2376, height: 3583 }, // NY Building
  // { src: "05680027.JPG", width: 3583, height: 2376 }, // Sandbox 
  // { src: "05640015.JPG", width: 3583, height: 2376 }, // Ohio Aglamesis w Hands
  // { src: "05570003.JPG", width: 3583, height: 2376 }, // MN Fair Cow
  // { src: "05610029.JPG", width: 3583, height: 2376 }, // NY Bike
  // { src: "05650008.JPG", width: 2376, height: 3583 }, // NY Park Horse
  { src: "05640025.JPG", width: 3583, height: 2376 }, //
  // { src: "05690005.JPG", width: 2376, height: 3583 }, // NY Man w Pigeon Feather
  // { src: "05570029.JPG", width: 2376, height: 3583 }, // MN Fair Bread
  { src: "05600012.JPG", width: 3583, height: 2376 }, //
  // { src: "05560014.JPG", width: 2376, height: 3583 }, // MN Fair Ginkgo Bonsai
  // { src: "05600001.JPG", width: 2376, height: 3583 }, // CT Pebbles
  // { src: "05600015.JPG", width: 2376, height: 3583 }, // NY Roni Sue
  // { src: "05560017.JPG", width: 3583, height: 2376 }, // MN Fair Battered Potatoes
  { src: "05650019.JPG", width: 2376, height: 3583 }, //
  { src: "05620002.JPG", width: 2376, height: 3583 }, //
  // { src: "05580026.JPG", width: 3583, height: 2376 }, // MN Fair Goat
  // { src: "05620017.JPG", width: 3583, height: 2376 }, // MN Water
  // { src: "05580025.JPG", width: 2376, height: 3583 }, // MN Fair Goat
  // { src: "05580018.JPG", width: 3583, height: 2376 }, // MN Fair Goat Butts
  // { src: "05670009.JPG", width: 3583, height: 2376 }, // MN State Fair Pie
  // { src: "05630001.JPG", width: 3583, height: 2376 }, // MN State Fair Everything you wore
  // { src: "05580008.JPG", width: 3583, height: 2376 }, // MN State Fair Horse pet
  // { src: "05550017.JPG", width: 2376, height: 3583 }, // MN Fair Foot Long Hot Dog
  // { src: "05580034.JPG", width: 2376, height: 3583 }, // MN Fair Super Dog
  // { src: "05580009.JPG", width: 3583, height: 2376 }, // MN Fair girl with Horse
  // { src: "05590024.JPG", width: 3583, height: 2376 }, // Ohio Elis BBQ
  // { src: "05670008.JPG", width: 2376, height: 3583 }, // MN State Fair Tree
  { src: "05590026.JPG", width: 2376, height: 3583 }, //
  // { src: "05630002.JPG", width: 3583, height: 2376 }, // MN Fair Cookie spill
  // { src: "05550015.JPG", width: 2376, height: 3583 }, // MN Fair Alien Toy Stand



  // { src: "24440009.JPG", width: 2376, height: 3583 }, // Mamie Eating @ Zips
  // { src: "24450018.JPG", width: 3583, height: 2376 }, // Central Park Resevoir, fewer Leaves
  // { src: "24400015.JPG", width: 3583, height: 2376 }, // Creamy Whip leftside angle
  // { src: "24400017.JPG", width: 2376, height: 3583 }, // Creamy Whip, portrait not horizontal
  { src: "24400016.JPG", width: 3583, height: 2376 }, // Creamy Whip, horizontal not portrait
  { src: "24480003.JPG", width: 3583, height: 2376 }, //
  { src: "24450020.JPG", width: 3583, height: 2376 }, //
  // { src: "24400010.JPG", width: 2376, height: 3583 }, // Sunset and Blackness
  // { src: "24390005.JPG", width: 3583, height: 2376 }, // OH Hose
  // { src: "24390011.JPG", width: 3583, height: 2376 }, // Flash on Vines in front yard
  // { src: "24350022.JPG", width: 2376, height: 3583 }, // OH Ginkgo
  { src: "24470036.JPG", width: 3583, height: 2376 }, //
  // { src: "24390007.JPG", width: 3583, height: 2376 }, // Ginkgo side angle with drops
  // { src: "24470018.JPG", width: 3583, height: 2376 }, // NJ Dinner
  // { src: "24470029.JPG", width: 3583, height: 2376 }, // NJ Flowers
  // { src: "24350029.JPG", width: 3583, height: 2376 }, // Walnut Husks
  // { src: "24380037.JPG", width: 3583, height: 2376 }, // Cinci Walk
  // { src: "24420031.JPG", width: 2376, height: 3583 }, // Man at Zips
  { src: "24430030.JPG", width: 2376, height: 3583 }, //
  { src: "24460002.JPG", width: 3583, height: 2376 }, //
  { src: "24470012.JPG", width: 2376, height: 3583 }, //
  { src: "24440001.JPG", width: 3583, height: 2376 }, //
  // { src: "24440015.JPG", width: 2376, height: 3583 }, // Zips rainy Window Portrait
  { src: "24440014.JPG", width: 3583, height: 2376 }, //
  // { src: "24400034.JPG", width: 2376, height: 3583 }, // Turner Farm Scale
  { src: "24400008.JPG", width: 2376, height: 3583 }, //
  // { src: "24370005.JPG", width: 3583, height: 2376 }, // Creamy Whip Monkey Sunday (worse angle)
  // { src: "24450006.JPG", width: 3583, height: 2376 }, // NY Ice cream
  // { src: "24370006.JPG", width: 3583, height: 2376 }, // Creamy Whip Monkey Sunday (better angle)
  // { src: "24400027.JPG", width: 2376, height: 3583 }, // Turner Farm Shack
  // { src: "24450002.JPG", width: 2376, height: 3583 }, // NY Laundry
  // { src: "24440006.JPG", width: 2376, height: 3583 }, // Zips w leftovers on table
  { src: "24440010.JPG", width: 2376, height: 3583 }, //
  // { src: "24360011.JPG", width: 2376, height: 3583 }, // Cinci Thistles





  { src: "77410021.JPG", width: 2376, height: 3583 }, //
  { src: "77480034.JPG", width: 3583, height: 2376 }, //
  // { src: "77500032.JPG", width: 3583, height: 2376 }, // MN Balloons
  { src: "77370017.JPG", width: 2376, height: 3583 }, // Abraco
  // { src: "77500033.JPG", width: 3583, height: 2376 }, // MOA Clear Balloon Closeup
  { src: "77540003.JPG", width: 2376, height: 3583 }, //
  // { src: "77370006.JPG", width: 2376, height: 3583 }, // Abraco angled more
  // { src: "77500036.JPG", width: 3583, height: 2376 }, // MOA Clear Baloons Masked couple
  { src: "77490021.JPG", width: 3583, height: 2376 }, //
  { src: "77540028.JPG", width: 2376, height: 3583 }, //
  // { src: "77410018.JPG", width: 2317, height: 1536 }, // MN Lake from Plane
  { src: "77490022.JPG", width: 3583, height: 2376 }, //
  { src: "77520020.JPG", width: 1536, height: 2317 }, //
  { src: "77340028.JPG", width: 2376, height: 3583 }, //
  // { src: "77470004.JPG", width: 3583, height: 2376 }, // Man at bar in window, Horizontal
  // { src: "77420025.JPG", width: 3583, height: 2376 }, // Car wash
  // { src: "77340004.JPG", width: 3583, height: 2376 }, // NY Drum
  { src: "77390027.JPG", width: 2376, height: 3583 }, //
  { src: "77520024.JPG", width: 1536, height: 2317 }, //
  // { src: "77470002.JPG", width: 2376, height: 3583 }, // Man at bar in window, Vertical
  // { src: "77460036.JPG", width: 2376, height: 3583 }, // MN Street Signs
  // { src: "77460022.JPG", width: 2376, height: 3583 }, // MN Hoyts
  // { src: "77470033.JPG", width: 2376, height: 3583 }, // Abraco wide shot
  // { src: "77470025.JPG", width: 2376, height: 3583 }, // Upsidown Chairs night shot
  // { src: "77520010.JPG", width: 2376, height: 3583 }, // MN Mamie's electrical box
  // { src: "77470035.JPG", width: 3583, height: 2376 }, // NY Subway
  { src: "77470020.JPG", width: 3583, height: 2376 }, //
  // { src: "77470034.JPG", width: 3583, height: 2376 }, // Subway mosaic wide shot
  // { src: "77460019.JPG", width: 3583, height: 2376 }, // Snow Emergency Route Sign
  // { src: "77340019.JPG", width: 2376, height: 3583 }, // NY Cat Pride
  // { src: "77520011.JPG", width: 2376, height: 3583 }, // Angled electricity box on sidewalk
  // { src: "77470036.JPG", width: 3583, height: 2376 }, // Subway mosaic closeup
  // { src: "77470023.JPG", width: 3583, height: 2376 }, // Night parking graffiti
  // { src: "77420006.JPG", width: 2376, height: 3583 }, // Wires through sunroof
  // { src: "77330001.JPG", width: 2376, height: 3583 }, // MN Flower
  // { src: "77330002.JPG", width: 3583, height: 2376 }, // MN Signs on trail
  { src: "77330003.JPG", width: 2376, height: 3583 }, //
  { src: "77540022.JPG", width: 3583, height: 2376 }, //
  { src: "77510012.JPG", width: 2376, height: 3583 }, //
  { src: "77490014.JPG", width: 3583, height: 2376 }, //
  { src: "77540037.JPG", width: 2376, height: 3583 }, //
  // { src: "77370018.JPG", width: 2376, height: 3583 }, // Abraco foreground in focus
  // { src: "77410011.JPG", width: 2376, height: 3583 }, // MN Trump Hammers it Home
  // { src: "77480006.JPG", width: 3583, height: 2376 }, // Chess on plane


  { src: "45380023.JPG", width: 3583, height: 2376 }, //
  // { src: "45350028.JPG", width: 3583, height: 2376 }, // Dice on Coney Island
  { src: "45390026.JPG", width: 3583, height: 2376 }, //
  { src: "45340010.JPG", width: 2376, height: 3583 }, //
  // { src: "45350029.JPG", width: 3583, height: 2376 }, // Coney island Dice
  // { src: "45380022.JPG", width: 3583, height: 2376 }, // Happy Birthday Felon
  { src: "45300024.JPG", width: 2376, height: 3583 }, //
  { src: "45380021.JPG", width: 3583, height: 2376 }, //
  { src: "45300027.JPG", width: 3583, height: 2376 }, //
  // { src: "45380025.JPG", width: 2376, height: 3583 }, // Cops at protest
  { src: "45380031.JPG", width: 2376, height: 3583 }, //
  // { src: "45380024.JPG", width: 3583, height: 2376 }, // See no crimes, hear no truth
  { src: "45310033.JPG", width: 2376, height: 3583 }, //
  // { src: "45350011.JPG", width: 2376, height: 3583 }, // Ferris Wheel
  { src: "45340001.JPG", width: 3583, height: 2376 }, //
  { src: "45370012.JPG", width: 3583, height: 2376 }, //
  // { src: "45360017.JPG", width: 3583, height: 2376 }, // Kid on Race Track 1
  // { src: "45360003.JPG", width: 2376, height: 3583 }, // Underneath Nathans Sign
  { src: "45330033.JPG", width: 2376, height: 3583 }, //
  // { src: "45360002.JPG", width: 2376, height: 3583 }, // Daytime Nathan's Sign
  // { src: "45330025.JPG", width: 2376, height: 3583 }, // Subway Ferris Wheel Shot
  { src: "45400035.JPG", width: 3583, height: 2376 }, //
  { src: "45400009.JPG", width: 2376, height: 3583 }, //
  // { src: "45370004.JPG", width: 2376, height: 3583 }, // Blue Yellow Umbrella Street Crossing
  { src: "45330021.JPG", width: 2376, height: 3583 }, //
  { src: "45370029.JPG", width: 2376, height: 3583 }, //
  // { src: "45370017.JPG", width: 2376, height: 3583 }, // Flowers in Soho
  // { src: "45360012.JPG", width: 3583, height: 2376 }, // Playing Cards
  { src: "45370027.JPG", width: 3583, height: 2376 }, //
  // { src: "45360036.JPG", width: 3583, height: 2376 }, // Great Coney Island Shirt
  // { src: "45320017.JPG", width: 2376, height: 3583 }, // Lions @ Elizabeth St Garden
  // { src: "45330006.JPG", width: 3583, height: 2376 }, // Candy @ Coney Island
  // { src: "45370032.JPG", width: 3583, height: 2376 }, // Rejecting Kings
  { src: "45370030.JPG", width: 3583, height: 2376 }, //
  { src: "45370024.JPG", width: 3583, height: 2376 }, //
  { src: "45370018.JPG", width: 3583, height: 2376 }, //
  // { src: "45330010.JPG", width: 2376, height: 3583 }, // Coney Island Shishkebab
  // { src: "45320015.JPG", width: 3583, height: 2376 }, // Elizabeth st garden
  // { src: "45320014.JPG", width: 3583, height: 2376 }, // Coffee Shop
  { src: "45330005.JPG", width: 2376, height: 3583 }, //
  // { src: "45360008.JPG", width: 3583, height: 2376 }, // Coney Island Tattoos
  { src: "45360020.JPG", width: 3583, height: 2376 }, // Kid on Race Track 2
  { src: "45370021.JPG", width: 3583, height: 2376 }, //
  { src: "45330015.JPG", width: 3583, height: 2376 }, //
  // { src: "45370036.JPG", width: 3583, height: 2376 }, // Protest, King outfit
  { src: "45330003.JPG", width: 2376, height: 3583 }, //
  { src: "45400006.JPG", width: 3583, height: 2376 }, // Coney Island Lifeguard
  // { src: "45370037.JPG", width: 3583, height: 2376 }, // Protest Sign
  { src: "45310001.JPG", width: 2376, height: 3583 }, // Jaws Arcade, Zoomed in
  { src: "45300004.JPG", width: 3583, height: 2376 }, //
  // { src: "45350009.JPG", width: 3583, height: 2376 }, // Coney Island hands Up
  { src: "45380017.JPG", width: 2376, height: 3583 }, //
  // { src: "45310002.JPG", width: 2376, height: 3583 }, // Jaws Arcade, Zoomed out
  // { src: "45340027.JPG", width: 2376, height: 3583 }, // Coney Island, Street
  // { src: "45300003.JPG", width: 2376, height: 3583 }, // Building through Scaffolding
  { src: "45380007.JPG", width: 2376, height: 3583 }, //
  { src: "45340021.JPG", width: 2376, height: 3583 }, //
  { src: "45350019.JPG", width: 3583, height: 2376 }, //


  { src: "82540017.JPG", width: 3583, height: 2376 }, // Car window horizontal
  { src: "82530014.JPG", width: 2376, height: 3583 }, //
  { src: "82520011.JPG", width: 3583, height: 2376 }, //
  { src: "82530004.JPG", width: 2376, height: 3583 }, //
  { src: "82530012.JPG", width: 3583, height: 2376 }, //
  // { src: "82530007.JPG", width: 3583, height: 2376 }, // CVG moose skeleton
  // { src: "82540023.JPG", width: 3583, height: 2376 }, // Subway Guitar
  { src: "82480001.JPG", width: 3583, height: 2376 }, //
  { src: "82550034.JPG", width: 2376, height: 3583 }, //
  { src: "82480003.JPG", width: 3583, height: 2376 }, //
  { src: "82490022.JPG", width: 3583, height: 2376 }, //
  { src: "82500020.JPG", width: 2376, height: 3583 }, //
  // { src: "82540016.JPG", width: 2376, height: 3583 }, // car window vertical
  { src: "82480031.JPG", width: 2376, height: 3583 }, //
  { src: "82480009.JPG", width: 3583, height: 2376 }, //
  // { src: "82480022.JPG", width: 3583, height: 2376 }, // NY Skaters
  { src: "82540004.JPG", width: 3583, height: 2376 }, //
  { src: "82540005.JPG", width: 2376, height: 3583 }, //
  { src: "82520020.JPG", width: 2376, height: 3583 }, //

  // { src: "000048420022.jpg", width: 2376, height: 3584 }, // Danella
  { src: "000048420037.jpg", width: 3584, height: 2376 }, //
  { src: "000048430032.jpg", width: 3584, height: 2376 }, //
  { src: "000048340017.jpg", width: 3584, height: 2376 }, //
  { src: "000048390036.jpg", width: 2376, height: 3584 }, //
  { src: "000048390033.jpg", width: 2376, height: 3584 }, //
  { src: "000048390031.jpg", width: 2376, height: 3584 }, //
  { src: "000048410022.jpg", width: 3584, height: 2376 }, //
  { src: "000048370016.jpg", width: 2376, height: 3584 }, //
  { src: "000048400022.jpg", width: 3584, height: 2376 }, //
  { src: "000048370020.jpg", width: 3584, height: 2376 }, //
  { src: "000048370036.jpg", width: 2376, height: 3584 }, //
  { src: "000048370026.jpg", width: 3584, height: 2376 }, //
  { src: "000048370027.jpg", width: 3584, height: 2376 }, //
  { src: "000048370030.jpg", width: 3584, height: 2376 }, //
  { src: "000048400015.jpg", width: 3584, height: 2376 }, //
  { src: "000048430007.jpg", width: 3584, height: 2376 }, //
  { src: "000048340022.jpg", width: 2376, height: 3584 }, //
  { src: "000048380012.jpg", width: 3584, height: 2376 }, //
  { src: "000048430029.jpg", width: 3584, height: 2376 }, //
  { src: "000048430001.jpg", width: 3584, height: 2376 }, //
  { src: "000048340024.jpg", width: 3584, height: 2376 }, //

  { src: "54210006.JPG", width: 3583, height: 2376 }, // woman red back
  { src: "54220014.JPG", width: 3583, height: 2376 }, // car bridge
  { src: "54180030.JPG", width: 3583, height: 2376 }, // ice
  { src: "54160031.JPG", width: 3583, height: 2376 }, // snow bench
  { src: "54220023.JPG", width: 2376, height: 3583 }, // record shop vinyl
  { src: "54140018.JPG", width: 3583, height: 2376 }, // man walking with cab -- maybe
  { src: "54220012.JPG", width: 3583, height: 2376 }, // A1 Records

  { src: "54160001.JPG", width: 3583, height: 2376 }, // sled closeup
  { src: "54210012.JPG", width: 3583, height: 2376 }, // bikes -- ok

  { src: "54160017.JPG", width: 2376, height: 3583 }, // snowy bough
  { src: "54200010.JPG", width: 3583, height: 2376 }, // red sled
  { src: "54160007.JPG", width: 2376, height: 3583 }, // sledding girl standing
  { src: "54210002.JPG", width: 2376, height: 3583 }, // corner of elizabeth st garden
  { src: "54160011.JPG", width: 3583, height: 2376 }, // snow sled being pulled
  { src: "54160010.JPG", width: 2376, height: 3583 }, // snow ivy
  // { src: "54160004.JPG", width: 3583, height: 2376 }, // sled being pulled
  { src: "54150003.JPG", width: 3583, height: 2376 }, // birds over building corner
  { src: "54180034.JPG", width: 3583, height: 2376 }, // duck and NY cap
  { src: "54190025.JPG", width: 2376, height: 3583 }, // sledding under tree
  { src: "54190024.JPG", width: 3583, height: 2376 }, // sledding hill
  { src: "54190032.JPG", width: 3583, height: 2376 }, // snowy bench


  { src: "54230020.JPG", width: 3583, height: 2376 }, // seafood counter
  { src: "54180015.JPG", width: 3583, height: 2376 }, // wide ducks hanging -- ok
  { src: "54220019.JPG", width: 3583, height: 2376 }, // record shop redhook
  { src: "54180002.JPG", width: 2376, height: 3583 }, // building corner

  { src: "54190007.JPG", width: 2376, height: 3583 }, // underpass in central park
  { src: "54180003.JPG", width: 3583, height: 2376 }, // building 
  { src: "54230036.JPG", width: 3583, height: 2376 }, // man in scaffolding
  { src: "54230032.JPG", width: 2376, height: 3583 }, // WV arthur's window

  // { src: "54190017.JPG", width: 3583, height: 2376 }, // squirrel
  { src: "54220021.JPG", width: 3583, height: 2376 }, // record shop slip mat
  // { src: "54160023.JPG", width: 2376, height: 3583 }, // snow lamp
  // { src: "54170022.JPG", width: 2376, height: 3583 }, // snow water fountain
  { src: "54160026.JPG", width: 3583, height: 2376 }, // snowy bench and tree
    { src: "61650004.JPG", width: 3583, height: 2376 }, // NY Building w Covering
    // { src: "61600035.JPG", width: 3583, height: 2376 }, // NOLA Flag
    { src: "61590006.JPG", width: 2376, height: 3583 }, // NY Building Corner
    { src: "61600036.JPG", width: 3583, height: 2376 }, // NOLA Christmas Ornaments
    { src: "61690024.JPG", width: 3583, height: 2376 }, // Amazing Sunset on plane w Moon
    // { src: "61680008.JPG", width: 3583, height: 2376 }, // NOLA Street Plaque
    // { src: "61650001.JPG", width: 3583, height: 2376 }, // Crossword through Bench
    { src: "61670002.JPG", width: 2376, height: 3583 },
    { src: "61590007.JPG", width: 3583, height: 2376 },
    { src: "61590005.JPG", width: 2376, height: 3583 },
    { src: "61590011.JPG", width: 2376, height: 3583 },
    { src: "61580014.JPG", width: 3583, height: 2376 },
    // { src: "61620025.JPG", width: 3583, height: 2376 }, // NOLA Street Multi Instrument
    { src: "61580005.JPG", width: 2376, height: 3583 },
    { src: "61670005.JPG", width: 3583, height: 2376 },
    // { src: "61620036.JPG", width: 3583, height: 2376 }, // NOLA Cactus type Plants
    // { src: "61630032.JPG", width: 3583, height: 2376 }, // NOLA Farmers Market Jars
    // { src: "61630017.JPG", width: 3583, height: 2376 }, // NOLA Buzzers
    { src: "61630002.JPG", width: 2376, height: 3583 },
    { src: "61590018.JPG", width: 3583, height: 2376 },
    // { src: "61620011.JPG", width: 2376, height: 3583 }, // NOLA Grated Seats
    { src: "61660025.JPG", width: 2376, height: 3583 },
    { src: "61660019.JPG", width: 2376, height: 3583 },
    { src: "61590019.JPG", width: 3583, height: 2376 },
    { src: "61670024.JPG", width: 3583, height: 2376 },
    { src: "61670018.JPG", width: 2376, height: 3583 },
    // { src: "61590022.JPG", width: 3583, height: 2376 }, // NY Scarves
    { src: "61610005.JPG", width: 2376, height: 3583 },
    // { src: "61610010.JPG", width: 3583, height: 2376 }, // NOLA Headphones
    { src: "61600029.JPG", width: 3583, height: 2376 },
    { src: "61680007.JPG", width: 3583, height: 2376 },
    { src: "61610013.JPG", width: 3583, height: 2376 },
    { src: "61600002.JPG", width: 3583, height: 2376 },
    // { src: "61680010.JPG", width: 2376, height: 3583 }, // NOLA Rainbow Bike Closeup 
    { src: "61680014.JPG", width: 3583, height: 2376 },
    { src: "61680001.JPG", width: 2376, height: 3583 },
    { src: "61680003.JPG", width: 3583, height: 2376 },
    // { src: "61700005.JPG", width: 3583, height: 2376 }, // NOLA Ferrari 
    { src: "94890036.JPG", width: 2376, height: 3583 }, // close up motorcycle
    { src: "94930032.JPG", width: 2376, height: 3583 }, // moon and plane
    // { src: "94930003.JPG", width: 3583, height: 2376 }, // bike close up be kind
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
