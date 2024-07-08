import React from 'react';
import ImageGallery from '../../molecules/ImageGallery';
import ProductDetails from '../../molecules/ProductDetails';
import "../../../Styles/Organisms/ProductView.css"

//  =================================
//  ANDRE
//  =================================

function ProductView ({ product })  {
  return (
    <section className="product-view">
      <div className="details-section">
        <ImageGallery images={product.images} />
        <ProductDetails 
          title={product.title} 
          features={product.features} 
          buttonText="Ir a la mejor oferta" 
          onButtonClick={() => (console.log("click"))}
        />
      </div>
      
      {product.descriptions.map((desc, index) => (
        <div className={`product-description ${index % 2 === 0 ? 'left-text' : 'right-text'}`} key={index}>
          <div className="text column is-vcentered">
            <p className='title has-text-black'>{desc.title}</p>
            <p className='parrafo is-size-5'>{desc.text}</p>
          </div>
          <img src={desc.image} alt={desc.title} />
        </div>
      ))}
    </section>
  );
};

//  =================================
//  ANDRE
//  =================================

export default ProductView;