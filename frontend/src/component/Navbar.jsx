import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, LogIn, User } from 'lucide-react';
import { logout, login } from '../features/auth/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import LoginRegisterForm from '../features/auth/LoginRegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      dispatch(logout());
      toast.success('Logged out successfully!');
      setShowDropdown(false);
      navigate('/');
    } catch (err) {
      console.error('Logout failed', err);
      toast.error('Logout failed. Please try again.');
    }
  };

  const handleLogin = async (form) => {
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include',
      });

      const data = await res.json();
      if (res.ok && data.token) {
        dispatch(login(data));
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Login successful! Redirecting...');
        setTimeout(() => {
          setShowLoginModal(false);
          navigate('/');
        }, 1500);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error('Login error. Try again.');
    }
  };

  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:8000/api/auth/oauth/google';
  };

  return (
    <>
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
                <div className="dropdown-menu show">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button className="sign-in-btn" onClick={() => setShowLoginModal(true)}>
              <LogIn className="icon" /> Sign In
            </button>
          )}
        </div>
      </nav>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-3">
            <LoginRegisterForm onSubmit={handleLogin} isRegister={false} />
            <Button onClick={handleOAuthLogin} className="btn-danger w-100">
              Continue with Google
            </Button>
          </div>
          <p className="mt-3 text-center">
            Don't have an account?{' '}
            <Link
              to="/register"
              state={{ openModal: true }}
              onClick={() => setShowLoginModal(false)}
            >
              Register here
            </Link>
          </p>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  );
};

export default Navbar;