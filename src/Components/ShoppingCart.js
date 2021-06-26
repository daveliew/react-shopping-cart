import React, { useState } from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ getCartQty, cartStatus }) => {
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const [cart, setCart] = useState(cartStatus);

  const addItem = (index, qty) => {
    setQuantity((prevState) => prevState + 1);
    let newArr = [...cart];
    newArr[index] = { ...newArr[index], quantityInCart: qty + 1 };
    getCartQty(1);
  };

  const addCost = (index, price) => {
    setSubTotal((prevState) => prevState + price);
    let newArr = [...cart];
    let newPrice = (cart[index].cost += subTotal);
    newArr[index] = { ...newArr[index], cost: newPrice };
    setCart(newArr);
  };

  const removeItem = (subTotal) => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
      setSubTotal((prevState) => prevState - subTotal);
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
        addCost={addCost}
        removeItem={removeItem}
      />
    );
  });
};
export default ShoppingCart;
