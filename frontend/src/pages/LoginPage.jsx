import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '../features/auth/authSlice';
import LoginRegisterForm from '../features/auth/LoginRegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (form) => {
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok && data.token) {
        dispatch(login(data));
        toast.success('Login successful! Redirecting...', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Welcome to ShopMate</h2>
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>
        </Col>
      </Row>

      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginRegisterForm onSubmit={handleLogin} isRegister={false} />
          <p className="mt-3 text-center">
            Don't have an account?{' '}
            <Link to="/register" state={{ openModal: true }}>
              Register here
            </Link>
          </p>

        </Modal.Body>
      </Modal>

      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
