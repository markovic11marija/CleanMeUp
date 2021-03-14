import React from "react";
import { Logo } from "./logo/Logo";
import { MenuItems } from "./menu-items/MenuItems";

export const Navbar = () => {
    return (
        <div className="container" id="header-menu">
            <div className="row justify-content-between">
                <Logo/>
                <MenuItems/>
            </div>
        </div>
    );
}