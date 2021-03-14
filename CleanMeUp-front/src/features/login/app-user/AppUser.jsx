import React from "react";
import { Link } from "react-router-dom";

export const AppUser = () => {
    return (
        <form action="" id="form-style">
            <table>
                <tbody>
                    <tr className="spacing">
                        <td>
                            <label htmlFor="emailadresa">Email Adresa</label>
                            <input type="email" className="form-control tabs" id="emailadresa" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="vasasifra">Vaša Šifra</label>
                            <input type="password" className="form-control tabs" id="vasasifra" />
                        </td>
                    </tr>
                    <tr>
                        <td className="check-box-log-in"> 
                            <ul className="list-unstyled check-style">
                                <li>
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <input className="form-check-input checkbox-style" type="checkbox" value="" id="zapamti" />
                                        <label className="form-check-label" htmlFor="zapamti">
                                            Zapamti me </label>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="log-in-btn">
                            <Link to="/page/order" className="btn tabs">Naruči</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="clean-p text-center">
                            <p>Nemate nalog? Napravite ga <Link to="/page/register" className="hover">ovde</Link></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}