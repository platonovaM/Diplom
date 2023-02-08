import React from "react";
import "./header.css";
import Logo from "./logo.png";
import {Link} from "react-router-dom";


export default () => {

  const btnSt={
    fontSize: "10px",
    width: "70px",
    color: "gray",
    textDecoration: "none",
}
    return <div className="head">
    <header>
        <div className="logo">
        <Link to ={"/"}><img className="cloud"  src={Logo}></img></Link>
        </div>
    <div className="head_text"> 
    <Link to ={"/shops"} style={btnSt}><h1>Магазины</h1></Link>
    <Link to ={"/restaurants"} style={btnSt}><h1>Рестораны</h1></Link>
    <Link to ={"/kontakts"} style={btnSt}><h1>Контакты</h1></Link>
      </div>
    </header>
    </div>
}