import React,{useState} from "react";
import "./header.css";
import Logo from "./logo.png";
import {Link} from "react-router-dom";


export default ({user, setUser}) => {

  const logIn = (e) => {
    e.preventDefault();
    let password = prompt("Введите пароль");
    if (password) {
        localStorage.setItem("admin", password);
        setUser(password);
    }
}

const logOut = (e) => {
  e.preventDefault();
  localStorage.removeItem("admin");
  setUser("");
  <Link to ={"/"} ></Link>
}

  const btnSt={
    fontSize: "10px",
    width: "70px",
    color: "gray",
    textDecoration: "none",
}

const btnPlan={
  fontSize: "10px",
  width: "140px",
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
    {/* {!user && <a href="" onClick={logIn} style={btnSt}>Войти</a>}
    {user && <a href=""   onClick={logOut} style ={btnSt}>Выйти</a>}
   {user && <Link to ={"/add"} style={btnSt}><h1>Добавить</h1></Link>} */}
      </div>
    </header>
    </div>
}