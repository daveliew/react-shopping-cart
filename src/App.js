import React, { useState } from "react";
import ShoppingCart from "./Components/ShoppingCart";
import Summary from "./Components/Summary";
import itemsInCart from "./Data/itemsInCart";

const App = () => {
  const TAX_RATE = 0.07;
  const startingQty = itemsInCart
    .map((item) => {
      return item.quantityInCart;
    })
    .reduce((sum, qty) => {
      return sum + qty;
    });

  const startingCost = itemsInCart
    .map((item) => {
      return item.cost;
    })
    .reduce((sum, cost) => {
      return sum + cost;
    });

  const [cartObj, setCartObj] = useState({
    tax: startingCost * TAX_RATE,
    subTotal: startingCost,
    total: startingCost * (1 + TAX_RATE),
    totalQuantity: startingQty,
  });

  const getCartStatus = (cartItem) => {
    setCartObj({
      tax: cartItem.cost * TAX_RATE,
      subTotal: cartItem.cost,
      total: cartItem.cost * (1 + TAX_RATE),
      totalQuantity: cartItem.quantityInCart,
    });
  };

  return (
    <div className="App">
      <div className="items">
        <h2>
          Total: <span>{cartObj.total.toFixed(2)}</span>
        </h2>
        <div className="half right">
          <a href="#" className="checkout">
            Proceed to Checkout
          </a>
        </div>
        <ShoppingCart
          getCartStatus={getCartStatus}
          startingCart={itemsInCart}
          startingCost={startingCost}
          startingQty={startingQty}
        />
      </div>
      <Summary
        tax={cartObj.tax}
        subTotal={cartObj.subTotal}
        total={cartObj.total}
        totalQuantity={cartObj.totalQuantity}
      />
    </div>
  );
};

export default App;
