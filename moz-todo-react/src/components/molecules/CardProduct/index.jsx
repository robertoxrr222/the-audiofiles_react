import React from "react";
import { Link } from "react-router-dom";

//  =================================
//  ROBERTO
//  =================================

function CardProduct({ srcImag, textLabel, routeLink = "/", altImg = ""}) {
    return (
        <>
            <Link to={routeLink}>
                <div className={"column is-narrow div_product"}>
                    <div className={"div_imgContainer"}>
                        <img className={"img_product"} src={srcImag} alt={altImg}></img>
                    </div>
                
                    <label className={"label_productName has-text-black is-size-4"}>{textLabel}</label>
                </div>
            </Link>
        </>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default CardProduct