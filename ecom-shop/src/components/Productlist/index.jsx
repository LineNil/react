import React, { useState, useEffect } from "react";
import ProductData from "../ProductData/";
import Search from "../Search/";

function ProductList() {
  const allProducts = ProductData();
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
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image.url} alt={product.image.alt} />
            <h2>{product.title}</h2>
            {product.discountedPrice ? (
              <div>
                <p>Price: ${product.discountedPrice}</p>
                <p>Discount: {calculateDiscount(product.price, product.discountedPrice)}%</p>
              </div>
            ) : (
              <p>Price: {product.price}</p>
            )}
          </div>
        ))}
      
    </div>
  );
}

function calculateDiscount(originalPrice, discountedPrice) {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2);
}

export default ProductList;
