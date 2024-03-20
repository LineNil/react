import React, {  useEffect } from "react";
import { Link } from 'react-router-dom';
import CartIcon from "../CartIcon";
import { Cart } from "./Styles";

function CartOverlay({ cartItems, cartItemCount }) {
  useEffect(() => {
    console.log("cartItems:", cartItems);
    console.log("cartItemCount:", cartItemCount);
  }, [cartItems, cartItemCount]);

  return (
    <Cart>
      <Link to="/checkout">
        <CartIcon itemCount={cartItemCount}/>
      </Link>
    </Cart>
  );
}

export default CartOverlay;

