// src/components/BlurUpImage.js
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BlurUpImageMobile = ({ src, alt, width, height, delay = 3000 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHighRes, setShowHighRes] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  useEffect(() => {
    const img = new Image();
    img.src = src.replace('/photography/', '/photography/lowres/');
    img.onload = handleImageLoad;
  }, [src]);

  const imageStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: `${(height / width) * 100}%`, // Maintain aspect ratio
  };

  const lowResStyle = {
    filter: 'blur(.5px)',
    transition: 'opacity 2s ease-out',
    opacity: showHighRes ? 0 : 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
  };

  const highResStyle = {
    transition: 'opacity 0.3s ease-out',
    opacity: showHighRes ? 1 : 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const lowResSrc = src.replace('/photography/', '/photography/lowres/');

  return (
    <div ref={ref} style={imageStyle}>
      {inView && (
        <>
          <img
            src={lowResSrc}
            alt={alt}
            style={lowResStyle}
            onLoad={handleImageLoad}
          />
        </>
      )}
    </div>
  );
};

export default BlurUpImageMobile;
