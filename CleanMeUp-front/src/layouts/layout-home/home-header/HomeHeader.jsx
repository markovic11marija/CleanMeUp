import React from "react";
import { Navbar } from "../../../components/header/navbar/Navbar";
import { PlaceOrder } from "../../../components/header/place-order/PlaceOrder.jsx";

export const HomeHeader = () => {
    return (
        <div className="container-fluid" id="header">
            <Navbar/>
            <PlaceOrder/>
        </div>
    );
}