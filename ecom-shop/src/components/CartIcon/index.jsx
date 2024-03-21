import React from "react";

function CartIcon({ itemCount }) {
  return (
    <div>
      <span role="img" aria-label="cart">🛒</span>
      <span>{itemCount > 0 ? itemCount : 0}</span>
    </div>
  );
}

export default CartIcon;
