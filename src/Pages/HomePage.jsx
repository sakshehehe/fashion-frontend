// src/HomePage.jsx
// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">FashionHub</div>
        <div className="nav-links">
          <Link to="/register" className="nav-btn">Register</Link>
          <Link to="/login" className="nav-btn">Login</Link>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to FashionHub</h1>
          <p>Your one-stop solution for managing fashion inventory</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn primary-btn">Get Started</Link>
            <Link to="/login" className="btn secondary-btn">Already a member? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
