import React from "react";
function Item(props){
    function hclick(e){
        props.onClick(props.id,props.img,props.title,props.price);
    }
    return (
        <div className="ite">
            <img src={props.img} alt="alt" />
            <h1>{props.title}</h1>
            <button disabled>Proceed to Payment</button>
            <h2>{props.price}</h2>
            <button disabled onClick={hclick}>delete</button>
        </div>
    );
}
export default Item;