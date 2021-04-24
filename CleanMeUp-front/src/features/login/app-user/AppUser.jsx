import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUser } from "../../../api/userApi";

export const AppUser = () => {
    const { loggedUser } = useSelector(state => state.userReducer);
    const [user, setUser] = useState({});

    const login = () => {
        getUser({
            email: user.email,
            password: user.password
        });
    }

    useEffect(()=> {
        if(loggedUser) {
            localStorage.setItem('user', JSON.stringify(loggedUser))
        }
    }, [loggedUser])

    return (
        <form action="" id="form-style">
            <table>
                <tbody>
                    <tr className="spacing">
                        <td>
                            <label htmlFor="emailadresa">Email Adresa</label>
                            <input type="email" className="form-control tabs" id="emailadresa" onChange={(e) => {
                                setUser({...user, email: e.target.value})
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="vasasifra">Vaša Šifra</label>
                            <input type="password" className="form-control tabs" id="vasasifra" onChange={(e) => {
                                setUser({...user, password: e.target.value})
                            }}/>
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
                            <Button type="button" className="btn tabs" onClick={login}>Naruči</Button>
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