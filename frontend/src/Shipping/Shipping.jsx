import React, { useState } from 'react'
import './Shipping.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Shipping = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const total = location.state?.total;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  var sale_id = null
  const totalQuantity = cartItems.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);
  const handleOrder = async () => {
    console.log(cartItems);
    if(name === '' || address === '' || phoneNumber === '') {
      alert('Please fill in completely before ordering!');
      return;
    }
    //Fetch to backend and receive sale_id
    try {
      const userId = location.state?.userId;
      const response = await fetch('api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: userId, total: total, address: address, phoneNumber: phoneNumber}),
      });
      if (response.ok) {
        alert('Ordered successfully!'); 
        const saleData = await response.json();
        console.log(saleData);
        sale_id = saleData.data.new_sale.id;
        navigate('/Books');
      } else {
        alert('Failed to order. Please try again.');
      }
    } catch (error) {
      console.log("Error in ordering: ", error);
      alert('Please try again later!');
    }
    //Fetch sale_id and item to backend
    try {
      const response = await fetch('api/saledetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookDetails: cartItems, sale_id: sale_id}),
      });
      if (response.ok) {
        console.log('Added to table sale details')
      } else {
        alert('Failed to add to table sale details. Please try again.');
      }
    } catch (error) {
      console.log("Error in adding to table: ", error);
      alert('Please try again later!');
    }
  }
  console.log(cartItems)
  return (
    <div className='shipping-container'>
      <div className='contact-information'>
        <h2 className='title'>Shipping information</h2>
        <form action="" className='shipping-information'>
          <label htmlFor="fullName">Enter your full name: </label>
          <input type="text" id='fullName' placeholder='Your full name' value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="address">Enter your address: </label>
          <textarea name="address" id="address" placeholder='Your address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          <label htmlFor="phoneNumber">Enter you phone number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </form>
        <button className='order-button' onClick={handleOrder}>Order</button>
      </div>
      <div className='order-summary'>
        <h2 className='title'>Order summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className='order-item'>
            <img src={item.imgSrc} alt={item.name} className='order-item-image'/>
            <div className='order-item-details'>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <p className='total-quantity'>Total quantity: {totalQuantity} products</p>
        <p className='total-price'>Total price:<span style={{color: 'rgb(234, 157, 14)'}}> {total} VND</span> </p>
      </div>
    </div>
  )
}

export default Shipping
