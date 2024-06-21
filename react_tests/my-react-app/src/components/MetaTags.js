// src/components/MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => (
  <Helmet>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
  </Helmet>
);

export default MetaTags;
