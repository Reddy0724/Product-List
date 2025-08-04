import React from 'react';
const CartSummary = ({cart}) => {
  const itemCounts = {};

  cart.forEach((item) => {
    if (itemCounts[item.id]) {
      itemCounts[item.id].quantity += 1;
    } else {
      itemCounts[item.id] = { ...item, quantity: 1 };
    }
  });

  const cartItems = Object.values(itemCounts);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return(
    <div className='cart-summary'>
      <h3>Cart Summary</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${totalPrice}</h4>
    </div>
  );
};


export default CartSummary;