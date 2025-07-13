// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../AuthContext';


// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const { token } = useAuth();
//   const baseurl = "https://fashion-1m73.onrender.com";

//   useEffect(() => {
//     if (!token) {
//       console.log("No token found. Not fetching products.");
//       return;
//     }
//     console.log("Token sent to backend:", token);

//     axios.get(`${baseurl}/api/products`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then((response) => {
//       setProducts(response.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching products:', error.response?.data || error.message);
//     });
//   }, [token]);

//   return (
//     <div className="products-container">
//       <h2>Products</h2>
//       <div className="product-grid">
//         {products.map(p => (
//           <div className="product-card" key={p._id}>
//             <img src={p.img} alt={p.name} className="product-image" />
//             <h3>{p.name}</h3>
            
//             <p>{p.description}</p>
//             <p className="product-price">₹{p.price}</p>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../AuthContext';
// import '../App.css'; // keep using your global styling

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('All');
//   const [sortOrder, setSortOrder] = useState('default');
//   const { token } = useAuth();
//   const baseurl = "https://fashion-1m73.onrender.com";

//   useEffect(() => {
//     if (!token) return;

//     axios.get(`${baseurl}/api/products`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then((response) => {
//         setProducts(response.data);
//         setFiltered(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error.response?.data || error.message);
//       });
//   }, [token]);

//   useEffect(() => {
//     let updated = [...products];

//     if (searchTerm) {
//       updated = updated.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (filterType !== 'All') {
//       updated = updated.filter(product => product.type?.toLowerCase() === filterType.toLowerCase());
//     }

//     if (sortOrder === 'asc') {
//       updated.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'desc') {
//       updated.sort((a, b) => b.price - a.price);
//     }

//     setFiltered(updated);
//   }, [searchTerm, filterType, sortOrder, products]);

//   return (
//     <div className="products-container">
//       <h2>Products</h2>

//       {/* Controls */}
//       <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}
//         />

//         <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: '8px', borderRadius: '6px' }}>
//           <option value="All">All Categories</option>
//           <option value="men">Men</option>
//           <option value="women">Women</option>
//           <option value="kids">Kids</option>
          
//         </select>

//         <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ padding: '8px', borderRadius: '6px' }}>
//           <option value="default">Sort by Price</option>
//           <option value="asc">Low → High</option>
//           <option value="desc">High → Low</option>
//         </select>
//       </div>

//       {/* Product Cards */}
//       <div className="product-grid">
//         {filtered.length > 0 ? (
//           filtered.map(p => (
//             <div className="product-card" key={p._id}>
//               <img src={p.img} alt={p.name} className="product-image" />
//               <h3>{p.name}</h3>
//               <p>{p.description}</p>
//               <p className="product-price">₹{p.price}</p>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center' }}>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const { token } = useAuth();
  const baseurl = "https://fashion-1m73.onrender.com";

  useEffect(() => {
    if (!token) return;

    axios.get(`${baseurl}/api/products`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error.response?.data || error.message);
      });
  }, [token]);

  useEffect(() => {
    let updated = [...products];

    if (searchTerm) {
      updated = updated.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'All') {
      updated = updated.filter(product => product.type?.toLowerCase() === filterType.toLowerCase());
    }

    if (sortOrder === 'asc') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, products]);

  const addToWishlist = async (productId) => {
    try {
      const res = await axios.post(`${baseurl}/api/wishlist/${productId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 200) {
  alert("Added to wishlist!");
}
      alert("Added to wishlist!");
    } catch (err) {
      alert("Error adding to wishlist");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <nav className="products-navbar">
  <div className="nav-left">FashionHub</div>
  <div className="nav-right">
    <Link to="/wishlist" className="nav-wishlist-btn">Wishlist</Link>
  </div>
</nav>


      {/* Controls */}
      <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: '8px', borderRadius: '6px' }}>
          <option value="All">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ padding: '8px', borderRadius: '6px' }}>
          <option value="default">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <div className="product-card" key={p._id}>
              <img src={p.img} alt={p.name} className="product-image" />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p className="product-price">₹{p.price}</p>
              <button onClick={() => addToWishlist(p._id)} className="wishlist-btn">Add to Wishlist</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No products found.</p>
        )}
        
      </div>
    </div>
  );
}
