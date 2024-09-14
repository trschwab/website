const allPhotos = [
    // { src: "/photography/midres/06660023.JPG", width: 3583, height: 2376 }, // ferdinando table
    { src: "/photography/midres/06580033.JPG", width: 3583, height: 2376 }, // couple rome tree
    { src: "/photography/midres/06630012.JPG", width: 3583, height: 2376 }, // ferdinando girl
    { src: "/photography/midres/06620016.JPG", width: 3583, height: 2376 }, // path of infinity looking out
    { src: "/photography/midres/06580032.JPG", width: 2376, height: 3583 }, // rome massive tree
    { src: "/photography/midres/06770019.JPG", width: 3583, height: 2376 }, // friedlander blocked airport face
    { src: "/photography/midres/06770031.JPG", width: 2376, height: 3583 }, // airport sunset photo
    // { src: "/photography/midres/06660020.JPG", width: 2376, height: 3583 }, // positano table
    { src: "/photography/midres/06540016.JPG", width: 3583, height: 2376 }, // rosaries in amalfi
    // { src: "/photography/midres/06620014.JPG", width: 3583, height: 2376 }, // path of infinity
    // { src: "/photography/midres/06620015.JPG", width: 2376, height: 3583 }, // path of infinity view
    // { src: "/photography/midres/06620001.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06730010.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06730004.JPG", width: 2376, height: 3583 }, // amalfi lemon view
    { src: "/photography/midres/06660009.JPG", width: 3583, height: 2376 }, // madonna and child night 1
    // { src: "/photography/midres/06770030.JPG", width: 2376, height: 3583 }, // airport couple sunset 
    // { src: "/photography/midres/06660031.JPG", width: 3583, height: 2376 }, // lounging on the beach 
    // { src: "/photography/midres/06760031.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06660019.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06660012.JPG", width: 3583, height: 2376 }, // fruit delivery
    // { src: "/photography/midres/06580009.JPG", width: 3583, height: 2376 }, // sistine chapel 
    // { src: "/photography/midres/06730014.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06550002.JPG", width: 2376, height: 3583 }, // amalfi lemon view wall
    { src: "/photography/midres/06550016.JPG", width: 3583, height: 2376 }, // moped couple
    { src: "/photography/midres/06620005.JPG", width: 2376, height: 3583 }, // uscita boy
    // { src: "/photography/midres/06540013.JPG", width: 2376, height: 3583 }, // red moped 
    // { src: "/photography/midres/06590019.JPG", width: 3583, height: 2376 }, // positano painter 
    { src: "/photography/midres/06720010.JPG", width: 3583, height: 2376 }, // rome shutting window
    // { src: "/photography/midres/06730029.JPG", width: 2376, height: 3583 }, // agricole corner 
    // { src: "/photography/midres/06730001.JPG", width: 2376, height: 3583 },
    // { src: "/photography/midres/06770035.JPG", width: 2376, height: 3583 }, // airplane mountains 
    { src: "/photography/midres/06670037.JPG", width: 2376, height: 3583 }, // going left sign rome
    { src: "/photography/midres/06720006.JPG", width: 3583, height: 2376 }, // rome church
    { src: "/photography/midres/06540004.JPG", width: 3583, height: 2376 }, // fountain drinking amalfi
    { src: "/photography/midres/06630016.JPG", width: 3583, height: 2376 }, // positano painting
    // { src: "/photography/midres/06710028.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06570002.JPG", width: 3583, height: 2376 }, // rome dead leaves
    // { src: "/photography/midres/06600011.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06700011.JPG", width: 3583, height: 2376 }, // spanish steps fountain 
    // { src: "/photography/midres/06750008.JPG", width: 3583, height: 2376 }, // positano water 
    // { src: "/photography/midres/06530036.JPG", width: 2376, height: 3583 }, // amalfi fountain hand 
    { src: "/photography/midres/06520033.JPG", width: 3583, height: 2376 }, // positano morning
    { src: "/photography/midres/06740031.JPG", width: 2376, height: 3583 }, // rome flowers 
    // { src: "/photography/midres/06740024.JPG", width: 2376, height: 3583 },// rome hands 
    { src: "/photography/midres/06520032.JPG", width: 2376, height: 3583 }, // positano morning seltzer
    { src: "/photography/midres/06650035.JPG", width: 2376, height: 3583 }, // positano candy 
    { src: "/photography/midres/06680002.JPG", width: 3583, height: 2376 }, // positano boy on cart
    // { src: "/photography/midres/06530037.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06610015.JPG", width: 3583, height: 2376 }, // vatican garden
    { src: "/photography/midres/06610029.JPG", width: 2376, height: 3583 }, // vatican statue
    // { src: "/photography/midres/06710029.JPG", width: 3583, height: 2376 }, // positano view 
    { src: "/photography/midres/06710003.JPG", width: 3583, height: 2376 }, // piertrobondante view
    { src: "/photography/midres/06570029.JPG", width: 3583, height: 2376 }, // rome sign
    // { src: "/photography/midres/06560004.JPG", width: 3583, height: 2376 }, // piertrobondante view
    // { src: "/photography/midres/06680028.JPG", width: 2376, height: 3583 }, // positano water view
    { src: "/photography/midres/06530009.JPG", width: 3583, height: 2376 }, // positano woman filming dog
    // { src: "/photography/midres/06640027.JPG", width: 2376, height: 3583 }, // coloseum column fragment
    { src: "/photography/midres/06680001.JPG", width: 2376, height: 3583 }, // positano beacher
    // { src: "/photography/midres/06530034.JPG", width: 2376, height: 3583 }, // amalfi man 
    // { src: "/photography/midres/06700013.JPG", width: 3583, height: 2376 }, // rome fruit stand 
    // { src: "/photography/midres/06710002.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06570010.JPG", width: 3583, height: 2376 }, // forum
    // { src: "/photography/midres/06700003.JPG", width: 3583, height: 2376 }, // rome duck 
    { src: "/photography/midres/06680011.JPG", width: 2376, height: 3583 }, // positano tables
    // { src: "/photography/midres/06740023.JPG", width: 2376, height: 3583 }, // rome coconut man 
    { src: "/photography/midres/06520021.JPG", width: 3583, height: 2376 }, // positano fireworks 1
    // { src: "/photography/midres/06520020.JPG", width: 3583, height: 2376 }, // positano fireworks 2
    // { src: "/photography/midres/06520008.JPG", width: 2376, height: 3583 }, // positano night market 
    { src: "/photography/midres/06640036.JPG", width: 2376, height: 3583 }, // coloseum shot 
    { src: "/photography/midres/06740022.JPG", width: 2376, height: 3583 }, // trevi fountain men
    // { src: "/photography/midres/06650033.JPG", width: 2376, height: 3583 }, // positano beach 
    // { src: "/photography/midres/06750027.JPG", width: 2376, height: 3583 }, // positano water 
    // { src: "/photography/midres/06700002.JPG", width: 2376, height: 3583 }, // rome park 
    // { src: "/photography/midres/06570011.JPG", width: 3583, height: 2376 }, // rome fountain 
    { src: "/photography/midres/06570005.JPG", width: 3583, height: 2376 }, // roman forum
    // { src: "/photography/midres/06680006.JPG", width: 3583, height: 2376 }, // positano view 
    { src: "/photography/midres/06650025.JPG", width: 2376, height: 3583 }, // positano red beach
    // { src: "/photography/midres/06530033.JPG", width: 2376, height: 3583 }, // amalfi red moped 
    { src: "/photography/midres/06650019.JPG", width: 3583, height: 2376 }, // positano beach cards
    { src: "/photography/midres/06690017.JPG", width: 3583, height: 2376 }, // coloseum side view
    { src: "/photography/midres/06690003.JPG", width: 2376, height: 3583 }, // red grafitti rome
    // { src: "/photography/midres/06690002.JPG", width: 2376, height: 3583 }, // rome morning 
    { src: "/photography/midres/06690016.JPG", width: 2376, height: 3583 }, // coloseum main view
    { src: "/photography/midres/06680007.JPG", width: 2376, height: 3583 }, // morning positano red boat
    { src: "/photography/midres/06650030.JPG", width: 3583, height: 2376 }, // positano beach couple
    // { src: "/photography/midres/06610010.JPG", width: 3583, height: 2376 }, // vatican bench 
    { src: "/photography/midres/06570023.JPG", width: 2376, height: 3583 }, // garbage cans at termini rome
    { src: "/photography/midres/06710035.JPG", width: 2376, height: 3583 }, // yellow positano beach 
    { src: "/photography/midres/06700018.JPG", width: 3583, height: 2376 }, // locks rome
    // { src: "/photography/midres/06650029.JPG", width: 2376, height: 3583 }, // woman eating positano beach 
    // { src: "/photography/midres/06530017.JPG", width: 3583, height: 2376 }, // flag positano boat 
    // { src: "/photography/midres/06690033.JPG", width: 2376, height: 3583 }, // borghese gallery outisde
    // { src: "/photography/midres/06600025.JPG", width: 2376, height: 3583 }, // boat tour hand positano 
    { src: "/photography/midres/06700019.JPG", width: 2376, height: 3583 }, // rome forum
    { src: "/photography/midres/06560027.JPG", width: 2376, height: 3583 }, // window
    { src: "/photography/midres/06570022.JPG", width: 3583, height: 2376 }, // guards at termini
    { src: "/photography/midres/06570036.JPG", width: 3583, height: 2376 }, // grafitti
    // { src: "/photography/midres/06710022.JPG", width: 2376, height: 3583 }, // piertro
    { src: "/photography/midres/06690019.JPG", width: 3583, height: 2376 }, // coloseum and sign
    { src: "/photography/midres/06680034.JPG", width: 2376, height: 3583 }, // steps positano
    { src: "/photography/midres/06530015.JPG", width: 2376, height: 3583 }, // flag boat
    { src: "/photography/midres/06710033.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06560034.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06530011.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06530005.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06680018.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06690021.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06740017.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06520029.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06740003.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06700009.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06750004.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06680033.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06530012.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06690022.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06530007.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06650005.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06660016.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06760002.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06550019.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06590017.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06540034.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06590003.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06620023.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06540009.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06590016.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06550018.JPG", width: 2376, height: 3583 },
    // { src: "/photography/midres/06630032.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06660017.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06670010.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06660029.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06760001.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06730018.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06630024.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06620035.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06730031.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06630025.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06550033.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06760014.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06660014.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06660010.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06760010.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06730035.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06630009.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06620024.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06590011.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06580001.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06660011.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06760005.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06660013.JPG", width: 2376, height: 3583 },
    // { src: "/photography/midres/06630036.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06730022.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06580017.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/06720027.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06550021.JPG", width: 3583, height: 2376 },
    // { src: "/photography/midres/06760006.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/06670017.JPG", width: 3583, height: 2376 },
    
  
    { src: "/photography/midres/07410024.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410019.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410036.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/07410023.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410021.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410008.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/07410020.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410007.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/07410002.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16530010.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16520003.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16520002.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16530003.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16560027.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16560031.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16560024.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16570035.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16480014.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16480029.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16500005.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16480002.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16500028.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16540035.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16510013.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16500033.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16500027.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16490031.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16480022.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16540010.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16490033.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16500030.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16500031.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16510008.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16490032.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16540001.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16510018.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16500020.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16540002.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16490034.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16520008.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16530027.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16560002.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16570002.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16560004.JPG", width: 3583, height: 2376 },
    { src: "/photography/midres/16560011.JPG", width: 2376, height: 3583 },
    { src: "/photography/midres/16570028.JPG", width: 3583, height: 2376 },
  
    { src: "/photography/midres/000003210028.jpg", width: 2376, height: 3584},
    { src: "/photography/midres/000003210037.jpg", width: 3584, height: 2376 },
    { src: "/photography/midres/000003210002.jpg", width: 3584, height: 2376 },
    { src: "/photography/midres/000003210016.jpg", width: 2376, height: 3584 },
    { src: "/photography/midres/000003210003.jpg", width: 3584, height: 2376 },
    { src: "/photography/midres/000003210012.jpg", width: 3584, height: 2376 },
    { src: "/photography/midres/000003210020.jpg", width: 2376, height: 3584 },
    { src: "/photography/midres/14120023.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14040030.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040018.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14050017.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040036.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14090001.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14080005.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14080004.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14090029.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14100017.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14110012.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14100015.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14040021.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040020.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040008.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14080012.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14050030.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14130006.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14130007.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14060023.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14060034.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14070021.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14060018.JPG", width: 1000, height: 650 },
  
    { src: "/photography/midres/14130001.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14130014.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14060025.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14070020.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14060026.JPG", width: 650, height: 1000 },
  
    { src: "/photography/midres/14120022.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14070013.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14060028.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14120034.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14120035.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14130018.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14060005.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14130009.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14070015.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14070029.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14070003.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14070017.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14130037.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14120032.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14100031.JPG", width: 650, height: 1000 },
  
    { src: "/photography/midres/14080023.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14100025.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14040005.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/14040010.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14050001.JPG", width: 650, height: 1000 },
  
    { src: "/photography/midres/14080020.JPG", width: 650, height: 1000 },
  
    { src: "/photography/midres/14080034.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14090025.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14090019.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14090024.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040013.JPG", width: 650, height: 1000 },
  
    // { src: "/photography/midres/14050002.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14110026.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14110027.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040007.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14110036.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14110037.JPG", width: 1000, height: 650 },
  
    { src: "/photography/midres/14050012.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14090036.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14090034.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14110024.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040017.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14090035.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14080018.JPG", width: 1000, height: 650 },
  
  
    { src: "/photography/midres/14050004.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/14090022.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/14040029.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/14040028.JPG", width: 1000, height: 650 },
  
  
    { src: "/photography/midres/89900034.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89940014.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89920010 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89920026.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89920028.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89920007.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89940008 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89900002.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89950011.JPG", width: 1000, height: 650 }, 
    { src: "/photography/midres/89950033.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89930009.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89930016.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89890012.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89890020.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89890001.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89890028.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89890010.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89910021.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89910028 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89910026.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/89890007 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89890017.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89890022.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/89890023.JPG", width: 650, height: 1000 },
  
  
    // { src: "/photography/midres/16690018 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16660031 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16660030.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16690008.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16660022 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16710018 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16680010.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16680016 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16690009.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16680018.JPG", width: 1000, height: 650 }, // airport thumbs up
  
    // { src: "/photography/midres/16710020 copy.JPG", width: 650, height: 1000 }, // misisng?
    // { src: "/photography/midres/16710003 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16700024.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690026.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16700032.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16670028.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690003 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16670007.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/16660016.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16670006.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690014 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16670011.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16660019.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16660024.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690010 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/16680032 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16670026 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16710006.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690016 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16690017 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/16690001.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/16690006.JPG", width: 1000, height: 650 },
  
  
    // { src: "/photography/midres/03550019.JPG", width: 1000, height: 650 },
  
    // { src: "/photography/midres/03550012 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/03550016 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/03550004 edit2.JPG", width: 1000, height: 650 },
  
  
  
    { src: "/photography/midres/03540019 copy.JPG", width: 650, height: 1000 },
  
  
    { src: "/photography/midres/10950009.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/09640026 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09630026 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640013 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09620004 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/09620018 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/09630031 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/10970030 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640030 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640017.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/10950018.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/10950010 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/10970032.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/09630002 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/09620032.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/10950006 copy.JPG", width: 650, height: 1000 }, // 
    { src: "/photography/midres/10970035.JPG", width: 1000, height: 650 }, // bad brains mural
    { src: "/photography/midres/10960024.JPG", width: 1000, height: 650 }, // man lounging east river
    // { src: "/photography/midres/09630021 copy.JPG", width: 650, height: 1000 }, // missing?
    { src: "/photography/midres/09630022.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/10960009 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09620008 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/09640015 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/09630007 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09630004.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/10970013.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/09620028.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/09630013.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/09630006.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/09640032 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640011 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/10960011.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/10970001.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/09630029.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/10950002 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/10960032 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640025 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/09640024 copy.JPG", width: 650, height: 1000 }, // tulip man
    { src: "/photography/midres/10950028.JPG", width: 1000, height: 650 }, // old east river couple
    { src: "/photography/midres/09640027.JPG", width: 1000, height: 650 }, // tulips
    { src: "/photography/midres/10950014.JPG", width: 1000, height: 650 }, // fish 
    { src: "/photography/midres/10950016.JPG", width: 1000, height: 650 }, // fish 
    { src: "/photography/midres/10950027 copy.JPG", width: 650, height: 1000 }, // summer lounge in field
    { src: "/photography/midres/10970034 copy.JPG", width: 650, height: 1000 }, // codex
    
    // { src: "/photography/midres/74200025 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/74220034.JPG", width: 1000, height: 650 }, // beer sign
    // { src: "/photography/midres/74200030 copy.JPG", width: 650, height: 1000 },
      // { src: "/photography/midres/74220038.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74200031 copy.JPG", width: 650, height: 1000 }, // man plaing instrument
    // { src: "/photography/midres/74200034 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/74220028.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/74220003 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/74220008 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/74200035.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74220009 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/74210003.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74220022 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/74220031 copy.JPG", width: 650, height: 1000 },
  
    // { src: "/photography/midres/74220029.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74200013.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74200012.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74200001.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/74210001.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/74210013 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/74210031.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/74210015 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/74200009 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/74200014 copy.JPG", width: 650, height: 1000 },
  
  
  
    { src: "/photography/midres/70310036 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/70310011.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/70310019 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/70310015 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/70310031.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/70310006.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/70310003.JPG", width: 1000, height: 650 },
  
    // { src: "/photography/midres/65340030 copy.JPG", width: 650, height: 1000 }, // missing?
    { src: "/photography/midres/65330016.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65330031 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/65330029 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/65340022.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65340008.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/65340013.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/65340015.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/65340007.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65340005 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/65330034.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65330033.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65330032.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/65340024.JPG", width: 1000, height: 650 },
  
  
  
    { src: "/photography/midres/20330011.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/20330033 copy.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/20330002.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/20330022 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/20330023.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/20330014 copy.JPG", width: 650, height: 1000 },
  
  
  
    { src: "/photography/midres/70050017 copy edit.JPG", width: 650, height: 1000 },
    { src: "/photography/midres/70050021 edit.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/70050028 copy edit.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/70050022 copy edit.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/70050032 copy Edit.JPG", width: 650, height: 1000 },
  
  
    // { src: "/photography/midres/07280033 copy.JPG", width: 650, height: 1000 },
  
    // { src: "/photography/midres/07270014.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/07280011 copy.JPG", width: 650, height: 1000 },
  
    { src: "/photography/midres/07270020.JPG", width: 1000, height: 650 }, // 
    { src: "/photography/midres/07280001 copy.JPG", width: 650, height: 1000 }, // angular building
  
    { src: "/photography/midres/07280013.JPG", width: 1000, height: 650 }, // snowy bench
  
    { src: "/photography/midres/11930032_1 2.JPG", width: 1000, height: 650 }, // Great building and clouds
  
    // { src: "/photography/midres/07280014 copy.JPG", width: 650, height: 1000 }, // ugly puddle
    { src: "/photography/midres/000017370015.jpg", width: 1000, height: 650 }, // night Lights 2
    // { src: "/photography/midres/000017370020.jpg", width: 1000, height: 650 }, // Target Flowers 
    { src: "/photography/midres/000017370025.jpg", width: 1000, height: 650 }, // Light reflection
  
    // { src: "/photography/midres/000017370030.jpg", width: 1000, height: 650 }, // Wheat
  
    // { src: "/photography/midres/39230015.JPG", width: 1000, height: 650 }, // Giraffes
    { src: "/photography/midres/39220013 copy.JPG", width: 650, height: 1000 }, // Building
    // { src: "/photography/midres/39220026.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/39230014.JPG", width: 1000, height: 650 }, // 145 tiles
    // { src: "/photography/midres/39230007.JPG", width: 1000, height: 650 }, // Pidgeons Washington sq pk 
    { src: "/photography/midres/39220035.JPG", width: 1000, height: 650 }, // Night Rolfs Smoke
    
    // { src: "/photography/midres/39220032.JPG", width: 1000, height: 650 }, // Night Stickers 
    { src: "/photography/midres/39220024.JPG", width: 1000, height: 650 }, // Night lights
    // { src: "/photography/midres/39220023.JPG", width: 1000, height: 650 }, // A1 stickers 
    { src: "/photography/midres/39220011.JPG", width: 1000, height: 650 }, // Clouds Airplane
    { src: "/photography/midres/39210026.JPG", width: 1000, height: 650 }, // Subway
    { src: "/photography/midres/39210014.JPG", width: 1000, height: 650 }, // Long Island Bar
    
  
    { src: "/photography/midres/33320036 copy.JPG", width: 650, height: 1000 }, // Miami Stroller in 2
    // { src: "/photography/midres/33320013.JPG", width: 1000, height: 650 }, // Miami Alligators
    // { src: "/photography/midres/33320033 copy.JPG", width: 650, height: 1000 }, // miami jelly
    { src: "/photography/midres/33330033 copy.JPG", width: 650, height: 1000 }, // Miami Moon
    // { src: "/photography/midres/33330020 copy.JPG", width: 650, height: 1000 },
    
    // { src: "/photography/midres/33330021 copy.JPG", width: 650, height: 1000 }, // Miami Fountain
    { src: "/photography/midres/62880026.JPG", width: 1000, height: 650 }, // Temple Room MET 
    // { src: "/photography/midres/33330022 copy.JPG", width: 650, height: 1000 }, // Miami Lily Pads 
    // { src: "/photography/midres/000079440021.jpg", width: 1000, height: 650 }, // Mulberry Church 
    { src: "/photography/midres/33330026 copy.JPG", width: 650, height: 1000 }, // Miami Statue
    // { src: "/photography/midres/33320015.JPG", width: 1000, height: 650 }, // Miami Butterfly 
  
    { src: "/photography/midres/33330008 copy.JPG", width: 650, height: 1000 }, // Miami Buoys 
    // { src: "/photography/midres/33330004 copy.JPG", width: 650, height: 1000 }, // missing?
  
  
  
    // { src: "/photography/midres/000079440022.jpg", width: 1000, height: 650 }, // Mulberry Sunset Building 
  
    // { src: "/photography/midres/81840010.JPG", width: 1000, height: 650 }, // BW Italian Ices
  
    { src: "/photography/midres/62880024.JPG", width: 1000, height: 650 }, // Temple room 
    { src: "/photography/midres/000079440020.jpg", width: 1000, height: 650 }, // Sunset Church
    { src: "/photography/midres/81840017.JPG", width: 1000, height: 650 }, // BW Washington sq park arch
    { src: "/photography/midres/94550013 copy.JPG", width: 650, height: 1000 }, // Ohio River
    { src: "/photography/midres/62880020.JPG", width: 1000, height: 650 }, // Central Pakr Yellow Leaves
    // { src: "/photography/midres/94550017.JPG", width: 1000, height: 650 }, // Pipkins Pumpkins 
    // { src: "/photography/midres/94530005 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/11930022 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/000079440025.jpg", width: 1000, height: 650 }, // NY Yellow tree 
    // { src: "/photography/midres/81840014.JPG", width: 1000, height: 650 }, // NY BW Bodega 
    { src: "/photography/midres/000079440027.jpg", width: 1000, height: 650 }, // NY Yellow Graffitti 
    { src: "/photography/midres/94540005.JPG", width: 1000, height: 650 }, // Indian Hill Berries
    // { src: "/photography/midres/000079440026.jpg", width: 1000, height: 650 }, // Green building corner 
    // { src: "/photography/midres/81840015.JPG", width: 1000, height: 650 }, // BW Road 
    // { src: "/photography/midres/62870003.JPG", width: 1000, height: 650 }, // Night bench
    // { src: "/photography/midres/10270018.JPG", width: 1000, height: 650 }, // Mexico Sunset 
    // { src: "/photography/midres/94530023.JPG", width: 1000, height: 650 }, // Indian Hill red leaves 
    // { src: "/photography/midres/94530003 copy.JPG", width: 650, height: 1000 }, // airplane shot
    { src: "/photography/midres/94560011.JPG", width: 1000, height: 650 }, // Indian Hill blue building
    // { src: "/photography/midres/62870001.JPG", width: 1000, height: 650 }, // Night star
    { src: "/photography/midres/10270035.JPG", width: 1000, height: 650 }, // Abraco 
    { src: "/photography/midres/94560017.JPG", width: 1000, height: 650 }, // Indian Hill building
    // { src: "/photography/midres/62870022.JPG", width: 1000, height: 650 }, 
    { src: "/photography/midres/62870009.JPG", width: 1000, height: 650 }, // Long exposure road NY
    { src: "/photography/midres/10270012.JPG", width: 1000, height: 650 }, // Mexico sunset
    // { src: "/photography/midres/000005530024.jpg", width: 1000, height: 650 }, // NY Couple in park 
    // { src: "/photography/midres/94540006 copy.JPG", width: 650, height: 1000 }, // Cincinnati Chairs 
    // { src: "/photography/midres/94530006 copy.JPG", width: 650, height: 1000 },
  
    // { src: "/photography/midres/94530028.JPG", width: 1000, height: 650 }, // Cincinnati Leaves 
    // { src: "/photography/midres/94530007 copy.JPG", width: 650, height: 1000 }, // Mild airplane river
    // { src: "/photography/midres/10270013.JPG", width: 1000, height: 650 }, // Mexico sunset
    { src: "/photography/midres/94560025.JPG", width: 1000, height: 650 }, // Mariemont
    { src: "/photography/midres/62870034.JPG", width: 1000, height: 650 }, // Woman and Peppers
    // { src: "/photography/midres/62870018.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/000019160016.jpg", width: 1000, height: 650 }, // Mexico water
    { src: "/photography/midres/000019160001.jpg", width: 1000, height: 650 }, // Mexico Moon
    { src: "/photography/midres/94560036.JPG", width: 1000, height: 650 }, // Pleasant St Cincinnati
    { src: "/photography/midres/81840018.JPG", width: 1000, height: 650 }, // BW Night Washington sq pk
    { src: "/photography/midres/01680025.JPG", width: 1000, height: 650 }, // Beautiful stop light
    // { src: "/photography/midres/11930032.JPG", width: 1000, height: 650 },
    { src: "/photography/midres/000019180024.jpg", width: 1000, height: 650 }, // Met Statue 2
    { src: "/photography/midres/000019180025.jpg", width: 1000, height: 650 }, // Met Statue 1
    // { src: "/photography/midres/01680030.JPG", width: 1000, height: 650 }, // NY Church 
    { src: "/photography/midres/01680024.JPG", width: 1000, height: 650 }, // Diner Beacon 
    // { src: "/photography/midres/62880012.JPG", width: 1000, height: 650 }, // NY Flowers other angle 
    // { src: "/photography/midres/000079440016.jpg", width: 600, height: 800 }, // Building Portrait 
    // { src: "/photography/midres/81840036.JPG", width: 1000, height: 650 }, // BW Funeral home
    // { src: "/photography/midres/11930020.JPG", width: 1000, height: 650 },
    // { src: "/photography/midres/000019150014.jpg", width: 1000, height: 650 }, // Mexico parasailer
    // { src: "/photography/midres/11930009.JPG", width: 1000, height: 650 }, // Ohio sunset 
    // { src: "/photography/midres/62880014.JPG", width: 1000, height: 650 }, // NY flowers
    // { src: "/photography/midres/000019150002.jpg", width: 1000, height: 650 }, // mexico landscape
    { src: "/photography/midres/000019150003.jpg", width: 1000, height: 650 }, // boats in mexico
  
  
];
  
export default allPhotos;
