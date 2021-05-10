import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { orderDataSave } from "../../../actions/orderActions";
import { districts } from "../../../constants/districts";
import store from "../../../store";

export const PlaceOrder = () => {
    const history = useHistory();

    const [order, setOrder] = useState({});

    const goToOrder = () => {
        store.dispatch(orderDataSave(order));
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
                            <input type="text" className="form-control tabs" id="ulicabroj" placeholder="" onChange={(e) => {
                                setOrder({...order, pickUpAddress: {
                                    ...order.pickUpAddress,
                                    street: e.target.value
                                }})
                            }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="sprat">Sprat</label>
                            <input type="number" min="0" className="form-control tabs" id="sprat" placeholder="-" onChange={(e) => {
                                setOrder({...order, pickUpAddress: {
                                    ...order.pickUpAddress,
                                    floor: e.target.value
                                }})
                            }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="interfon">Interfon</label>
                            <input type="text" className="form-control tabs" id="interfon" placeholder="-" onChange={(e) => {
                                setOrder({...order, pickUpAddress: {
                                    ...order.pickUpAddress,
                                    interphone: e.target.value
                                }})
                            }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="opstina">Opština</label>
                            <select className="form-control tabs" id="opstina" onChange={(e) => {
                                setOrder({...order, pickUpAddress: {
                                    ...order.pickUpAddress,
                                    district: e.target.value
                                }})
                            }}>
                                <option value="0"> 
                                    Izaberite opštinu
                                </option>
                                {districts.map((x, i) => {
                                    return (
                                        <option key={i} value={x.name}> 
                                            {x.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="col-auto">
                            <label htmlFor="brojtelefona" className="visually-hidden">Broj Telefona</label>
                            <input type="number" min="0" className="form-control tabs" id="brojtelefona" placeholder="+381 XX XXX XXX" onChange={(e) => {
                                setOrder({...order, phone: e.target.value })
                            }}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={goToOrder}>Naruči</button>
                    </form>  
                </div>
            </div>
        </div>
    );
}