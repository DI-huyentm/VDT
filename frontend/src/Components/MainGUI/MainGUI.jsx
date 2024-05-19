import React from 'react'
import './MainGUI.css'
import { Link } from 'react-router-dom';
const MainGUI = () => {
  return (
  
    <div>
      <div className="Container">
        <div className='Header'>
            <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </div>
        <div className='Center'>
            <div className='topSlogan'>Best Books Available</div>
            <div className='bottomSlogan'>Where you can find the best books</div>
        </div>
      </div>
      
    </div>

  );
}

export default MainGUI;
