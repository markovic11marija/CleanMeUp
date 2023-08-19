import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Navbar } from "../../../components/header/navbar/Navbar";
import Order from "../../../components/order/Order";
import { Contact } from "../../../features/contact/Contact";
import { Login } from "../../../features/login/Login";
import { Register } from "../../../features/register/Register";
import { Payment } from "../../../features/payment/Payment";
import { Shop } from "../../../features/shop/Shop.jsx";
import PriceList from "../../../features/priceList/PriceList";

export const MainHeader = ({children}) => {
    const  { path } = useRouteMatch();
    return (
        <div className="container-fluid" id="header">
            <Navbar/>
            <div id="content-wrapper">
                {children}
                {path.includes('page') && (
                <>
                    <Route path={`${path}/contact`}  component={Contact} />
                    <Route path={`${path}/prices`}  component={PriceList} />
                    <Route path={`${path}/register`} component={Register} />
                    <Route path={`${path}/payment`} component={Payment} />
                    <Route path={`${path}/shop`} component={Shop} />
                    <Route path={`${path}/login`} component={Login} />
                    <Route path={`${path}/order`} component={Order}/>
                </>
                )}
            </div>
        </div>
    );
}