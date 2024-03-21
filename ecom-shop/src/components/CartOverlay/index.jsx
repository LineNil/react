import React, {  useEffect } from "react";
import { Link } from 'react-router-dom';
import CartIcon from "../CartIcon";
import { Cart } from "./Styles";

function CartOverlay({ cartItems, cartItemCount }) {
  useEffect(() => {
    console.log("Cart items or count changed");
  }, [cartItems]);

  return (
    <Cart>
      <Link to="/checkout">
        <CartIcon itemCount={cartItemCount === 0 ? 0 : cartItemCount}/>
      </Link>
    </Cart>
  );
}

export default CartOverlay;

