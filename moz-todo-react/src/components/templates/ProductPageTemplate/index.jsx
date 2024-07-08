import React from 'react';
import ProductView from '../../organisms/ProductView';
import Header from '../../molecules/Header';
import Footer from '../../atoms/Footer/Footer';
import "../../../Styles/Templates/ProductPageTemplate.css";

//  =================================
//  ANDRE
//  =================================

const ProductPageTemplate = ({ product }) => {
  return (
    <>
      <Header />

      <div className="section product-page-template">
        <ProductView product={product} />
      </div>

      <Footer />
    </>
  );
};

//  =================================
//  ANDRE
//  =================================

export default ProductPageTemplate;