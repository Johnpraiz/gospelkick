import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image component
import styles from './Slider.module.css'; 

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/carosel1.JPG',
    '/carosel2.JPG',
    '/carosel3.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <Image src={image} alt={`Slide ${index}`} width={500} height={300} layout="responsive" /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;




