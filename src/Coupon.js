import React from "react";
import img7 from './coupon1.jpeg';
import img8 from './coupon2.jpeg';
import img9 from './coupon3.jpeg';
function Coupon()
{
    return(
        <div className="CouponSection">
            <div className="coupon">
                <img src={img7}></img>
                <img src={img8}></img>
                <img src={img9}></img>
            </div>
        </div>
    );
}
export default Coupon;