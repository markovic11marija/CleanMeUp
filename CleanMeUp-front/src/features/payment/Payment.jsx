import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Payment = (props) => {
    const [order, setOrder] = useState({});
    const [amount, setAmount] = useState();

    useEffect(() => {
        if(props.order) {
          setOrder(props.order);
        }
      }, [props.order]);

    useEffect(() => {
        let result = 0;
        props.order.items.forEach((item) => {
            result += item.price;
        });
        setAmount(result);
    }, [props]);

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
                <div className="row  d-flex justify-content-center">
                    <div className="col-lg-4 col-md-4"  id="right-form">
                        <div className="right-header payment-header text-center">
                            <h4>Način Plaćanja</h4>
                        </div>    
                        <div className="right-form-data">
                            <div id="form-style">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="radio-container">Plaćanje pouzećem
                                                        <input type="radio" name="radio" checked/>
                                                        <span className="radio-checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="radio-container">Kreditna kartica
                                                        <input type="radio" name="radio"/>
                                                        <span className="radio-checkmark"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="btn-naruci" className="mt-3"> 
                                                <form method="POST" action="https://ecg.test.upc.ua/rbrs/enter">
                                                    <input type="hidden" value="1" name="Version" />
                                                    <input type="hidden" value="1756104" name="MerchantID" />
                                                    <input type="hidden" value="E7883944" name="TerminalID" />
                                                    <input type="hidden" value={`${amount}00`} name="TotalAmount" />
                                                    <input type="hidden" value="941" name="Currency" />
                                                    <input type="hidden" value="sr" name="locale" />
                                                    <input type="hidden" value={323213123} name="OrderID" />
                                                    
                                                    <input
                                                    type="hidden"
                                                    value={moment().format("YYMMDDhhmmss")}
                                                    name="PurchaseTime"
                                                    />
                                                    <input type="hidden" value="Cleaning" name="PurchaseDesc" />
                                                    <Button disabled={!order || !order.items || !order.items.length || !order.services || !order.services.length}
                                                    type="submit">
                                                            Plati
                                                    </Button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}