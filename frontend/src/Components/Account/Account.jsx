import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import './Account.css'
import AvatarAccount from '../Assets/avatarAccount.png'
const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId;
  const [name, setName] = useState(location.state?.name);
  const [email, setEmail] = useState(location.state?.email);
  const [address, setAddress] = useState(location.state?.address);
  const [phoneNumber, setPhoneNumber] = useState(location.state?.phoneNumber);
  const handlePassword = () => {
    navigate('/password', {state: {userId: userId}})
  }
  const handleUpdate = async () => {
    try {
      const response = await fetch('api/account', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, name, email, address, phoneNumber}),
      });
      if(response.ok) {
        alert('Update successful');
      } else {
        alert('Update failed. Please try again!');
      }
    } catch (error) {
      console.log('Error: ', error);
      alert('Error occurred. Please try again later!');
    }
  }
  return (
    <div>
        <div className='Header'>
          <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/password "onClick={handlePassword}>Password</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>

        <div className='user-info'>
          <img src={AvatarAccount} alt="" />
          <form action="" className='user-information'>
            <label htmlFor="fullName">Your full name (*): </label>
            <input type="text" id='fullName' defaultValue={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Your email (*): </label>
            <input type='email' id="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}></input>

            <label htmlFor="address">Your address: </label>
            <input type='address' id="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>

            <label htmlFor="phoneNumber">Your phone number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" defaultValue={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </form>
          <button className='update-button' onClick={handleUpdate}>Update</button>
        </div>

    </div>
  )
}

export default Account
