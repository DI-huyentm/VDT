import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const validateSignUp = async () => {
        if(name === '' || email === '' || password === '') {
            alert("Please fill in completely !");
            return;
        }
        try {
           const response = await fetch('api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: name, email: email, password: password}),
            });
            if(response.ok) {
                alert('Sign up successfully!');
                navigate('/Login');
            } else {
                alert('Sign up failed. Please check your information and try again!');
            }
        } catch (error) {
            console.log('Error in sign up: ', error);
            alert('Please try again later!');
        }
    };
    
  return (
    <div className='BackgroundImg'>
            <div className="container">
                <div className="header">
                    <div className="text">Sign up</div>
                    <div className="underline"></div>

                </div>
                <div className="inputs">
                    <div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='Name' className='name-input' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email' className='email-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                            <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>    
                <div className='having-account'>Already have an account? <button className='log-in'><Link to="/Login" style={{textDecoration:'none', color: 'rgb(234, 157, 14)'}}>Log in</Link></button></div>    
                <div className="submit-container">
                    <button className='submit' onClick={validateSignUp}>Sign up</button>
                </div>

            </div>
        </div>
  )
}

export default Signup
