import React from "react";
import Header from "./Header";
import Item2 from "./Item2";
import Axios from "./api/axios";
function Cart()
{   
    
    const [notes,setNotes]=React.useState();
    React.useEffect(()=>{
        fetch("/cart").then(res => res.json())
           .then(jsonRes =>{
            setNotes(jsonRes);});
      });
      function onclick(id)
      {
        console.log("|  "+id);
        const newNote={
          id: id
        }
        //post
        Axios.post("/del", newNote);
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
        //window.location.reload();
        // .then((res) => console.log(res.data))
        // .catch((err) => console.log(err))
      }
    return(
        <div>
            <Header />
            <h1> Your Cart </h1>
            
                <div>
                    <Item2 />
                    <Item2 />
                    <Item2 />
                </div>
          
        </div>
    );
}

export default Cart;