import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div className="container" id="form">
            <div className="col-lg-6 col-md-12"  id="right-form">
                <div className="right-header-mesage">
                    <h4>Pošaljite nam poruku</h4>
                    <p>Odgovorićemo Vam u najkraćem roku.</p>
                </div>    
                <div className="right-form-data">
                    <form action="" id="form-style">
                        <table>
                            <tbody>
                                <tr className="spacing">
                                    <td>
                                        <label htmlFor="vaseime">Vaše ime</label>
                                        <input type="text" className="form-control tabs contact-tabs" id="vaseime" placeholder="Vaše ime" />
                                    </td>
                                </tr>    
                                <tr>
                                    <td>
                                        <label htmlFor="emailadresa">Email Adresa</label>
                                        <input type="email" className="form-control tabs contact-tabs" id="emailadresa" placeholder="Email adresa" />
                                    </td>
                                </tr>    
                                <tr>
                                    <td className="text-area">
                                            <label htmlFor="napomena">Vaša Poruka</label>
                                        <textarea className="form-control contact-tabs" placeholder="Tekst poruke" id="napomena-mesage"></textarea>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-form-btn"> 
                                        <Link to="/page/order" className="btn btn-four">Naruči</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>    
            </div>
        </div>
    );
}