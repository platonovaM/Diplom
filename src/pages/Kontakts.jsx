import React from "react";
import "../style.css";
import Kontakt from "../components/Kontakt/kontakt";
import {ChevronCompactLeft} from "react-bootstrap-icons"
import{ Link} from "react-router-dom";

export default () => {
    const btnSt={
        textDecoration: "none",
    }

    return <>
     <Link to="/" style={btnSt}><button className="back"><ChevronCompactLeft/><b>На главную</b></button></Link>
        <h1>Как добраться</h1>
        <div className="maps_container">
        <div className="maps">
        </div>
        </div>
        <Kontakt/>
    </>
}