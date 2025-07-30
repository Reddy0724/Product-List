
import './Product.css';
import React, { useState } from 'react';
import CartSummary from './CartSummary';

const ProductListing = () =>{
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 25 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 32 },
    { id: 4, name: 'Product 4', price: 40 }
  ];
  const clickHandler = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className='container'>
      <div className='product-details'>
        <label>Product List</label>
        {products.map((product) => (
          <div key={product.id}>
            <p>
              {product.name} - ${product.price}
              <button onClick={() => clickHandler(product)}>+</button>
            </p>
          </div>
        ))}
      </div>

      <CartSummary cart={cart} />
    </div>
  );
};


export default ProductListing;
