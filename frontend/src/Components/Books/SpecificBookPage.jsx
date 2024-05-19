import React from 'react'
import './SpecificBookPage.css'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import cart_icon from '../Assets/cart.png'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import AlertMessage from '../AlertMessage/AlertMessage'
const SpecificBookPage = () => {
  const {id} = useParams();
  const location = useLocation();
  const booksData = location.state?.booksData;
  const cartItemsFromBook = location.state?.cartItems;
  const [cartItems, setCartItems] = useState(cartItemsFromBook);
  const [showAlert, setShowAlert] = useState(false);

  const book = booksData.find((item) => item.id === parseInt(id));
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  useEffect(() => {
    setCartItems(cartItemsFromBook);
  }, [cartItemsFromBook]);
  // Function to add an item to the cart
  const addToCart = (book) => {
    const existingBookIndex = cartItems.findIndex((item) => item.id === book.id || item.id === book.bookId);

    if (existingBookIndex !== -1) {
      // Book already exists in the cart, update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingBookIndex] = {
        ...updatedCart[existingBookIndex],
        quantity: updatedCart[existingBookIndex].quantity + 1,
      };
      setCartItems(updatedCart);
    } else {
      // Book doesn't exist in the cart, add with quantity 1
      const updatedBook = { ...book, quantity: 1 };
      setCartItems([...cartItems, updatedBook]);
    }
    
  };
   const bookId = parseInt(id);
   const imgSrc = book.imgSrc;
   const name = book.name;
   const author = book.author;
   const price = book.price;
   const handleAddToCart = () => {
     addToCart({bookId, imgSrc, name, author, price});
     localStorage.setItem('cartItems', JSON.stringify([...cartItems, { bookId, imgSrc, name, author, price, quantity: 1 }]));
     setShowAlert(true);
        setTimeout(() => {
           setShowAlert(false);
      }, 2000);

   }

  //Function to remove items from cart
  const removeFromCart = (bookId) => {
      const updatedCart = cartItems.filter((item) => item.id !== bookId);
      setCartItems(updatedCart);
  };
  //Function to update quantity of items in cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        const validatedQuantity = newQuantity < 1 ? 1 : newQuantity > 10 ? 10 : newQuantity;
        return { ...item, quantity: validatedQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
  
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace(/\D/g, ''));
      totalPrice += itemPrice * item.quantity;
    });
  
    return totalPrice.toFixed(2); // Assuming the prices are in string format
  };
  const total = Math.floor(calculateTotalPrice());
  return (
    <div>
      {showAlert && <AlertMessage/>}
        <div className='Header'>
            <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/">Logout</Link></li>
                <li><button className='cartButton'><img src={cart_icon} alt="" className='cartIcon'onClick={toggleCartVisibility}/></button></li>
            </ul>
        </div>
        
        <div className='book-detail-info'>
        
          <img src={book.imgSrc} alt="" />
          <div className='book-details'>
            <h2>{book.name}</h2>
            <p className='book-author'><span style={{textDecoration: 'underline'}}>Author</span>: {book.author}</p>
            <p className='book-description'><span style={{textDecoration: 'underline'}}>Description</span>: {book.description}</p>
            <p className='book-price'><span style={{textDecoration: 'underline'}}>Price</span>: <span style={{fontSize: '24px', color: 'rgb(234, 157, 14)'}}>{book.price}</span></p>
            <div className='addToCartButton' onClick={handleAddToCart}>
              Add to <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
          </div>
        </div>

        {cartVisible && (<div className='shopping-cart'>
            <ShoppingCart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} closeCart={toggleCartVisibility} updateQuantity={updateQuantity} total={total}/>
        </div>
        )}
    </div>
  )
}

export default SpecificBookPage
