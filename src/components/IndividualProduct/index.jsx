import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews";
import Notification from "./notification";
import { ProductContainer, ImageContainer, Img, ReviewsContainer, DetailsContainer, Button, NoReviews } from "./Styles";


function IndividualProduct({ products,addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
    setNotification(product);
    setTimeout(() => setNotification(null), 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {notification && <Notification product={notification} />}
   <ProductContainer>
      <ImageContainer>
        <Img src={product.image.url} alt={product.image.alt} />
      </ImageContainer>
      <DetailsContainer>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        {product.discountedPrice && (
          <div>
            <p>Discounted Price: ${product.discountedPrice}</p>
            <p>Discount: {calculateDiscount(product.price, product.discountedPrice)}%</p>
            <p>Description: {product.description}</p>
          </div>
        )}
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </DetailsContainer>
      <ReviewsContainer>
        {product.reviews.length > 0 ? (
          <Reviews reviews={product.reviews} />
        ) : (
          <NoReviews>No reviews on this product!</NoReviews>
        )}
      </ReviewsContainer>
    </ProductContainer>
    </div>
 
  );
}

function calculateDiscount(originalPrice, discountedPrice) {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2);
}

export default IndividualProduct;