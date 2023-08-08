import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <Navbar cartItems={cart.length} cart={cart} />
      <div className="container mx-auto my-8">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 border rounded">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.slice(0, 50)}...</p>
                  <p className="card-text font-weight-bold">${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="fixed-bottom bg-white p-4 shadow">
          <h2 className="text-lg font-semibold">Cart</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-weight-bold">Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Products;
