
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3  from './images/product3.png';
import product4 from './images/product4.png';

import './Product.css';
import React, { useState } from 'react';
import CartSummary from './CartSummary';
import Menu from './Menu';


const ProductListing = ({ cart, setCart, setRecommendation }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 25, image: product1 },
    { id: 2, name: 'Product 2', price: 30, image: product2 },
    { id: 3, name: 'Product 3', price: 32, image: product3 },
    { id: 4, name: 'Product 4', price: 40, image: product4 }
  ];

  const clickHandler = (product) => {
    setCart([...cart, product]);
    const otherProducts = products.filter(p => p.id !== product.id);
    const randomProduct = otherProducts[Math.floor(Math.random() * otherProducts.length)];

    setRecommendation(randomProduct);

  };

  return (
    <div className='product-details'>
      <label>Product List</label>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          <p>
            {product.name} - ${product.price}
            <button onClick={() => clickHandler(product)}>+</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;


