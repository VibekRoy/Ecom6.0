import React from "react";
function Loc2(props){
    function hclick(e){
        props.onclick(props.id,props.img,props.title,props.price);
    }
    return (
        <div className="loc">
            <div className="locin">
            <img src={props.img} alt="alt" className="placepic" style={{width:"320px",textAlign:"center"}} />
            <div className="locin2">
            <h1>{props.title}</h1>
            <h3>{props.content}</h3>
            <div className="locin3">
            <h2>{props.price}<span>   Tour Plan for:{props.cont}</span></h2>
            <button className="cartb" onClick={hclick}>Add to Cart</button>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Loc2;