import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import LoginRegisterForm from '../features/auth/LoginRegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true); // Always show modal when navigating to this page

  useEffect(() => {
    if (!location.state?.openModal) {
      navigate('/'); // Prevent direct access without state
    }
  }, [location.state, navigate]);

  const handleClose = () => {
    setShow(false);
    navigate('/'); // Redirect to home after closing
  };

  const handleRegister = async (form) => {
    try {
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        toast.success('Successfully registered! Redirecting to login...', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate('/login', { state: { openModal: true } });
        }, 2000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('Something went wrong during registration.');
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginRegisterForm onSubmit={handleRegister} isRegister={true} />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default RegisterPage;
