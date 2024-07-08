import React from 'react';
import "../../../Styles/Atoms//Thumbnail.css";

//  =================================
//  ANDRE
//  =================================

const Thumbnail = ({ src, alt, onClick }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="thumbnail" 
      onClick={onClick} 
    />
  );
};

//  =================================
//  ANDRE
//  =================================

export default Thumbnail;