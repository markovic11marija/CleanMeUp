import React, { useEffect, useState } from "react";
import moment from "moment";
const Review = (props) => {
  console.log(props);
  const [amount, setAmount] = useState();

  useEffect(() => {
    let result = 0;
    props.order.items.forEach((item) => {
      result += item.price;
    });
    setAmount(result);
  }, [props]);

  return (
    <div>
      <label>Amount</label> <input defaultValue={amount} />
      <form method="POST" action="https://ecg.test.upc.ua/rbrs/enter">
        <input type="hidden" value="1" name="Version" />
        <input type="hidden" value="1756104" name="MerchantID" />
        <input type="hidden" value="E7883944" name="TerminalID" />
        <input type="hidden" value={`${amount}00`} name="TotalAmount" />
        <input type="hidden" value="941" name="Currency" />
        <input type="hidden" value="sr" name="locale" />
        <input type="hidden" value="007" name="OrderID" />
        <input type="hidden" value={moment().format("YYMMDDhhmmss")} name="PurchaseTime" />
        <input type="hidden" value="Cleaning" name="PurchaseDesc" />
        <button type="submit">Zavrsi kupovinu</button>
      </form>
    </div>
  );
};

export default Review;
