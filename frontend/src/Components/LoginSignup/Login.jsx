import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup = () => {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const validateLogIn = async () => {
        if(email === '' || password === '') {
            alert("Please fill in both email and password");
            return;
        }
        try {
            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password}),
            });
            if(response.ok) {
                alert('Login successful!');
                const userData = await response.json();
                const userId = userData.data.current.currentUser.id;
                const name = userData.data.current.currentUser.name;
                const address = userData.data.current.currentUser.address;
                const phoneNumber = userData.data.current.currentUser.phone;
                console.log(userData);
                console.log(name);
                console.log(address);
                console.log(phoneNumber);
                navigate('/Books', {state: {userId: userId, name: name, email: email, address: address, phoneNumber: phoneNumber}});
            } else {
                alert('Login failed. Please check your email or password!');
            }
        } catch (error) {
            console.log('Error in login: ', error);
            alert('Please try again later!')
        }
    };
    return (
        <div className='BackgroundImg'>
            <div className="container">
                <div className="header">
                    <div className="text">Log in</div>
                    <div className="underline"></div>

                </div>
                <div className="inputs">
                    <div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email' className='email-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="forgot-password">Forgot password? <span>Click here!</span></div>
                    </div>
                </div>        
                <div className="submit-container">
                    <button className='submit' onClick={validateLogIn}>Login</button>
                </div>

            </div>
        </div>
    )

}

export default LoginSignup