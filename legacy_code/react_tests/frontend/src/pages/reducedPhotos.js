const allPhotos = [
  { src: "/photography/midres/94890036.JPG", width: 2376, height: 3583 }, // close up motorcycle
  { src: "/photography/midres/94930032.JPG", width: 2376, height: 3583 }, // moon and plane
  { src: "/photography/midres/94930003.JPG", width: 3583, height: 2376 }, // bike close up be kind
  { src: "/photography/midres/94930012.JPG", width: 2376, height: 3583 }, // shadows on pipe
  { src: "/photography/midres/94920018.JPG", width: 3583, height: 2376 }, // cherries at farmers market
  { src: "/photography/midres/94900027.JPG", width: 2376, height: 3583 }, // sign and faded bird grafitti
  { src: "/photography/midres/94890032.JPG", width: 2376, height: 3583 }, // building
  { src: "/photography/midres/94910027.JPG", width: 2376, height: 3583 }, // man walking
  { src: "/photography/midres/94910025.JPG", width: 2376, height: 3583 }, // bike missing wheel
  { src: "/photography/midres/94930017.JPG", width: 3583, height: 2376 }, // flower and skyline
  { src: "/photography/midres/06720006.JPG", width: 3583, height: 2376 }, // rome church
  { src: "/photography/midres/06570002.JPG", width: 3583, height: 2376 }, // rome dead leaves
  { src: "/photography/midres/06670037.JPG", width: 2376, height: 3583 }, // rome blue sign
  { src: "/photography/midres/06520032.JPG", width: 2376, height: 3583 }, // positano morning seltzer
  { src: "/photography/midres/06720010.JPG", width: 3583, height: 2376 }, // rome hand closing window
  { src: "/photography/midres/06520033.JPG", width: 3583, height: 2376 }, // positano morning blue boat
  { src: "/photography/midres/06680001.JPG", width: 2376, height: 3583 }, // positano beach bum
  { src: "/photography/midres/06570005.JPG", width: 3583, height: 2376 }, // rome forum 3 column
  { src: "/photography/midres/06610029.JPG", width: 2376, height: 3583 }, // statue vatican
  { src: "/photography/midres/06530009.JPG", width: 3583, height: 2376 }, // positano woman smoking
  { src: "/photography/midres/06680007.JPG", width: 2376, height: 3583 }, // positano morning red boat
  { src: "/photography/midres/06740022.JPG", width: 2376, height: 3583 }, // rome trevi fountain
  { src: "/photography/midres/06710033.JPG", width: 2376, height: 3583 }, // positano beach tanner
  { src: "/photography/midres/06570023.JPG", width: 2376, height: 3583 }, // rome termini trash
  { src: "/photography/midres/06690022.JPG", width: 2376, height: 3583 }, // rome borghese
  { src: "/photography/midres/06570036.JPG", width: 3583, height: 2376 }, // rome grafitti face
  { src: "/photography/midres/06740003.JPG", width: 2376, height: 3583 }, // rome pink lady
  { src: "/photography/midres/06550018.JPG", width: 2376, height: 3583 }, // ravello church and moped
  { src: "/photography/midres/06590016.JPG", width: 3583, height: 2376 }, // amalfi mural
  { src: "/photography/midres/06660010.JPG", width: 2376, height: 3583 }, // positano madonna 1
  { src: "/photography/midres/06660017.JPG", width: 2376, height: 3583 }, // positano tribute
  { src: "/photography/midres/06630009.JPG", width: 2376, height: 3583 }, // positano boat
  { src: "/photography/midres/06580001.JPG", width: 3583, height: 2376 }, // vatican ceiling
  { src: "/photography/midres/06660013.JPG", width: 2376, height: 3583 }, // positano fruit
  { src: "/photography/midres/06660011.JPG", width: 3583, height: 2376 }, // positano madonna 2
  { src: "/photography/midres/06670017.JPG", width: 3583, height: 2376 }, // rome graffiti lighting
  { src: "/photography/midres/06550021.JPG", width: 3583, height: 2376 }, // amalfi kids game
  { src: "/photography/midres/07410019.JPG", width: 2376, height: 3583 }, // NY tomatoes and Soda
  { src: "/photography/midres/16530003.JPG", width: 3583, height: 2376 }, // upsidown cloud
  { src: "/photography/midres/16560024.JPG", width: 2376, height: 3583 }, // pride kiss
  { src: "/photography/midres/16520003.JPG", width: 3583, height: 2376 }, // rosary
  { src: "/photography/midres/16480014.JPG", width: 3583, height: 2376 }, // pride flag
  { src: "/photography/midres/16560027.JPG", width: 2376, height: 3583 }, // pride hat
  { src: "/photography/midres/16480029.JPG", width: 2376, height: 3583 }, // drops on leaf
  { src: "/photography/midres/16500033.JPG", width: 3583, height: 2376 }, // NY farmers market
  { src: "/photography/midres/16510013.JPG", width: 3583, height: 2376 }, // Coast Guard
  { src: "/photography/midres/16480022.JPG", width: 3583, height: 2376 }, // man in coffee shop
  { src: "/photography/midres/16500030.JPG", width: 3583, height: 2376 }, // hand farmers market
  { src: "/photography/midres/16490032.JPG", width: 3583, height: 2376 }, // smiling bike couple
  { src: "/photography/midres/16500020.JPG", width: 2376, height: 3583 }, // Princeton train
  { src: "/photography/midres/16570002.JPG", width: 2376, height: 3583 }, // Subway Fish Woman
  { src: "/photography/midres/000003210012.jpg", width: 3584, height: 2376 }, // cement man
  { src: "/photography/midres/000003210003.jpg", width: 3584, height: 2376 }, // tan car
  { src: "/photography/midres/14040018.JPG", width: 1000, height: 650 }, // skater crosswalk
  { src: "/photography/midres/14100017.JPG", width: 650, height: 1000 }, // basketball shot
  { src: "/photography/midres/14090001.JPG", width: 650, height: 1000 }, // dog woman
  { src: "/photography/midres/14100015.JPG", width: 650, height: 1000 }, // subway stairs
  { src: "/photography/midres/14130014.JPG", width: 650, height: 1000 }, // Johnny Chess
  { src: "/photography/midres/14130037.JPG", width: 650, height: 1000 }, // Sunshine man
  { src: "/photography/midres/14120035.JPG", width: 650, height: 1000 }, // Crosswalk Flower Woman
  { src: "/photography/midres/14070017.JPG", width: 1000, height: 650 }, // Dimes Square Bike
  { src: "/photography/midres/14120032.JPG", width: 650, height: 1000 }, // Man shaving
  { src: "/photography/midres/89920010 copy.JPG", width: 650, height: 1000 }, // Ethan Shoes
  { src: "/photography/midres/14040029.JPG", width: 1000, height: 650 }, // Soccer Guy
  { src: "/photography/midres/89950011.JPG", width: 1000, height: 650 },  // PA
  { src: "/photography/midres/89930016.JPG", width: 1000, height: 650 }, // Greg Vinyl DJ
  { src: "/photography/midres/89920028.JPG", width: 1000, height: 650 }, // PA Ducks Eagle Cove
  { src: "/photography/midres/89900034.JPG", width: 650, height: 1000 }, // Noah Flowers
  { src: "/photography/midres/89930009.JPG", width: 650, height: 1000 }, // Greg DJ Sunset
  { src: "/photography/midres/89890007 copy.JPG", width: 650, height: 1000 }, // Tilted Hat Couple
  { src: "/photography/midres/89950033.JPG", width: 1000, height: 650 }, // Rooke Chapel
  { src: "/photography/midres/89940008 copy.JPG", width: 650, height: 1000 }, // 7th and St Catherine
  { src: "/photography/midres/16660022 copy.JPG", width: 650, height: 1000 }, // Cincinnati Tree
  { src: "/photography/midres/16680016 copy.JPG", width: 650, height: 1000 }, // Airplane Sunset
  { src: "/photography/midres/16680010.JPG", width: 1000, height: 650 }, // Airplane Mississippi
  { src: "/photography/midres/16700024.JPG", width: 1000, height: 650 }, // Ohio Moon
  { src: "/photography/midres/16670007.JPG", width: 1000, height: 650 }, // Ohio Foliage
  { src: "/photography/midres/16680018.JPG", width: 1000, height: 650 }, // Airport Thumbs Up
  { src: "/photography/midres/16670028.JPG", width: 1000, height: 650 }, // Pinecones Cinci
  { src: "/photography/midres/03540019 copy.JPG", width: 650, height: 1000 }, // Sunbathing in Field
  { src: "/photography/midres/16680032 copy.JPG", width: 650, height: 1000 }, // Airplane NYC
  { src: "/photography/midres/09630026 copy.JPG", width: 650, height: 1000 }, // Tulips and Red Bike
  { src: "/photography/midres/16710018 copy.JPG", width: 650, height: 1000 }, // Beautiful Plane Shot
  { src: "/photography/midres/09640030 copy.JPG", width: 650, height: 1000 }, // Dusty Painting Building
  { src: "/photography/midres/16690009.JPG", width: 1000, height: 650 }, // Bench In Cinci
  { src: "/photography/midres/09620004 copy.JPG", width: 650, height: 1000 }, // Yellow Sweater Farmers Market
  { src: "/photography/midres/16700032.JPG", width: 1000, height: 650 }, // Chalk
  { src: "/photography/midres/16660016.JPG", width: 1000, height: 650 }, // Cinci Flowers
  { src: "/photography/midres/10950018.JPG", width: 1000, height: 650 }, // East River Rods
  { src: "/photography/midres/10950006 copy.JPG", width: 650, height: 1000 }, // East River Fishing and Bridge
  { src: "/photography/midres/10960024.JPG", width: 1000, height: 650 }, // East River Sun Bathing
  { src: "/photography/midres/09630022.JPG", width: 1000, height: 650 }, // Red and Flowers
  { src: "/photography/midres/10950009.JPG", width: 1000, height: 650 }, // Women on Benches East River
  { src: "/photography/midres/10970013.JPG", width: 1000, height: 650 }, // Dimes sq Man with Dog
  { src: "/photography/midres/09640013 copy.JPG", width: 650, height: 1000 }, // Man reading and Beer Sign
  { src: "/photography/midres/09630004.JPG", width: 1000, height: 650 }, // Eclipse
  { src: "/photography/midres/09640032 copy.JPG", width: 650, height: 1000 }, // polska fish sign
  { src: "/photography/midres/09640011 copy.JPG", width: 650, height: 1000 }, // plant and broken window
  { src: "/photography/midres/09640017.JPG", width: 1000, height: 650 }, // chicken sign woman
  { src: "/photography/midres/09620008 copy.JPG", width: 650, height: 1000 }, // grany smith apple
  { src: "/photography/midres/09640027.JPG", width: 1000, height: 650 }, // tulip women
  { src: "/photography/midres/10950028.JPG", width: 1000, height: 650 }, // old couple east river
  { src: "/photography/midres/10950016.JPG", width: 1000, height: 650 }, // single fisherman east river
  { src: "/photography/midres/09630013.JPG", width: 1000, height: 650 }, // three building top herald sq
  { src: "/photography/midres/74220034.JPG", width: 1000, height: 650 }, // beer sign pasting
  { src: "/photography/midres/10970001.JPG", width: 1000, height: 650 }, // pidgeons playing chess 
  { src: "/photography/midres/74220003 copy.JPG", width: 650, height: 1000 }, // farmers market man smelling rosemary
  { src: "/photography/midres/10950014.JPG", width: 1000, height: 650 }, // close up east river fishermen
  { src: "/photography/midres/74210003.JPG", width: 1000, height: 650 }, // shoes downtown 
  { src: "/photography/midres/70310011.JPG", width: 1000, height: 650 }, // couple hugging and skating 
  { src: "/photography/midres/10970034 copy.JPG", width: 650, height: 1000 }, // codex
  { src: "/photography/midres/65330016.JPG", width: 1000, height: 650 }, // rooftop and tree
  { src: "/photography/midres/65340013.JPG", width: 1000, height: 650 }, // blurry bikes
  { src: "/photography/midres/74200009 copy.JPG", width: 650, height: 1000 }, // window and tree 
  { src: "/photography/midres/20330011.JPG", width: 1000, height: 650 }, // snowy bike
  { src: "/photography/midres/74220008 copy.JPG", width: 650, height: 1000 }, // child and flowers farmers market
  { src: "/photography/midres/20330014 copy.JPG", width: 650, height: 1000 }, // snowy church
  { src: "/photography/midres/74210013 copy.JPG", width: 650, height: 1000 }, // pink rooftop 
  { src: "/photography/midres/65340015.JPG", width: 1000, height: 650 }, // bikes middle finger
  { src: "/photography/midres/20330033 copy.JPG", width: 650, height: 1000 }, // cup and sunlight
  { src: "/photography/midres/39220013 copy.JPG", width: 650, height: 1000 }, // building scaling
  { src: "/photography/midres/39220011.JPG", width: 1000, height: 650 }, // plane
  { src: "/photography/midres/33320036 copy.JPG", width: 650, height: 1000 }, // miami in twos
  { src: "/photography/midres/20330002.JPG", width: 1000, height: 650 }, // snowy building
  { src: "/photography/midres/07280013.JPG", width: 1000, height: 650 }, // snowy bench
  { src: "/photography/midres/000017370025.jpg", width: 1000, height: 650 }, // puddle reflection
  { src: "/photography/midres/000017370015.jpg", width: 1000, height: 650 }, // blurry colored dots
  { src: "/photography/midres/39210026.JPG", width: 1000, height: 650 }, // subway door
  { src: "/photography/midres/94560011.JPG", width: 1000, height: 650 }, // IH blue building
  { src: "/photography/midres/62880026.JPG", width: 1000, height: 650 }, // MET Windows
  { src: "/photography/midres/62880024.JPG", width: 1000, height: 650 }, // MET Temple room
  { src: "/photography/midres/33330033 copy.JPG", width: 650, height: 1000 }, // Miami moon
  { src: "/photography/midres/62870034.JPG", width: 1000, height: 650 }, // Women and Peppers
  { src: "/photography/midres/94550013 copy.JPG", width: 650, height: 1000 }, // Cinci River
  { src: "/photography/midres/33330008 copy.JPG", width: 650, height: 1000 }, // Miami Buoy and Ocean
  { src: "/photography/midres/94540005.JPG", width: 1000, height: 650 }, // Tree IH
  { src: "/photography/midres/000019180024.jpg", width: 1000, height: 650 }, // MET Statue side
  { src: "/photography/midres/06620016.JPG", width: 3583, height: 2376 }, // Infinity Path Man Ravello
  { src: "/photography/midres/000079440027.jpg", width: 1000, height: 650 }, // Yellow NY Grafitti
  { src: "/photography/midres/000019160001.jpg", width: 1000, height: 650 }, // Mexico Moon
  { src: "/photography/midres/10270012.JPG", width: 1000, height: 650 }, // Mexico Sun
  { src: "/photography/midres/01680024.JPG", width: 1000, height: 650 }, // Diner Beacon
  { src: "/photography/midres/06630012.JPG", width: 3583, height: 2376 }, // Positano Beach girl
  { src: "/photography/midres/06620005.JPG", width: 2376, height: 3583 }, // Uscita Boy Ravello
  { src: "/photography/midres/06770019.JPG", width: 3583, height: 2376 }, // Airport Woman Friedlander
  { src: "/photography/midres/06660009.JPG", width: 3583, height: 2376 }, // Madonna and Child 3
  { src: "/photography/midres/000019180025.jpg", width: 1000, height: 650 }, // MET Statue Front
];
  
export default allPhotos;
