// CartOverlay.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartIcon from "../CartIcon";

function CartOverlay({ cartItems }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    console.log("cartItems:", cartItems); // Logg cartItems for å sjekke om det er definert
    // Sjekk om cartItems er definert før du prøver å bruke den
    if (cartItems) {
      console.log("cartItems length:", cartItems.length); // Logg lengden av cartItems
      setCartItemCount(cartItems.length);
    }
  }, [cartItems]);

  console.log("cartItemCount:", cartItemCount); // Logg cartItemCount for å sjekke verdien

  return (
    <div className="cart-overlay">
      <Link to="/checkout" className="cart-link">
        <CartIcon itemCount={cartItemCount}/>
      </Link>
    </div>
  );
}

export default CartOverlay;
