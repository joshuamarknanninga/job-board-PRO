import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create appropriate CSS

const Header = () => {
  return (
    <header className="header">
      <h1>Job Board</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
