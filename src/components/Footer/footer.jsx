import React from "react";
import "./footer.css";
import {GeoAlt, Stopwatch, Telephone} from "react-bootstrap-icons"


export default () => {
    const year = new Date().getFullYear();
    return <div className="foot">
    <footer>
        <div>
        <h3>ТЦ "Заоблачный"</h3>
        <span className="footer__copy">©{year}</span>&nbsp;
        </div>
        <div className="footer_text">
        <GeoAlt/> <h4> Санкт-Петербург, улица Савушкина, 116</h4>
        <Stopwatch/> <h4> Магазины с 10:00 до 23:00</h4>
        <Telephone/> <h4>+7 812 812 12 12</h4>
         </div>
         
    </footer>
</div>
}