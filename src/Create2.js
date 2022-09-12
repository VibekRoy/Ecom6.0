import React from "react";
import Loc2 from "./Loc2";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
function Create()
{
    const [notes, setNotes] = React.useState([]);
    // const [us,setUs]=React.useState("");
    // const [user,setUser]=React.useState(false);
    // const navigate = useNavigate();
  React.useEffect(()=>{
    fetch("http://localhost:3001/poost").then(res => res.json())
       .then(jsonRes =>{
        setNotes(jsonRes);});
  });

  function onclick(id,img,title,price){
    const newNote={
      id: id,
      img: img,
      title: title,
      price: price
    }
    axios.post("http://localhost:3001/cartpost", newNote);
  }
 
  React.useEffect(()=>{
  
    console.log(notes);
  },[notes]);
    return(
        <div>
        {notes.map((noteItem, index) => {
            return(
                <div className="loc">
                  <Loc2 
                  title={noteItem.title}
                  content = {noteItem.content}
                  img = {noteItem.url}
                  price = {noteItem.price}
                  cont = {noteItem.cont}
                  id = {noteItem.id}
                  onclick={onclick}
                   key ={index}
                   />
                </div>
            
         );})} 
        </div>
    );
}
export default Create;


// title={noteItem.title}
                        // content = {noteItem.content}
                        // img = {noteItem.url}
                        // price = {noteItem.price}
                        // cont = {noteItem.cont}
                        // id = {index}
                        // key ={index}