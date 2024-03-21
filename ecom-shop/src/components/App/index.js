// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../Layout/index";
import ProductList from "../Productlist/index";
import Contact from "../Contact";
import IndividualProduct from "../IndividualProduct/index";
import Checkout from "../Checkout";
import useProductData from "../ProductData";
import CartOverlay from "../CartOverlay";
import Success from "../CheckoutSuccessjsx";

function App() {
  const products = useProductData();
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const emptyCart = () => {
    setCart([]);
    setCartItemCount(0);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemCount(cartItemCount + 1);
    console.log("cartItemCount after adding product:", cartItemCount);
  };

  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/product/:id" element={<IndividualProduct products={products} addToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cart} />} />
            <Route path="/checkout/success" element={<Success emptyCart={emptyCart} updateCartItemCount={setCartItemCount} />} />
          </Routes>
          <CartOverlay cartItems={cart} cartItemCount={cartItemCount} />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;

