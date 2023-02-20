import React,{useState, useEffect, useContext} from "react";
import {Routes, Route }from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import Home  from "./pages/Home";
import "./style.css";
import Shops from "./pages/Shops";
import Restaurants from "./pages/Restaurants";
import Kontakts from "./pages/Kontakts";
import Add from "./pages/Add";
import Ctx from "./Ctx";
import Venue from "./pages/Venue";
import {Api} from "./Api.js";



const App=({type})=>{

const [user, setUser] = useState(localStorage.getItem("admin"));
const [api, setApi] = useState(new Api());

const [shop, setShop]=useState([]);
const [rest, setRest]=useState([]);
const [visibleshop, setVisibleshop]=useState(shop);

useEffect(() => {
    api.getShops()
        .then(res => res.json())
        .then(data => {
                let arrRest=data.filter(e=>e.type==="rest")
                setRest(arrRest)
                let arrShop=data.filter(e=>e.type!=="rest")
                setShop(arrShop)
            console.log(data)
        })
}, [])


return<>
<Ctx.Provider value={{
            setShop: setShop,
           shop:shop,
           visibleshop:visibleshop,
           setVisibleshop,setVisibleshop,
           api: api,
           rest: rest,
           setRest: setRest
        }}>

<div className="container">
    <Header user={user} setUser={setUser}/> 
    <main>
    <div className="content">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shops" element={<Shops/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/kontakts" element={<Kontakts/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/venue/:id" element={<Venue/>}/>
        </Routes>
        </div>
    </main>
     <Footer/> 
</div>
</Ctx.Provider>
</>
}
export default App;