import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Navbar } from "../../../components/header/navbar/Navbar";
import { Account } from "../../../features/account/Account";

export const AccountHeader = () => {
    const  { path } = useRouteMatch();

    return (
        <div className="container-fluid account-header" id="header">
            <Navbar/>
            <div id="content-wrapper">
                <Route path={`${path}/my`}  component={Account} />
            </div>
        </div>
    );
}