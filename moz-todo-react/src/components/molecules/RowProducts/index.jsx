import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct";
import seeMore from "../../../assets/Images/rightArrow.png"

//  =================================
//  ROBERTO
//  =================================

function RowProducts({ textLabel, arrayCardProduct }) {

    const mapCardProduct = arrayCardProduct.map(card =>
        <CardProduct
            key={card.id} 
            srcImag={card.srcImag}
            textLabel={card.textLabel}
            routeLink={card.routeLink} 
        />
    )

    return(
        <section className="section">
            <label className={"label_menuSectionTitles has-text-black is-size-4"}>{textLabel}</label>
            <div className={"columns block div_productRow"}>
                {mapCardProduct}
                <div className="column is-narrow div_product">
                <Link to={"/"}>
                    <div className="div_imgContainer">
                        <img className="img_product" src={seeMore} alt=""></img>
                    </div>
                </Link>
            </div>
            </div>
        </section>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default RowProducts