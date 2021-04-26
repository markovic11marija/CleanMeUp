import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { AppUser } from "./app-user/AppUser";
import { Social } from "./social/Social";
import {useHistory } from "react-router-dom";

export const Login = ({nextStep, previousStep}) => {
    const history = useHistory();
    return (
        <>
        <div className="container" id="form-button">
            <div className="row">
                <div className="col-11" id="header-btn">
                    <button className="log-in" onClick={() => {
                        if(previousStep){ 
                            previousStep();
                        } else {
                            history.push("/");
                        }
                    }}>Nazad</button>
                </div>
            </div>
        </div>
        <div className="container" id="form">
            <div className="row  d-flex justify-content-center">
                <div className="col-lg-3 col-md-4"  id="right-form"> 
                    <div className="right-form-data">
                        <Tabs defaultActiveKey="appUser" transition={false} id="noanim-tab-example">
                            <Tab eventKey="appUser" title="Log in">
                                <AppUser nextStep={nextStep}/>
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