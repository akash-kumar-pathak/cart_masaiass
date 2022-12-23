import React from "react";

function Item(props) {
  return (
    <>
      <div className="cartItem">
        <div>{props.item}</div>
        <div>₹ {props.rate}</div>
        <div className="qtyTab">
          <button
            className="btn"
            onClick={() => {
              if (props.qty != 0) {
                props.changeAmount(props.id, -1);
              }
            }}
          >
            -
          </button>
          {props.qty}
          <button
            className="btn"
            onClick={() => {
              props.changeAmount(props.id, 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;