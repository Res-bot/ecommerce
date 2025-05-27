import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cart/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../../component/Checkout'; // Adjust path if needed
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSelectAddress = () => {
    if (!user) {
      toast.error('Please log in to place an order!');
      return;
    }
    navigate('/address'); // Navigate to the address page
  };

  return (
    <div className="cart-page-wrapper">
      <CheckoutSteps />

      <div className="cart-content-wrapper">
        {!cartItems.length ? (
          <h2>Your cart is empty.</h2>
        ) : (
          <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.map(item => {
              const imageUrl = `http://localhost:8000/uploads/${item.image}`;
              return (
                <div key={item.cartId || item._id} className="cart-item">
                  <img src={imageUrl} alt={item.name} className="cart-image" />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Price: ${item.price}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.cartId || item._id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="cart-summary">
              <h3>Total: ${totalAmount.toFixed(2)}</h3>
              <button className="place-order-btn" onClick={handleSelectAddress}>
                Select Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
