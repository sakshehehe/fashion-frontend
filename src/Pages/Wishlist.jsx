// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../AuthContext';

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);
//   const { token } = useAuth();

//   useEffect(() => {
//     let baseurl="https://fashion-1m73.onrender.com"
//     axios.get(`${baseurl}/wishlist`, {
//       headers: { Authorization: token }
//     })
//     .then((response) => {
//       setWishlist(response.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching wishlist:', error);
//     });
//   }, [token]);

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       <ul>
//         {wishlist.map(p => (
//           <li key={p._id}>{p.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import '../App.css';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { token } = useAuth();
  const baseurl = "https://fashion-1m73.onrender.com";

  useEffect(() => {
    if (!token) return;

    axios.get(`${baseurl}/api/wishlist`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setWishlistItems(res.data);
    })
    .catch((err) => {
      console.error("Error loading wishlist:", err.response?.data || err.message);
    });
  }, [token]);

  // DELETE handler
  const removeFromWishlist = async (productId) => {
    try {
      await axios.delete(`${baseurl}/api/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Remove from UI
      setWishlistItems(prev => prev.filter(item => item._id !== productId));
    } catch (err) {
      console.error("Error deleting from wishlist:", err.response?.data || err.message);
      alert("Failed to remove item.");
    }
  };

  return (
    <div className="products-container">
      <h2>My Wishlist</h2>

      <div className="product-grid">
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <div className="product-card" key={item._id}>
              <img src={item.img} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="product-price">₹{item.price}</p>
              <button
                className="wishlist-remove-btn"
                onClick={() => removeFromWishlist(item._id)}
              >
                🗑 Remove
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
