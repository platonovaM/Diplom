import React,{useContext,useState, useEffect} from "react";
import{useParams, Link, useNavigate} from "react-router-dom";
import "../style.css";
import {ChevronCompactLeft} from "react-bootstrap-icons"




export default ({name, floor, time, description, image}) => {
    const [venue, setVenue] =useState([]);
    const{id}=useParams();


    useEffect(() => {
        fetch(`https://api.petiteweb.dev/sber/mall/${id}`)
            .then(res=>res.json())
           .then(data=>{ 
            if(!data.error){
                console.log(data)
                setVenue(data)
            }
        })
        
    }, []);

    const btnSt={
        textDecoration: "none",
    }

   return<>
   <Link to="/shops" style={btnSt}><button className="back"><ChevronCompactLeft/><b>К каталогу</b></button></Link>
   <div className="name">
    <h1>{venue.name}</h1>
    </div>
    <div className="venue_pr">
    <img className="img_ven" src={venue.image}  style={{height:"300px"}}/>
    <div className="floor">
        <h3>Этаж {venue.floor}</h3>
        <h3>Часы работы: {venue.time}</h3>
    </div>
    </div>
    <div className="description">
        <h3>{venue.description}</h3>
    </div>
   </>
}
