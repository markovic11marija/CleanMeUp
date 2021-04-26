import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Navbar } from "../../../components/header/navbar/Navbar";
import { Account } from "../../../features/account/Account";
import { AccountOrders } from "../../../features/accountOrders/AccountOrders";

export const AccountHeader = () => {
    const  { path } = useRouteMatch();

    return (
        <div className="container-fluid account-header" id="header">
            <Navbar/>
            <div id="content-wrapper">
                {path.includes('account') && (<>
                    <Route path={`${path}/my`}  component={Account} />
                    <Route path={`${path}/orders`}  component={AccountOrders} /> 
                </>)}
            </div>
        </div>
    );
}