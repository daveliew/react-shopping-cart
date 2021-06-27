import React, { useState } from "react";
import ShoppingCart from "./Components/ShoppingCart";
import Summary from "./Components/Summary";
import itemsInCart from "./Data/itemsInCart";

const App = () => {
  const [fetchTotal, setFetchTotal] = useState(0);
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
    totalQuantity: startingQty,
    subTotal: startingCost,
  });

  const getCartStatus = (newQty, newCost) => {
    setCartObj({
      totalQuantity: cartObj.totalQuantity + newQty,
      subTotal: cartObj.subTotal + newCost,
    });
  };

  const displayTotal = (amt) => {
    setFetchTotal(amt);
  };

  return (
    <div className="App">
      <div className="items">
        <h2>
          Total: <span>{fetchTotal.toFixed(2)}</span>
        </h2>
        <div className="half right">
          <a href="#" className="checkout">
            Proceed to Checkout
          </a>
        </div>
        <ShoppingCart
          getCartStatus={getCartStatus}
          startingCost={startingCost}
          startingQty={startingQty}
        />
      </div>
      <Summary
        subTotal={cartObj.subTotal}
        totalQuantity={cartObj.totalQuantity}
        displayTotal={displayTotal}
      />
    </div>
  );
};

export default App;
