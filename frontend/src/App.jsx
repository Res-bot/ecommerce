import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // ✅ Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // ✅ Import Toast styles
import 'bootstrap/dist/css/bootstrap.min.css';
import OAuthSuccess from './pages/OAuthSuccess';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './features/cart/Cart';
import Navbar from './component/Navbar';
import AddressPage from './component/AddressStep';
import PaymentPage from './component/PaymentStep';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
      <Route path="/oauth-success" element={<OAuthSuccess />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>

    {/* ✅ ToastContainer must be inside Router, outside Routes */}
    <ToastContainer position="top-center" autoClose={3000} />
  </Router>
);

export default App;