import React from "react";
import { Link } from "react-router-dom";

function checkout ({ cartItems}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
   return(
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price:${item.price}</p>
          </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <Link to="/checkout/success">Checkout</Link>
    </div>
   );
}

export default checkout;