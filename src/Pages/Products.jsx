import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();
  const baseurl = "https://fashion-1m73.onrender.com";

  useEffect(() => {
    if (!token) {
      console.log("No token found. Not fetching products.");
      return;
    }
    console.log("Token sent to backend:", token);

    axios.get(`${baseurl}/api/products`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error.response?.data || error.message);
    });
  }, [token]);

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p._id}>
            <img src={p.img} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            
            <p>{p.description}</p>
            <p className="product-price">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
