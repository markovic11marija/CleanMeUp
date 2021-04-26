import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="col-5 d-flex align-items-center" id="logo-wrapper">
            <div id="logo">
                <img className="logo-img" src={`${process.env.PUBLIC_URL}/assets/img/hanger-line.png`} alt="" />
            </div>
            <h1 className="text-uppercase"><Link to="/">clean<span>me</span>up</Link></h1>
        </div>
    );
}