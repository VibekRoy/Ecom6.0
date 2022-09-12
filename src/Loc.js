import React from "react";
function Loc(props){
    function hclick(e){

    }
    return (
        <div className="loc">
            <div className="locin">
            <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?w=307&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="alt" className="placepic" style={{width:"320px",textAlign:"center"}} />
                <div className="locin2">
                <h1>Shimla</h1>
                <h3>Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners. Situated at the height of 2200m, Shimla was the summer capital of British India.</h3>
                <div className="locin3">
                <h2>Rs. 12,000-20,000 <span>(12 -15 days)</span></h2>
                <button className="cartb" onClick={hclick}>Add to Cart</button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Loc;