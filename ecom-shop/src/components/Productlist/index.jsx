import React, { useState, useEffect } from "react";

import useProductData from "../ProductData";
import { Button, ProductCard, ProductImage, ProductTitle, GridContainer, StyledLink } from "./Styles"; // Importer GridContainer fra Styles.jsx
import Search from "../Search/";

function ProductList({ addToCart }) {
  const allProducts = useProductData();
  const [products, setProducts] = useState(allProducts);
  
  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const handleSearch = (searchTerm) => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} /> 
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
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
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
