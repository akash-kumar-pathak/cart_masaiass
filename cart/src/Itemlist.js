import React, { useState } from "react";
import Item from "./Item";

function Itemlist() {
  const data = [
    { item: "Noodles", rate: 30, id: 1, qty: 0 },
    { item: "Biryani", rate: 90, id: 2, qty: 0 },
    { item: "Chips", rate: 10, id: 3, qty: 0 },
  ];

  const [cart, setCart] = useState(data);
  const [amount, setAmount] = useState(0);

  const changeAmount = (id, sign) => {
    var value = cart.map((item) => {
      if (item.id === id) {
        setAmount((prev) => prev + item.rate * sign);
        item.qty += sign;
      }
      return item;
    });
    setCart(value);
  };

  const displayItems = cart.map((item, index) => (
    <Item key={index} {...item} changeAmount={changeAmount} />
  ));

  return (
    <>
      <div>
        {displayItems}
        <div className="amount">Total: ₹ {amount}</div>
      </div>
    </>
  );
}

export default Itemlist;