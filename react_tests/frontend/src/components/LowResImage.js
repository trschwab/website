// src/components/LowResImage.js
import React from 'react';

const LowResImage = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
};

export default LowResImage;
