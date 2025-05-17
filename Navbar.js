import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🍕Pizza Love💖</h1>
      <div className="nav-links">
        <Link to="/">Меню🍽️</Link>
        <Link to="/cart">Кошик🛒</Link>
        <Link to="/order">Замовити📝</Link>
      </div>
    </nav>
  );
}

export default Navbar;