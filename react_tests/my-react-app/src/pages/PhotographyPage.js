// src/pages/PhotographyPage.js
import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';

const photos = [
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
  { src: "/photography/midres/16680018.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/16710020 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/16710003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16700024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690026.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16700032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16670028.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16670007.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16660016.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16670006.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16670011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16660019.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16660024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16680032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16670026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16710006.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16690017 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/16690001.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/16690006.JPG", width: 1000, height: 650 },


  { src: "/photography/midres/03550019.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/03550012 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/03550016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/03550004 edit2.JPG", width: 1000, height: 650 },



  { src: "/photography/midres/03540019 copy.JPG", width: 650, height: 1000 },


  { src: "/photography/midres/10950009.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09640026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09630026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09620004 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09620018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09630031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10970030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640017.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950018.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10970032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09630002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09620032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950006 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10970035.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10960024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09630021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09630022.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10960009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09620008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09630007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09630004.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10970013.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09620028.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09630013.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09630006.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09640032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640011 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10960011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10970001.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09630029.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10960032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/09640024 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10950028.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/09640027.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950014.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950016.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10950027 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10970034 copy.JPG", width: 650, height: 1000 },
  
  // { src: "/photography/midres/74200025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74220034.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74200030 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/midres/74220038.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/74200031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74200034 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/74220028.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74220003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74220008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74200035.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74220009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74210003.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74220022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74220031 copy.JPG", width: 650, height: 1000 },

  // { src: "/photography/midres/74220029.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/74200013.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/74200012.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74200001.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74210001.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74210013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74210031.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/74210015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74200009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/74200014 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/midres/70310036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70310011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/70310019 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70310015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70310031.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/70310006.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/70310003.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/65340030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/65330016.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65330031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/65330029 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/65340022.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340008.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340013.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340015.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340007.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340005 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/65330034.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65330033.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65330032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/65340024.JPG", width: 1000, height: 650 },



  { src: "/photography/midres/20330011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/20330033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/20330002.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/20330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/20330023.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/20330014 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/midres/70050017 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70050021 edit.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/70050028 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70050022 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/70050032 copy Edit.JPG", width: 650, height: 1000 },


  { src: "/photography/midres/07280033 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/midres/07270014.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/07280011 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/midres/07270020.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/07280001 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/midres/07280013.JPG", width: 1000, height: 650 },


  { src: "/photography/midres/11930032_1 2.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/07280014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/000017370015.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/000017370020.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/000017370025.jpg", width: 1000, height: 650 },

  { src: "/photography/midres/000017370030.jpg", width: 1000, height: 650 },

  { src: "/photography/midres/39230015.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39220013 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/39220026.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39230014.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39230007.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39220035.JPG", width: 1000, height: 650 },
  
  { src: "/photography/midres/39220032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39220024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39220023.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39220011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39210026.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/39210014.JPG", width: 1000, height: 650 },
  

  { src: "/photography/midres/33320036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/33320013.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/33320033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/33330033 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/33330020 copy.JPG", width: 650, height: 1000 },
  
  { src: "/photography/midres/33330021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/62880026.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/33330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/000079440021.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/33330026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/33320015.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/33330008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/33330004 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/midres/000079440022.jpg", width: 1000, height: 650 },

  { src: "/photography/midres/81840010.JPG", width: 1000, height: 650 },

  { src: "/photography/midres/62880024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000079440020.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/81840017.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94550013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/62880020.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94550017.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/94530005 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/11930022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/000079440025.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/81840014.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000079440027.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/94540005.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000079440026.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/81840015.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62870003.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10270018.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94530023.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94530003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/94560011.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62870001.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10270035.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94560017.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/62870022.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62870009.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/10270012.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000005530024.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/94540006 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/midres/94530006 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/midres/94530028.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94530007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/midres/10270013.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/94560025.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62870034.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/62870018.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000019160016.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/000019160001.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/94560036.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/81840018.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/01680025.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/11930032.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000019180024.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/000019180025.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/01680030.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/01680024.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62880012.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000079440016.jpg", width: 600, height: 800 },
  { src: "/photography/midres/81840036.JPG", width: 1000, height: 650 },
  // { src: "/photography/midres/11930020.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000019150014.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/11930009.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/62880014.JPG", width: 1000, height: 650 },
  { src: "/photography/midres/000019150002.jpg", width: 1000, height: 650 },
  { src: "/photography/midres/000019150003.jpg", width: 1000, height: 650 },


];

function reorganizePhotos(photos) {
  const numPhotos = photos.length;
  const numColumns = 3;
  const columnHeight = Math.ceil(numPhotos / numColumns);
  const newPhotos = new Array(numPhotos);

  for (let i = 0; i < numPhotos; i++) {
      // Calculate new position
      const column = i % numColumns;
      const row = Math.floor(i / numColumns);
      const newIndex = column * columnHeight + row;

      // Place photo in new position
      newPhotos[newIndex] = photos[i];
  }

  return newPhotos;
}

const reorganizedPhotos = reorganizePhotos(photos);


// Thanks to this guide
// https://css-tricks.com/seamless-responsive-photo-grid/

const sectionStyle = {
  lineHeight: 0,
  WebkitRowGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};

const sectionStyleMobile = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 1,
  MozColumnCount: 1,
  columnCount: 1,
};

const sectionStyleDesktop = {
  lineHeight: 0,
  WebkitColumnGap: '0px',
  columnGap: '0px',
  MozColumnGap: '0px',
  WebkitColumnCount: 3,
  MozColumnCount: 3,
  columnCount: 3,
};


const photoWrapperStyle = {
  padding: '10px', // Add padding on all sides (top, right, bottom, left)
  display: 'inline-block',
  width: '100%',
  boxSizing: 'border-box',
};
const PhotoGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = isMobile ? sectionStyleMobile : sectionStyleDesktop;
  const photoDisplay = isMobile ? photos : reorganizedPhotos;

  return (
    <section id="photos" style={sectionStyle}>
      {photoDisplay.map((photo, index) => (
        <div key={index} style={photoWrapperStyle}>
          {isMobile ? (
            <LowResImage
              src={photo.src.replace('midres', 'lowres')}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          ) : (
            <BlurUpImage
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;