import React from "react";
import img1 from './Slide1.jpeg';
import img2 from './Slide2.jpeg';
import img3 from './Slide3.jpeg';
import img4 from './Slide4.jpeg';
function Slide()
{
    return(
        <div className="slidepart">
            <div className="logoslider">
                <div className="slides">
                    <input type={"radio"} name="radio-btn" id="radio1"></input>
                    <input type={"radio"} name="radio-btn" id="radio2"></input>
                    <input type={"radio"} name="radio-btn" id="radio3"></input>
                    <input type={"radio"} name="radio-btn" id="radio4"></input>

                    <div className="slide first">
                        <img src={img1} alt="alt"></img>
                    </div>
                    <div className="slide">
                        <img src={img2} alt="alt"></img>
                    </div>
                    <div className="slide">
                        <img src={img3} alt="alt"></img>
                    </div>
                    <div className="slide">
                        <img src={img4} alt="alt"></img>
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    <label for="radio4" className="manual-btn"></label>
                </div>
            </div>
        </div>
    );
    // var counter = 1;
    // setInterval(function({
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if(counter > 4)
    //     {
    //         counter = 1;
    //     }
    // },5000);
}
export default Slide;
