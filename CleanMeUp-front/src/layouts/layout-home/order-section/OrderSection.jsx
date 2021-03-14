import React from "react";
import { useHistory } from "react-router-dom";

export const OrderSection = () => {
    const history = useHistory();
    const goToOrder = () => {
        history.push('/page/order');
    }
    return (
        <div className="container-fluid purple-background" id="order">
            <div id="order-wrapper" className="col-12 text-center">
                <div id="order-text">
                <h3 className="font-weight-bold">Naručite pranje Vaše odeće već sad</h3>
                <button className="btn btn-secound" onClick={goToOrder}>Naruči</button>
                </div>
            </div>
        </div>
    );
}