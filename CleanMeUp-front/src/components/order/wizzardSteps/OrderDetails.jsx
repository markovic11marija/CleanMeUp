import React from "react";
import OrderCounter from "./OrderCounter";
import { Button, Col, Row } from "react-bootstrap";

const OrderDetails = (props) => {
  return (
    <div>
      <h3>Detalji porudzbine</h3>
      <h5>Izaberite garderobu koja je potrebna da se ocisti</h5>
      <div className={"orderContainer"}>
        <Row>
          <Col>
            <OrderCounter name={"Farmerke"} price={1200} />
          </Col>
          <Col>
            <OrderCounter name={"Dzemper"} price={600} />
          </Col>
          <Col>
            <OrderCounter name={"Majice"} price={600} />
          </Col>
        </Row>
      </div>
      <h5>Usluga koju zelite</h5>
      <input type="checkbox" />
      <span>Hemijsko ciscenje</span>
      <input type="checkbox" />
      <span>Pranje</span>
      <input type="checkbox" />
      <span>Pranje i peglanje</span>
      <Button onClick={props.nextStep}>Next</Button>
    </div>
  );
};

export default OrderDetails;
