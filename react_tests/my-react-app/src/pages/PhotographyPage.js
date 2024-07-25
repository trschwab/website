// src/pages/PhotographyPage.js
import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import BlurUpImage from '../components/BlurUpImage';
import LowResImage from '../components/LowResImage';

const photos = [
  { src: "/photography/16530010.JPG", width: 3583, height: 2376 },
  { src: "/photography/16520003.JPG", width: 3583, height: 2376 },
  { src: "/photography/16520002.JPG", width: 2376, height: 3583 },
  { src: "/photography/16530003.JPG", width: 3583, height: 2376 },
  { src: "/photography/16560027.JPG", width: 2376, height: 3583 },
  { src: "/photography/16560031.JPG", width: 2376, height: 3583 },
  { src: "/photography/16560024.JPG", width: 2376, height: 3583 },
  { src: "/photography/16570035.JPG", width: 3583, height: 2376 },
  { src: "/photography/16480014.JPG", width: 3583, height: 2376 },
  { src: "/photography/16480029.JPG", width: 2376, height: 3583 },
  { src: "/photography/16500005.JPG", width: 3583, height: 2376 },
  { src: "/photography/16480002.JPG", width: 2376, height: 3583 },
  { src: "/photography/16500028.JPG", width: 3583, height: 2376 },
  { src: "/photography/16540035.JPG", width: 3583, height: 2376 },
  { src: "/photography/16510013.JPG", width: 3583, height: 2376 },
  { src: "/photography/16500033.JPG", width: 3583, height: 2376 },
  { src: "/photography/16500027.JPG", width: 3583, height: 2376 },
  { src: "/photography/16490031.JPG", width: 3583, height: 2376 },
  { src: "/photography/16480022.JPG", width: 3583, height: 2376 },
  { src: "/photography/16540010.JPG", width: 2376, height: 3583 },
  { src: "/photography/16490033.JPG", width: 3583, height: 2376 },
  { src: "/photography/16500030.JPG", width: 3583, height: 2376 },
  { src: "/photography/16500031.JPG", width: 3583, height: 2376 },
  { src: "/photography/16510008.JPG", width: 2376, height: 3583 },
  { src: "/photography/16490032.JPG", width: 3583, height: 2376 },
  { src: "/photography/16540001.JPG", width: 2376, height: 3583 },
  { src: "/photography/16510018.JPG", width: 2376, height: 3583 },
  { src: "/photography/16500020.JPG", width: 2376, height: 3583 },
  { src: "/photography/16540002.JPG", width: 3583, height: 2376 },
  { src: "/photography/16490034.JPG", width: 3583, height: 2376 },
  { src: "/photography/16520008.JPG", width: 2376, height: 3583 },
  { src: "/photography/16530027.JPG", width: 2376, height: 3583 },
  { src: "/photography/16560002.JPG", width: 3583, height: 2376 },
  { src: "/photography/16570002.JPG", width: 2376, height: 3583 },
  { src: "/photography/16560004.JPG", width: 3583, height: 2376 },
  { src: "/photography/16560011.JPG", width: 2376, height: 3583 },
  { src: "/photography/16570028.JPG", width: 3583, height: 2376 },

  { src: "/photography/000003210028.jpg", width: 2376, height: 3584},
  { src: "/photography/000003210037.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210002.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210016.jpg", width: 2376, height: 3584 },
  { src: "/photography/000003210003.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210012.jpg", width: 3584, height: 2376 },
  { src: "/photography/000003210020.jpg", width: 2376, height: 3584 },
  { src: "/photography/14120023.JPG", width: 650, height: 1000 },
  { src: "/photography/14040030.JPG", width: 1000, height: 650 },
  { src: "/photography/14040018.JPG", width: 1000, height: 650 },
  { src: "/photography/14050017.JPG", width: 1000, height: 650 },
  { src: "/photography/14040036.JPG", width: 650, height: 1000 },
  { src: "/photography/14090001.JPG", width: 650, height: 1000 },
  { src: "/photography/14080005.JPG", width: 650, height: 1000 },
  { src: "/photography/14080004.JPG", width: 1000, height: 650 },
  { src: "/photography/14090029.JPG", width: 1000, height: 650 },
  { src: "/photography/14100017.JPG", width: 650, height: 1000 },
  { src: "/photography/14110012.JPG", width: 650, height: 1000 },
  { src: "/photography/14100015.JPG", width: 650, height: 1000 },
  { src: "/photography/14040021.JPG", width: 1000, height: 650 },
  { src: "/photography/14040020.JPG", width: 1000, height: 650 },
  { src: "/photography/14040008.JPG", width: 650, height: 1000 },
  { src: "/photography/14080012.JPG", width: 1000, height: 650 },
  { src: "/photography/14050030.JPG", width: 1000, height: 650 },
  { src: "/photography/14130006.JPG", width: 1000, height: 650 },
  { src: "/photography/14130007.JPG", width: 650, height: 1000 },
  { src: "/photography/14060023.JPG", width: 650, height: 1000 },
  { src: "/photography/14060034.JPG", width: 1000, height: 650 },
  { src: "/photography/14070021.JPG", width: 650, height: 1000 },
  { src: "/photography/14060018.JPG", width: 1000, height: 650 },

  { src: "/photography/14130001.JPG", width: 650, height: 1000 },
  { src: "/photography/14130014.JPG", width: 650, height: 1000 },
  { src: "/photography/14060025.JPG", width: 650, height: 1000 },
  { src: "/photography/14070020.JPG", width: 1000, height: 650 },
  { src: "/photography/14060026.JPG", width: 650, height: 1000 },

  { src: "/photography/14120022.JPG", width: 650, height: 1000 },
  { src: "/photography/14070013.JPG", width: 650, height: 1000 },
  { src: "/photography/14060028.JPG", width: 1000, height: 650 },
  { src: "/photography/14120034.JPG", width: 650, height: 1000 },
  { src: "/photography/14120035.JPG", width: 650, height: 1000 },
  { src: "/photography/14130018.JPG", width: 1000, height: 650 },
  { src: "/photography/14060005.JPG", width: 650, height: 1000 },
  { src: "/photography/14130009.JPG", width: 650, height: 1000 },
  { src: "/photography/14070015.JPG", width: 650, height: 1000 },
  { src: "/photography/14070029.JPG", width: 1000, height: 650 },
  { src: "/photography/14070003.JPG", width: 1000, height: 650 },
  { src: "/photography/14070017.JPG", width: 1000, height: 650 },
  { src: "/photography/14130037.JPG", width: 650, height: 1000 },
  { src: "/photography/14120032.JPG", width: 650, height: 1000 },
  { src: "/photography/14100031.JPG", width: 650, height: 1000 },

  { src: "/photography/14080023.JPG", width: 1000, height: 650 },
  { src: "/photography/14100025.JPG", width: 650, height: 1000 },
  { src: "/photography/14040005.JPG", width: 650, height: 1000 },
  // { src: "/photography/14040010.JPG", width: 650, height: 1000 },
  { src: "/photography/14050001.JPG", width: 650, height: 1000 },

  { src: "/photography/14080020.JPG", width: 650, height: 1000 },

  { src: "/photography/14080034.JPG", width: 650, height: 1000 },
  { src: "/photography/14090025.JPG", width: 1000, height: 650 },
  { src: "/photography/14090019.JPG", width: 650, height: 1000 },
  { src: "/photography/14090024.JPG", width: 1000, height: 650 },
  { src: "/photography/14040013.JPG", width: 650, height: 1000 },

  // { src: "/photography/14050002.JPG", width: 1000, height: 650 },
  { src: "/photography/14110026.JPG", width: 1000, height: 650 },
  { src: "/photography/14110027.JPG", width: 1000, height: 650 },
  { src: "/photography/14040007.JPG", width: 650, height: 1000 },
  { src: "/photography/14110036.JPG", width: 1000, height: 650 },
  { src: "/photography/14110037.JPG", width: 1000, height: 650 },

  { src: "/photography/14050012.JPG", width: 1000, height: 650 },
  { src: "/photography/14090036.JPG", width: 1000, height: 650 },
  { src: "/photography/14090034.JPG", width: 650, height: 1000 },
  { src: "/photography/14110024.JPG", width: 1000, height: 650 },
  { src: "/photography/14040017.JPG", width: 1000, height: 650 },
  { src: "/photography/14090035.JPG", width: 650, height: 1000 },
  { src: "/photography/14080018.JPG", width: 1000, height: 650 },


  { src: "/photography/14050004.JPG", width: 650, height: 1000 },
  // { src: "/photography/14090022.JPG", width: 650, height: 1000 },
  { src: "/photography/14040029.JPG", width: 1000, height: 650 },
  { src: "/photography/14040028.JPG", width: 1000, height: 650 },


  { src: "/photography/89900034.JPG", width: 650, height: 1000 },
  { src: "/photography/89940014.JPG", width: 1000, height: 650 },
  { src: "/photography/89920010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89920026.JPG", width: 1000, height: 650 },
  { src: "/photography/89920028.JPG", width: 1000, height: 650 },
  { src: "/photography/89920007.JPG", width: 1000, height: 650 },
  { src: "/photography/89940008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89900002.JPG", width: 1000, height: 650 },
  { src: "/photography/89950011.JPG", width: 1000, height: 650 }, 
  { src: "/photography/89950033.JPG", width: 1000, height: 650 },
  { src: "/photography/89930009.JPG", width: 650, height: 1000 },
  { src: "/photography/89930016.JPG", width: 1000, height: 650 },
  { src: "/photography/89890012.JPG", width: 1000, height: 650 },
  { src: "/photography/89890020.JPG", width: 650, height: 1000 },
  { src: "/photography/89890001.JPG", width: 1000, height: 650 },
  { src: "/photography/89890028.JPG", width: 1000, height: 650 },
  { src: "/photography/89890010.JPG", width: 1000, height: 650 },
  { src: "/photography/89910021.JPG", width: 1000, height: 650 },
  { src: "/photography/89910028 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89910026.JPG", width: 1000, height: 650 },
  { src: "/photography/89890007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/89890017.JPG", width: 650, height: 1000 },
  { src: "/photography/89890022.JPG", width: 650, height: 1000 },
  { src: "/photography/89890023.JPG", width: 650, height: 1000 },


  // { src: "/photography/16690018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16660031 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/16660030.JPG", width: 1000, height: 650 },
  { src: "/photography/16690008.JPG", width: 1000, height: 650 },
  { src: "/photography/16660022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16710018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16680010.JPG", width: 1000, height: 650 },
  { src: "/photography/16680016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690009.JPG", width: 1000, height: 650 },
  { src: "/photography/16680018.JPG", width: 1000, height: 650 },

  { src: "/photography/16710020 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/16710003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16700024.JPG", width: 1000, height: 650 },
  { src: "/photography/16690026.JPG", width: 1000, height: 650 },
  { src: "/photography/16700032.JPG", width: 1000, height: 650 },
  { src: "/photography/16670028.JPG", width: 1000, height: 650 },
  { src: "/photography/16690003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670007.JPG", width: 1000, height: 650 },
  { src: "/photography/16660016.JPG", width: 1000, height: 650 },
  { src: "/photography/16670006.JPG", width: 1000, height: 650 },
  { src: "/photography/16690014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670011.JPG", width: 1000, height: 650 },
  { src: "/photography/16660019.JPG", width: 1000, height: 650 },
  { src: "/photography/16660024.JPG", width: 1000, height: 650 },
  { src: "/photography/16690010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16680032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16670026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16710006.JPG", width: 1000, height: 650 },
  { src: "/photography/16690016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690017 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/16690001.JPG", width: 1000, height: 650 },
  { src: "/photography/16690006.JPG", width: 1000, height: 650 },


  { src: "/photography/03550019.JPG", width: 1000, height: 650 },

  { src: "/photography/03550012 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/03550016 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/03550004 edit2.JPG", width: 1000, height: 650 },



  { src: "/photography/03540019 copy.JPG", width: 650, height: 1000 },


  { src: "/photography/10950009.JPG", width: 1000, height: 650 },
  { src: "/photography/09640026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620004 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620018 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640017.JPG", width: 1000, height: 650 },
  { src: "/photography/10950018.JPG", width: 1000, height: 650 },
  { src: "/photography/10950010 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970032.JPG", width: 1000, height: 650 },
  { src: "/photography/09630002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620032.JPG", width: 1000, height: 650 },
  { src: "/photography/10950006 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970035.JPG", width: 1000, height: 650 },
  { src: "/photography/10960024.JPG", width: 1000, height: 650 },
  { src: "/photography/09630021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630022.JPG", width: 1000, height: 650 },
  { src: "/photography/10960009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09620008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09630004.JPG", width: 1000, height: 650 },
  { src: "/photography/10970013.JPG", width: 1000, height: 650 },
  { src: "/photography/09620028.JPG", width: 1000, height: 650 },
  { src: "/photography/09630013.JPG", width: 1000, height: 650 },
  { src: "/photography/09630006.JPG", width: 1000, height: 650 },
  { src: "/photography/09640032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640011 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10960011.JPG", width: 1000, height: 650 },
  { src: "/photography/10970001.JPG", width: 1000, height: 650 },
  { src: "/photography/09630029.JPG", width: 1000, height: 650 },
  { src: "/photography/10950002 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10960032 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/09640024 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10950028.JPG", width: 1000, height: 650 },
  { src: "/photography/09640027.JPG", width: 1000, height: 650 },
  { src: "/photography/10950014.JPG", width: 1000, height: 650 },
  { src: "/photography/10950016.JPG", width: 1000, height: 650 },
  { src: "/photography/10950027 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10970034 copy.JPG", width: 650, height: 1000 },
  
  // { src: "/photography/74200025 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220034.JPG", width: 1000, height: 650 },
  { src: "/photography/74200030 copy.JPG", width: 650, height: 1000 },
    // { src: "/photography/74220038.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200034 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/74220028.JPG", width: 1000, height: 650 },
  { src: "/photography/74220003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200035.JPG", width: 1000, height: 650 },
  { src: "/photography/74220009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74210003.JPG", width: 1000, height: 650 },
  { src: "/photography/74220022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74220031 copy.JPG", width: 650, height: 1000 },

  // { src: "/photography/74220029.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200013.JPG", width: 1000, height: 650 },
  // { src: "/photography/74200012.JPG", width: 1000, height: 650 },
  { src: "/photography/74200001.JPG", width: 1000, height: 650 },
  { src: "/photography/74210001.JPG", width: 1000, height: 650 },
  { src: "/photography/74210013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74210031.JPG", width: 1000, height: 650 },
  { src: "/photography/74210015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200009 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/74200014 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/70310036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310011.JPG", width: 1000, height: 650 },
  { src: "/photography/70310019 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310015 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/70310031.JPG", width: 1000, height: 650 },
  { src: "/photography/70310006.JPG", width: 1000, height: 650 },
  { src: "/photography/70310003.JPG", width: 1000, height: 650 },

  { src: "/photography/65340030 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330016.JPG", width: 1000, height: 650 },
  { src: "/photography/65330031 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330029 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65340022.JPG", width: 1000, height: 650 },
  { src: "/photography/65340008.JPG", width: 1000, height: 650 },
  { src: "/photography/65340013.JPG", width: 1000, height: 650 },
  { src: "/photography/65340015.JPG", width: 1000, height: 650 },
  { src: "/photography/65340007.JPG", width: 1000, height: 650 },
  { src: "/photography/65340005 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/65330034.JPG", width: 1000, height: 650 },
  { src: "/photography/65330033.JPG", width: 1000, height: 650 },
  { src: "/photography/65330032.JPG", width: 1000, height: 650 },
  { src: "/photography/65340024.JPG", width: 1000, height: 650 },



  { src: "/photography/20330011.JPG", width: 1000, height: 650 },
  { src: "/photography/20330033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/20330002.JPG", width: 1000, height: 650 },
  { src: "/photography/20330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/20330023.JPG", width: 1000, height: 650 },
  { src: "/photography/20330014 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/70050017 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050021 edit.JPG", width: 1000, height: 650 },
  { src: "/photography/70050028 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050022 copy edit.JPG", width: 650, height: 1000 },
  { src: "/photography/70050032 copy Edit.JPG", width: 650, height: 1000 },


  { src: "/photography/07280033 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07270014.JPG", width: 1000, height: 650 },
  { src: "/photography/07280011 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07270020.JPG", width: 1000, height: 650 },
  { src: "/photography/07280001 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/07280013.JPG", width: 1000, height: 650 },


  { src: "/photography/11930032_1 2.JPG", width: 1000, height: 650 },

  { src: "/photography/07280014 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000017370015.jpg", width: 1000, height: 650 },
  { src: "/photography/000017370020.jpg", width: 1000, height: 650 },
  { src: "/photography/000017370025.jpg", width: 1000, height: 650 },

  { src: "/photography/000017370030.jpg", width: 1000, height: 650 },

  { src: "/photography/39230015.JPG", width: 1000, height: 650 },
  { src: "/photography/39220013 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/39220026.JPG", width: 1000, height: 650 },
  { src: "/photography/39230014.JPG", width: 1000, height: 650 },
  { src: "/photography/39230007.JPG", width: 1000, height: 650 },
  { src: "/photography/39220035.JPG", width: 1000, height: 650 },
  
  { src: "/photography/39220032.JPG", width: 1000, height: 650 },
  { src: "/photography/39220024.JPG", width: 1000, height: 650 },
  { src: "/photography/39220023.JPG", width: 1000, height: 650 },
  { src: "/photography/39220011.JPG", width: 1000, height: 650 },
  { src: "/photography/39210026.JPG", width: 1000, height: 650 },
  { src: "/photography/39210014.JPG", width: 1000, height: 650 },
  

  { src: "/photography/33320036 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33320013.JPG", width: 1000, height: 650 },
  { src: "/photography/33320033 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33330033 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/33330020 copy.JPG", width: 650, height: 1000 },
  
  { src: "/photography/33330021 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/62880026.JPG", width: 1000, height: 650 },
  { src: "/photography/33330022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000079440021.jpg", width: 1000, height: 650 },
  { src: "/photography/33330026 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33320015.JPG", width: 1000, height: 650 },

  { src: "/photography/33330008 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/33330004 copy.JPG", width: 650, height: 1000 },



  { src: "/photography/000079440022.jpg", width: 1000, height: 650 },

  { src: "/photography/81840010.JPG", width: 1000, height: 650 },

  { src: "/photography/62880024.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440020.jpg", width: 1000, height: 650 },
  { src: "/photography/81840017.JPG", width: 1000, height: 650 },
  { src: "/photography/94550013 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/62880020.JPG", width: 1000, height: 650 },
  { src: "/photography/94550017.JPG", width: 1000, height: 650 },
  // { src: "/photography/94530005 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/11930022 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/000079440025.jpg", width: 1000, height: 650 },
  { src: "/photography/81840014.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440027.jpg", width: 1000, height: 650 },
  { src: "/photography/94540005.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440026.jpg", width: 1000, height: 650 },
  { src: "/photography/81840015.JPG", width: 1000, height: 650 },
  { src: "/photography/62870003.JPG", width: 1000, height: 650 },
  { src: "/photography/10270018.JPG", width: 1000, height: 650 },
  { src: "/photography/94530023.JPG", width: 1000, height: 650 },
  { src: "/photography/94530003 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/94560011.JPG", width: 1000, height: 650 },
  { src: "/photography/62870001.JPG", width: 1000, height: 650 },
  { src: "/photography/10270035.JPG", width: 1000, height: 650 },
  { src: "/photography/94560017.JPG", width: 1000, height: 650 },
  // { src: "/photography/62870022.JPG", width: 1000, height: 650 },
  { src: "/photography/62870009.JPG", width: 1000, height: 650 },
  { src: "/photography/10270012.JPG", width: 1000, height: 650 },
  { src: "/photography/000005530024.jpg", width: 1000, height: 650 },
  { src: "/photography/94540006 copy.JPG", width: 650, height: 1000 },
  // { src: "/photography/94530006 copy.JPG", width: 650, height: 1000 },

  { src: "/photography/94530028.JPG", width: 1000, height: 650 },
  { src: "/photography/94530007 copy.JPG", width: 650, height: 1000 },
  { src: "/photography/10270013.JPG", width: 1000, height: 650 },
  { src: "/photography/94560025.JPG", width: 1000, height: 650 },
  { src: "/photography/62870034.JPG", width: 1000, height: 650 },
  // { src: "/photography/62870018.JPG", width: 1000, height: 650 },
  { src: "/photography/000019160016.jpg", width: 1000, height: 650 },
  { src: "/photography/000019160001.jpg", width: 1000, height: 650 },
  { src: "/photography/94560036.JPG", width: 1000, height: 650 },
  { src: "/photography/81840018.JPG", width: 1000, height: 650 },
  { src: "/photography/01680025.JPG", width: 1000, height: 650 },
  // { src: "/photography/11930032.JPG", width: 1000, height: 650 },
  { src: "/photography/000019180024.jpg", width: 1000, height: 650 },
  { src: "/photography/000019180025.jpg", width: 1000, height: 650 },
  { src: "/photography/01680030.JPG", width: 1000, height: 650 },
  { src: "/photography/01680024.JPG", width: 1000, height: 650 },
  { src: "/photography/62880012.JPG", width: 1000, height: 650 },
  { src: "/photography/000079440016.jpg", width: 600, height: 800 },
  { src: "/photography/81840036.JPG", width: 1000, height: 650 },
  // { src: "/photography/11930020.JPG", width: 1000, height: 650 },
  { src: "/photography/000019150014.jpg", width: 1000, height: 650 },
  { src: "/photography/11930009.JPG", width: 1000, height: 650 },
  { src: "/photography/62880014.JPG", width: 1000, height: 650 },
  { src: "/photography/000019150002.jpg", width: 1000, height: 650 },
  { src: "/photography/000019150003.jpg", width: 1000, height: 650 },


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
              src={photo.src.replace('/photography/', '/photography/lowres/')}
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