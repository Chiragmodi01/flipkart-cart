import React from 'react';
import './App.css';

function Header() {

  return (
    <div className="Header">
      <nav>
        <h1 className="brand">Flipkart</h1>
        <input className="input" type="text" placeholder="Search for products, brands and more"/>
        <h2 className="login">Login</h2>
        <h2 className="more">More</h2>
      </nav>
    </div>
  );
}

export default Header;
