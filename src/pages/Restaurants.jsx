import React,{useContext}  from "react";
import "../style.css";
import {ChevronCompactLeft} from "react-bootstrap-icons"
import{ Link} from "react-router-dom";
import Ctx from "../Ctx";
import Card from "../components/Card/card";

export default () => {
    const {rest}=useContext(Ctx);
    const btnSt={
        textDecoration: "none",
    }
    return <>
       <Link to="/" style={btnSt}><button className="back"><ChevronCompactLeft/><b>На главную</b></button></Link>
        <h1> Все рестораны</h1>
        <div className="cards">
            {rest.map((el)=> <Link to={`/venue/${el.id}`} style={btnSt}>
             <Card  {...el} />
             </Link>
            )}
        </div>
    </>
}