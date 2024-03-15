import React from "react";

function CartIcon ({itemCount}) {
  return(
    <div>
      <span role="img" aria-label="cart">🛒</span>
      <span>{itemCount}</span>
    </div>
  );
}

export default CartIcon;