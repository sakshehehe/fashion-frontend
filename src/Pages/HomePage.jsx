// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // You'll create this CSS file next

function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <h1 className="navbar-title">Fashion Inventory</h1>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Fashion Inventory</h2>
          <p>Manage your fashion products with ease.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn">Register</Link>
            <Link to="/login" className="btn secondary">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
