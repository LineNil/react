import React, { useState, useEffect } from "react";
import { Header, CartItemCardWrapper, Image, Wrapper, ItemInfo, Price, CheckoutLink, EmptyCart } from "./Styles";

function Checkout({ cartItems }) {
  const [cart, setCart] = useState(cartItems);

  useEffect(() => {
    setCart(cartItems); // Oppdater cart-tilstanden når cartItems endres
  }, [cartItems]);

  // Funksjon for å fjerne en vare fra handlekurven
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart); // Oppdaterer handlekurven når et element fjernes
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Wrapper>
      <Header>Cart</Header>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty!</EmptyCart>
      ) : (
        <>
          {cart.map((item) => (
            <CartItemCardWrapper key={item.id}>
              <ItemInfo>
                <h3>{item.title}</h3>
                <Price>Price: ${item.price}</Price>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </ItemInfo>
              <Image src={item.image.url} alt={item.image.alt} />
            </CartItemCardWrapper>
          ))}
          <h2>Total: ${totalPrice}</h2>
          <CheckoutLink to="/checkout/success">Checkout</CheckoutLink>
        </>
      )}
    </Wrapper>
  );
}

export default Checkout;
