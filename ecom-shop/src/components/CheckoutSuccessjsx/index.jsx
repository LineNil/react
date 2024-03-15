import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Success({ emptyCart }){

useEffect(() => {
  emptyCart();
}, [emptyCart]);

  return(
    <div>
      <p>success</p>
        <Link to="/">Produkter</Link>
        </div>
  );
}

export default Success