import React, { useEffect, useState } from "react";
import ProductLi from "../components/product_li";
import axios from "axios";
import {products as dummy_products} from "../constants/dummy";


export default function ProductsList(probs) {

  const baseUrl = "http://" + (process.env.BACKEND_HOST || 'localhost:8000') + "/api/products/";
  const [products, setProducts] = useState(dummy_products);

  let params = {};
  if ('category' in probs){
    params['category'] = probs['category'];
  } else if ('search' in probs){
    params['search'] = probs['search'];
  }
  
  useEffect(() => {
    console.log(baseUrl);
    axios.get(baseUrl, {
      params: params
    })
      .then(res => {
        setProducts(res.data);
      })
  });
  <ProductLi
  key={product.id} 
  product={product}
  addToCart={addToCart} 
/>
  return (
    <div className="container">
      <h1>Products</h1>

      <ul className="products-list">
        {products.map(product => (
          <ProductLi 
            key={product.id}
            product={product}
          />
          
        ))}
      </ul>
    </div>
  );
}
