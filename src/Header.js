import React from "react";
import img from "./cartpic2.png";
function Header()
{
    return(
        <div className="header">
            <div className="logo">
                TravelGo
            </div>
            <nav className="navigationbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
            {/* <div className="Cartlogo">      */}
                <a className="cartl" href="/Cart"><img src={img} style={{width: "50px",height:"50px"}} alt="alt" /></a>
                <span> </span>
            {/* </div> */}
            </nav>
        </div>
    );
}
export default Header;

/*"https://image.shutterstock.com/image-vector/shopping-cart-trolley-icon-symbol-260nw-1265974879.jpg" */