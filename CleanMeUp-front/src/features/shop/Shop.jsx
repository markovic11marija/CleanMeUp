import React from "react";

export const Shop = () => {
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
            <form action="" id="form-style">
                <div className="row" id="right-form">
                    <div className="col-lg-6 col-md-12">
                        <div className="right-header">
                                <h4>Gde kupimo odeću</h4>
                        </div>    
                        <div className="right-form-data">
                            <div className="row ">
                                <div className="col-12 d-flex flex-wrap">
                                    <div className="street">
                                        <label htmlFor="vasaadresa">Ulica i Broj</label>
                                        <input type="text" className="form-control tabs" id="ulicabroj" placeholder="" />
                                    </div>

                                    <div className="floor ml-3">
                                            <label htmlFor="sprat">Sprat</label>
                                            <input type="number" className="form-control tabs" id="sprat" placeholder="-" />
                                    </div>
                                    <div className="interphone ml-3">
                                            <label htmlFor="interfon">Interfon</label>
                                            <input type="text" className="form-control tabs" id="interfon" placeholder="-" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex">
                                    <div className="must">
                                        <p >*Obavezno polje </p>
                                    </div>
                                </div>     
                            </div>
                            <div className="row ">
                                <div className="col-12 d-flex">
                                        <div className="area">
                                            <label htmlFor="opstina">Opština</label>
                                            <input type="text" className="form-control tabs" id="opstina" placeholder="Izaberi opštinu" />
                                        </div>

                                        <div className="date ml-3">
                                            <label htmlFor="datum">Datum</label>
                                            <input type="date" className="form-control tabs" id="datum" />
                                        </div>
                                        <div className="time ml-3">
                                            <label htmlFor="vreme">Vreme</label>
                                            <input type="time" className="form-control tabs" id="vreme" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="check-box"> 
                                            <ul className="list-unstyled check-style">
                                                <li>
                                                    <div className="form-check d-flex justify-content-between align-items-center">
                                                        <input className="form-check-input checkbox-style" type="checkbox" value="" id="zapamti" />
                                                        <label className="form-check-label" htmlFor="zapamti">
                                                            Zapamti adresu </label>
                                                    </div>                                                
                                                </li>
                                                <li>
                                                    <div className="form-check d-flex justify-content-between align-items-center">
                                                        <input className="form-check-input checkbox-style" type="checkbox" value="" id="dostava" />
                                                        <label className="form-check-label" htmlFor="dostava">
                                                            Ista adresa je i za dostavu </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button className="btn btn-primary">Dalje</button>
                                    </div>
                                </div>  
                    </div>    
                </div>
                    <div className="col-lg-6 col-md-12" >
                        <div className="right-header">
                                <h4>Gde dostavljamo odeću</h4>
                        </div>    
                        <div className="right-form-data">
                            <div className="row">
                                <div className="col-12">
                                    <div className="adress">
                                        <label htmlFor="adresa">Adresa</label>
                                        <input type="text" className="form-control tabs" id="adresa" placeholder="Ulica,broj,sprat" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-area-shop">
                                        <label htmlFor="napomena">Napomena</label>
                                        <textarea className="form-control contact-tabs" placeholder="Ako imate napomenu, unesite je ovde" id="napomena-contact"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </form>    
        </div>
        </>
    );
}