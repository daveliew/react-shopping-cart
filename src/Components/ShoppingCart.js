import React, { useState } from "react";
import itemsInCart from "../Data/itemsInCart";
import CartItem from "./CartItem";

const ShoppingCart = ({
  getCartStatus,
  startingCart,
  startingCost,
  startingQty,
}) => {
  const [qty, setQty] = useState(startingQty);
  const [cost, setCost] = useState(startingCost);
  const [cart, setCart] = useState(startingCart);

  // const calcCart = (index) => {
  //   setQty(prevState => prevState +1)
  //   setQty(prevState => prevState + startingCart[index].cost)

  // };

  const addItem = (index) => {
    let newArr = [...cart];
    newArr[index].cost = newArr[index].cost + itemsInCart[index].cost;
    newArr[index].quantityInCart += 1;
    setCart(newArr);
    console.log(newArr);
    getCartStatus(1, startingCart[index].cost);
  };

  const removeItem = (subTotal) => {
    if (cart.quantityInCart > 1) {
      console.log("ok");
      // setQuantity((prevState) => prevState - 1);
      // setSubTotal((prevState) => prevState - subTotal);
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

// const addItem = (index, currQty, currCost) => {
//   setQuantity(currQty);
//   setSubTotal(currCost);
//   let newArr = [...cart];
//   newArr[index] = {
//     ...newArr[index],
//     quantityInCart: currQty,
//     cost: currCost,
//   };
//   console.log(newArr);
//   setCart(newArr);
//   getCartStatus(quantity, subTotal);
// };

// const addCost = (index, price) => {
//   let newArr = [...cart];
//   let newPrice = (cart[index].cost += subTotal);
//   newArr[index] = { ...newArr[index], cost: newPrice };
//   setCart(newArr);
// };

// const calcCart = (updatedCart) => {
//   let newQty = updatedCart
//     .map((item) => {
//       return item.quantityInCart;
//     })
//     .reduce((sum, qty) => {
//       return sum + qty;
//     });

//   let newCost = updatedCart
//     .map((item) => {
//       return item.cost;
//     })
//     .reduce((sum, cost) => {
//       return sum + cost;
//     });
//   console.log(newQty, newCost);
//   getCartStatus(newQty, newCost);
// };
