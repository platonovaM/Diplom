import React,{useState} from "react";
import {useNavigate} from "react-router"


export default()=>{

const [type, setType]=useState("");
const [name, setName] =useState("");
const [floor, setFloor]=useState("");
const [time, setTime]=useState("");
const [description, setDiscription]=useState("");
const [image, setImage] = useState("");
const [id, setId] = useState("");
const [mapId, setMapId] = useState("");
const [link, setLink]=useState("");
const navigate =useNavigate();

const clear=(e)=>{
    setName("");
    setFloor("");
    setTime("");
    setDiscription("");
    setImage("");
    setType("");
    setMapId("");
    setLink("");
    
}

const handler =async (e)=>{
    e.preventDefault();
    let body = {
        type: type,
        name: name || "Название отсутствует",
        floor: floor || 1,
        time: time || "c 10:00",
        description: description || "Описание скоро будет",
        image: image ,
        id: id,
        mapId: mapId,
        link: link
    }
         const res = await fetch(`https://api.petiteweb.dev/sber/mall`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
 
    const data = await res.json();
   
    if (!data.error) {
        clear();
        navigate("/");
    }
}
return<form onSubmit={handler}>
    <label>Выберите</label>
    <select value ={type} onChange={e=>setType(e.target.value)}  >
    <option value ="shop">Магазин</option>
    <option value ="rest">Ресторан</option>
    </select>
    <input 
        type="text"
        placeholder="Введите название"
        value={name}
        onChange={e=>setName(e.target.value)}
    />

<input 
        type="number"
        placeholder="Укажите ID"
        value={id}
        onChange={e=>setId(e.target.value)}
    />

    <input
        type="number"
        placeholder="Укажите этаж"
        value={floor}
        onChange={e=>setFloor(e.target.value)}
        min={1}
        max={2}
    />

    <input
        type="text"
        placeholder="Часы работы"
        value={time}
        onChange={e=>setTime(e.target.value)}
    />
    
    <textarea
        placeholder="Информация"
        value={description}
        onChange={e=>setDiscription(e.target.value)}
    />
    <input 
    type="url"
    placeholder="Ссылка на картинку"
        value={image}
        onChange={e=>setImage(e.target.value)}
    />

<input
        type="text"
        placeholder="id map"
        value={mapId}
        onChange={e=>setMapId(e.target.value)}
    />

<input
        type="text"
        placeholder="link"
        value={link}
        onChange={e=>setLink(e.target.value)}
    />

    <button  type="submit">Добавить</button>
</form>
}
