import React, { useState } from 'react';
import Thumbnail from '../../atoms/Thumbnail';
import "../../../Styles/Molecules/ImageGallery.css";

//  =================================
//  ANDRE
//  =================================

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery">
      <img className="gallery_main-image" src={mainImage} alt="Main view" />
      <div className="thumbnails">
        {images.map((image, index) => (
          <Thumbnail 
            key={index} 
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            onClick={() => setMainImage(image)} 
          />
        ))}
      </div>
    </div>
  );
};

//  =================================
//  ANDRE
//  =================================

export default ImageGallery;