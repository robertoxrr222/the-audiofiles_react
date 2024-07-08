import React from "react";
import Header from "../../molecules/Header";
import RowProducts from "../../molecules/RowProducts";
import GroupProduct from "../../organisms/GroupProducts"
import Footer from "../../atoms/Footer/Footer";

//  =================================
//  ROBERTO
//  =================================

function HomeTemplate({ arrayRowProducts, groupProduct_textLabel, arrayGroupProducts }) {

    const mapRowProducts = arrayRowProducts.map(rowProducts =>
        <RowProducts
            key={rowProducts.id} 
            textLabel={rowProducts.textLabel}
            arrayCardProduct={rowProducts.arrayCardProduct} 
        />
    )

    return(
        <>
            <Header />
            
            {mapRowProducts}
  
            <GroupProduct 
                textLabel={groupProduct_textLabel}
                arrayCardProduct={arrayGroupProducts}
            />

            <Footer />
      </>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default HomeTemplate