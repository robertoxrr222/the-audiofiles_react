import React from "react";
import { Link } from "react-router-dom"
import HeaderLink from "../HeaderLink";

function Header() {
    return(
            <div id="div_header" className="has-background-dark">
                <Link to="/">
                    <h1 id="h1_pageName" className="is-size-1 has-text-white has-text-centered">THE AUDIO-FILES</h1>
                </Link>
                
                <div className="columns is-centered">
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"Headphones"}
                    />
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"Earphones"}
                    />
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"IEMs"}
                    />
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"Profesionales"}
                    />
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"Login"}
                    />
                    <HeaderLink 
                        classesDiv={"column column_navItems is-narrow has-text-white has-text-weight-bold is-underlined"}
                        classesLink={"has-text-white"}
                        routeLink={"/"}
                        textDiv={"Registro"}
                    />
                </div>
            </div>
    )
}

//  =================================
//  ROBERTO
//  =================================

export default Header