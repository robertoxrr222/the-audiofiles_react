import React from "react";
import { Link } from "react-router-dom";

//  =================================
//  ROBERTO
//  =================================

function HeaderLink({ classesDiv, classesLink, routeLink, textDiv }) {
    return(
        <Link to={routeLink} className={classesLink}>
            <div className={classesDiv}>{textDiv}</div>
        </Link>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default HeaderLink