import React,{useContext} from "react";
import "../style.css";
import Card from "../components/Card/card";
import Ctx from "../Ctx";
import {Link} from "react-router-dom";
import {ChevronCompactLeft} from "react-bootstrap-icons"


export default ({type}) => {
    const {shop}=useContext(Ctx);
    const btnSt={
        textDecoration: "none",
        color:"black"
    }
    
    return <>
    <Link to="/" style={btnSt}><button className="back"><ChevronCompactLeft/><b>На главную</b></button></Link>
        <h1> Все магазины</h1>
        <div className="cards">
            {shop.map((el)=> <Link to={`/venue/${el.id}`} style={btnSt}>
             <Card  {...el} />
             </Link>
            )}
        </div>
    </>
}
