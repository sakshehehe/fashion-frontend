
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

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
      let baseurl="https://fashion-1m73.onrender.com"
      const res = await axios.post(`${baseurl}/register`, form);
      if (res.status === 201 || res.status === 200) {
        alert("Registered successfully!");
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed!");
      console.error(err);
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