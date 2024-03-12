import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../Layout/index";
import ProductList from "../Productlist/index";
import Contact from "../Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route path="/contact" element={<Contact />} /> {/* Legg til ruten for kontakt-siden */}
            <Route index element={<ProductList />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;

