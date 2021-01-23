import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { isNumber } from "util";

const Review = (props) => {
  const [amount, setAmount] = useState();
  const { order } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    let result = 0;
    props.order.items.forEach((item) => {
      result += item.price;
    });
    setAmount(result);
  }, [props]);

  return (
    <div>
      <h3>Pregled Porudzbine:</h3>
      {props.order.items.map((item, i) => {
        return (
          <div key={`item-${i}`}>
            <h6>
              {item.name} - x{item.count}
            </h6>
          </div>
        );
      })}
      <h3>Ukupno: {amount} rsd</h3>

      <form method="POST" action="https://ecg.test.upc.ua/rbrs/enter">
        <input type="hidden" value="1" name="Version" />
        <input type="hidden" value="1756104" name="MerchantID" />
        <input type="hidden" value="E7883944" name="TerminalID" />
        <input type="hidden" value={`${amount}00`} name="TotalAmount" />
        <input type="hidden" value="941" name="Currency" />
        <input type="hidden" value="sr" name="locale" />
        <input type="hidden" value={order.data} name="OrderID" />
        
        <input
          type="hidden"
          value={moment().format("YYMMDDhhmmss")}
          name="PurchaseTime"
        />
        <input type="hidden" value="Cleaning" name="PurchaseDesc" />
        <Button disabled={typeof order.data !== 'number'} type="submit">Zavrsi kupovinu</Button>
      </form>
    </div>
  );
};

export default Review;
