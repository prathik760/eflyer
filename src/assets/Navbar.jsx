import React, { useState, useEffect } from 'react';
import Herosection from './Herosection';

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(`Error fetching products for category ${selectedCategory}:`, error));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
       <div className='nav-link'>
        <div className='nav-item'>Best Seller</div>
        <div className='nav-item'>Gift Ideas</div>
        <div className='nav-item'>New Releases</div>
        <div className='nav-item'>Today's Deals</div>
        <div className='nav-item'>Customer Services </div>
      </div>
      <div className='coverimg'>
  <div className='fnav'>
    <h1>Eflyer</h1> 
    <div className='link'>
      <i className="fa-solid fa-bars"></i>
      <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
        <option value=""disabled>All Category</option>
        <option value= "electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <div className="search-container">
        <input type="text" id="searchInput" placeholder="Search this blog" value={searchTerm} onChange={handleSearchChange} />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <select id="languageSelect">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
      <i className="fa-solid fa-shopping-cart"> CART </i>
      <i className="fa-solid fa-user"> USER </i>
    </div>
    <Herosection />
    <button class="cta-button">BUY NOW</button>
  </div>
</div>
       <h1 className='text'>Men and Women Fashion </h1>
       <div className="product-list">
  {filteredProducts.map(product => (
    <div key={product.id} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Navbar;
