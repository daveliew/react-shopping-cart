import React, { useState } from "react";
import itemsInCart from "../Data/itemsInCart";

import CartItem from "./CartItem";

const ShoppingCart = ({ startingCost, startingQty, calcCart }) => {
  const [cart, setCart] = useState(itemsInCart);

  const addItem = (index) => {
    let newArr = [...cart];

    let currQty = newArr[index].quantityInCart;
    currQty += 1;
    newArr[index] = { ...newArr[index], quantityInCart: currQty };

    let currCost = newArr[index].cost;
    currCost += itemsInCart[index].cost;
    newArr[index] = { ...newArr[index], cost: currCost };

    setCart(newArr);
    console.log(newArr);
    calcCart(newArr);
  };

  const removeItem = (index) => {
    if (cart[index].quantityInCart > 1) {
      let newArr = [...cart];
      let currCost = newArr[index].cost;
      let currQty = newArr[index].quantityInCart;

      currCost -= itemsInCart[index].cost;
      currQty -= 1;
      newArr[index] = { ...newArr[index], quantityInCart: currQty };
      newArr[index] = { ...newArr[index], cost: currCost };
      setCart(newArr);
      calcCart(newArr);
    }
  };

  return cart.map((item, index) => {
    return (
      <CartItem
        name={item.name}
        imgUrl={item.imgUrl}
        quantityInCart={item.quantityInCart}
        cost={item.cost}
        key={index}
        id={index}
        addItem={addItem}
        removeItem={removeItem}
      />
    );
  });
};
export default ShoppingCart;
