import React from "react";
import { Header, CartItemCardWrapper , Image, Wrapper, ItemInfo, Price, Checkout, EmptyCart } from "./Styles";

function checkout ({ cartItems}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
   return(
    <Wrapper>
      <Header>Cart</Header>
      {cartItems.length === 0 ? (
        <EmptyCart>Your cart is empty!</EmptyCart>
      ) : (
<>
{cartItems.map((item) => (
        <CartItemCardWrapper   key={item.id}>
          <ItemInfo>
          <h3>{item.title}</h3>
          <Price>Price:${item.price}</Price>
          </ItemInfo>

          <Image src={item.image.url} alt={item.image.alt}/>
          </CartItemCardWrapper  >
      ))}
      <h2>Total: ${totalPrice}</h2>
      <Checkout to="/checkout/success">Checkout</Checkout>
      </>
        )}
    </Wrapper>

    
      

   );
}

export default checkout;