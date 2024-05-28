import React, { useState, useEffect } from "react";
import useProductData from "../ProductData";
import { Button, ViewButton, ProductCard, ProductImage, ProductTitle, GridContainer, StyledLink } from "./Styles"; // Importer GridContainer fra Styles.jsx
import Search from "../Search/";
import Notification from "../IndividualProduct/notification";

function ProductList({ addToCart }) {
  const allProducts = useProductData();
  const [products, setProducts] = useState(allProducts);
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const handleSearch = (searchTerm) => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(product);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2500); // 2.5s før fadeOut starter
    setTimeout(() => setNotification(null), 3000); // 3s før notifikasjonen fjernes helt
  };

  return (
    <div>
      <Search handleSearch={handleSearch} /> 
      {notification && <Notification product={notification} isVisible={isVisible} />}
      <GridContainer> 
        {products.map((product) => (
          <div key={product.id}>
            
              <ProductCard>
              <StyledLink to={`/product/${product.id}`}>
                <ProductImage src={product.image.url} alt={product.image.alt} />
                <ProductTitle>{product.title}</ProductTitle>
                </StyledLink>
                {product.discountedPrice ? (
              <div>
                <p>Price: ${product.discountedPrice}</p>
                <p>Discount: {calculateDiscount(product.price, product.discountedPrice)}%</p>
              </div>
            ) : (
              <p>Price: {product.price}</p>
            )}
            
            <ViewButton  to={`/product/${product.id}`}>View</ViewButton>
            <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
              </ProductCard>
            

          </div>
        ))}
      </GridContainer>
    </div>
  );
}

function calculateDiscount(originalPrice, discountedPrice) {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2);
}

export default ProductList;
