import React, { useEffect } from "react";
import { SuccessContainer, SuccessContent, Message, MessageLine2, ProductsLink } from "./Styles";

function Success({ emptyCart, updateCartItemCount }) {
  useEffect(() => {
    emptyCart();
    updateCartItemCount(0);
  }, []);

  return (
    <SuccessContainer>
      <SuccessContent>
        <Message>Congratulations on your purchase!</Message>
        <MessageLine2>Explore more of our products and find your next favorite item. Happy shopping!</MessageLine2>
        <ProductsLink to="/">Back to products</ProductsLink>
      </SuccessContent>
    </SuccessContainer>
  );
}

export default Success;
