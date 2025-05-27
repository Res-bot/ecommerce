import React from 'react';
import './CategoryFilter.css'; // Import the CSS file

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="category-filter-container">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(cat)}
          className={`category-button ${
            selectedCategory === cat ? 'active' : ''
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
