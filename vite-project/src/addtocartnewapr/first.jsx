import React, { useState } from 'react';
import Product from './productsd';
import "./ecomcss.css"





const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const ECommerceComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const cartQuantity = cart.reduce((total, product) => total + 1, 0);
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="ecommerce-container">
      <h1>E-Commerce Website</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart ({cartQuantity})</h2>
        <ul className="cart-list">
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>{product.price}$</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total Price: {cartTotal}$</p>
      </div>
    </div>
  );
};

export default ECommerceComponent;

