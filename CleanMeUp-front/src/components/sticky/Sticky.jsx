import React from "react";

export const Sticky = () => {
    return (
        <div className="container-fluid" id="sticky">
            <div className="container">
                <div className="row" id="sticky-wrapper"> 
                    <div className="col-lg-8 col-md-12 d-flex">
                        <div className="sticky-img d-flex align-items-center">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/cookie.png`} alt="cookie img"/>
                            <p>CleanMeUp koristi kolačiće kako bi konstantno poboljšavao Vaše iskustvo korišćenja sajta. <a href="#">Saznaj više o ovim kolačićima.</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-12 d-flex align-items-center justify-content-end">
                        <ul className="list-unstyled d-flex justify-content-between justify-content-center" id="sticky-buttons" >
                            <li id="accept">
                                <a href="#">
                                    Prihvati
                                </a>
                            </li>
                            <li id="quit">
                                <a href="#">
                                    Odustani
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}