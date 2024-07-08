import React from 'react';
import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';
//import "../../../Styles/Molecules/ProductDetails.css"

//  =================================
//  ANDRE
//  =================================

const ProductDetails = ({ title, features, buttonText, onButtonClick }) => {
  return (
    <div className="details">
      <label id="label_productName" className="has-text-black is-size-1">{title}</label>
      <div className='block'>
        <ul className="details_list">
          {features.map((feature, index) => (
            <li key={index} className='li_productFunctions has-text-black is-size-5'>{feature}</li>
          ))}
        </ul>
      </div> 
      <div className='block'>
        <Link to={'https://www.amazon.com.mx/dp/B083Q6Q41G?psc=1&ref=ppx_yo2ov_dt_b_product_details'}>
          <Button label={buttonText} onClick={onButtonClick} />
        </Link>
      </div>
    </div>
  );
};

//  =================================
//  ANDRE
//  =================================

export default ProductDetails;