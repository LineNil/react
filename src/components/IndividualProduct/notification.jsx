// src/components/Notification.js
import React from 'react';
import { NotificationContainer, Price, Product, OriginalPrice, NotificationImage, NotificationContent } from './Styles';

function Notification({ product }) {
  const price = product.discountedPrice ? product.discountedPrice : product.price;

  return (

    <NotificationContainer>
      <NotificationImage src={product.image.url} alt={product.image.alt} />
      <NotificationContent>
        <Product>{product.title}</Product>
        <Price>${price}</Price>
        {product.discountedPrice && (
          <OriginalPrice>Original Price: ${product.price}</OriginalPrice>
        )}
      </NotificationContent>
    </NotificationContainer>
  );
}

export default Notification;
