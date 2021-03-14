import React from "react";
import { Button } from "react-bootstrap";
import OrderCounter from "./OrderCounter";
import { useHistory } from 'react-router-dom';

const OrderDetails = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  }
  return (
    <>
    <div className="container" id="form-button">
      <div className="row">
          <div className="col-11" id="header-btn">
              <button className="log-in" onClick={goBack}>Nazad</button>
          </div>
      </div>
      </div>
      <div className="container" id="form">
        <form action="" id="form-style">
          <div className="row" id="right-form">
            <div className="col-7">
              <div className="right-header">
                  <h4>Detalji porudžbine</h4>
                  <h5>Izaberite garderobu koja je potrebna da Vam se očisti</h5>
              </div>    
              <div className="right-form-data">
                  <div className="row justify-content-between">
                    <OrderCounter
                        name={"Farmerke"}
                        setOrder={props.setOrder}
                        order={props.order}
                        price={1200}
                      />
                    <OrderCounter
                        name={"Majice"}
                        setOrder={props.setOrder}
                        order={props.order}
                        price={600}
                      />
                    <OrderCounter
                        setOrder={props.setOrder}
                        order={props.order}
                        name={"Džemper"}
                        price={600}
                      />
                    <OrderCounter
                        setOrder={props.setOrder}
                        order={props.order}
                        name={"Košulje"}
                        price={600}
                      />
                  </div>
                  <div className="mt-5">
                    <h5>Usluga koju želite</h5>
                    <div className="row mt-5">
                      <div className="col-12 d-flex justify-content-between">
                        <label class="checkmark-container">Hemijsko čišćenje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="checkmark-container">Pranje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="checkmark-container">Pranje i peglanje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5>Napomena</h5>
                    <div className="row mt-5">
                      <div className="col-12 d-flex justify-content-between">
                        <label class="checkmark-container">Hemijsko čišćenje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="checkmark-container">Pranje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="checkmark-container">Pranje i peglanje
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button disabled={!props.order || !props.order.items.length}
                        onClick={() => {
                          props.nextStep();
                        }}
                      >
                        Dalje
                  </Button>
                </div>
              </div>
            </div>
        </form>
      </div>
    </>
  );
};

export default OrderDetails;
