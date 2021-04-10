import React, { useEffect, useState } from "react";
import { dateToString, timeToString } from "../../helpers/dateTimeHelper";
import { newEmptyOrder } from "../../reducers/orderReducer";

export const Shop = (props) => {
    const [order, setOrder] = useState({});
    
    const formatDate = (value) => {
        const date = new Date(value);
        let formatedDate = dateToString(date);
        if(order && order.pickUpDate) {
            const currentSaved = new Date(order.pickUpDate);
            formatedDate += timeToString(currentSaved);
        } else {
            date.setHours(0,0,0);
            formatedDate += timeToString(date);
        }
        return formatedDate;
    }
    const formatTime = (value) => {
        const groups = value.match(/^(\d+):(\d+)$/);
        if(!groups) {
            return;
        }
        const date = new Date();
        date.setHours(groups[1], groups[2], 0);

        let formatedDate = dateToString(date);
        
        if(order && order.pickUpDate) {
            const currentSaved = new Date(order.pickUpDate);
            formatedDate = dateToString(currentSaved)
            formatedDate += timeToString(date)
        } else {
            formatedDate += timeToString(date)
        }
        return formatedDate;
    }

    useEffect(() => {
        if(props.order) {
            setOrder(props.order);
        }
    }, [props.order]);

    return (
        <>
        <div className="container" id="form-button">
            <div className="row">
                <div className="col-11" id="header-btn">
                    <button type="button" className="log-in" onClick={()=>{
                        props.previousStep();
                    }}>Nazad</button>
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
                                        <input type="text" className="form-control tabs" id="ulicabroj" placeholder="" defaultValue={order && order.pickUpAddress ? order.pickUpAddress.street : ""} onChange={(e) => {
                                            setOrder({...order, pickUpAddress: {
                                                ...order.pickUpAddress,
                                                street: e.target.value
                                            }})
                                        }}/>
                                    </div>

                                    <div className="floor ml-3">
                                        <label htmlFor="sprat">Sprat</label>
                                        <input type="number" className="form-control tabs" id="sprat" placeholder="-" defaultValue={order && order.pickUpAddress ? order.pickUpAddress.floor : ""} onChange={(e) => {
                                            setOrder({...order, pickUpAddress: {
                                                ...order.pickUpAddress,
                                                floor: e.target.value
                                            }})
                                        }}/>
                                    </div>
                                    <div className="interphone ml-3">
                                            <label htmlFor="interfon">Interfon</label>
                                            <input type="text" className="form-control tabs" id="interfon" placeholder="-" defaultValue={order && order.pickUpAddress ? order.pickUpAddress.interphone : ""} onChange={(e) => {
                                            setOrder({...order, pickUpAddress: {
                                                ...order.pickUpAddress,
                                                interphone: e.target.value
                                            }})
                                        }}/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex">
                                    <div className="must">
                                        <p>*Obavezno polje </p>
                                    </div>
                                </div>     
                            </div>
                            <div className="row ">
                                <div className="col-12 d-flex">
                                    <div className="area">
                                        <label htmlFor="opstina">Opština</label>
                                        <input type="text" className="form-control tabs" id="opstina" placeholder="Izaberi opštinu" defaultValue={order && order.pickUpAddress ? order.pickUpAddress.district : ""} onChange={(e) => {
                                            setOrder({...order, pickUpAddress: {
                                                ...order.pickUpAddress,
                                                district: e.target.value
                                            }})
                                        }}/>
                                    </div>

                                        <div className="date ml-3">
                                            <label htmlFor="datum">Datum</label>
                                            <input type="date" className="form-control tabs" id="datum" onChange={(e) => {
                                                setOrder({...order, pickUpDate: formatDate(e.target.value)})
                                            }}/>
                                        </div>
                                        <div className="time ml-3">
                                            <label htmlFor="vreme">Vreme</label>
                                            <input type="time" className="form-control tabs" id="vreme" onChange={(e) => {
                                                setOrder({...order, pickUpDate: formatTime(e.target.value)})
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="check-box"> 
                                            <ul className="list-unstyled check-style">
                                                <li>
                                                    <label className="checkmark-container">Zapamti adresu
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkmark-container">Ista adresa je i za dostavu
                                                        <input type="checkbox" onChange={(e)=>{
                                                            if(e.target.checked){
                                                                setOrder({...order, deliveryAddress: {
                                                                    ...order.pickUpAddress
                                                                }}) 
                                                            } else {
                                                                setOrder({...order, deliveryAddress: {
                                                                    ...newEmptyOrder().deliveryAddress
                                                                }})
                                                            }
                                                        }}/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="button"className="btn btn-primary" onClick={()=>{
                                            props.setOrder(order);
                                            props.nextStep();
                                        }}>
                                            Dalje
                                        </button>
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
                                        <input type="text" className="form-control tabs" id="adresa" placeholder="Ulica,broj,sprat" defaultValue={(order && order.deliveryAddress)? order.deliveryAddress.street : ""}/>
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