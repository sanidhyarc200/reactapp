import React from 'react';

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
