import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { AppUser } from "./app-user/AppUser";
import { Social } from "./social/Social";

export const Login = () => {
    const  { path } = useRouteMatch();
    return (
        <>
        <div className="container" id="form-button">
            <div className="row">
                <div className="col-11" id="header-btn">
                    <button className="log-in">Nazad</button>
                </div>
            </div>
        </div>
        <div className="container" id="form">
            <div className="row  d-flex justify-content-center">
                <div className="col-lg-3 col-md-4"  id="right-form"> 
                    <div className="right-form-data">
                        <Tabs defaultActiveKey="appUser" transition={false} id="noanim-tab-example">
                            <Tab eventKey="appUser" title="Log in">
                                <AppUser />
                            </Tab>
                            <Tab eventKey="profile" title="Social Log-in">
                                <Social />
                            </Tab>
                        </Tabs>
                    </div>    
                </div>
            </div>
        </div>
        </>
    );
}