// src/components/MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => (
  <Helmet>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    
    <meta property="og:title" content="Troy Schwab" />
    <meta property="og:description" content="Troy Schwab's professional website" />
    <meta property="og:image" content="https://troyschwab.com/photography/midres/09630021.JPG" />
    <meta property="og:url" content="https://troyschwab.com" />
  </Helmet>
);

export default MetaTags;
