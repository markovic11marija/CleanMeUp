import React, { useRef } from "react";
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
            <OrderCounter
              name={"Farmerke"}
              setOrder={props.setOrder}
              order={props.order}
              price={1200}
            />
          </Col>
          <Col>
            <OrderCounter
              name={"Dzemper"}
              setOrder={props.setOrder}
              order={props.order}
              price={600}
            />
          </Col>
          <Col>
            <OrderCounter
              setOrder={props.setOrder}
              order={props.order}
              name={"Majice"}
              price={600}
            />
          </Col>
        </Row>
      </div>
      <h5>Usluga koju zelite</h5>
      <input name={"Hemijsko"} type="checkbox" />
      <span>Hemijsko ciscenje</span>
      <input name={"Pranje"} type="checkbox" />
      <span>Pranje</span>
      <input name={"PranjePeglanje"} type="checkbox" />
      <span>Pranje i peglanje</span>
      <Button
        disabled={!props.order.items.length}
        onClick={() => {
          props.nextStep();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default OrderDetails;
