import { useState } from 'react';

export default function Cart() {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems(prevItems => [...prevItems, product]);
  }

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem product={item} />
      ))}
    </div>
  );

}

function CartItem({ product }) {
  // display product data
}