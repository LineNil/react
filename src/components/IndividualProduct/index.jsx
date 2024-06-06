import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews";
import Notification from "./notification";
import { ProductContainer, DiscountPercentage, DiscountedPrice, DiscountContainer, ProductPrice, Title, ImageContainer, Img, ProductInfo, DetailsContainer, Button, NoReviews } from "./Styles";


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

      <DetailsContainer>
      <ImageContainer>
        <Img src={product.image.url} alt={product.image.alt} />
      </ImageContainer>

        {product.reviews.length > 0 ? (
          <Reviews reviews={product.reviews} />
        ) : (
          <NoReviews>No reviews on this product!</NoReviews>
        )}
      </DetailsContainer>
      <ProductInfo>
      <Title>{product.title}</Title>
        <ProductPrice>Price: ${product.price}</ProductPrice>
        {product.discountedPrice && (
          <DiscountContainer>
            <DiscountedPrice>Discounted Price: ${product.discountedPrice}</DiscountedPrice>
            <DiscountPercentage>Discount: {calculateDiscount(product.price, product.discountedPrice)}%</DiscountPercentage>
          </DiscountContainer>
        )}
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </ProductInfo>
    </ProductContainer>
    </div>
 
  );
}

function calculateDiscount(originalPrice, discountedPrice) {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2);
}

export default IndividualProduct;