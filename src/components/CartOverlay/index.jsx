import React from "react";
import { Link } from 'react-router-dom';
import CartIcon from "../CartIcon";
import { Cart } from "./Styles";

function CartOverlay({ cartItemCount }) {
  return (
    <Cart>
      <Link to="/checkout">
        <CartIcon itemCount={cartItemCount} />
      </Link>
    </Cart>
  );
}

export default CartOverlay;
