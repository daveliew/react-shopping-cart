import React from "react";

const Summary = ({ tax, subTotal, total, totalQuantity }) => {
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
