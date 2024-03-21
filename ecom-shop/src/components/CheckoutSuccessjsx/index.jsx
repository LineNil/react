// Success.jsx
import React, { useEffect } from "react";
import { SuccessContainer, SuccessContent, Message, ProductsLink } from "./Styles";

function Success({ emptyCart, updateCartItemCount }) {
  useEffect(() => {
    emptyCart();
    updateCartItemCount(0);
  }, [emptyCart, updateCartItemCount]);

  return (
    <SuccessContainer>
      <SuccessContent>
        <Message>Your order has been successfully placed!</Message>
        <ProductsLink to="/">Back to products</ProductsLink>
      </SuccessContent>
    </SuccessContainer>
  );
}

export default Success;
