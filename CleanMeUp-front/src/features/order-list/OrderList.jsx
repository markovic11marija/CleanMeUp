import React from "react";

export const OrderList = () => {
    return (
        <>
        <div className="container" id="form-button">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end" id="header-btn">
                        <button className="btn btn-third">Nova Porudžbina</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12"  id="right-form">
                <div className="right-header">
                    <ul className="list-unstyled d-flex">
                        <li><h4>Moje Porudžbine</h4></li>
                    </ul>
                </div>
                <div className="order-tabs">
                    <div className="right-order-tab d-flex justify-content-end align-items-center">
                        <ul className="list-unstyled d-flex">
                            <li><i className="fa fa-circle"></i></li>
                            <li><p>Dostavljeno</p></li>
                        </ul>
                    </div>
                    <div className="row order-info d-flex justify-content-around">
                        <div className="col-md-2 order-img">
                            <img src="/assets/img/washing-machine.png" alt="washing=machine" />
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="leftside-info">
                                <li><p>Porudžbina Br:</p></li>
                                <li><p>Vreme Porudžbine:</p></li>
                            </ul>
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="rightside-info">
                                <li><p>00123</p></li>
                                <li><p>20/02/2020 14:53</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hl"></div>
                    <div className="row" id="confirmed">
                        <div className="col-5 d-flex align-items-center">
                            <p>Potvrdite dostavu porudzbine:</p>
                        </div>
                        <div className="col-7 d-flex justify-content-end" id="header-btn">
                            <button className="btn btn-third">Prihvacena Dostava</button>
                        </div>
                    </div>
                </div>
                <div className="order-tabs">
                    <div className="right-order-tab d-flex justify-content-end align-items-center">
                        <ul className="list-unstyled d-flex">
                            <li><i className="fa fa-circle purple"></i></li>
                            <li><p>Zavrseno</p></li>
                        </ul>
                    </div>
                    <div className="row order-info d-flex justify-content-around">
                        <div className="col-md-2 order-img">
                            <img src="/assets/img/washing-machine.png" alt="washing=machine" />
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="leftside-info">
                                <li><p>Porudžbina Br:</p></li>
                                <li><p>Vreme Porudžbine:</p></li>
                            </ul>
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="rightside-info">
                                <li><p>00123</p></li>
                                <li><p>20/02/2020 14:53</p></li>
                            </ul>
                        </div>
                    </div> 
                </div>
                <div className="order-tabs">
                    <div className="right-order-tab d-flex justify-content-end align-items-center">
                        <ul className="list-unstyled d-flex">
                            <li><i className="fa fa-circle purple"></i></li>
                            <li><p>Zavrseno</p></li>
                        </ul>
                    </div>
                    <div className="row order-info d-flex justify-content-around">
                        <div className="col-md-2 order-img">
                            <img src="/assets/img/washing-machine.png" alt="washing=machine" />
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="leftside-info">
                                <li><p>Porudžbina Br:</p></li>
                                <li><p>Vreme Porudžbine:</p></li>
                            </ul>
                        </div>
                        <div className=" col-md-4 order-info-list">
                            <ul className="list-unstyled" id="rightside-info">
                                <li><p>00123</p></li>
                                <li><p>20/02/2020 14:53</p></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </> 
    );
}