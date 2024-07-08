import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../molecules/CardProduct";

//  =================================
//  ROBERTO
//  =================================

function GroupProduct({ textLabel, arrayCardProduct }) {

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
            <label className={"column label_menuSectionTitles has-text-black is-size-4 has-text-centered"}>{textLabel}</label>
            <div className={"columns is-multiline is-centered block div_productRow"}>
                {mapCardProduct}
            </div>
            <div>
                <Link to={"/"}>
                    <button type="button" className="button is-dark is-fullwidth is-large">VER MAS</button>
                </Link>
            </div>
        </section>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default GroupProduct