import React from "react";
import { useHistory } from "react-router-dom";

export const PlaceOrder = () => {
    const history = useHistory();
    const goToOrder = () => {
        history.push('/page/order');
    }
    return (
        <div className="container d-flex align-items-center" id="header-wrapper">
                <div id="header-text-wrapper">
                    <div id="header-text">
                        <h3>Mi brinemo o Vašoj odeći,<br/>da bi ste Vi mogli da se posvetite svemu ostalom.</h3>
                        <p>Najsigurnije i najpovoljnije hemijsko čišćenje</p>
                    </div>
                    <div id="header-form">
                        <form className="row g-3">
                            <div className="col-auto">
                                <label htmlFor="vasaadresa">Ulica i Broj</label>
                                <input type="text" className="form-control tabs" id="ulicabroj" placeholder="" />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="sprat">Sprat</label>
                                <input type="number" className="form-control tabs" id="sprat" placeholder="-" />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="interfon">Interfon</label>
                                <input type="text" className="form-control tabs" id="interfon" placeholder="-" />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="opstina">Opština</label>
                                <input type="text" className="form-control tabs" id="opstina" placeholder="Izaberi opštinu" />
                            </div>

                            <div className="col-auto">
                                <label htmlFor="brojtelefona" className="visually-hidden">Broj Telefona</label>
                                <input type="number" className="form-control tabs" id="brojtelefona" placeholder="+381 XX XXX XXX" />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={goToOrder}>Naruči</button>
                        </form>  
                    </div>
                </div>
            </div>
    );
}