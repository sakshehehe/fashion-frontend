import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    let baseurl="https://fashion-1m73.onrender.com"
    axios.get(`${baseurl}/products`, {
      headers: { Authorization: token }
    })
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, [token]);

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p._id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="product-price">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
