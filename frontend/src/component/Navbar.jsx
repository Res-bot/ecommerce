import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, LogIn, User } from 'lucide-react';
import { logout } from '../features/auth/authSlice'; // adjust the path if different
import { toast } from 'react-toastify';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
    toast.success('Logged out successfully!');
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          <Link to="/" className="logo-link">ShopMate</Link>
        </h2>
      </div>

      <div className="navbar-right">
        <Link to="/cart" className="icon-button">
          <ShoppingCart className="icon" />
        </Link>

        {user ? (
          <div className="user-dropdown" ref={dropdownRef}>
            <button className="user-btn" onClick={toggleDropdown}>
              <User className="icon" /> {user.name}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="sign-in-btn" onClick={handleSignIn}>
            <LogIn className="icon" /> Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
