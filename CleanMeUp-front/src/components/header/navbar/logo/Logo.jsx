import React from "react";

export const Logo = () => {
    return (
        <div className="col-5 d-flex align-items-center" >
            <div id="logo">
                <img className="logo-img" src={`${process.env.PUBLIC_URL}/assets/img/hanger-line.png`} alt="" />
            </div>
            <h1 className="text-uppercase">clean<span>me</span>up</h1>
        </div>
    );
}