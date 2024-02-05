import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CartItem from './CartItem';
import { getCart, updateCart } from '../api/cartAPI';

const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    try {
      const cart = await getCart();
      setCartItems(cart);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const handleIncrease = async (itemId) => {
    const updated = await updateCart(itemId, 'increment');
    setCartItems(updated);
  }
  
  const handleDecrease = async (itemId) => {
    const updated = await updateCart(itemId, 'decrement');
    setCartItems(updated);
  }

  const handleDelete = async (itemId) => {
    const updated = await updateCart(itemId, 'delete');
    setCartItems(updated);
  }


  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default CartPage;