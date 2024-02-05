import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
   
    axios.get('/api/get_cart/')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.product_name} - Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
