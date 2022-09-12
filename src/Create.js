import React from "react";
import Loc from "./Loc";

function Create()
{
    const [notes, setNotes] = React.useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:5000/note").then(res => res.json())
       .then(jsonRes =>{
        setNotes(jsonRes);});
  })

  React.useEffect(()=>{
  
    console.log(notes);
  },[notes]);
    return(
        <div>
        {/* {notes.map((noteItem, index) => {
            return( */}
                <div className="loc">
                    <Loc />
                        <Loc />
                        <Loc />
                </div>
            
        {/* })} */}
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