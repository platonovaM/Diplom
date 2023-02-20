import React from "react";
import "./kontakt.css";

export default()=>{
        return<>
 <h1>Контакты</h1>
        <div className="kontakns">
            <div className="addres">
                <h2>Адрес</h2>
                <h4>Санкт-Петербург, улица Савушкина, 116</h4>
            </div>
            <div className="time">
                 <h2>График работы</h2>
                <h4>Ежедневно</h4>
                <h4> 10:00-23:00</h4>
            </div>
            <div className="fon_number">
                <h2>Телефон</h2>
                <div className="number_info">
                    <div className="name_fon">
                        <h4>Администрация</h4>
                        <h4>Cлужба информации</h4>
                        <h4>Отдел аренды</h4>
                        <h4>Размещение рекламы</h4>
                        <h4>Программа лояльности</h4>
                    </div>
                <div className="numberfon">
                    <h4>+7 (812) 812 12 12</h4>
                    <h4>+7 (812) 812 12 13</h4>
                    <h4>+7 (812) 812 12 15</h4>
                    <h4>+7 (812) 812 12 16</h4>
                    <h4>+7 (812) 812 12 17</h4>
                </div>
                </div>
            </div>
        </div>


    </>
}