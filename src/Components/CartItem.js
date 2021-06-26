import React, { useState } from "react";
import itemsInCart from "../Data/itemsInCart";

const CartItem = (props) => {
  const [currQty, setCurrQty] = useState(props.quantityInCart);
  const [currCost, setCurrCost] = useState(props.cost);

  const handleAdd = () => {
    props.addItem(props.id, currQty);
    props.addCost(props.id, currCost);
    setCurrQty((prevState) => prevState + 1);
    setCurrCost((prevState) => prevState + props.cost);
  };

  const handleRemove = (index) => {
    props.removeItem((props.id, currQty));
    setCurrQty((prevState) => prevState - 1);
  };

  return (
    <div className="item" key={props.key}>
      <img src={props.imgUrl} alt="" />
      <div className="half">{props.name}</div>
      <div className="half">
        <span onClick={handleRemove} className="circle">
          -
        </span>
        <span className="pad-left pad-right">{currQty}</span>
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
