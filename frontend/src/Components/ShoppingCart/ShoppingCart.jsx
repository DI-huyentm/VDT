import React from 'react';
import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({ cartItems, addToCart, removeFromCart, closeCart , updateQuantity, total, userId}) => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate('/Shipping', {state: {cartItems, total, userId}})
  };
  return (
    <div className='shopping-cart'>
      <div className='cart-header'>
        <h2>Shopping cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <p>Maximum number of one type of book: 10</p>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
            <div className="cart-item-actions">
              <input
                type="number"
                value={item.quantity} 
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} // Implement updateQuantity function
              />
              <button onClick={() => removeFromCart(item.id)}> <FontAwesomeIcon icon={faTrash}/> </button>
            </div>
          </div>
          ))}
        </div>
      )}
      <div className='total-price'>Total price: <span>{total} VND</span></div>
    
    
      {cartItems.length === 0 ? (
        <div className='cart-footer'>
          <button className='close-btn' onClick={closeCart}>
            Close
          </button>
        </div>
      ) : (
        <div className='cart-footer'>
          <button className='checkout' onClick={handleCheckOut}>
            Check out
          </button>
          <button className='close-btn' onClick={closeCart}>
            Close
          </button>
        </div>
      )}


    </div>
    
  );
};

export default ShoppingCart;
