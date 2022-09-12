import React from "react";
function Footer()
{
    return(
        <div className="footer">
            <div className="title">
            <h1 className="">TravelGo</h1>
            </div>
            <div className="head2">
            <nav className="navigationbar-head2">
                <ul>
                <li className="frow1">Know us</li>
                <li className="frow1">Legal</li>
                <li className="frow1">Quick links</li>
                <li className="frow1">Contact and Help</li>
            </ul>
            </nav>
            </div>
            <nav className="navigationbar-head2">
            <div className="head2">
                <ul>
                <li className="frow2"><a href="/Home">About us</a></li>
                <li className="frow2"><a href="/Home">Privacy Policy</a></li>
                <li className="frow2"><a href="/Home">Offers</a></li>
                <li className="frow2"><a href="/Home">Contact us</a></li>
                </ul>
            </div>
            </nav>
            <nav className="navigationbar-head2">
            <div className="head2">
            <ul>
                <li className="frow3"><a href='/Admin'>Admin</a></li>
                <li className="frow3"><a href="/Home">Terms & condition</a></li>
                <li className="frow3"><a href="/Home">Packages </a></li>
                <li className="frow3"><a href="/Home">Report a Issue</a></li>
                </ul>
            </div>
            </nav>
            <div className="fbottom">
            <h3>Copyright 2022 by TechnoCrats</h3>
            </div>
        </div>
    );
}
export default Footer;