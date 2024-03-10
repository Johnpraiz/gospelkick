
import React, { useState } from 'react';
import Image from 'next/image'; 
import styles from "./Slider.module.css"

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/carosel1.JPG',
    '/carosel2.JPG',
    '/carosel3.JPG'
  ]; 

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <button className={styles.next} onClick={nextSlide}>❯</button>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            className={index === currentImage ? 'slide active' : 'slide'}
            key={index}
          >
           

<Image
              src={image}
              alt={`Slide ${index}`}
              width={600} 
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
