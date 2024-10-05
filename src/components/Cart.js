import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {

const removeFromCart = (id) => {
  fetch(`http://localhost:5000/cart/${id}`, {
  method: 'DELETE',
  })
  .then(response => {
  if (response.ok) {
  // Filter out the removed item locally in the frontend
    const updatedCartItems = cartItems.filter(item => item.product.id !== id);
    setCartItems(updatedCartItems); // Update the cart state and trigger a re-render
    } else {
      console.error('Error removing item from cart');
    }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
        ) : (
      <ul>
        {cartItems.map(item => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity} x ${item.product.price}
            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Cart;