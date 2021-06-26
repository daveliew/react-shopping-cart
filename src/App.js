import React, { useState } from "react";
import ShoppingCart from "./Components/ShoppingCart";
import Summary from "./Components/Summary";
import itemsInCart from "./Data/itemsInCart";

const App = () => {
  const TAX_RATE = 0.07;
  const startingItems = itemsInCart
    .map((item) => {
      return item.quantityInCart;
    })
    .reduce((sum, qty) => {
      return sum + qty;
    });

  const startingPrice = itemsInCart
    .map((item) => {
      return item.cost;
    })
    .reduce((sum, cost) => {
      return sum + cost;
    });

  const [cartObj, setCartObj] = useState({
    tax: startingPrice * TAX_RATE,
    subTotal: startingPrice,
    total: startingPrice * (1 + TAX_RATE),
    totalQuantity: startingItems,
  });

  const getCartQty = (amt) => {
    let newSubTotal = { ...cartObj };
    newSubTotal.totalQuantity += amt;
    setCartObj(newSubTotal);
    console.log(cartObj);
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
          getCartQty={getCartQty}
          cartStatus={itemsInCart}
          startingPrice={startingPrice}
          startingItems={startingItems}
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
