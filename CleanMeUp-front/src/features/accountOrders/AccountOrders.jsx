import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../api/orderApi";
import { getLoggedUserId } from "../../helpers/authHelper";
import {formatDateTime} from "../../helpers/dateTimeHelper";
import {useHistory } from "react-router-dom";

export const AccountOrders = () => {
    const history = useHistory();
    const { orders: { data } } = useSelector(state => state.orderReducer);
    const [allOrders, setAllOrders] = useState([]);
    
    useEffect(()=> {
        getUserOrders(getLoggedUserId());
    },[])

    useEffect(()=> {
        if(data) {
            setAllOrders(data);
        }
    }, [data]);
    
    return (<>
        <div className="container" id="form-button">
            <div className="row">
                <div className="col-12 d-flex justify-content-end" id="header-btn">
                    <button type="button" className="btn btn-third" onClick={() => {
                        history.push("/page/order");
                    }}>Nova Porudžbina</button>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-12 account-orders"  id="right-form">
            <div className="right-header">
                <ul className="list-unstyled d-flex">
                    <li><h4>Moje Porudžbine</h4></li>
                </ul>
            </div>
            {allOrders.map((x,i) => {
                return (
                    <div key={i} className="order-tabs">
                        <div className="right-order-tab d-flex justify-content-end align-items-center">
                            <ul className="list-unstyled d-flex">
                                <li><i className="fa fa-circle"></i></li>
                                <li><p>Dostavljeno</p></li>
                            </ul>
                        </div>
                        <div className="row order-info d-flex justify-content-around">
                            <div className="col-md-2 order-img">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/washing-machine.png`} alt="washing-machine"/>
                            </div>
                            <div className=" col-md-4 order-info-list">
                                <ul className="list-unstyled" id="leftside-info">
                                    <li><p>Porudžbina Br:</p></li>
                                    <li><p>Vreme Porudžbine:</p></li>
                                </ul>
                            </div>
                            <div className=" col-md-4 order-info-list">
                                <ul className="list-unstyled" id="rightside-info">
                                    <li><p>{x.id}</p></li>
                                    <li><p>{formatDateTime(x.dateCreated)}</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hl"></div>
                        <div className="row" id="confirmed">
                            <div className="col-5 d-flex align-items-center">
                                <p>Potvrdite dostavu porudžbine:</p>
                            </div>
                            <div className="col-7 d-flex justify-content-end" id="header-btn">
                                <button className="btn btn-third">Prihvaćena Dostava</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>);
}