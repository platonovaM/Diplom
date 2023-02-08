import React from "react";
import "./adwert.css";
import Left from "./left.jpg";
import Center from "./center.jpg";
import Right from "./right.jpg"

export default () =>{
    return <div className="adwert_container">
        <div className="adwert_left">
        <img className="left_img" src={Left}></img>
            <div className="adwert_text">
                <h3>Время подарков в MIUZ<br/>Diamonds продолжается!</h3>
                <p>Только до 20 марта скидки до 60% на украшения с бриллиантами</p>
                <h4>1 этаж</h4>
            </div>
        </div>
        <div className="adwert_сenter">
        <img className="left_img" src={Center}></img>
            <div className="adwert_text">
                <h3>Финальная распродажа в<br/>СПОРТМАСТЕР!</h3>
                <p>Скидки до 50%</p>
                <h4>1 этаж</h4>
            </div>
        </div>
        <div className="adwert_right">
        <img className="left_img" src={Right}></img>
            <div className="adwert_text">
                <h3>Распродажа зимней коллекции в<br/>Respect!</h3>
                <p>Скидки до 40% на ботинки!</p>
                <h4>2 этаж</h4>
            </div>
        </div>
    </div>

}