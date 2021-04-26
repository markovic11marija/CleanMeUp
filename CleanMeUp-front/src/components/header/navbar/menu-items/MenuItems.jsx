import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { getUserStarted } from "../../../../actions/userActions";
import { getLoggedUser, isLoggedIn, logoutUser } from "../../../../helpers/authHelper";
import store from "../../../../store";
import { SuccessModal } from "../../../successModal/SuccessModal";

export const MenuItems = () => {
    const history = useHistory();
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);

    const logout = () => {
        store.dispatch(getUserStarted());
        logoutUser();
        setOpenSuccess(true);
        setTimeout(()=>{
            setOpenSuccess(false);
            history.push("/");
        }, 1500)
    }
    return (
        <>
        <div className="col-xl-4 col-lg-6  d-md-none d-none d-lg-block"  id="menu-list">
            <ul className="list-unstyled d-flex justify-content-between justify-content-center" id="nav">
                <li>
                    <NavLink to="/" activeClassName="activeRoute" exact={true} >Početna</NavLink>
                </li>
                <li>
                    <NavLink to="/page/contact" activeClassName="activeRoute" exact={true} >Kontakt</NavLink>
                </li>
                {isLoggedIn()? (
                    <>
                        <li className="account-menu-wrapper position-relative">
                            <div className="account w-50 cursor-pointer" onClick={()=> {
                                setOpenAccount(!openAccount);
                            }}>
                                <div className="account-img d-flex">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/man-head.png`} className="rounded-circle"/>
                                    <ul className="list-unstyled d-flex justify-content-center pt-1">
                                        <li className="mr-2"> <p>{getLoggedUser().firstName}</p> </li>
                                        <li><i className="fa fa-angle-down"></i></li>
                                    </ul>
                                </div>
                            </div>
                            {openAccount && (
                                <div className="position-absolute account-menu-options">
                                    <ul className="list-unstyled mt-0">
                                        <li>
                                            <Link to="/account/orders" onClick={()=> {
                                                setOpenAccount(false);
                                            }}>Porudžbine</Link>
                                        </li>
                                        <li>
                                            <Link to="/account/my" onClick={()=> {
                                                setOpenAccount(false);
                                            }}>Moj Nalog</Link>
                                        </li>
                                        <li>
                                            <span className="cursor-pointer" onClick={logout}>Log Out</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </>
                ) : (<>
                    <li>
                        <NavLink id="order-btn" to="/page/order" activeClassName="activeRoute" exact={true}>Naruči</NavLink>
                    </li>
                    <li>
                        <NavLink className="log-in" to="/page/login/app-user" activeClassName="activeRoute" exact={true}>Log in</NavLink>
                    </li>
                </>)}
                
            </ul>
        </div>
        <div className="col-5 d-lg-none d-md-flex d-flex justify-content-end">
            <a href="#" className="hamburger">
                <i className="fa fa-bars"></i>
            </a>
        </div>
        <SuccessModal open={openSuccess} handleClose={()=>{}} text="Uspešno ste se izlogovali"/>
    </>
    );
}