import { useEffect, useState } from "react";
import APIUrl from "../Api/index";

function useProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(APIUrl);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  return products;
}

export default useProductData;
