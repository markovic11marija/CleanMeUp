import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import orderReducer from "../../../reducers/orderReducer";
import { postOrder } from "../../../api/orderApi";
import { useDispatch } from "react-redux";

const AddressDetails = (props) => {
  const form = useRef();
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={props.previousStep}>Nazad</Button>
      <form ref={form}>
        <h5>Adresa skupljanja odece</h5>
        <input
          name={"AdresaSkupljanja"}
          className="input"
          type="text"
          placeholder="Ulica,broj,sprat"
        />
        <br />
        <h5>Adresa dostave odece i kontakt telefon</h5>
        <input
          name={"AdresaDostave"}
          className="input"
          type="text"
          placeholder="Ulica,broj,sprat"
        />
        <br />
        <input
          name={"Telefon"}
          className="input"
          type="text"
          placeholder="+381 XXX XXX XXX"
        />
        <br />
        <Button
          onClick={() => {
            let order = {
              ...props.order,
              pickUpAddress: form.current["AdresaSkupljanja"].value,
              deliveryAddress: form.current["AdresaDostave"].value,
              phone: form.current["Telefon"].value,
            };
            //postOrder(dispatch, order);
            props.setOrder(order);
            props.nextStep();
          }}
        >
          Naruci
        </Button>
      </form>
    </div>
  );
};

export default AddressDetails;
