import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';
import { Plus, Minus } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1); 
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success(`${product.name} added to cart!`);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => setQty(qty > 1 ? qty - 1 : 1);

  
  const imageUrl = `http://localhost:8000/uploads/${product.image}`;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="description">{product.description}</p>
      <span className="price">${product.price}</span>

      <div className="cart-actions">
        <div className="qty-control">
          <button onClick={decreaseQty} className="qty-btn"><Minus size={16} /></button>
          <input type="number" min="1" value={qty} readOnly />
          <button onClick={increaseQty} className="qty-btn"><Plus size={16} /></button>
        </div>
        <button
          className={`add-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
