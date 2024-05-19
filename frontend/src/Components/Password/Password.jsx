import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import './Password.css'
const Password = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');
    const location = useLocation();
    const userId = location.state?.userId;
    const handleUpdate = async () => {
        if(password === '' || newPassword === '' || newPasswordAgain === '') {
            alert("Please fill in completely !"); 
            return;
        } 
        if(newPassword !== newPasswordAgain) {
            alert("Your new password is incorrect !")
            return;
        }
        try {
            const response = await fetch('api/password', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userId, password}),
            });
            if(response.ok) {
                alert("Update successful!");
            } else {
                alert("Update failed. Please try again!");
            }
        } catch (error) {
            console.log("Error: ", error);
            alert("Error occurred. Please try again later!");
        }
    }
  return (
    <div>
      <div className='Header'>
          <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/Account">Account</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
        <div className='password-info'>
          <form action="" className='password-update'>
            <label className='change-psw-label'>Change password</label>
            <label htmlFor="password">Enter your previous password (*): </label>
            <input type="password" id='prevPassword' onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="password">Enter your new password (*): </label>
            <input type='password' id="newPassword" onChange={(e) => setNewPassword(e.target.value)}></input>

            <label htmlFor="address">Enter your new password again (*): </label>
            <input type='password' id="newPasswordAgain" onChange={(e) => setNewPasswordAgain(e.target.value)}></input>

          </form>
          <button className='update-button' onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}

export default Password
