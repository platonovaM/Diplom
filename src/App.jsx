import React from "react";
import {Routes, Route }from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import Home  from "./pages/Home";
import "./style.css";
import Shops from "./pages/Shops";
import Restaurants from "./pages/Restaurants";
import Kontakts from "./pages/Kontakts";

const App=()=>{
return<>
<div className="container">
    <Header/> 
    <main>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shops" element={<Shops/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/kontakts" element={<Kontakts/>}/>
        </Routes>
    </main>
     <Footer/> 
</div>

</>
}
export default App;