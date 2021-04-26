import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Review = (props) => {
  const [amount, setAmount] = useState();
  const [order, setOrder] = useState({});

  useEffect(() => {
    let result = 0;
    props.order.items.forEach((item) => {
      result += item.price;
    });
    setAmount(result);
  }, [props]);

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
              <button className="log-in" onClick={() => {
                props.previousStep();
              }}>Nazad</button>
          </div>
      </div>
      </div>
      <div className="container" id="form">
          <div className="row" id="right-form">
            <div className="col-7 mb-5">
              <div className="right-header">
                  <h4>Pregled porudžbine</h4>
              </div>    
              <div className="right-form-data">
                  <div className="row justify-content-between">
                    <div className="col-7">
                      <div className="right-form-data">
                        <div className="row justify-content-between">
                          <div className="col-12 mb-5">
                            <h5 className="mb-2">Usluga koju želite</h5>
                            <ul className="ml-3">
                              {order.services && order.services.map((x,i) => {
                                  return(
                                    <li key={i}>{x.name}</li>
                                  )
                              })}
                            </ul>
                            
                          </div>
                          <div className="col-12">
                            <h5 className="mb-2">Izabrana garderoba</h5>
                            <table className="table" id="review-table">
                              <tbody>
                                <tr>
                                  <th>Naziv</th>
                                  <th>Količina</th>
                                  <th>Cena</th>
                                </tr>
                                {order.items && order.items.map((x,i) => {
                                  return(
                                    <tr key={i}>
                                      <td>{x.name}</td>
                                      <td>{x.count}</td>
                                      <td>{x.price}</td>
                                    </tr>
                                  )
                                })}
                                <tr className="font-weight-bold">
                                  <td colSpan="2">Ukupno</td>
                                  <td>
                                    {amount}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <Button disabled={!order || !order.items || !order.items.length || !order.services || !order.services.length}
                             type="button" onClick={(e)=> {
                               props.nextStep();
                             }}>
                                Završi kupovinu
                          </Button>
                        </div>
                      </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default Review;
