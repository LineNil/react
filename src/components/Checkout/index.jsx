import React from "react";
import { Header, ItemTitle, CartItemCardWrapper, Image, Wrapper, ItemInfo, Price, CheckoutLink, EmptyCart } from "./Styles";

function Checkout({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Wrapper>
      <Header>Cart</Header>
      {cartItems.length === 0 ? (
        <EmptyCart>Your cart is empty!</EmptyCart>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItemCardWrapper key={item.id}>
              <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <Price>Price: ${item.price}</Price>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </ItemInfo>
              <Image src={item.image.url} alt={item.image.alt} />
            </CartItemCardWrapper>
          ))}
          <h2>Total: ${totalPrice}</h2>
          <CheckoutLink to="/checkout/success">Checkout test</CheckoutLink>
        </>
      )}
    </Wrapper>
  );
}

export default Checkout;
