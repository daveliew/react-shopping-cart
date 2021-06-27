import React, { useState, useEffect } from "react";

const Summary = ({ subTotal, totalQuantity, displayTotal }) => {
  const TAX_RATE = 0.07;
  const [total, setTotal] = useState(subTotal * (1 + TAX_RATE));
  const [tax, setTax] = useState(subTotal * TAX_RATE);

  // const sumTotal = (subTotal, tax) => {
  //   let result = subTotal + tax;
  //   setTotal(result);
  //   displayTotal(result);
  // };

  useEffect(() => {
    const newTax = subTotal * TAX_RATE;
    const newTotal = subTotal * (1 + TAX_RATE);
    setTax(newTax);
    setTotal(newTotal);
    displayTotal(newTotal);
  }, [subTotal, displayTotal]);

  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <div>
        <strong>subtotal</strong>
        <small> ({totalQuantity} items)</small>
        <strong className="right">{subTotal.toFixed(2)}</strong>
      </div>
      <div>
        <strong>delivery</strong>
        <strong className="right red">free</strong>
      </div>
      <div>
        <strong>estimated tax</strong>
        <strong className="right">{tax.toFixed(2)}</strong>
      </div>
      <hr />
      <h3>
        Total <span className="right">{total.toFixed(2)}</span>
      </h3>
      <hr />
      <small>cart number: 1016396673255</small>
    </div>
  );
};

export default Summary;
