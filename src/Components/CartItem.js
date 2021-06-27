import React, { useState } from "react";

const CartItem = (props) => {
  const [cost, setCost] = useState(props.cost);
  const handleAdd = () => {
    props.addItem(props.id);
  };

  const handleRemove = () => {
    props.removeItem(props.id);
  };

  return (
    <div className="item" key={props.key}>
      <img src={props.imgUrl} alt="" />
      <div className="half">{props.name}</div>
      <div className="half">
        <span onClick={handleRemove} className="circle">
          -
        </span>
        <span className="pad-left pad-right">{props.quantityInCart}</span>
        <span onClick={handleAdd} className="circle">
          +
        </span>
        <strong className="right">{props.cost.toFixed(2)}</strong>
      </div>
      <hr />
      <div>
        <a href="#">remove</a>
        <br />
        <label>
          <input type="checkbox" /> wrap it for $5.99
        </label>
      </div>
    </div>
  );
};

export default CartItem;
