import React from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews";


function IndividualProduct({ products,addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      {product.discountedPrice && (
        <div>
          <p>Discounted Price: ${product.discountedPrice}</p>
          <p>Discount: {calculateDiscount(product.price, product.discountedPrice)}%</p>
          <p>Description: {product.description}</p>
        </div>
      )}
      <Reviews reviews={product.reviews} />
      <button onClick={handleAddToCart}>Add to cart</button>
      <img src={product.image.url} alt={product.image.alt} />
    </div>
  );
}

function calculateDiscount(originalPrice, discountedPrice) {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2);
}

export default IndividualProduct;
