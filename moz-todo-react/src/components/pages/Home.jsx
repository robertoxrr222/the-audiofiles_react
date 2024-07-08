import "../../style.css"
import { arrayRowLoMasVisitado, arrayHeadphones, arrayEarphones, arrayIEMs, arrayProfesionales, arrayGroupProducts } from "../../assets/data.jsx";
import HomeTemplate from "../templates/HomeTemplate/index.jsx";
import React from "react";

//  =================================
//  ROBERTO
//  =================================

function Home() {
    const arrayRowProducts = [
        {
          id: 1,
          textLabel: "LO MAS VISITADO",
          arrayCardProduct: arrayRowLoMasVisitado 
        },
        {
          id: 2,
          textLabel: "HEADPHONES",
          arrayCardProduct: arrayHeadphones 
        },
        {
          id: 3,
          textLabel: "EARPHONES",
          arrayCardProduct: arrayEarphones 
        },
        {
          id: 4,
          textLabel: "IEMs",
          arrayCardProduct: arrayIEMs 
        },
        {
          id: 5,
          textLabel: "PROFESIONALES",
          arrayCardProduct: arrayProfesionales 
        },
      ]
    
      return (
        <HomeTemplate 
            arrayRowProducts={arrayRowProducts}
            groupProduct_textLabel={"AGREGADOS RECIENTEMENTE"}
            arrayGroupProducts={arrayGroupProducts}
        />
      );
}

//  =================================
//  ROBERTO
//  =================================

export default Home