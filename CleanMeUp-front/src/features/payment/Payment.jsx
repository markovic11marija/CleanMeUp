import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import {postOrder, updatePaymentType} from "../../api/orderApi";
import { useSelector } from 'react-redux';
import { getLoggedUserId } from "../../helpers/authHelper";
import { useHistory } from "react-router-dom";
import { SuccessModal } from "../../components/successModal/SuccessModal";

export const Payment = (props) => {
    const history = useHistory();
    const paymentForm = useRef();
    
    const { insertedOrderId: {data: orderId}, updatedPaymentType: {data: paymentType} } = useSelector(state => state.orderReducer);
    
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState({});
    const [pay, setPay] = useState(false);
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

    useEffect(() => {
        if(orderId) {
            setOrder({...order, id: orderId});
            if(pay) {
                setTimeout(() => {
                        paymentForm.current.submit();
                    
                }, 500);
            } else {
                updatePaymentType(orderId);
            }
        }
    }, [orderId, pay, order]);

    useEffect(()=> {
        if(paymentType) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
                history.push("/account/orders");
            }, 1500)
        }
    }, [paymentType])

    const saveOrderAndGoToPayment = () => {
        order.userId = getLoggedUserId();
        postOrder(order);
    }
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
                                                        <input type="radio" name="radio" defaultChecked={true}onClick={()=>{
                                                            setPay(false);
                                                        }}/>
                                                        <span className="radio-checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="radio-container">Kreditna kartica
                                                        <input type="radio" name="radio" onClick={()=>{
                                                            setPay(true);
                                                        }}/>
                                                        <span className="radio-checkmark"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="btn-naruci" className="mt-3"> 
                                            {order.id && (
                                                <form ref={paymentForm} method="POST" action="https://ecg.test.upc.ua/rbrs/enter">
                                                    <input type="hidden" value="1" name="Version" />
                                                    <input type="hidden" value="1756104" name="MerchantID" />
                                                    <input type="hidden" value="E7883944" name="TerminalID" />
                                                    <input type="hidden" value={`${amount}00`} name="TotalAmount" />
                                                    <input type="hidden" value="941" name="Currency" />
                                                    <input type="hidden" value="sr" name="locale" />
                                                    <input type="hidden" defaultValue={order.id} name="OrderID" />
                                                    
                                                    <input
                                                    type="hidden"
                                                    value={moment().format("YYMMDDhhmmss")}
                                                    name="PurchaseTime"
                                                    />
                                                    <input type="hidden" value="Cleaning" name="PurchaseDesc" />
                                                </form>
                                            )}
                                                <Button disabled={!order || !order.items || !order.items.length || !order.services || !order.services.length}
                                                    type="button" onClick={saveOrderAndGoToPayment}>
                                                            Plati
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <SuccessModal open={open} handleClose={() => {}} text="Uspešno ste kreirali porudžbinu"/>
        </>
    );
}