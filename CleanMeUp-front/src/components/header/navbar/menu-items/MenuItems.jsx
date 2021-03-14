import React from "react"
import { NavLink, useLocation } from "react-router-dom"

export const MenuItems = () => {
    const { pathname } = useLocation();
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
                <li>
                    <NavLink id="order-btn" to="/page/order" activeClassName="activeRoute" exact={true}>Naruči</NavLink>
                </li>
                <li>
                    <NavLink className="log-in" to="/page/login/app-user" activeClassName="activeRoute" exact={true}>Log in</NavLink>
                </li>
            </ul>
        </div>
        <div className="col-5 d-lg-none d-md-flex d-flex justify-content-end">
            <a href="#" className="hamburger">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    </>
    );
}