import React, { useEffect, useState } from "react";
import axios from "axios";
 
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

 


  useEffect(() => {
    debugger
    
    axios.get("http://localhost:5067/api/products")    
      .then((response) => {
       setProducts(response.data);
         
      })
       .catch((error) => console.error("Error fetching products:", error));
}, []);
return (
  <div className="container" >
    <h2 className="mb-4 text-center" >Our Pickles</h2>
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 text-center"  key={product.id}>
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.imageUrl}
            alt="Mango Pickle"
          />
        </div>
      ))}
    </div>
  </div>
);};

export default Products;
