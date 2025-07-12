import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    let baseurl="https://fashion-1m73.onrender.com"
    axios.get(`${baseurl}/wishlist`, {
      headers: { Authorization: token }
    })
    .then((response) => {
      setWishlist(response.data);
    })
    .catch((error) => {
      console.error('Error fetching wishlist:', error);
    });
  }, [token]);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map(p => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
