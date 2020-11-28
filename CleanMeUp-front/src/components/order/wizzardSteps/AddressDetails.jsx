import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import orderReducer from "../../../reducers/orderReducer";
import { postOrder } from "../../../api/orderApi";
import { useDispatch } from "react-redux";

const AddressDetails = (props) => {
  const form = useRef();
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);

  return (
    <div>
      <Button onClick={props.previousStep}>Nazad</Button>
      {isError ? <h5 style={{ color: "red" }}>Sva polja su obavezna</h5> : null}
      <form ref={form}>
        <h5>Adresa skupljanja odece</h5>
        <input
          required={true}
          name={"AdresaSkupljanja"}
          className="textbox"
          type="text"
          placeholder="Ulica,broj,sprat"
        />
        <br />
        <h5>Adresa dostave odece i kontakt telefon</h5>
        <input
          required={true}
          name={"AdresaDostave"}
          className="textbox"
          type="text"
          placeholder="Ulica,broj,sprat"
        />
        <br />
        <input
          required={true}
          name={"Telefon"}
          className="textbox"
          type="text"
          placeholder="+381 XXX XXX XXX"
        />
        <br />
        <Button
          onClick={() => {
            let pickUpAddress = form.current["AdresaSkupljanja"].value;
            let deliveryAddress = form.current["AdresaDostave"].value;
            let phone = form.current["Telefon"].value;
            if (!pickUpAddress || !deliveryAddress || !phone) {
              setIsError(true);
            } else {
              let order = {
                ...props.order,
                pickUpAddress: form.current["AdresaSkupljanja"].value,
                deliveryAddress: form.current["AdresaDostave"].value,
                phone: form.current["Telefon"].value,
              };
              postOrder(dispatch, order);
              props.setOrder(order);
              props.nextStep();
            }
          }}
        >
          Naruci
        </Button>
      </form>
    </div>
  );
};

export default AddressDetails;
