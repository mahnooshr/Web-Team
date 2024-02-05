import React from 'react';

const CartItem = ({ id, product_name, image, price, number }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={product_name} />

      <div>
        <h4>{product_name}</h4>
        <p>${price}</p>
        <p>Number: {number}</p>
        <button onClick={() => onIncrease(id)}>Increase</button>
        <button onClick={() => onDecrease(id)}>Decrease</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
