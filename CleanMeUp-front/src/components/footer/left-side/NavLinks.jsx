import React from "react";
import { Link } from "react-router-dom";

export const NavLinks = () => {
    return (
        <div className="col-3" id="left-side">
            <ul className="list-unstyled">
                <li>KORISNI LINKOVI</li>
                <li>
                    <Link to="/page/order">Naruči</Link>
                </li>
                <li>
                    <Link to="/page/contact">Kontakt</Link>
                </li>
                <li>
                    <Link to="/page/conditions">Uslovi Korišćenja</Link>
                </li>
            </ul>
        </div>
    );
}