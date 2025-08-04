import React, { useState } from 'react';


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };
 
    

  return (
    <div className="menu-bar">
      <h1>Welcome to Online Shopping</h1>
      <div className="menu-controls">
        <label htmlFor="category">Choose a category:</label>
        <select id="category" value={selectedCategory} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;

