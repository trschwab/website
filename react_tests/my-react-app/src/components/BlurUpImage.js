// src/components/BlurUpImage.js
import React, { useState, useEffect } from 'react';

const BlurUpImage = ({ src, alt, width, height, delay = 2000 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHighRes, setShowHighRes] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowHighRes(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, delay]);

  const imageStyle = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative',
    overflow: 'hidden',
  };

  const lowResStyle = {
    filter: 'blur(20px)',
    transition: 'opacity 0.3s ease-out',
    opacity: showHighRes ? 0 : 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const highResStyle = {
    transition: 'opacity 0.3s ease-out',
    opacity: showHighRes ? 1 : 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  // Create low-res image path dynamically
  const lowResSrc = src.replace('/photography/', '/photography/lowres/');

  return (
    <div style={imageStyle}>
      <img
        src={lowResSrc}
        alt={alt}
        style={lowResStyle}
      />
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={highResStyle}
      />
    </div>
  );
};

export default BlurUpImage;
