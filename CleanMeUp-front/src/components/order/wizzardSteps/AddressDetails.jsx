import React from "react";
import { Button } from "react-bootstrap";

const AddressDetails = (props) => {
  return (
    <div>
      <Button onClick={props.previousStep}>Nazad</Button>
      <h6>Adresa</h6>
      <input className="input" type="text" placeholder="Ulica,broj,sprat" />
      <input className="input" type="text" placeholder="+381 XXX XXX XXX" />
    </div>
  );
};

export default AddressDetails;
