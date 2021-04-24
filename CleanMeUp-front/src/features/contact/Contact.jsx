import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { sendContactMessage } from "../../api/contactApi";

export const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })

    const sendMessage = () => {
        sendContactMessage(contact);
    }
    return (
        <div className="container" id="form">
            <div className="col-lg-6 col-md-12"  id="right-form">
                <div className="right-header-mesage">
                    <h4>Pošaljite nam poruku</h4>
                    <p>Odgovorićemo Vam u najkraćem roku.</p>
                </div>    
                <div className="right-form-data">
                    <form action="" id="form-style" onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}>
                        <table>
                            <tbody>
                                <tr className="spacing">
                                    <td>
                                        <label htmlFor="vaseime">Vaše ime</label>
                                        <input type="text" required className="form-control tabs contact-tabs" id="vaseime" placeholder="Vaše ime" onChange={(e)=> {
                                            setContact({...contact, name: e.target.value });
                                        }}/>
                                    </td>
                                </tr>    
                                <tr>
                                    <td>
                                        <label htmlFor="emailadresa">Email Adresa</label>
                                        <input type="email" required className="form-control tabs contact-tabs" id="emailadresa" placeholder="Email adresa" onChange={(e)=> {
                                            setContact({...contact, email: e.target.value });
                                        }}/>
                                    </td>
                                </tr>    
                                <tr>
                                    <td className="text-area">
                                            <label htmlFor="napomena">Vaša Poruka</label>
                                            <textarea className="form-control contact-tabs" placeholder="Tekst poruke" id="napomena-mesage" required onChange={(e)=> {
                                                setContact({...contact, message: e.target.value });
                                            }}></textarea>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="contact-form-btn"> 
                                        <Button type="submit" className="btn btn-four">Naruči</Button>
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