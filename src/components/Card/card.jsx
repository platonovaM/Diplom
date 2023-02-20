import React,{ useContext} from "react";
import Ctx from "../../Ctx";
import "./card.css";

export default({name,  floor, image,id})=>{
    
    const {setShop, user} = useContext(Ctx);

    const remove=()=>{
         fetch(`https://api.petiteweb.dev/sber/mall/${id}`,{
                       method: "DELETE",
            })
            .then(res=>res.json())
           .then(data=>{ 
            if(!data.error){
                 setShop(prev=>{
                   return prev.filter(g=>g.id!==data.id)
                })
            }
        })
    }

       
return<div className="card">
<img  src={image}  style={{height:"100px", width:"120px"}}/> 
    {name}
    <h5> Этаж {floor} </h5>
     {user&&<button onClick={remove} className="btn_delete">Удалить</button>}
    </div>
}