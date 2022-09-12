import React from "react";
import Header from "./Header";
import Item from "./Item";
//import Axios from "./api/axios";
function Cart()
{   
    
    const [notes,setNotes]=React.useState();
    React.useEffect(()=>{
        fetch("/cart").then(res => res.json())
           .then(jsonRes =>{
            setNotes(jsonRes);});
      });
      function onclick(id,img,title,price)
      {
        
        //post
       
        //window.location.reload();
        // .then((res) => console.log(res.data))
        // .catch((err) => console.log(err))
      }
    return(
        <div>
            <Header />
            <h1> Your Cart </h1>
            {notes.map((noteItem, index) => {
            return(
                <div>
                    <Item
                    img={noteItem.img}
                    title={noteItem.title}
                    price={noteItem.price}
                    id={noteItem.id}
                    onclick={onclick} 
                    />
                </div>
            );})}
        </div>
    );
}

export default Cart;