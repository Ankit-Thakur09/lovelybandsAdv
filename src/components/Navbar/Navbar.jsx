// import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="lovely.png" alt="" /> */}
        lovely bands
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <img src="search-icon.webp" alt="Search" className="search-icon" />
        </button>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
          <Link to="/custom-lanyard">Custom</Link>
          </li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-user">
        
        <a href="#login">Login</a>
        <a href="#register">Register</a>
      </div>
      <div className="navbar-cart">
        <a href="#cart">
          <img src="cart-icon.png" alt="Cart" className="cart-icon" />
          <span className="cart-count">0</span>
        </a>
      </div>
      
    </nav>
    <div >
      <p style={{textAlign:'center'}}>  🎉Special 10% discount for new users    🎉</p>
    </div>
    </>
  );
}

export default Navbar;