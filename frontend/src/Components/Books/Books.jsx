import React, {useState, useRef, useEffect} from 'react'
import './Books.css'
import { Link , Navigate, useLocation, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import cart_icon from '../Assets/cart.png'
import BookData from './BookData'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
const Books = () => {
    const booksData = [
        {
          id: 1,
          imgSrc: 'https://www.goodbooksinthewoods.com/pictures/43378.jpg?v=1334241340',
          name: 'Empire Of The Senseless',
          author: 'Acker Kathy',
          price: '170000 VND',
        },
        {
          id: 2,
          imgSrc: 'https://m.media-amazon.com/images/I/71G-8a7RpKL._AC_UF1000,1000_QL80_.jpg',
          name: 'In Memoriam To Identity',
          author: 'Acosta Oscar Zeta',
          price: '210000 VND',
        },
        {
          id: 3,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/HawklineMonster.JPG/220px-HawklineMonster.JPG',
          name: 'Art Attack: A Short Cultural History of the Avant-Garde',
          author: 'Richard Brautigan',
          price: '130000 VND',
        },
        {
          id: 4,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Cover_of_Richard_Brautigan%27s_June_30th%2C_June_30th.jpg',
          name: 'Gang Of Souls: A Generation Of Beat Poets',
          author: 'Davis Stephen',
          price: '100000 VND',
        },
        {
          id: 5,
          imgSrc: 'https://rareamericana.cdn.bibliopolis.com/pictures/3732070_1.jpg?v=1662664912',
          name: 'Women Of The Left Bank: Paris 1900-1940',
          author: 'Franck Dan',
          price: '100000 VND',
        },
        {
          id: 6,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/2/24/RommelDrivesOnDeepIntoEgypt.jpg',
          name: 'The Goncourt Brothers',
          author: 'Franklin Benjamin V ed.',
          price: '220000 VND',
        },
        {
          id: 7,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SombreroFallout.jpg',
          name: 'My Life and Loves in Greenwich Village',
          author: 'Frees Paul',
          price: '150000 VND',
        },
        {
          id: 8,
          imgSrc: 'https://1960sdaysofrage.files.wordpress.com/2017/06/brautigancover.jpeg',
          name: 'My Sisters Hand In Mine',
          author: 'French Warren',
          price: '270000 VND',
        },
        {
          id: 9,
          imgSrc: 'https://mpd-biblio-covers.imgix.net/9780312277109.jpg?w=300',
          name: 'Two Serious Ladies',
          author: 'Fritz James',
          price: '100000 VND',
        },
        {
          id: 10,
          imgSrc: 'https://m.media-amazon.com/images/I/81OBVqzun9L._AC_UF894,1000_QL80_.jpg',
          name: 'Let It Come Down',
          author: 'Conners Peter',
          price: '180000 VND',
        },
        {
          id: 11,
          imgSrc: 'https://m.media-amazon.com/images/I/61I7IH8sryL._AC_UF1000,1000_QL80_.jpg',
          name: 'Stories of Paul Bowles',
          author: 'Cook Bruce',
          price: '170000 VND',
        },
        {
          id: 12,
          imgSrc: 'https://pictures.abebooks.com/inventory/md/md31335414127.jpg',
          name: 'Paris By Night',
          author: 'Coolidge Clark',
          price: '290000 VND',
        },
        {
          id: 13,
          imgSrc: 'https://m.media-amazon.com/images/I/81T3dFGRkpL._AC_UF1000,1000_QL80_.jpg',
          name: 'Sacred Band: A Litany Of Ingratitude',
          author: 'Christopher Tom',
          price: '180000 VND',
        },
        {
          id: 14,
          imgSrc: 'https://image.isu.pub/110824040543-f1b9383d35c04ca1aa5d77569aa26cf0/jpg/page_1.jpg',
          name: 'Engendering Flood: Book One of Dust Shall be the Serpents Fool (Cantos I-IV)',
          author: 'Eastman Max',
          price: '270000 VND',
        },
        {
          id: 15,
          imgSrc: 'https://m.media-amazon.com/images/I/71jG9hYpnSL._AC_UF1000,1000_QL80_.jpg',
          name: 'Man-Fate: The Swan Song Of Brother Antonius',
          author: 'Easton Malcolm',
          price: '270000 VND',
        },
        {
          id: 16,
          imgSrc: 'https://m.media-amazon.com/images/I/91mEWmXCZNL._AC_UF1000,1000_QL80_.jpg',
          name: 'Prodigious Thrust Turkish',
          author: 'Edington Stephen D.',
          price: '100000 VND',
        },
        {
          id: 17,
          imgSrc: 'https://m.media-amazon.com/images/I/31nHS+orHqL._AC_UF1000,1000_QL80_.jpg',
          name: 'River-Root: A Syzygy',
          author: 'Fink Larry',
          price: '160000 VND',
        },
        {
          id: 18,
          imgSrc: 'https://m.media-amazon.com/images/I/51+o3l4zwML._AC_UF1000,1000_QL80_.jpg',
          name: 'Residual Years',
          author: 'Fitch Noel Riley',
          price: '230000 VND',
        },
        {
          id: 19,
          imgSrc: 'https://m.media-amazon.com/images/I/514Qc8vDyFL._AC_UF1000,1000_QL80_.jpg',
          name: 'Single Source: The Early Poems Of William Everson [1934-1940]',
          author: 'Ford Hugh',
          price: '170000 VND',
        },
        {
          id: 20,
          imgSrc: 'https://m.media-amazon.com/images/I/51yvGHV1B8L._AC_UF350,350_QL50_.jpg',
          name: 'Veritable Years: Poems 1949-1966 Volume II Of The Collected Poems',
          author: 'Ford James L.',
          price: '200000 VND',
        }
        
      ];
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State to store search query
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.userId;
    const name = location.state?.name;
    const email = location.state?.email;
    const address = location.state?.address;
    const phoneNumber = location.state?.phoneNumber;
    const booksRef = useRef(null);

    const updateCartItemsToLocalStorage = (updatedCartItems) => {
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
  
    useEffect(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);
    // Function to add an item to the cart
    const addToCart = (book) => {
      const existingBookIndex = cartItems.findIndex((item) => item.id === book.id);

      if (existingBookIndex !== -1) {
        // Book already exists in the cart, update quantity
        const updatedCart = [...cartItems];
        updatedCart[existingBookIndex] = {
          ...updatedCart[existingBookIndex],
          quantity: updatedCart[existingBookIndex].quantity + 1,
        };
        setCartItems(updatedCart);
        updateCartItemsToLocalStorage(updatedCart);
      } else {
        // Book doesn't exist in the cart, add with quantity 1
        //const updatedBook = { ...book, quantity: 1 };
        //setCartItems([...cartItems, updatedBook]);
        const updatedCart = [...cartItems, {...book, quantity: 1}];
        setCartItems(updatedCart);
        updateCartItemsToLocalStorage(updatedCart);
        
      }
    };
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
    //Function to calculate total price
    const calculateTotalPrice = () => {
      let totalPrice = 0;
    
      cartItems.forEach((item) => {
        const itemPrice = parseFloat(item.price.replace(/\D/g, ''));
        totalPrice += itemPrice * item.quantity;
      });
    
      return totalPrice.toFixed(2); // Assuming the prices are in string format
    };
    const total = Math.floor(calculateTotalPrice());
    //Function to search books
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Filter books based on search query
    const filteredBooks = booksData.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleSearchButtonClick = () => {
      // Scroll to the books section after search button click
      if (booksRef.current) {
        booksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    //Function to set cart's visibility
    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };
    console.log(setCartItems);
    //Function to empty cartItems after press Logout
    const handleLogOut = () => {
      localStorage.removeItem('cartItems');
      setCartItems([]);
    }
    const handleAccount = () => {
      navigate('/Account', {state: {userId, name, email, address, phoneNumber}})
    }
  return (
    <div className='BookContainer'>
        <div className='Header'>
            <div className='brandName'>Bookstore <span className='spanBrandname'>ABC</span></div>
            <ul className='nav'>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/account" onClick={handleAccount}>Account</Link></li>
                <li><Link to="/" onClick={handleLogOut}>Logout</Link></li>
                <li><button className='cartButton'><img src={cart_icon} alt="" className='cartIcon'onClick={toggleCartVisibility}/></button></li>
            </ul>
        </div>
        <div className='searchBar'>
            <h2 className='searchWord'>Find the <span className='spanBrandname'>Books</span> you need</h2>
            <div className='searchRegister'>
                <input type="text" className='searchInput' placeholder='Search books...' value={searchQuery} onChange={handleSearchInputChange} />
                <button className='searchButton' onClick={handleSearchButtonClick}> <FontAwesomeIcon icon={faSearch}/> </button>
            </div>
        </div>
        <div className='products' ref={booksRef}>
            {filteredBooks.map((book) => (
                <BookData
                    key={book.id} 
                    id={book.id}
                    imgSrc={book.imgSrc}
                    name={book.name}
                    author={book.author}
                    price={book.price}
                    addToCart={addToCart}
                    cartItems={cartItems}
                    total={total}
                    userId={userId}
                />
            ))}
            
            <div className='Clear'></div>
        </div>
        {cartVisible && (<div className='shopping-cart'>
            <ShoppingCart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} closeCart={toggleCartVisibility} updateQuantity={updateQuantity} total={total}/>
        </div>
        )}
        <div className='footer'>
            <div class="info">
                <h2 class="info-heading">ABOUT US</h2>
                <p class="info-text">
                    Welcome to Bookstore ABC, your one-stop destination for all things literary. We are dedicated to providing a unique and enriching experience for book lovers of all ages and interests. At Bookstore ABC, we believe in the power of books to inspire, educate, and entertain, and we strive to create a haven where bibliophiles can immerse themselves in the world of words.
                    Established in 2021, Bookstore ABC has been serving the community for over 2 years. Our bookstore is located in the heart of Hanoi, Vietnam, and we take pride in being a local, independent bookstore that supports and fosters a love for reading in our community.
                </p>
            </div>
            <div className='info-connect'>
                <h2 class="info-heading">Contact us</h2>
                <p class="info-heading">Hotline: 0123456789</p>
                <p class="info-heading">Facebook: Bookstore ABC</p>
                <p class="info-heading">Instagram: Bookstore ABC</p>
                <p class="info-heading">Address: Dai Co Viet, Hai Ba Trung, Ha Noi</p>
            </div>
        </div>
    </div>
  )
}

export default Books
