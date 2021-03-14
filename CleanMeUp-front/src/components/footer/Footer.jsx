import React from "react";
import { NavLinks } from "./left-side/NavLinks";
import { Social } from "./right-side/Social";

export const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <NavLinks/>
                    <Social/>
                </div>
            </div>   
        </div>
    );
}