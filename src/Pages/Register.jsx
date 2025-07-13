
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseurl = "https://fashion-1m73.onrender.com";
      const res = await axios.post(`${baseurl}/api/auth/register`, form);
      if (res.status === 201 || res.status === 200) {
        alert("Registered successfully!");
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Registration Form</h1>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />

      <label htmlFor="number">Contact No.:</label>
      <input type="number" id="number" value={form.number} onChange={handleChange} placeholder="Enter your number" required />

      <input type="submit" value="Register" className="submit-btn" />

      <p>Already have an Account? <Link to="/login">Login</Link></p>
    </form>
  );
}

export default Register;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// export default function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const baseUrl = 'https://fashion-1m73.onrender.com';
//     const res = await fetch(`${baseUrl}/auth/register`, {
      
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     });
//     if (res.ok) {
//       navigate('/login');
//     } else {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="register-wrapper">
//       <form onSubmit={handleSubmit} className="register-card">
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <button type="submit">Register</button>
//     </form>

//     </div>
    
//   );
// }